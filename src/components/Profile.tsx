import { motion } from 'framer-motion';

export function Profile() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab/DSC08367.jpg"
                alt="Ransom Cherechi"
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 bg-[#111] border border-white/[0.06] rounded-lg px-4 py-3">
              <p className="text-[12px] text-white/50 font-medium tracking-wide">Ransom Cherechi</p>
              <p className="text-[11px] text-white/25 mt-0.5">Web3 Builder &middot; Nigeria</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pt-4"
          >
            <p className="text-[13px] text-white/30 tracking-widest uppercase mb-3">About</p>
            <h2 className="text-3xl font-bold tracking-tight text-white leading-snug">
              Builder, community leader, and Web3 strategist — focused on Africa-first solutions.
            </h2>

            <div className="space-y-6 mt-8">
              <p className="text-[15px] text-white/45 leading-[1.8]">
                I design and build blockchain applications from scratch — smart contracts in Move and Solidity, full-stack dApps, wallet integration, zkLogin, and decentralized storage with Walrus. I focus on practical use cases: financial inclusion, identity ownership, social coordination, and real-world usability of blockchain.
              </p>
              <p className="text-[15px] text-white/45 leading-[1.8]">
                Beyond code, I build ecosystems. I founded DevNest UNN, organize developer events and hackathons across cities like Enugu, Abuja, Uyo, PH, and Lagos, and lead the 0G Nigeria Builder Community. I've partnered with Avalanche, Core DAO, and Sui to bring builders into Web3. My events blend technical learning, vibecoding sessions, and real networking.
              </p>
              <p className="text-[15px] text-white/45 leading-[1.8]">
                I led teams under Code-X Lab, shipping multiple hackathon-winning and production-ready projects. I think beyond code — adoption, distribution, community scaling. As a crypto trader, I bring economic awareness to everything I build. My edge: I combine builder + community leader + strategist, I execute fast, and I bridge Web2 users into Web3 seamlessly through ideas like zkLogin and QR onboarding.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
