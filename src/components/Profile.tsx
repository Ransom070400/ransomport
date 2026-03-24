import { motion } from 'framer-motion';

export function Profile() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[13px] text-white/30 tracking-widest uppercase mb-3">About</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Builder, community leader, and Web3 strategist — focused on Africa-first solutions.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[15px] text-white/45 leading-[1.8]">
              I design and build blockchain applications from scratch — smart contracts in Move and Solidity, full-stack dApps, wallet integration, zkLogin, and decentralized storage with Walrus. I focus on practical use cases: financial inclusion, identity ownership, social coordination, and real-world usability of blockchain.
            </p>
            <p className="text-[15px] text-white/45 leading-[1.8]">
              Beyond code, I build ecosystems. I founded DevNest UNN, organize developer events and hackathons across cities like Enugu, Abuja, Uyo, PH, and Lagos, and lead the 0G Nigeria Builder Community. I've partnered with Avalanche, Core DAO, and Sui to bring builders into Web3. My events blend technical learning, vibecoding sessions, and real networking.
            </p>
            <p className="text-[15px] text-white/45 leading-[1.8]">
              I led teams under Code-X Lab, shipping multiple hackathon-winning and production-ready projects. I think beyond code — adoption, distribution, community scaling. As a crypto trader, I bring economic awareness to everything I build. My edge: I combine builder + community leader + strategist, I execute fast, and I bridge Web2 users into Web3 seamlessly through ideas like zkLogin and QR onboarding.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
