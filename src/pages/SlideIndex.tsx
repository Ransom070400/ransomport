import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Presentation } from 'lucide-react';

const decks = [
  {
    slug: '0g',
    title: 'Understanding 0G — Intro for Builders',
    description: 'The first blockchain built for AI. Storage, compute, data availability — explained for builders.',
    slides: 13,
    tag: 'Web3 · AI',
  },
  {
    slug: 'vibe-coding',
    title: 'Vibe Coding Starter Guide',
    description: 'Plan with the smartest, code with the fastest. 13 best practices, common pitfalls, and the BMAD method.',
    slides: 14,
    tag: 'Dev · AI',
  },
];

export function SlideIndex() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Home</span>
          </Link>
          <div className="h-5 w-px bg-white/20" />
          <h1 className="text-2xl font-bold tracking-tight">Slides</h1>
        </div>
      </div>

      {/* Deck list */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-white/40 text-sm mb-8">Click a deck to view the presentation.</p>

        <div className="flex flex-col gap-4">
          {decks.map((deck, i) => (
            <motion.div
              key={deck.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
            >
              <Link
                to={`/slide/${deck.slug}`}
                className="group block rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/40 hover:bg-cyan-400/[0.03] transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-lg bg-white/5 text-white/50 group-hover:bg-cyan-400/10 group-hover:text-cyan-400 transition-colors duration-300">
                    <Presentation size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                      {deck.title}
                    </h2>
                    <p className="text-sm text-white/40 mt-1 leading-relaxed">
                      {deck.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-white/30">
                      <span className="px-2 py-0.5 rounded bg-white/5">{deck.tag}</span>
                      <span>{deck.slides} slides</span>
                    </div>
                  </div>
                  <div className="text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 mt-2">
                    &#8250;
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
