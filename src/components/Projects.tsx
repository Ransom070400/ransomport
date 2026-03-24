import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Pingou',
    description: 'Smart networking app — share profiles via QR/NFC at events with gamified networking and on-chain identity.',
    stack: ['React Native', 'Node.js', 'NFC', 'Web3'],
    href: 'https://pingou.live',
    github: 'https://github.com/Ransom070400/pingou.git',
  },
  {
    title: 'FlowX',
    description: 'Cross-border stablecoin liquidity protocol on Sui. Solving remittance and liquidity challenges in Africa.',
    stack: ['Sui', 'Move', 'TypeScript', 'DeFi'],
    href: 'https://flow-x-landing-page.vercel.app/',
    github: 'https://github.com/Ransom070400/flowx_npm_package.git',
  },
  {
    title: 'VeriChain',
    description: 'On-chain KYC — verify your identity once, reuse it securely across any platform. Identity ownership, not rental.',
    stack: ['Solidity', 'React', 'ZK Proofs', 'Walrus'],
    href: 'https://verichain-site-ywgs.vercel.app',
    github: 'https://github.com/Ransom070400/Verichain-site.git',
  },
  {
    title: 'Metamuse',
    description: 'Collaborative art + NFT marketplace. Artists co-create, mint, and monetize their work on-chain.',
    stack: ['React', 'Solidity', 'IPFS', 'NFT'],
    href: 'https://muse-364595.netlify.app/',
    github: 'https://github.com/Ransom070400/METAMUSE1.git',
  },
  {
    title: 'BinGO',
    description: 'Decentralized waste-to-recycler marketplace. Connecting waste producers to recyclers on ICP.',
    stack: ['Internet Computer', 'Motoko', 'React'],
    href: 'https://5ostl-faaaa-aaaah-aq3pq-cai.icp0.io/',
    github: 'https://github.com/Ransom070400/BinGO1.git',
  },
];

export function Projects() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[13px] text-white/30 tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl font-bold tracking-tight text-white">Selected Work</h2>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group flex items-start justify-between py-8 border-t border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors duration-200">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-white/0 group-hover:text-white/40 -translate-y-0.5 translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-0.5 transition-all duration-300"
                  />
                </div>
                <p className="text-[15px] text-white/35 leading-relaxed max-w-[500px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-white/25 tracking-wide uppercase px-2 py-0.5 rounded border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-4 ml-8 mt-1">
                <span
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, '_blank'); }}
                  className="text-[12px] text-white/20 hover:text-white/50 transition-colors cursor-pointer"
                >
                  Source
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
