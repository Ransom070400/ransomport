import { useState, useEffect, useCallback, useRef } from 'react';
import './vibe-coding.css';

const TOTAL = 14;

export function VibeCoding() {
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
    <div className="vc-deck">

      {/* 0: TITLE */}
      <div className={`vc-slide${current === 0 ? ' active' : ''}`}>
        <div className="vc-si vc-centered" style={{ flexDirection: 'column' }}>
          <div className="vc-mono" style={{ fontSize: '.72rem', letterSpacing: '.25em', textTransform: 'uppercase', color: 'var(--vc-text3)', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--vc-accent)' }}>VIBE</span> — Coding Guide
          </div>
          <h1>Vibe Coding<br />Starter <em>Guide</em></h1>
          <p className="vc-desc" style={{ textAlign: 'center', margin: '.75rem auto 0', maxWidth: 520 }}>
            "The hottest new programming language is English" — Andrej Karpathy
          </p>
          <div className="vc-contents-grid">
            <div className="vc-contents-item">The Golden Rule</div>
            <div className="vc-contents-item">AI Assistant Context</div>
            <div className="vc-contents-item">Best Practices (13 tips)</div>
            <div className="vc-contents-item">Common Pitfalls</div>
            <div className="vc-contents-item">BMAD Method</div>
          </div>
        </div>
      </div>

      {/* 1: THE GOLDEN RULE */}
      <div className={`vc-slide${current === 1 ? ' active' : ''}`}>
        <div className="vc-slide-num">01 / 13</div>
        <div className="vc-si" style={{ gap: '1.2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="vc-tag">The Golden Rule</span>
            <h2>Plan with the smartest, code with the fastest</h2>
          </div>
          <div className="vc-table-wrap">
            <table className="vc-table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Recommended Models</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Planning &amp; Architecture</strong></td>
                  <td>Claude Opus 4.6, Gemini 3.1 Pro, GPT-5.4</td>
                  <td>Need deep reasoning, long context</td>
                </tr>
                <tr>
                  <td><strong>Writing Code</strong></td>
                  <td>Claude Sonnet 4.6, GPT-4o</td>
                  <td>Great balance of speed + quality</td>
                </tr>
                <tr>
                  <td><strong>Quick Iterations</strong></td>
                  <td>Claude Haiku 4.5, Grok Fast, Gemini 3 Flash</td>
                  <td>Speed &gt; perfection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2: AI ASSISTANT CONTEXT */}
      <div className={`vc-slide${current === 2 ? ' active' : ''}`}>
        <div className="vc-slide-num">02 / 13</div>
        <div className="vc-si" style={{ gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="vc-tag">AI Assistant Context</span>
            <h2>Give Your AI the Right Context</h2>
          </div>
          <div className="vc-callout">
            <div className="vc-callout-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--vc-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" /></svg>
            </div>
            <div>
              <strong>Share docs.0g.ai/ai-context with your AI coding assistant</strong>
              <p>(Claude, ChatGPT, Cursor, etc.) for instant access to all 0G network configs, contract addresses, code examples, and SDK commands. This context page helps AI provide accurate, copy-paste ready code for building on 0G.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3: TIP 1 — ALWAYS PLAN FIRST */}
      <div className={`vc-slide${current === 3 ? ' active' : ''}`}>
        <div className="vc-slide-num">03 / 13</div>
        <div className="vc-si">
          <div className="vc-split">
            <div>
              <span className="vc-tag">Tip 01</span>
              <h2>Always Plan First</h2>
              <p className="vc-desc">Before you write a single line of code, ask your AI to plan.</p>
              <div className="vc-why-list">
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Catches issues before they're coded</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Gives you a checklist to verify</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Reduces context loss in long sessions</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Creates documentation automatically</span></div>
              </div>
            </div>
            <div className="vc-code-compare">
              <div className="vc-code-block bad">
                <div className="vc-code-label bad">Don't</div>
                <code>"Build me a login system"</code>
              </div>
              <div className="vc-code-block good">
                <div className="vc-code-label good">Do</div>
                <code>"Create a detailed plan for a login system. Include:<br />- Architecture decisions<br />- Security considerations<br />- File structure<br />- Step-by-step implementation checklist<br />Save as plan.md"</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4: TIPS 2 & 3 */}
      <div className={`vc-slide${current === 4 ? ' active' : ''}`}>
        <div className="vc-slide-num">04 / 13</div>
        <div className="vc-si" style={{ gap: '1.2rem' }}>
          <div className="vc-split">
            <div className="vc-card">
              <span className="vc-tag">Tip 02</span>
              <h3>Request Markdown Checklists</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>Turn plans into trackable progress.</p>
              <div className="vc-mini-list">
                <span>Checkboxes for each step</span>
                <span>Numbered phases</span>
                <span>Dependencies noted</span>
                <span>Acceptance criteria</span>
              </div>
              <div className="vc-code-block good" style={{ marginTop: '.8rem' }}>
                <code>"...format as a markdown checklist with detailed steps I can track"</code>
              </div>
            </div>
            <div className="vc-card">
              <span className="vc-tag">Tip 03</span>
              <h3>Security First (But Don't Over-Engineer)</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>Security is a huge problem in vibe coding — but paranoia kills velocity.</p>
              <div className="vc-code-block good" style={{ marginTop: '.8rem' }}>
                <code>"Review this code for security vulnerabilities. Flag what's necessary vs over-engineering."</code>
              </div>
              <div className="vc-why-list" style={{ marginTop: '.6rem' }}>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Start with basic security for MVPs</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Add layers as you scale</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Don't build enterprise auth for a weekend project</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5: TIPS 4 & 5 */}
      <div className={`vc-slide${current === 5 ? ' active' : ''}`}>
        <div className="vc-slide-num">05 / 13</div>
        <div className="vc-si" style={{ gap: '1.2rem' }}>
          <div className="vc-split">
            <div className="vc-card">
              <span className="vc-tag">Tip 04</span>
              <h3>Learn, Don't Just Ship</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>If you're a developer, understanding HOW it works matters.</p>
              <div className="vc-code-block good" style={{ marginTop: '.8rem' }}>
                <code>"Explain how this solution works:<br />- What pattern did you use?<br />- Why this approach over alternatives?<br />- What are the tradeoffs?<br />- What would break this?"</code>
              </div>
              <div className="vc-why-list" style={{ marginTop: '.6rem' }}>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>AI won't replace devs who understand systems</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>You'll debug faster when things break</span></div>
              </div>
            </div>
            <div className="vc-card">
              <span className="vc-tag">Tip 05</span>
              <h3>The "Explain It Back" Rule</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>Before shipping any AI-generated code:</p>
              <div className="vc-code-block good" style={{ marginTop: '.8rem' }}>
                <code>"Explain this code to me like I'm a junior dev"</code>
              </div>
              <div className="vc-highlight-box">
                If you can't understand the explanation, you shouldn't ship the code.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6: TIP 6 — BREAK IT DOWN */}
      <div className={`vc-slide${current === 6 ? ' active' : ''}`}>
        <div className="vc-slide-num">06 / 13</div>
        <div className="vc-si">
          <div className="vc-split">
            <div>
              <span className="vc-tag">Tip 06</span>
              <h2>Break It Down — One Thing at a Time</h2>
              <p className="vc-desc">Don't try to build Rome in one prompt.</p>
              <div className="vc-why-list" style={{ marginTop: '1.2rem' }}>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>One feature per conversation thread</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Complete → Test → Move to next</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Each chunk should be independently testable</span></div>
              </div>
            </div>
            <div className="vc-code-compare">
              <div className="vc-code-block bad">
                <div className="vc-code-label bad">Don't</div>
                <code>"Build me a complete e-commerce platform with auth, payments, inventory, shipping, admin dashboard, and analytics"</code>
              </div>
              <div className="vc-code-block good">
                <div className="vc-code-label good">Do</div>
                <code>"Let's build an e-commerce platform. First, create the user authentication system. Start with the data models."</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7: TIPS 7 & 8 */}
      <div className={`vc-slide${current === 7 ? ' active' : ''}`}>
        <div className="vc-slide-num">07 / 13</div>
        <div className="vc-si" style={{ gap: '1.2rem' }}>
          <div className="vc-split">
            <div className="vc-card">
              <span className="vc-tag">Tip 07</span>
              <h3>Context is King</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>Give AI the right context, not ALL the context.</p>
              <div className="vc-code-block good" style={{ marginTop: '.8rem' }}>
                <code>"I'm building a React app with TypeScript.<br />Here's my current component structure: [paste relevant files]<br />I need to add a new feature that..."</code>
              </div>
              <div className="vc-code-block bad" style={{ marginTop: '.6rem' }}>
                <code>"Here's my entire 500-file codebase [dumps everything] Fix the bug"</code>
              </div>
              <p className="vc-desc" style={{ maxWidth: 'none', fontSize: '.78rem', marginTop: '.5rem' }}>Pro tip: Use @codebase in Cursor or reference specific files in Cline.</p>
            </div>
            <div className="vc-card">
              <span className="vc-tag">Tip 08</span>
              <h3>Use Rules Files / Custom Instructions</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>Train your AI on your preferences ONCE.</p>
              <div className="vc-code-block good" style={{ marginTop: '.8rem' }}>
                <code style={{ fontSize: '.72rem', lineHeight: 1.6 }}>
                  # .cursorrules / CLAUDE.md<br /><br />
                  ## Code Style<br />
                  - TypeScript strict mode<br />
                  - Functional components<br />
                  - Tailwind for styling<br /><br />
                  ## Don't<br />
                  - Never use `any` type<br />
                  - No console.log in prod
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8: TIPS 9 & 10 */}
      <div className={`vc-slide${current === 8 ? ' active' : ''}`}>
        <div className="vc-slide-num">08 / 13</div>
        <div className="vc-si" style={{ gap: '1.2rem' }}>
          <div className="vc-split">
            <div className="vc-card">
              <span className="vc-tag">Tip 09</span>
              <h3>Commit Early, Commit Often</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>Git is your safety net — use it.</p>
              <div className="vc-code-block good" style={{ marginTop: '.8rem' }}>
                <code style={{ fontSize: '.74rem' }}>
                  # Before AI makes big changes<br />
                  git add . && git commit -m "checkpoint: before AI refactor"<br /><br />
                  # After each working feature<br />
                  git add . && git commit -m "feat: add user auth"
                </code>
              </div>
              <div className="vc-why-list" style={{ marginTop: '.6rem' }}>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Easy rollback if AI breaks things</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Track what AI changed vs what you changed</span></div>
              </div>
            </div>
            <div className="vc-card">
              <span className="vc-tag">Tip 10</span>
              <h3>Test As You Go</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>Don't build a mountain then test — test each brick.</p>
              <div className="vc-checklist">
                <div className="vc-check-item"><div className="vc-check-box" />Does it compile/build?</div>
                <div className="vc-check-item"><div className="vc-check-box" />Does it run without errors?</div>
                <div className="vc-check-item"><div className="vc-check-box" />Does it do what you asked?</div>
                <div className="vc-check-item"><div className="vc-check-box" />Edge cases handled?</div>
              </div>
              <div className="vc-code-block good" style={{ marginTop: '.6rem' }}>
                <code>"Write unit tests for this function"<br />"What edge cases should I test for?"</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 9: TIPS 11, 12, 13 */}
      <div className={`vc-slide${current === 9 ? ' active' : ''}`}>
        <div className="vc-slide-num">09 / 13</div>
        <div className="vc-si" style={{ gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="vc-tag">Tips 11 – 13</span>
            <h2>Debug, Screenshot, Know Your Limits</h2>
          </div>
          <div className="vc-grid-3">
            <div className="vc-card">
              <h3>11. AI Debugging AI</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>AI broke it? AI can fix it.</p>
              <div className="vc-code-block good" style={{ marginTop: '.6rem' }}>
                <code style={{ fontSize: '.72rem' }}>"This code you generated throws an error:<br />[paste error]<br /><br />Why did this fail? Explain the root cause before fixing."</code>
              </div>
            </div>
            <div className="vc-card">
              <h3>12. Use Screenshots</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>A picture is worth 1000 tokens.</p>
              <div className="vc-why-list" style={{ marginTop: '.5rem' }}>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Screenshot your current UI</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Screenshot the design you want</span></div>
                <div className="vc-why-item"><div className="vc-why-dot" /><span>Screenshot the error</span></div>
              </div>
            </div>
            <div className="vc-card">
              <h3>13. Know When to Stop</h3>
              <p className="vc-desc" style={{ maxWidth: 'none' }}>Sometimes the fastest path is typing it yourself.</p>
              <div className="vc-two-col" style={{ marginTop: '.5rem' }}>
                <div>
                  <strong style={{ fontSize: '.76rem', color: 'var(--vc-accent)' }}>Use AI for:</strong>
                  <span style={{ fontSize: '.74rem' }}>Boilerplate, complex algorithms, unfamiliar APIs</span>
                </div>
                <div>
                  <strong style={{ fontSize: '.76rem', color: 'var(--vc-warn)' }}>Do manually:</strong>
                  <span style={{ fontSize: '.74rem' }}>Simple fixes, repeated failures, faster to type</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 10: COMMON PITFALLS */}
      <div className={`vc-slide${current === 10 ? ' active' : ''}`}>
        <div className="vc-slide-num">10 / 13</div>
        <div className="vc-si" style={{ gap: '1.2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="vc-tag">Common Pitfalls</span>
            <h2>What Goes Wrong — And How to Fix It</h2>
          </div>
          <div className="vc-table-wrap">
            <table className="vc-table">
              <thead>
                <tr>
                  <th>Pitfall</th>
                  <th>Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Skipping planning</strong></td>
                  <td>Always plan → review → code</td>
                </tr>
                <tr>
                  <td><strong>Mega-prompts</strong></td>
                  <td>Break into small, testable chunks</td>
                </tr>
                <tr>
                  <td><strong>No version control</strong></td>
                  <td>Commit before/after AI changes</td>
                </tr>
                <tr>
                  <td><strong>Accepting first solution</strong></td>
                  <td>Ask for alternatives</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 11: BMAD — WHAT IS IT */}
      <div className={`vc-slide${current === 11 ? ' active' : ''}`}>
        <div className="vc-slide-num">11 / 13</div>
        <div className="vc-si" style={{ gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="vc-tag">BMAD Method</span>
            <h2>Breakthrough Method for<br />Agile AI-Driven Development</h2>
            <p className="vc-desc" style={{ margin: '.5rem auto 0', textAlign: 'center', maxWidth: 540 }}>An open-source framework that brings structure to vibe coding through specialized AI agents.</p>
          </div>
          <div className="vc-highlight-box" style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
            BMAD transforms chaotic "vibe coding" into structured, repeatable workflows.
          </div>
          <div className="vc-grid-4" style={{ marginTop: '.5rem' }}>
            <div className="vc-card" style={{ textAlign: 'center', padding: '1rem' }}>
              <div className="vc-card-icon">1</div>
              <strong style={{ fontSize: '.82rem' }}>Front-loads planning</strong>
              <span style={{ fontSize: '.72rem', color: 'var(--vc-text2)' }}>Reduces token waste</span>
            </div>
            <div className="vc-card" style={{ textAlign: 'center', padding: '1rem' }}>
              <div className="vc-card-icon">2</div>
              <strong style={{ fontSize: '.82rem' }}>Auto documentation</strong>
              <span style={{ fontSize: '.72rem', color: 'var(--vc-text2)' }}>Creates docs as you go</span>
            </div>
            <div className="vc-card" style={{ textAlign: 'center', padding: '1rem' }}>
              <div className="vc-card-icon">3</div>
              <strong style={{ fontSize: '.82rem' }}>Tool agnostic</strong>
              <span style={{ fontSize: '.72rem', color: 'var(--vc-text2)' }}>Cursor, VS Code, Claude Code</span>
            </div>
            <div className="vc-card" style={{ textAlign: 'center', padding: '1rem' }}>
              <div className="vc-card-icon">4</div>
              <strong style={{ fontSize: '.82rem' }}>Enterprise ready</strong>
              <span style={{ fontSize: '.72rem', color: 'var(--vc-text2)' }}>Audit trails included</span>
            </div>
          </div>
        </div>
      </div>

      {/* 12: BMAD AGENT TEAM */}
      <div className={`vc-slide${current === 12 ? ' active' : ''}`}>
        <div className="vc-slide-num">12 / 13</div>
        <div className="vc-si" style={{ gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="vc-tag">BMAD Agents</span>
            <h2>The Agent Team</h2>
          </div>
          <div className="vc-agent-flow">
            <svg viewBox="0 0 720 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="vc-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M1 1 L7 4 L1 7" fill="none" stroke="#D0D0D8" strokeWidth="1.5" />
                </marker>
              </defs>
              {/* Agent boxes */}
              <rect x="0" y="20" width="95" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="47" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">Analyst</text>
              <text x="47" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">Project Brief</text>

              <path d="M98 52 L120 52" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#vc-arr)" />

              <rect x="125" y="20" width="95" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="172" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">PM</text>
              <text x="172" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">PRD from Brief</text>

              <path d="M223 52 L245 52" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#vc-arr)" />

              <rect x="250" y="20" width="95" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="297" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">Architect</text>
              <text x="297" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">System Design</text>

              <path d="M348 52 L370 52" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#vc-arr)" />

              <rect x="375" y="20" width="95" height="65" rx="10" fill="#F0FDF4" stroke="#10B981" strokeWidth="1" strokeOpacity=".3" />
              <text x="422" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">Scrum Master</text>
              <text x="422" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">Dev Stories</text>

              <path d="M473 52 L495 52" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#vc-arr)" />

              <rect x="500" y="20" width="95" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="547" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">Dev</text>
              <text x="547" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">Implements Code</text>

              <path d="M598 52 L620 52" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#vc-arr)" />

              <rect x="625" y="20" width="95" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
              <text x="672" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">QA</text>
              <text x="672" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">Tests &amp; Reviews</text>

              <text x="360" y="110" textAnchor="middle" fill="#8888a0" fontSize="9" fontFamily="'IBM Plex Mono', monospace" letterSpacing="1.5">STRUCTURED AI PIPELINE → REPEATABLE RESULTS</text>
            </svg>
          </div>
        </div>
      </div>

      {/* 13: CTA */}
      <div className={`vc-slide${current === 13 ? ' active' : ''}`}>
        <div className="vc-slide-num">13 / 13</div>
        <div className="vc-si vc-centered" style={{ flexDirection: 'column' }}>
          <span className="vc-tag">Start Vibing</span>
          <h2>Ready to Vibe Code?</h2>
          <p className="vc-desc" style={{ margin: '.5rem auto 0', textAlign: 'center', maxWidth: 460 }}>
            Plan with the smartest. Code with the fastest. Test every brick. Commit often. Learn always.
          </p>
          <div className="vc-cta-links">
            <a href="https://docs.0g.ai/" className="vc-cta-link primary" target="_blank" rel="noreferrer">0G Docs</a>
            <a href="https://github.com/bmad-method/BMAD-METHOD" className="vc-cta-link" target="_blank" rel="noreferrer">BMAD GitHub</a>
            <a href="https://bmad.method.website/" className="vc-cta-link" target="_blank" rel="noreferrer">BMAD Website</a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className="vc-nav">
        <button className="vc-nav-btn" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Previous">&#8249;</button>
        <div className="vc-nav-dots">
          {Array.from({ length: TOTAL }, (_, i) => (
            <button key={i} className={`vc-nav-dot${i === current ? ' active' : ''}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <span className="vc-slide-counter">{current + 1} / {TOTAL}</span>
        <button className="vc-nav-btn" onClick={() => goTo(current + 1)} disabled={current === TOTAL - 1} aria-label="Next">&#8250;</button>
      </nav>
    </div>
  );
}
