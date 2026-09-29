"""Deterministic soundtrack for the Kwiatek Studio reel (see planning/music-brief.md).

Warm soft-pop bed at 100 BPM + a small SFX hierarchy synced to src/timeline.ts.
Writes public/audio/soundtrack.wav (48 kHz, 16-bit stereo).
"""
import wave
from pathlib import Path

import numpy as np

SR = 48000
DUR = 21.0
BPM = 100
BEAT = 60 / BPM
BAR = BEAT * 4
N = int(SR * DUR)
t_all = np.arange(N) / SR
rng = np.random.default_rng(7)

# Scene boundaries (seconds) – mirror src/timeline.ts
HOOK, WAIT, KERATIN, CHOICE, PRICE, CHAT, END = 0.0, 2.6, 5.4, 8.8, 11.8, 15.0, 18.4
F = 30.0  # fps, for SFX offsets expressed in frames


def hz(midi):
    return 440.0 * 2 ** ((midi - 69) / 12)


L = np.zeros(N)
R = np.zeros(N)


def add(sig, start, pan=0.0, gain=1.0):
    i0 = int(start * SR)
    if i0 >= N:
        return
    sig = sig[: N - i0] * gain
    L[i0 : i0 + len(sig)] += sig * np.cos((pan + 1) * np.pi / 4)
    R[i0 : i0 + len(sig)] += sig * np.sin((pan + 1) * np.pi / 4)


def env(n, a=0.01, d=0.6):
    t = np.arange(n) / SR
    e = np.minimum(1, t / max(a, 1e-4)) * np.exp(-t / d)
    return e


def ep_note(midi, length, vel=0.18, decay=1.1):
    n = int(length * SR)
    t = np.arange(n) / SR
    f = hz(midi)
    tone = np.sin(2 * np.pi * f * t) + 0.35 * np.sin(2 * np.pi * 2 * f * t) + 0.08 * np.sin(2 * np.pi * 3 * f * t)
    trem = 1 + 0.12 * np.sin(2 * np.pi * 4.2 * t)
    rel = np.minimum(1, (n - np.arange(n)) / (0.08 * SR))
    return tone * trem * env(n, 0.012, decay) * rel * vel


def pad_note(midi, length, vel=0.05):
    n = int(length * SR)
    t = np.arange(n) / SR
    f = hz(midi)
    tone = sum(np.sin(2 * np.pi * f * (1 + d) * t) for d in (-0.004, 0.0, 0.005)) / 3
    a = np.minimum(1, t / 0.6)
    rel = np.minimum(1, (n - np.arange(n)) / (0.5 * SR))
    return tone * a * rel * vel


def bell(midi, vel=0.12, decay=0.9):
    n = int(2.0 * SR)
    t = np.arange(n) / SR
    f = hz(midi)
    tone = np.sin(2 * np.pi * f * t) + 0.4 * np.sin(2 * np.pi * 2.76 * f * t) * np.exp(-t / 0.2)
    return tone * env(n, 0.002, decay) * vel


def kick(vel=0.5):
    n = int(0.22 * SR)
    t = np.arange(n) / SR
    f = 50 + 70 * np.exp(-t / 0.03)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t / 0.09) * vel


def noise_burst(length, decay, vel, hp=True):
    n = int(length * SR)
    x = rng.standard_normal(n)
    if hp:
        x = np.diff(np.concatenate([[0], x]))  # crude high-pass
    return x * env(n, 0.002, decay) * vel


def whoosh(length=0.45, vel=0.12):
    n = int(length * SR)
    x = rng.standard_normal(n)
    # moving-average low-pass with rising cutoff feel
    k = np.linspace(40, 4, n).astype(int)
    c = np.cumsum(np.concatenate([[0], x]))
    y = np.array([(c[i + 1] - c[max(0, i + 1 - k[i])]) / k[i] for i in range(n)])
    shape = np.sin(np.pi * np.arange(n) / n) ** 2
    return y * shape * vel * 3


def pop(midi=84, vel=0.14):
    n = int(0.12 * SR)
    t = np.arange(n) / SR
    f = hz(midi) * (1 + 0.6 * np.exp(-t / 0.01))
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.035) * vel


# --- Music bed -------------------------------------------------------------
# Fmaj7 – Am7 – Dm9 – Bbmaj7 (voicings around middle C)
CHORDS = [
    (53, [60, 64, 67, 69]),  # F: C E G A (Fmaj7 add)
    (57, [60, 64, 67, 71]),  # Am7: C E G B -> colour
    (50, [60, 64, 65, 69]),  # Dm9: C E F A
    (46, [62, 65, 69, 72]),  # Bbmaj7: D F A C
]

