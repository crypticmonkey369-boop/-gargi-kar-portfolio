import { motion } from 'framer-motion'
import { Code2, Eye, Zap, Clock } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const cards = [
  {
    id: 1,
    size: 'lg',
    icon: Code2,
    title: 'Core Orchestration',
    description: 'Enterprise-grade workflow automation powered by n8n and Claude Code. Self-healing pipelines that adapt to changing conditions.',
    tags: ['n8n', 'Claude Code'],
    gradient: 'from-mint/10 via-transparent to-transparent',
  },
  {
    id: 2,
    size: 'md',
    icon: Eye,
    title: 'Vision & Voice',
    description: 'Multimodal AI agents leveraging Runway for visual generation and TurboScribe for transcription intelligence.',
    tags: ['Runway AI', 'TurboScribe'],
    gradient: 'from-mint/5 via-transparent to-transparent',
  },
  {
    id: 3,
    size: 'sm',
    icon: Zap,
    title: '90%',
    subtitle: 'Admin Reduction',
    description: 'Operational overhead slashed by automating repetitive workflows and data pipelines.',
    stat: true,
  },
  {
    id: 4,
    size: 'sm',
    icon: Clock,
    title: '24/7',
    subtitle: 'Agent Uptime',
    description: 'Round-the-clock autonomous agents monitoring and optimizing your business processes.',
    stat: true,
  },
]

function Card({ card }) {
  if (card.stat) {
    return (
      <motion.div
        variants={fadeUp}
        className="group relative bg-deep-charcoal/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-mint/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <card.icon className="w-6 h-6 text-mint mb-4 relative z-10" />
        <span className="font-display text-3xl sm:text-4xl font-bold text-white relative z-10">{card.title}</span>
        <span className="text-sm text-white/50 mt-1 relative z-10">{card.subtitle}</span>
        <p className="text-xs sm:text-sm text-white/40 mt-3 leading-relaxed relative z-10">{card.description}</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={fadeUp}
      className="group relative bg-deep-charcoal/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-mint/20"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center mb-5">
          <card.icon className="w-5 h-5 text-mint" />
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">{card.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-6">{card.description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full bg-mint/10 text-mint border border-mint/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function BentoGrid() {
  return (
    <section id="stack" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mb-12"
      >
        <motion.span variants={fadeUp} className="text-mint font-semibold text-sm tracking-widest uppercase">
          The Stack
        </motion.span>
        <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
          Tools & Technology
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="md:col-span-2 md:row-span-1">
          <Card card={cards[0]} index={0} />
        </div>
        <div className="md:col-span-2 md:row-span-1">
          <Card card={cards[1]} index={1} />
        </div>
        <div className="md:col-span-1">
          <Card card={cards[2]} index={2} />
        </div>
        <div className="md:col-span-1">
          <Card card={cards[3]} index={3} />
        </div>
      </motion.div>
    </section>
  )
}
