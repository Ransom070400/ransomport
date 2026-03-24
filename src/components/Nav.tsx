import { motion } from 'framer-motion';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/[0.04]"
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="text-sm font-medium tracking-tight text-white/90 hover:text-white transition-colors">
          ransom.
        </a>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-white/40 hover:text-white/80 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
