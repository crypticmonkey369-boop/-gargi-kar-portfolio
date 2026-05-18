import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Clock, DollarSign, TrendingUp, Quote } from 'lucide-react'

export default function CaseStudyCard({ study, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div
        className={`rounded-3xl border border-white/5 bg-deep-charcoal/60 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-mint/20 ${
          expanded ? 'border-mint/30' : ''
        }`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4"
          aria-expanded={expanded}
        >
          <div className="flex items-start gap-4 sm:gap-6 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-mint/10 flex items-center justify-center shrink-0 mt-1">
              <study.icon className="w-5 h-5 sm:w-6 sm:h-6 text-mint" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="font-display text-lg sm:text-xl font-bold text-white">{study.title}</span>
                <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-mint/10 text-mint border border-mint/20">
                  {study.tags[0]}
                </span>
              </div>
              <p className="text-sm text-white/50">{study.subtitle}</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-xs text-white/40">
                  <Clock className="w-3 h-3 text-mint" />
                  {study.impact.time}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/40">
                  <DollarSign className="w-3 h-3 text-mint" />
                  {study.impact.money}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/40">
                  <TrendingUp className="w-3 h-3 text-mint" />
                  {study.impact.metric}
                </div>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0"
          >
            <ChevronDown className="w-4 h-4 text-white/60" />
          </motion.div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-8 pb-8 border-t border-white/5 pt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-mint tracking-widest uppercase mb-2">The Business Friction</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{study.headache}</p>
                </div>

                <div className="bg-mint/5 border-l-2 border-mint rounded-r-xl p-4 sm:p-5">
                  <Quote className="w-4 h-4 text-mint mb-2" />
                  <p className="text-sm sm:text-base text-white/80 font-medium italic leading-relaxed">{study.insight}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-mint tracking-widest uppercase mb-2">The Strategy</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{study.strategy}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-mint tracking-widest uppercase mb-2">The Architecture</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{study.architecture}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-mint tracking-widest uppercase mb-3">The Impact</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          {study.metrics.headers.map((h) => (
                            <th key={h} className="text-left py-3 px-2 first:pl-0 last:pr-0 text-white/40 font-medium">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {study.metrics.rows.map((row, i) => (
                          <tr key={i} className="border-b border-white/5 last:border-0">
                            <td className="py-3 px-2 first:pl-0 text-white/70 font-medium">{row.metric}</td>
                            <td className="py-3 px-2 text-white/40">{row.before}</td>
                            <td className="py-3 px-2 last:pr-0 text-mint font-semibold">{row.after}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-mint/10 to-transparent rounded-xl p-4 sm:p-5">
                  <Quote className="w-3 h-3 text-mint mb-1" />
                  <p className="text-sm text-white/70 italic leading-relaxed">&ldquo;{study.verdict}&rdquo;</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