bar = 0
tb = 0.0
while tb < END:
    root, voic = CHORDS[bar % 4]
    lift = PRICE <= tb < CHAT
    for i, m in enumerate(voic):
        add(ep_note(m, BAR, vel=0.10), tb + i * 0.012, pan=-0.3 + 0.2 * i)
        if tb >= WAIT:
            add(ep_note(m, BEAT * 1.5, vel=0.06, decay=0.4), tb + BEAT * 2.5, pan=0.3 - 0.2 * i)
        if lift:
            add(ep_note(m + 12, BAR, vel=0.05), tb + 0.02, pan=0.2)
    for m in voic[:2]:
        add(pad_note(m - 12, BAR + 0.3), tb, gain=1.0)
    if tb >= WAIT - 0.01:
        add(ep_note(root - 12, BEAT * 1.4, vel=0.22, decay=0.5) * 0.9, tb)
        add(ep_note(root - 12, BEAT * 1.0, vel=0.16, decay=0.4), tb + BEAT * 2.5)
    tb += BAR
    bar += 1

# resolve on F with a long tail
for i, m in enumerate([53, 60, 64, 67, 69, 72]):
    add(ep_note(m, 2.8, vel=0.10 if m > 50 else 0.2, decay=1.6), END + 0.3 + i * 0.03, pan=-0.3 + 0.12 * i)
add(pad_note(41, 2.6, vel=0.06), END + 0.3)

# drums: kick on beats WAIT→CHAT (lighter in the chat section), shaker on 8ths
b = WAIT
while b < END + 0.1:
    in_chat = CHAT <= b < END
    add(kick(0.28 if in_chat else 0.42), b)
    b += BEAT
s = KERATIN
k = 0
while s < END:
    if not (CHAT <= s < END):
        add(noise_burst(0.07, 0.025, 0.035 if k % 2 else 0.05), s, pan=0.35)
    s += BEAT / 2
    k += 1

# hook bells: rising F-major arpeggio synced with the hair growth (frames 5→36)
for i, m in enumerate([77, 81, 84, 88, 89]):
    add(bell(m, vel=0.07), 5 / F + i * 0.2, pan=-0.4 + 0.2 * i)

# --- SFX hierarchy ---------------------------------------------------------
add(whoosh(0.9, 0.05), 0.05, pan=0.0)  # shimmer rise under hook
add(pop(88, 0.08), WAIT + 50 / F)  # "1 wizyta" check
add(pop(79, 0.07), KERATIN + 20 / F)  # keratin bond lands
add(pop(84, 0.07), CHOICE + 34 / F, pan=-0.3)
add(pop(88, 0.07), CHOICE + 46 / F, pan=0.3)
# hero moment: price lands (frame 26 of price scene)
hero = PRICE + 26 / F
add(kick(0.55), hero)
add(noise_burst(0.6, 0.18, 0.05, hp=True), hero, pan=0.0)
for i, m in enumerate([72, 76, 79, 84]):
    add(bell(m, vel=0.06, decay=1.2), hero + i * 0.015, pan=-0.3 + 0.2 * i)
add(whoosh(0.35, 0.06), CHAT + 14 / F, pan=0.3)  # send
add(pop(86, 0.10), CHAT + 18 / F, pan=0.3)
add(pop(84, 0.07), CHAT + 32 / F, pan=0.3)
add(pop(84, 0.07), CHAT + 44 / F, pan=0.3)
add(pop(76, 0.09), CHAT + 68 / F, pan=-0.3)  # reply
add(bell(84, vel=0.06, decay=0.8), END + 24 / F)  # CTA button
add(bell(91, vel=0.04, decay=0.8), END + 26 / F)

# --- Master ----------------------------------------------------------------
fade = np.minimum(1, (N - np.arange(N)) / (0.6 * SR))
L *= fade
R *= fade
mix = np.stack([L, R], axis=1)
# gentle soft-clip then normalise to -1.5 dBFS peak
mix = np.tanh(mix * 1.2) / np.tanh(1.2)
mix *= 10 ** (-1.5 / 20) / np.max(np.abs(mix))


def limit(x, ceil_db=-1.2):
    # soft knee limiter: linear below the knee, tanh-compressed above, never above ceiling
    c = 10 ** (ceil_db / 20)
    k = 0.7 * c
    a = np.abs(x)
    over = a > k
    y = x.copy()
    y[over] = np.sign(x[over]) * (k + (c - k) * np.tanh((a[over] - k) / (c - k)))
    return y


# loudness target −14 LUFS (pyloudnorm if available), peaks held under −1.2 dBFS
try:
    import pyloudnorm as pyln

    meter = pyln.Meter(SR)
    for _ in range(4):
        lufs = meter.integrated_loudness(mix)
        mix = limit(mix * 10 ** ((-14.0 - lufs) / 20))
    print(f'loudness {meter.integrated_loudness(mix):.2f} LUFS, peak {20 * np.log10(np.max(np.abs(mix))):.2f} dBFS')
except ImportError:
    pass

out = Path(__file__).resolve().parent.parent / 'public' / 'audio' / 'soundtrack.wav'
out.parent.mkdir(parents=True, exist_ok=True)
with wave.open(str(out), 'wb') as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((mix * 32767).astype('<i2').tobytes())
print(f'wrote {out} ({DUR}s)')
