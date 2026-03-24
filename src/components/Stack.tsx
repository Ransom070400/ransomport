import { motion } from 'framer-motion';

const categories = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Solidity', 'Move', 'Motoko', 'C++', 'Python'],
  },
  {
    label: 'Frontend',
    items: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js'],
  },
  {
    label: 'Backend & Infra',
    items: ['Node.js', 'Express', 'Vite', 'Git', 'Vercel', 'IPFS', 'Walrus'],
  },
  {
    label: 'Web3 & Smart Contracts',
    items: ['Hardhat', 'Foundry', 'Remix', 'Ethers.js', 'Wagmi', 'zkLogin', 'Web3.js'],
  },
  {
    label: 'Chains',
    items: ['Ethereum', 'Sui', '0G', 'Internet Computer', 'Core DAO', 'Avalanche', 'Polygon'],
  },
  {
    label: 'Concepts',
    items: ['DeFi', 'NFTs', 'ZK Proofs', 'Account Abstraction', 'NFC/QR', 'AR', 'Token Design'],
  },
];

export function Stack() {
  return (
    <section id="stack" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[13px] text-white/30 tracking-widest uppercase mb-3">Tools</p>
          <h2 className="text-3xl font-bold tracking-tight text-white">Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[13px] text-white/25 tracking-widest uppercase mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] text-white/50 px-3 py-1.5 rounded-md border border-white/[0.06] hover:border-white/[0.15] hover:text-white/70 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
