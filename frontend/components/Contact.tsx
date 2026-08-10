'use client'

import { Mail, Linkedin, Github } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Get Started Today
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Join leading organizations using FL-Crypto for secure federated learning.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-primary"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-primary"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-primary"
              />
              <textarea
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-primary resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="btn-primary w-full disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm font-semibold">
                  ✓ Message sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm font-semibold">
                  ✗ Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-white/80">hello@fl-crypto.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Linkedin className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold mb-1">LinkedIn</p>
                  <p className="text-white/80">@fl-crypto</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Github className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold mb-1">GitHub</p>
                  <p className="text-white/80">github.com/wmzb1211/FLCryptoFinal</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-sm text-white/70">
                Response time: Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
