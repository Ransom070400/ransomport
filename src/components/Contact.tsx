import { motion } from 'framer-motion';

export function Contact() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
        >
          <div>
            <p className="text-[13px] text-white/30 tracking-widest uppercase mb-3">Get in touch</p>
            <a
              href="mailto:ezeransome@gmail.com"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white/80 hover:text-white transition-colors duration-200"
            >
              ezeransome@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6 text-[13px] text-white/25">
            <a href="https://github.com/Ransom070400" target="_blank" rel="noreferrer" className="hover:text-white/50 transition-colors">GitHub</a>
            <a href="https://x.com/ezeransome" target="_blank" rel="noreferrer" className="hover:text-white/50 transition-colors">X</a>
            <a href="https://www.linkedin.com/in/eze-ransom-281640295" target="_blank" rel="noreferrer" className="hover:text-white/50 transition-colors">LinkedIn</a>
          </div>
        </motion.div>

        <div className="mt-16 pt-6 border-t border-white/[0.04] text-[12px] text-white/15">
          &copy; {new Date().getFullYear()} Ransom Cherechi
        </div>
      </div>
    </footer>
  );
}
