import { motion } from 'framer-motion'
import { Search, Layers, RefreshCw } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit',
    description: 'Identify bottlenecks',
    details: 'Deep analysis of your current workflows to pinpoint inefficiencies and automation opportunities.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Architect',
    description: 'Build logic',
    details: 'Design and deploy agentic workflows using n8n, Claude, and custom AI pipelines tailored to your stack.',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: 'Optimize',
    description: 'Self-healing loops',
    details: 'Continuous monitoring and autonomous optimization — systems that adapt and improve without human intervention.',
  },
]

export default function Workflow() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mb-12 text-center"
      >
        <motion.span variants={fadeUp} className="text-mint font-semibold text-sm tracking-widest uppercase">
          The Methodology
        </motion.span>
        <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
          From Friction to Flow
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative"
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            variants={fadeUp}
            className="relative"
          >
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-mint/40 to-transparent" />
            )}
            <div className="group relative bg-deep-charcoal/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-mint/20">
              <div className="w-14 h-14 rounded-2xl bg-mint/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-mint/20 transition-colors">
                <step.icon className="w-6 h-6 text-mint" />
              </div>
              <span className="text-xs text-mint/60 font-mono mb-1 block">{step.number}</span>
              <h3 className="font-display text-xl font-bold text-white mb-1">{step.title}</h3>
              <p className="text-sm text-white/50 mb-3">{step.description}</p>
              <p className="text-xs text-white/40 leading-relaxed">{step.details}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
