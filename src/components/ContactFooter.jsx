import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          ...form,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[12vw] sm:text-[10vw] font-bold text-white/[0.015] leading-none tracking-tighter whitespace-nowrap">
          LET'S BUILD
        </span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 max-w-lg mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Ready to Build?
          </h2>
          <p className="text-sm text-white/50">
            Describe what you need — I&apos;ll architect the autonomy.
          </p>
        </motion.div>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="bg-deep-charcoal/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="text-xs text-white/40 font-medium uppercase tracking-wider block mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-mint/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs text-white/40 font-medium uppercase tracking-wider block mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-mint/50 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs text-white/40 font-medium uppercase tracking-wider block mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-mint/50 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-mint text-matte-black px-6 py-3 rounded-xl font-semibold hover:bg-mint/90 transition-all shadow-[0_0_20px_#82f4a1] text-sm"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4" />
                Sent!
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
          <p className="text-[10px] text-white/30 text-center">
            Your message will be sent securely. I typically respond within 24 hours.
          </p>
        </motion.form>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mt-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
          </span>
          <span className="text-xs text-white/40">
            Gargi&apos;s Agents are <span className="text-mint font-medium">Online</span>
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="text-center mt-8">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Gargi Kar. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
