import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/case-studies', label: 'Case Studies' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-deep-charcoal/70 backdrop-blur-xl border border-white/10 shadow-lg">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Gargi<span className="text-mint">.</span>Kar
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors ${
                pathname === link.to ? 'text-mint' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-mint text-matte-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-mint/90 transition-all shadow-[0_0_20px_#82f4a1]"
          >
            Deploy a Project
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-2 bg-deep-charcoal/90 backdrop-blur-xl rounded-3xl p-5 border border-white/10 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4 text-sm font-medium">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`transition-colors ${
                    pathname === link.to ? 'text-mint' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-mint text-matte-black px-5 py-3 rounded-full text-sm font-semibold mt-2"
              >
                Deploy a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
