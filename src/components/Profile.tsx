import { motion } from 'framer-motion';
import { Award, Code2, Globe2, Trophy } from 'lucide-react';

export function Profile() {
  return (
    <section id="profile" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="https://cocozqaswhyugfbilbxk.supabase.co/storage/v1/object/public/Codex-Lab/DSC08367.jpg"
              alt="Profile"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl -z-10" />
          </div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300"
            >
I’m Eze Ransom, a Web3 developer, ecosystem growth strategist, and community builder from Nigeria. I’ve built and shipped real products across multiple blockchain ecosystems, worked with Core and Sui, and I currently work with Zero Gravity, a leading AI Layer-1. Beyond building, I host and lead developer events, onboard hundreds of builders, and focus on creating products and communities that actually deliver value across Africa.            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, title: 'Web3 Dev', desc: 'Smart Contracts & DeFi' },
                { icon: Trophy, title: 'Awards', desc: 'Tutor of the Year' },
                { icon: Globe2, title: 'Community', desc: '0G Ng and Africa' },
                { icon: Award, title: 'Job', desc: 'Leading 0G Initiative in Nigeria' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}