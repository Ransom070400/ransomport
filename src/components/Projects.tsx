import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Metamuse',
    description: 'A Web3 platform for artists to collaborate, mint NFTs, and auction their artwork. ',
    image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//WhatsApp%20Image%202025-01-29%20at%2012.57.39_ea53122f.jpg',
    github: 'https://github.com/Ransom070400/METAMUSE1.git',
    demo: 'https://muse-364595.netlify.app/'
  },
  {
    title: 'Flow',
    description: 'A cross-border liquidity protocol for stablecoins on Sui, solving remittance and liquidity challenges in Africa.',
    image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//flow.webp',
    github: 'https://github.com/Ransom070400/flowx_npm_package.git',
    demo: 'https://flow-x-landing-page.vercel.app/'
  },


    {
    title: 'Pingou',
    description: 'A cross-border liquidity protocol for stablecoins on Sui, solving remittance and liquidity challenges in Africa.',
    image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/pingou/Image%20(1).png',
    github: 'https://github.com/Ransom070400/pingou.git',
    demo: 'pingou.live'
  },

  {
    title: 'Bingo',
    description: 'A decentralized Web3 site that connects wastes to recyclers.',
    image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//Bingo.jpg',
    github: 'https://github.com/Ransom070400/BinGO1.git',
    demo: 'https://5ostl-faaaa-aaaah-aq3pq-cai.icp0.io/'
  },
  {
    title: 'VeriChain',
    description: 'A KYC app that enables you to do your KYC once and reuse it anytime.',
    image: 'https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab//veri.jpg',
    github: 'https://github.com/Ransom070400/Verichain-site.git',
    demo: 'https://verichain-site-ywgs.vercel.app'
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}