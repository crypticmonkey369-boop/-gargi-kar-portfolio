import { useEffect } from 'react'
import Hero from '../components/Hero'
import BentoGrid from '../components/BentoGrid'
import Workflow from '../components/Workflow'
import ContactFooter from '../components/ContactFooter'

export default function Home() {
  useEffect(() => {
    if (window.location.hash === '#contact') {
      const el = document.getElementById('contact')
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [])

  return (
    <>
      <Hero />
      <BentoGrid />
      <Workflow />
      <ContactFooter />
    </>
  )
}
