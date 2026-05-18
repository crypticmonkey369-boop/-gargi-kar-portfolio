import { motion } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'
import CaseStudyCard from '../components/CaseStudyCard'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function CaseStudies() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mb-12"
      >
        <motion.span variants={fadeUp} className="text-mint font-semibold text-sm tracking-widest uppercase">
          Portfolio
        </motion.span>
        <motion.h1 variants={fadeUp} className="font-display text-3xl sm:text-5xl font-bold text-white mt-2">
          Case Studies
        </motion.h1>
        <motion.p variants={fadeUp} className="text-sm sm:text-base text-white/50 mt-3 max-w-xl">
          Real-world AI automation systems that delivered measurable business impact.
        </motion.p>
      </motion.div>

      <div className="space-y-5">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} index={i} />
        ))}
      </div>
    </section>
  )
}
