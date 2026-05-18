import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import heroVisual from '../assets/hero-visual.svg'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <section className="min-h-screen flex items-center px-4 pt-24 pb-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col gap-6"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-white"
          >
            ARCHITECTING
            <br />
            <span className="text-mint">AUTONOMY.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-white/60 max-w-lg leading-relaxed"
          >
            I design self-healing AI systems and agentic workflows that turn operational bottlenecks into competitive advantages.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-mint text-matte-black px-6 py-3 rounded-full font-semibold hover:bg-mint/90 transition-all shadow-[0_0_30px_#82f4a1]"
            >
              Deploy a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-matte-black bg-gradient-to-br from-mint/40 to-mint/10"
                />
              ))}
            </div>
            <span className="text-sm text-white/40">
              Trusted by <span className="text-white font-semibold">12+</span> companies
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-deep-charcoal to-matte-black border border-white/5">
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-mint/20 to-transparent animate-pulse" />
              </div>
            )}
            <img
              src={heroVisual}
              alt="Gargi Kar — AI & Automation Architect"
              className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
