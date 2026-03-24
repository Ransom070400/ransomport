import { motion } from 'framer-motion';

const timeline = [
  {
    role: 'Leading 0G Adoption Across Nigeria and Africa',
    company: '0G (Zero Gravity)',
    period: 'Present',
    description: 'Driving builder community and ecosystem growth across Nigeria and the continent for the AI Layer-1. Designing developer onboarding pipelines, organizing events, and expanding adoption in Enugu, Abuja, Uyo, PH, and Lagos.',
  },
  {
    role: 'Technical Lead',
    company: 'Code-X Lab',
    period: 'Present',
    description: 'Leading teams from concept to MVP to live product. Multiple hackathon-winning projects shipped. Guiding builders to execute fast and iterate in real environments.',
  },
  {
    role: 'Founder',
    company: 'DevNest UNN',
    period: '2023 — Present',
    description: 'Built a student tech community from scratch at UNN. Workshops, hackathons, developer mentorship. Active in Blockchain UNN, Web3Bridge, and GDSC.',
  },
  {
    role: 'Web3 Builder & Event Host',
    company: 'Avalanche · Core DAO · Sui',
    period: '2023 — Present',
    description: 'Shipped products across multiple ecosystems. Smart contracts in Move and Solidity, DeFi protocols, dApps. Hosted and co-hosted developer events, hackathons, and mixers across Nigerian cities.',
  },
  {
    role: 'Web3 Strategist',
    company: 'Ecosystem Growth',
    period: 'Ongoing',
    description: 'Designing growth strategies for blockchain ecosystems. Developer onboarding, content, partnerships, and city-level expansion. Bridging Web2 users into Web3 through zkLogin, QR onboarding, and NFC.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[13px] text-white/30 tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-3xl font-bold tracking-tight text-white">Experience</h2>
        </motion.div>

        <div className="flex flex-col">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-8 py-8 border-t border-white/[0.06]"
            >
              <span className="text-[13px] text-white/25 font-medium tracking-wide">
                {item.period}
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-white/85 mb-1">
                  {item.role}
                </h3>
                <p className="text-[13px] text-white/30 mb-2">{item.company}</p>
                <p className="text-[14px] text-white/35 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
