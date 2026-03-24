import { useState, useEffect, useCallback, useRef } from 'react';
import './slide.css';

const TOTAL = 13;

export function Slide() {
  const [current, setCurrent] = useState(0);
  const animating = useRef(false);
  const touchStart = useRef(0);

  const goTo = useCallback((n: number) => {
    if (n < 0 || n >= TOTAL || n === current || animating.current) return;
    animating.current = true;
    setCurrent(n);
    setTimeout(() => { animating.current = false; }, 450);
  }, [current]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goTo(current + 1); }
      if (e.key === 'ArrowLeft') goTo(current - 1);
    };
    const handleTouchStart = (e: TouchEvent) => { touchStart.current = e.touches[0].clientX; };
    const handleTouchEnd = (e: TouchEvent) => {
      const d = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(d) > 50) { d > 0 ? goTo(current + 1) : goTo(current - 1); }
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [current, goTo]);

  return (
    <div className="og-deck">
      {/* 0: TITLE */}
      <div className={`og-slide${current === 0 ? ' active' : ''}`}>
        <div className="si centered" style={{ flexDirection: 'column' }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.72rem', letterSpacing: '.25em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--ps)' }}>0G</span> — Zero Gravity
          </div>
          <h1>The First Blockchain<br />Built for <em>AI</em></h1>
          <p className="desc" style={{ textAlign: 'center', margin: '.75rem auto 0', maxWidth: 520 }}>
            Most AI runs on corporate servers — you rent access, they own everything. 0G changes that. Open, affordable, verifiable AI infrastructure for builders everywhere.
          </p>
          <div style={{ display: 'inline-block', marginTop: '2.5rem', fontFamily: "'IBM Plex Mono', monospace", fontSize: '.65rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ps)', border: '1px solid rgba(146,0,225,.2)', padding: '.4rem 1rem', borderRadius: 100 }}>
            Intro for Builders · 2026
          </div>
        </div>
      </div>

      {/* 1: HOW AI WORKS TODAY */}
      <div className={`og-slide${current === 1 ? ' active' : ''}`}>
        <div className="og-slide-num">01 / 12</div>
        <div className="si" style={{ gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="tag">How AI Works Today</span>
            <h2>You Send a Prompt. A Corporation Does the Rest.</h2>
          </div>
          <div className="flow-wrap">
            <svg viewBox="0 0 720 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="40" width="130" height="80" rx="10" fill="#FAFAFA" stroke="#E5E5E5" strokeWidth="1.5" />
              <rect x="195" y="40" width="130" height="80" rx="10" fill="#FAFAFA" stroke="#E5E5E5" strokeWidth="1.5" />
              <rect x="390" y="40" width="130" height="80" rx="10" fill="#FAFAFA" stroke="#9200E1" strokeWidth="1.5" strokeOpacity=".3" />
              <rect x="585" y="40" width="130" height="80" rx="10" fill="#FAFAFA" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="65" y="72" textAnchor="middle" fill="#1a1a2e" fontSize="13" fontWeight="600">Your Device</text>
              <text x="65" y="92" textAnchor="middle" fill="#8888a0" fontSize="10">Phone / Laptop</text>
              <text x="260" y="72" textAnchor="middle" fill="#1a1a2e" fontSize="13" fontWeight="600">Internet</text>
              <text x="260" y="92" textAnchor="middle" fill="#8888a0" fontSize="10">Request travels</text>
              <text x="455" y="72" textAnchor="middle" fill="#9200E1" fontSize="13" fontWeight="600">Corp Data Center</text>
              <text x="455" y="92" textAnchor="middle" fill="#8888a0" fontSize="10">Their GPUs, their rules</text>
              <text x="650" y="72" textAnchor="middle" fill="#1a1a2e" fontSize="13" fontWeight="600">Response</text>
              <text x="650" y="92" textAnchor="middle" fill="#8888a0" fontSize="10">Back to your screen</text>
              <defs>
                <marker id="arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M1 1 L7 4 L1 7" fill="none" stroke="#D0D0D8" strokeWidth="1.5" />
                </marker>
              </defs>
              <path d="M133 80 L192 80" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#arr)" />
              <path d="M328 80 L387 80" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#arr)" />
              <path d="M523 80 L582 80" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#arr)" />
              <text x="455" y="25" textAnchor="middle" fill="#9200E1" fontSize="9" className="mono-text" letterSpacing="1.5">THEY CONTROL EVERYTHING</text>
            </svg>
          </div>
          <div className="grid-3" style={{ marginTop: '.5rem' }}>
            <div className="card" style={{ padding: '1rem 1.2rem' }}><h3 style={{ fontSize: '.88rem' }}>Access &amp; Pricing</h3><p>They decide who gets in. They set and raise prices whenever they want.</p></div>
            <div className="card" style={{ padding: '1rem 1.2rem' }}><h3 style={{ fontSize: '.88rem' }}>Your Data</h3><p>They read your conversations, use your data to train models, share with third parties.</p></div>
            <div className="card" style={{ padding: '1rem 1.2rem' }}><h3 style={{ fontSize: '.88rem' }}>Availability</h3><p>They go offline, you lose access. They shut down the product, your AI is gone forever.</p></div>
          </div>
        </div>
      </div>

      {/* 2: THE BLOCKCHAIN PROBLEM */}
      <div className={`og-slide${current === 2 ? ' active' : ''}`}>
        <div className="og-slide-num">02 / 12</div>
        <div className="si" style={{ gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="tag">The Problem</span>
            <h2>Why Can't We Put AI on Existing Chains?</h2>
            <p className="desc" style={{ margin: '.5rem auto 0', textAlign: 'center', maxWidth: 500 }}>Blockchain should fix this. But existing chains weren't built for AI. Three barriers.</p>
          </div>
          <div className="flow-wrap" style={{ marginTop: '.75rem' }}>
            <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="215" height="180" rx="12" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <rect x="252" y="10" width="215" height="180" rx="12" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <rect x="494" y="10" width="215" height="180" rx="12" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <rect x="10" y="10" width="215" height="3" rx="1.5" fill="#9200E1" fillOpacity=".5" />
              <rect x="252" y="10" width="215" height="3" rx="1.5" fill="#9200E1" fillOpacity=".5" />
              <rect x="494" y="10" width="215" height="3" rx="1.5" fill="#9200E1" fillOpacity=".5" />
              <rect x="95" y="30" width="44" height="32" rx="6" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
              <text x="117" y="52" textAnchor="middle" fill="#9200E1" fontSize="14" fontWeight="600">HDD</text>
              <circle cx="359" cy="46" r="16" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
              <text x="359" y="51" textAnchor="middle" fill="#9200E1" fontSize="13" fontWeight="700">G</text>
              <rect x="588" y="30" width="44" height="32" rx="16" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
              <text x="610" y="52" textAnchor="middle" fill="#9200E1" fontSize="11" fontWeight="600">TPS</text>
              <text x="117" y="88" textAnchor="middle" fill="#1a1a2e" fontSize="15" fontWeight="700">Storage</text>
              <text x="359" y="88" textAnchor="middle" fill="#1a1a2e" fontSize="15" fontWeight="700">Compute</text>
              <text x="601" y="88" textAnchor="middle" fill="#1a1a2e" fontSize="15" fontWeight="700">Speed</text>
              <text x="117" y="110" textAnchor="middle" fill="#555568" fontSize="10.5">AI models are GBs to TBs.</text>
              <text x="117" y="125" textAnchor="middle" fill="#555568" fontSize="10.5">1 GB on Ethereum costs</text>
              <text x="117" y="140" textAnchor="middle" fill="#555568" fontSize="10.5">thousands in gas fees.</text>
              <text x="359" y="110" textAnchor="middle" fill="#555568" fontSize="10.5">AI needs GPUs doing billions</text>
              <text x="359" y="125" textAnchor="middle" fill="#555568" fontSize="10.5">of calculations per second.</text>
              <text x="359" y="140" textAnchor="middle" fill="#555568" fontSize="10.5">Chains do token swaps.</text>
              <text x="601" y="110" textAnchor="middle" fill="#555568" fontSize="10.5">Real-time AI needs 1000s</text>
              <text x="601" y="125" textAnchor="middle" fill="#555568" fontSize="10.5">of ops/sec. Ethereum</text>
              <text x="601" y="140" textAnchor="middle" fill="#555568" fontSize="10.5">does about 15 TPS.</text>
              <text x="117" y="172" textAnchor="middle" fill="#9200E1" fontSize="9.5" className="mono-text">BUILT FOR SMALL TXS</text>
              <text x="359" y="172" textAnchor="middle" fill="#9200E1" fontSize="9.5" className="mono-text">NO GPU SUPPORT</text>
              <text x="601" y="172" textAnchor="middle" fill="#9200E1" fontSize="9.5" className="mono-text">1000x TOO SLOW</text>
            </svg>
          </div>
        </div>
      </div>

      {/* 3: WHAT IS 0G */}
      <div className={`og-slide${current === 3 ? ' active' : ''}`}>
        <div className="og-slide-num">03 / 12</div>
        <div className="si" style={{ gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="tag">Enter 0G</span>
            <h2>What is 0G?</h2>
            <p className="desc" style={{ margin: '.5rem auto 0', textAlign: 'center', maxWidth: 540 }}>The first blockchain designed from the ground up for AI. Every component — storage, compute, processing, data availability — built for AI workloads at massive scale.</p>
          </div>
          <div className="grid-2" style={{ marginTop: '1rem' }}>
            <div className="card"><h3>Own, Don't Rent</h3><p>Store, run, tokenize and truly own AI models on decentralized infrastructure. Nobody can revoke your access.</p></div>
            <div className="card"><h3>Your Data Stays Yours</h3><p>Decentralized storage where the owner controls access. No company mining your prompts or selling your info.</p></div>
            <div className="card"><h3>Shared Compute Power</h3><p>Global GPU marketplace. Pay-per-use, market-driven prices. A dev in Lagos gets the same access as one in SF.</p></div>
            <div className="card"><h3>Everything is Verifiable</h3><p>Cryptographic proofs for computation. Proof of Random Access for storage. Trust replaced by mathematics.</p></div>
          </div>
        </div>
      </div>

      {/* 4: FOUR PILLARS */}
      <div className={`og-slide${current === 4 ? ' active' : ''}`}>
        <div className="og-slide-num">04 / 12</div>
        <div className="si" style={{ gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="tag">Architecture</span>
            <h2>The Four Pillars of 0G</h2>
            <p className="desc" style={{ margin: '.5rem auto 0', textAlign: 'center', maxWidth: 480 }}>Four independent pieces. Each handles one part. Each works alone. Together — complete AI infrastructure.</p>
          </div>
          <div className="flow-wrap" style={{ marginTop: '.5rem' }}>
            <svg viewBox="0 0 720 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="360" cy="130" r="42" fill="#F5EEFF" stroke="#B75FFF" strokeWidth="1.5" />
              <text x="360" y="126" textAnchor="middle" fill="#9200E1" fontSize="14" fontWeight="800">0G</text>
              <text x="360" y="142" textAnchor="middle" fill="#9200E1" fontSize="9" className="mono-text">ECOSYSTEM</text>
              <rect x="30" y="30" width="150" height="70" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <rect x="30" y="160" width="150" height="70" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <rect x="540" y="30" width="150" height="70" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <rect x="540" y="160" width="150" height="70" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="105" y="58" textAnchor="middle" fill="#9200E1" fontSize="9" className="mono-text" letterSpacing="1">PILLAR 01</text>
              <text x="105" y="78" textAnchor="middle" fill="#1a1a2e" fontSize="14" fontWeight="700">0G Chain</text>
              <text x="105" y="188" textAnchor="middle" fill="#9200E1" fontSize="9" className="mono-text" letterSpacing="1">PILLAR 02</text>
              <text x="105" y="208" textAnchor="middle" fill="#1a1a2e" fontSize="14" fontWeight="700">0G Storage</text>
              <text x="615" y="58" textAnchor="middle" fill="#9200E1" fontSize="9" className="mono-text" letterSpacing="1">PILLAR 03</text>
              <text x="615" y="78" textAnchor="middle" fill="#1a1a2e" fontSize="14" fontWeight="700">0G Compute</text>
              <text x="615" y="188" textAnchor="middle" fill="#9200E1" fontSize="9" className="mono-text" letterSpacing="1">PILLAR 04</text>
              <text x="615" y="208" textAnchor="middle" fill="#1a1a2e" fontSize="14" fontWeight="700">0G DA</text>
              <line x1="183" y1="65" x2="318" y2="115" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="4 3" />
              <line x1="183" y1="195" x2="318" y2="145" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="4 3" />
              <line x1="537" y1="65" x2="402" y2="115" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="4 3" />
              <line x1="537" y1="195" x2="402" y2="145" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="4 3" />
              <text x="105" y="95" textAnchor="middle" fill="#8888a0" fontSize="9">EVM · Instant Finality</text>
              <text x="105" y="225" textAnchor="middle" fill="#8888a0" fontSize="9">Erasure Coded · PoRA</text>
              <text x="615" y="95" textAnchor="middle" fill="#8888a0" fontSize="9">GPU Marketplace</text>
              <text x="615" y="225" textAnchor="middle" fill="#8888a0" fontSize="9">50 Gbps Throughput</text>
            </svg>
          </div>
          <p className="desc" style={{ textAlign: 'center', margin: '.5rem auto 0', fontSize: '.82rem', maxWidth: 460 }}>Modular design — use one service or all four. Start small, prove value, then expand.</p>
        </div>
      </div>

      {/* 5: 0G CHAIN */}
      <div className={`og-slide${current === 5 ? ' active' : ''}`}>
        <div className="og-slide-num">05 / 12</div>
        <div className="si">
          <div className="split">
            <div>
              <span className="tag">Pillar 01</span>
              <h2>0G Chain</h2>
              <p className="desc">Write Solidity, deploy immediately. Same Hardhat, Foundry, Remix — zero code changes. Optimized CometBFT consensus with instant finality.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <svg viewBox="0 0 340 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 340 }}>
                  <rect x="0" y="0" width="340" height="44" rx="8" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
                  <text x="170" y="17" textAnchor="middle" fill="#9200E1" fontSize="8" className="mono-text" letterSpacing="1">EXECUTION LAYER</text>
                  <text x="170" y="33" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">EVM Compatible · Solidity · Pectra + Cancun-Deneb</text>
                  <rect x="0" y="56" width="340" height="44" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
                  <text x="170" y="73" textAnchor="middle" fill="#9200E1" fontSize="8" className="mono-text" letterSpacing="1">CONSENSUS LAYER</text>
                  <text x="170" y="89" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Optimized CometBFT · BFT · Instant Finality</text>
                </svg>
              </div>
            </div>
            <div className="feat-list" style={{ marginTop: 0 }}>
              <div className="feat"><div className="feat-dot" /><div><strong>Modular Design</strong><span>Consensus and execution layers separated. Each upgrades independently.</span></div></div>
              <div className="feat"><div className="feat-dot" /><div><strong>Instant Finality</strong><span>Confirmed = permanent. No waiting for multiple block confirmations.</span></div></div>
              <div className="feat"><div className="feat-dot" /><div><strong>Full Ethereum Compat</strong><span>Cancun-Deneb blobs, Pectra account abstraction — all supported.</span></div></div>
              <div className="feat"><div className="feat-dot" /><div><strong>BFT Consensus</strong><span>Correct agreement even if 1/3 of validators are faulty or malicious.</span></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* 6: 0G STORAGE */}
      <div className={`og-slide${current === 6 ? ' active' : ''}`}>
        <div className="og-slide-num">06 / 12</div>
        <div className="si">
          <div className="split">
            <div>
              <span className="tag">Pillar 02</span>
              <h2>0G Storage</h2>
              <p className="desc">Data split via erasure coding, distributed across hundreds of nodes. 30% can go offline and your data stays safe.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <svg viewBox="0 0 340 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 340 }}>
                  <rect x="0" y="8" width="90" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1.2" />
                  <text x="45" y="30" textAnchor="middle" fill="#1a1a2e" fontSize="10" fontWeight="600">Your File</text>
                  <text x="45" y="44" textAnchor="middle" fill="#8888a0" fontSize="8">AI model / data</text>
                  <defs>
                    <marker id="a2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                      <path d="M1 1 L7 4 L1 7" fill="none" stroke="#D0D0D8" strokeWidth="1.5" />
                    </marker>
                  </defs>
                  <path d="M93 33 L122 33" stroke="#D0D0D8" strokeWidth="1.2" markerEnd="url(#a2)" />
                  <rect x="125" y="8" width="90" height="50" rx="8" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
                  <text x="170" y="30" textAnchor="middle" fill="#9200E1" fontSize="10" fontWeight="600">Erasure Code</text>
                  <text x="170" y="44" textAnchor="middle" fill="#8888a0" fontSize="8">Split into chunks</text>
                  <path d="M218 33 L247 33" stroke="#D0D0D8" strokeWidth="1.2" markerEnd="url(#a2)" />
                  <circle cx="270" cy="20" r="10" fill="white" stroke="#E5E5E5" strokeWidth="1" />
                  <circle cx="295" cy="33" r="10" fill="white" stroke="#E5E5E5" strokeWidth="1" />
                  <circle cx="270" cy="46" r="10" fill="white" stroke="#E5E5E5" strokeWidth="1" />
                  <circle cx="320" cy="20" r="10" fill="white" stroke="#E5E5E5" strokeWidth="1" />
                  <circle cx="320" cy="46" r="10" fill="white" stroke="#E5E5E5" strokeWidth="1" />
                  <text x="295" y="78" textAnchor="middle" fill="#8888a0" fontSize="8">Nodes worldwide</text>
                  <text x="170" y="105" textAnchor="middle" fill="#9200E1" fontSize="8" className="mono-text" letterSpacing="1">VERIFIED BY PROOF OF RANDOM ACCESS</text>
                </svg>
              </div>
            </div>
            <div>
              <div className="grid-2" style={{ marginBottom: '.8rem' }}>
                <div className="card" style={{ padding: '1.2rem' }}><h3 style={{ fontSize: '.9rem' }}>Log Storage</h3><p>Append-only, immutable. Audit trails, training logs, data provenance.</p></div>
                <div className="card" style={{ padding: '1.2rem' }}><h3 style={{ fontSize: '.9rem' }}>Key-Value Storage</h3><p>Mutable data for app state, user prefs, dynamic content.</p></div>
              </div>
              <div className="feat"><div className="feat-dot" /><div><strong>Proof of Random Access</strong><span>Random surprise checks — nodes must prove they still hold your data to earn rewards.</span></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* 7: 0G COMPUTE */}
      <div className={`og-slide${current === 7 ? ' active' : ''}`}>
        <div className="og-slide-num">07 / 12</div>
        <div className="si" style={{ gap: '1rem' }}>
          <div>
            <span className="tag">Pillar 03</span>
            <h2>0G Compute — Global GPU Marketplace</h2>
          </div>
          <div className="flow-wrap" style={{ marginTop: 0 }}>
            <svg viewBox="0 0 720 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="a3" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M1 1 L7 4 L1 7" fill="none" stroke="#D0D0D8" strokeWidth="1.5" />
                </marker>
              </defs>
              <rect x="0" y="15" width="130" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="65" y="42" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="600">Developer</text>
              <text x="65" y="58" textAnchor="middle" fill="#8888a0" fontSize="9">Deposits funds</text>
              <path d="M133 48 L178 48" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#a3)" />
              <rect x="182" y="15" width="130" height="65" rx="10" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
              <text x="247" y="42" textAnchor="middle" fill="#9200E1" fontSize="12" fontWeight="600">Smart Contract</text>
              <text x="247" y="58" textAnchor="middle" fill="#8888a0" fontSize="9">Escrow + matching</text>
              <path d="M315 48 L360 48" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#a3)" />
              <rect x="364" y="15" width="130" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="429" y="42" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="600">GPU Provider</text>
              <text x="429" y="58" textAnchor="middle" fill="#8888a0" fontSize="9">Runs AI workload</text>
              <path d="M497 48 L542 48" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#a3)" />
              <rect x="546" y="15" width="160" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="626" y="42" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="600">Verified Result</text>
              <text x="626" y="58" textAnchor="middle" fill="#8888a0" fontSize="9">TEEML / OPML / ZKML</text>
            </svg>
          </div>
          <div className="grid-3">
            <div className="feat" style={{ flexDirection: 'column', gap: '.25rem' }}><strong style={{ fontSize: '.85rem' }}>TEEML</strong><span style={{ fontSize: '.76rem', color: 'var(--text2)' }}>Hardware-based trusted execution. Fast, secure isolation for computation.</span></div>
            <div className="feat" style={{ flexDirection: 'column', gap: '.25rem' }}><strong style={{ fontSize: '.85rem' }}>OPML</strong><span style={{ fontSize: '.76rem', color: 'var(--text2)' }}>Optimistic verification. Results assumed correct, challengeable if wrong.</span></div>
            <div className="feat" style={{ flexDirection: 'column', gap: '.25rem' }}><strong style={{ fontSize: '.85rem' }}>ZKML</strong><span style={{ fontSize: '.76rem', color: 'var(--text2)' }}>Zero-knowledge proofs. Verify computation without revealing the data.</span></div>
          </div>
        </div>
      </div>

      {/* 8: 0G DA */}
      <div className={`og-slide${current === 8 ? ' active' : ''}`}>
        <div className="og-slide-num">08 / 12</div>
        <div className="si">
          <div className="split">
            <div>
              <span className="tag">Pillar 04</span>
              <h2>0G Data Availability</h2>
              <p className="desc">Guarantees data can always be accessed when needed. Instead of every node checking all data, randomly selected nodes (via VRF) verify random portions. Scales infinitely.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 300 }}>
                  <rect x="0" y="0" width="300" height="34" rx="6" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
                  <text x="150" y="22" textAnchor="middle" fill="#9200E1" fontSize="11" fontWeight="600">Data Blob</text>
                  <line x1="50" y1="36" x2="50" y2="55" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="3 2" />
                  <line x1="130" y1="36" x2="130" y2="55" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="3 2" />
                  <line x1="230" y1="36" x2="230" y2="55" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="3 2" />
                  <circle cx="50" cy="64" r="9" fill="white" stroke="#B75FFF" strokeWidth="1.2" />
                  <circle cx="130" cy="64" r="9" fill="white" stroke="#B75FFF" strokeWidth="1.2" />
                  <circle cx="230" cy="64" r="9" fill="white" stroke="#B75FFF" strokeWidth="1.2" />
                  <text x="150" y="80" textAnchor="middle" fill="#8888a0" fontSize="7.5" className="mono-text">RANDOM NODES SAMPLE RANDOM PORTIONS</text>
                </svg>
              </div>
            </div>
            <div className="feat-list" style={{ marginTop: 0 }}>
              <div className="feat"><div className="feat-dot" /><div><strong>50 Gbps Throughput</strong><span>Demonstrated on testnet — far beyond any other DA solution available.</span></div></div>
              <div className="feat"><div className="feat-dot" /><div><strong>Partners</strong><span>Polygon, Optimism, Arbitrum, Manta Network, Caldera, AltLayer.</span></div></div>
              <div className="feat"><div className="feat-dot" /><div><strong>VRF Selection</strong><span>Unpredictable node selection via Verifiable Random Function — prevents collusion.</span></div></div>
              <div className="feat"><div className="feat-dot" /><div><strong>Use Cases</strong><span>L1/L2 chains, DeFi settlement, on-chain gaming, AI/ML datasets.</span></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* 9: INFTs */}
      <div className={`og-slide${current === 9 ? ' active' : ''}`}>
        <div className="og-slide-num">09 / 12</div>
        <div className="si" style={{ gap: '.6rem' }}>
          <div>
            <span className="tag">INFTs &amp; ERC-7857</span>
            <h2>AI Meets NFTs</h2>
            <p className="desc" style={{ marginBottom: 0, fontSize: '.88rem' }}>Normal NFTs point to public files. For AI, the value IS the data. INFTs transfer actual working intelligence.</p>
          </div>
          <div className="inft-compare">
            <div className="inft-box old">
              <h4>Normal NFTs</h4>
              <ul>
                <li>Own a receipt pointing to a public file</li>
                <li>Anyone can copy the content</li>
                <li>File stays on creator's server</li>
                <li>Static — content never changes</li>
              </ul>
            </div>
            <div className="inft-box new">
              <h4>INFTs (ERC-7857)</h4>
              <ul>
                <li>Own the actual working AI agent</li>
                <li>Encrypted — only owner can access</li>
                <li>Intelligence transfers on sale</li>
                <li>Dynamic — AI evolves, metadata updates</li>
              </ul>
            </div>
          </div>
          <div className="grid-3" style={{ marginTop: '.4rem' }}>
            <div className="card" style={{ padding: '1rem 1.2rem' }}><h3 style={{ fontSize: '.85rem' }}>Encrypted Metadata</h3><p style={{ fontSize: '.76rem' }}>Only the current owner holds the decryption key.</p></div>
            <div className="card" style={{ padding: '1rem 1.2rem' }}><h3 style={{ fontSize: '.85rem' }}>Secure Re-Encryption</h3><p style={{ fontSize: '.76rem' }}>On transfer, oracle re-encrypts for new owner. Old key dies.</p></div>
            <div className="card" style={{ padding: '1rem 1.2rem' }}><h3 style={{ fontSize: '.85rem' }}>Clone &amp; Lease</h3><p style={{ fontSize: '.76rem' }}>Clone agents as new INFTs. Grant usage without giving ownership.</p></div>
          </div>
        </div>
      </div>

      {/* 10: WHAT YOU CAN BUILD */}
      <div className={`og-slide${current === 10 ? ' active' : ''}`}>
        <div className="og-slide-num">10 / 12</div>
        <div className="si" style={{ gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="tag">For Builders</span>
            <h2>What Can You Build on 0G?</h2>
          </div>
          <div className="grid-3">
            <div className="use"><div className="use-bar" /><h3>On-Chain AI Agents</h3><p>Trading bots, assistants, game characters — verifiable and owned by users.</p></div>
            <div className="use"><div className="use-bar" /><h3>Decentralized Chat AI</h3><p>AI chat on decentralized GPUs. Conversations stay in your control.</p></div>
            <div className="use"><div className="use-bar" /><h3>AI-Powered DeFi</h3><p>Smarter trading, risk analysis, fraud detection running on-chain.</p></div>
            <div className="use"><div className="use-bar" /><h3>Medical AI</h3><p>Patients own data, grant access to AI models. Verifiable, no corporate control.</p></div>
            <div className="use"><div className="use-bar" /><h3>Distributed AI Training</h3><p>GPU training at a fraction of AWS cost. For students and indie researchers.</p></div>
            <div className="use"><div className="use-bar" /><h3>Data Markets</h3><p>Sell data to AI devs directly. Smart contracts handle everything.</p></div>
          </div>
        </div>
      </div>

      {/* 11: TOKEN */}
      <div className={`og-slide${current === 11 ? ' active' : ''}`}>
        <div className="og-slide-num">11 / 12</div>
        <div className="si" style={{ gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="tag">The Token</span>
            <h2>0G Token (A0GI)</h2>
            <p className="desc" style={{ margin: '.5rem auto 0', textAlign: 'center', maxWidth: 420 }}>The native token fueling every layer of the 0G ecosystem.</p>
          </div>
          <div className="flow-wrap" style={{ marginTop: '.5rem' }}>
            <svg viewBox="0 0 640 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="320" cy="70" r="32" fill="#F5EEFF" stroke="#B75FFF" strokeWidth="1.5" />
              <text x="320" y="66" textAnchor="middle" fill="#9200E1" fontSize="13" fontWeight="800">A0GI</text>
              <text x="320" y="80" textAnchor="middle" fill="#9200E1" fontSize="8" className="mono-text">TOKEN</text>
              <rect x="0" y="10" width="105" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <text x="52" y="32" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Gas Fees</text>
              <text x="52" y="46" textAnchor="middle" fill="#8888a0" fontSize="8">Chain transactions</text>
              <rect x="0" y="80" width="105" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <text x="52" y="102" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Storage</text>
              <text x="52" y="116" textAnchor="middle" fill="#8888a0" fontSize="8">File storage fees</text>
              <rect x="152" y="0" width="105" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <text x="204" y="22" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Compute</text>
              <text x="204" y="36" textAnchor="middle" fill="#8888a0" fontSize="8">Pay GPU providers</text>
              <rect x="535" y="10" width="105" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <text x="587" y="32" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Staking</text>
              <text x="587" y="46" textAnchor="middle" fill="#8888a0" fontSize="8">Secure + earn</text>
              <rect x="535" y="80" width="105" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <text x="587" y="102" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Governance</text>
              <text x="587" y="116" textAnchor="middle" fill="#8888a0" fontSize="8">Vote on direction</text>
              <line x1="108" y1="35" x2="288" y2="60" stroke="#E3C1FF" strokeWidth="1" strokeDasharray="4 3" />
              <line x1="108" y1="105" x2="288" y2="80" stroke="#E3C1FF" strokeWidth="1" strokeDasharray="4 3" />
              <line x1="257" y1="30" x2="290" y2="55" stroke="#E3C1FF" strokeWidth="1" strokeDasharray="4 3" />
              <line x1="532" y1="35" x2="352" y2="60" stroke="#E3C1FF" strokeWidth="1" strokeDasharray="4 3" />
              <line x1="532" y1="105" x2="352" y2="80" stroke="#E3C1FF" strokeWidth="1" strokeDasharray="4 3" />
            </svg>
          </div>
        </div>
      </div>

      {/* 12: CTA */}
      <div className={`og-slide${current === 12 ? ' active' : ''}`}>
        <div className="og-slide-num">12 / 12</div>
        <div className="si centered" style={{ flexDirection: 'column' }}>
          <span className="tag">Start Building</span>
          <h2>Ready to Build on 0G?</h2>
          <p className="desc" style={{ margin: '.5rem auto 0', textAlign: 'center', maxWidth: 460 }}>The barrier to entry has dropped. A solo developer in Nigeria can build and deploy AI-powered applications on the same infrastructure as anyone else in the world.</p>
          <div className="cta-links">
            <a href="https://docs.0g.ai/" className="cta-link primary" target="_blank" rel="noreferrer">Read the Docs</a>
            <a href="https://build.0g.ai/" className="cta-link" target="_blank" rel="noreferrer">Builder Hub</a>
            <a href="https://hub.0g.ai" className="cta-link" target="_blank" rel="noreferrer">0G Hub</a>
            <a href="https://0g.ai" className="cta-link" target="_blank" rel="noreferrer">0G.ai</a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className="og-nav">
        <button className="og-nav-btn" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Previous">&#8249;</button>
        <div className="og-nav-dots">
          {Array.from({ length: TOTAL }, (_, i) => (
            <button
              key={i}
              className={`og-nav-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <span className="og-slide-counter">{current + 1} / {TOTAL}</span>
        <button className="og-nav-btn" onClick={() => goTo(current + 1)} disabled={current === TOTAL - 1} aria-label="Next">&#8250;</button>
      </nav>
    </div>
  );
}
