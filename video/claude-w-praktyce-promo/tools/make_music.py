#!/usr/bin/env python3
"""Procedural background track for the Claude w praktyce 2.0 promo.

Design (psychology for an AI-productivity ad):
- 0-10 s  tense, mechanical: detuned minor pad, ticking hi-hat, low pulse (the problem).
- 10-18 s  rising riser + filter opening (the turn).
- 18-50 s  confident, "clean" groove: sidechained warm pad, bright arpeggio in a major-ish lift,
           steady kick (relief, competence, momentum).
- 50-60 s  resolve: arpeggio thins out, final soft chord with a shimmer, tail for the CTA.
Key: A minor -> C major lift. 112 BPM. No samples, numpy only, royalty-free by construction.
"""
import numpy as np, sys, wave

SR = 44100
DUR = 61.0
BPM = 112
BEAT = 60.0 / BPM
N = int(SR * DUR)
t = np.arange(N) / SR
out = np.zeros(N)

def env(n, a, d, s, r, hold):
    """ADSR envelope for n samples with hold seconds at sustain."""
    a_n, d_n, r_n = int(a*SR), int(d*SR), int(r*SR)
    h_n = max(0, int(hold*SR))
    total = a_n + d_n + h_n + r_n
    e = np.zeros(max(total, 1))
    i = 0
    e[i:i+a_n] = np.linspace(0, 1, a_n, endpoint=False); i += a_n
    e[i:i+d_n] = np.linspace(1, s, d_n, endpoint=False); i += d_n
    e[i:i+h_n] = s; i += h_n
    e[i:i+r_n] = np.linspace(s, 0, r_n, endpoint=False)
    return e[:n] if n <= len(e) else np.pad(e, (0, n-len(e)))

def add(sig, start):
    s = int(start*SR)
    if s >= N: return
    seg = sig[:N-s]
    out[s:s+len(seg)] += seg

def saw(f, n, detune=0.0):
    tt = np.arange(n)/SR
    x = np.zeros(n)
    for dt in (-detune, 0, detune):
        ph = (tt * f * (1+dt)) % 1.0
        x += 2*ph - 1
    return x/3

def sine(f, n): return np.sin(2*np.pi*f*np.arange(n)/SR)

def lowpass(x, cutoff):
    # one-pole lowpass with possibly time-varying cutoff (array or scalar)
    y = np.zeros_like(x)
    if np.isscalar(cutoff):
        a = np.exp(-2*np.pi*cutoff/SR); a = np.full(len(x), a)
    else:
        a = np.exp(-2*np.pi*np.asarray(cutoff)/SR)
    z = 0.0
    for i in range(len(x)):
        z = (1-a[i])*x[i] + a[i]*z
        y[i] = z
    return y

def note(name):
    names = {'C':0,'C#':1,'D':2,'D#':3,'E':4,'F':5,'F#':6,'G':7,'G#':8,'A':9,'A#':10,'B':11}
    n, o = name[:-1], int(name[-1])
    return 440.0 * 2**((names[n] + 12*(o-4) - 9)/12)

# ---------- Section A: tension pad (0-18s) ----------
pad_chords_A = [['A2','E3','C4','B3'], ['F2','C3','A3','G3'], ['A2','E3','C4','B3'], ['G2','D3','B3','F4']]
for i, ch in enumerate(pad_chords_A):
    start = i*4*BEAT
    n = int(4*BEAT*SR)
    sig = sum(saw(note(x), n, detune=0.006) for x in ch)
    cutoff = np.linspace(400 + 60*i, 900 + 150*i, n)
    sig = lowpass(sig, cutoff) * env(n, 0.4, 0.5, 0.8, 0.8, 4*BEAT-1.7)
    add(sig*0.11, start)
# low mechanical pulse (eighth notes) 0-18s
for k in range(int(18/(BEAT/2))):
    st = k*BEAT/2
    n = int(0.12*SR)
    sig = sine(55, n) * env(n, 0.002, 0.08, 0.2, 0.03, 0.0)
    add(sig*0.5, st)
# ticking hi-hat (sixteenths), gets denser toward 18s
rng = np.random.default_rng(7)
for k in range(int(18/(BEAT/4))):
    st = k*BEAT/4
    if k % 4 == 2 and st < 10: continue
    n = int(0.03*SR)
    noise = rng.standard_normal(n)
    noise = noise - lowpass(noise, 6000)
    sig = noise * env(n, 0.001, 0.02, 0.0, 0.01, 0.0)
    add(sig*(0.10 if k % 4 == 0 else 0.05), st)

# ---------- Riser 10-18s ----------
n = int(8*SR)
rise = rng.standard_normal(n)
rise = lowpass(rise, np.linspace(300, 9000, n)) * np.linspace(0, 1, n)**2.2
add(rise*0.22, 10.0)
sweep = np.sin(2*np.pi*np.cumsum(np.linspace(80, 1200, n))/SR) * np.linspace(0,1,n)**3
add(sweep*0.08, 10.0)

# ---------- Section B: confident groove (18-50s) ----------
GROOVE_START, GROOVE_END = 18.0, 50.0
chords_B = [['C3','G3','E4','D4'], ['A2','E3','C4','B3'], ['F2','C3','A3','G3'], ['G2','D3','B3','D4']]
i = 0
tpos = GROOVE_START
while tpos < GROOVE_END:
    ch = chords_B[i % 4]
    n = int(4*BEAT*SR)
    sig = sum(saw(note(x), n, detune=0.005) for x in ch)
    sig = lowpass(sig, 1800) * env(n, 0.05, 0.3, 0.9, 0.4, 4*BEAT-0.75)
    # sidechain pump on every beat
    beats = np.arange(n)/SR % BEAT
    pump = 0.35 + 0.65*np.clip(beats/0.28, 0, 1)**0.6
    add(sig*pump*0.13, tpos)
    # arpeggio: 16ths over the chord tones, one octave up
    tones = [note(x)*2 for x in ch]
    for k in range(16):
        st = tpos + k*BEAT/4
        if st >= GROOVE_END: break
        f = tones[[0,2,1,3,0,3,1,2,0,2,1,3,2,0,3,1][k]]
        nn = int(0.18*SR)
        a = (sine(f, nn) + 0.4*sine(2*f, nn) + 0.15*sine(3*f, nn)) * env(nn, 0.003, 0.12, 0.25, 0.05, 0.0)
        add(a*0.085, st)
    tpos += 4*BEAT; i += 1
# kick + sub on beats, snare-ish clap on 2 and 4
k = 0
tpos = GROOVE_START
while tpos < GROOVE_END:
    n = int(0.25*SR)
    f_env = 150*np.exp(-np.arange(n)/SR*28) + 48
    kick = np.sin(2*np.pi*np.cumsum(f_env)/SR) * env(n, 0.001, 0.18, 0.0, 0.05, 0.0)
    add(kick*0.75, tpos)
    if k % 2 == 1:
        nn = int(0.14*SR)
        clap = rng.standard_normal(nn)
        clap = clap - lowpass(clap, 1500)
        clap = lowpass(clap, 7000) * env(nn, 0.001, 0.09, 0.0, 0.03, 0.0)
        add(clap*0.22, tpos)
    # hats
    for j in range(2):
        nn = int(0.04*SR)
        h = rng.standard_normal(nn); h = h - lowpass(h, 7000)
        add(h*env(nn, 0.001, 0.03, 0.0, 0.01, 0.0)*(0.09 if j == 0 else 0.055), tpos + j*BEAT/2)
    tpos += BEAT; k += 1

# ---------- Section C: resolve (50-61s) ----------
n = int(10.5*SR)
final = sum(saw(note(x), n, detune=0.004) for x in ['C3','G3','E4','C5'])
final = lowpass(final, np.linspace(2200, 900, n)) * env(n, 0.3, 0.6, 0.85, 3.0, 6.0)
add(final*0.14, 50.0)
shimmer = (sine(note('E6'), n) + sine(note('G6'), n)*0.6) * env(n, 1.5, 2.0, 0.4, 4.0, 1.0)
add(shimmer*0.03, 50.5)
for st in (50.0, 52.14, 54.28):
    nn = int(0.3*SR)
    f_env = 150*np.exp(-np.arange(nn)/SR*25) + 46
    add(np.sin(2*np.pi*np.cumsum(f_env)/SR)*env(nn, 0.001, 0.22, 0.0, 0.06, 0.0)*0.7, st)

# ---------- master ----------
# gentle stereo: duplicate with tiny delay for width
out = out / (np.max(np.abs(out)) + 1e-9)
out = np.tanh(out*1.6) / np.tanh(1.6)          # soft limiter
fade_out = np.ones(N); fo = int(1.2*SR); fade_out[-fo:] = np.linspace(1, 0, fo)
out *= fade_out * 0.85
left = out
right = np.concatenate([np.zeros(int(0.0007*SR)), out])[:N]
stereo = np.stack([left, right], axis=1)
pcm = (stereo * 32767).astype(np.int16)
path = sys.argv[1] if len(sys.argv) > 1 else 'music.wav'
with wave.open(path, 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print('wrote', path, 'seconds', DUR)
