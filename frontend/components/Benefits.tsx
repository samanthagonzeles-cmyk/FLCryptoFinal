'use client'

import { CheckCircle, Award, BarChart3 } from 'lucide-react'

const benefits = [
  {
    category: 'Security & Privacy',
    items: [
      'End-to-end encryption for all communications',
      'Homomorphic encryption for secure aggregation',
      'BLS signatures for model verification',
      'GDPR and HIPAA compliant architecture',
    ],
  },
  {
    category: 'Performance & Scalability',
    items: [
      'Handle 10,000+ simultaneous clients',
      '99.9% uptime guarantee',
      'Sub-100ms latency for model distribution',
      'Auto-scaling infrastructure',
    ],
  },
  {
    category: 'Developer Experience',
    items: [
      'Simple Python and REST APIs',
      'Comprehensive documentation and examples',
      'Docker containers for easy deployment',
      'Real-time monitoring dashboards',
    ],
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose FL-Crypto?
          </h2>
          <p className="text-xl text-slate-600">
            Built for enterprises that value privacy, security, and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-6">
                {index === 0 && <Award className="w-6 h-6 text-primary" />}
                {index === 1 && <BarChart3 className="w-6 h-6 text-primary" />}
                {index === 2 && <CheckCircle className="w-6 h-6 text-primary" />}
                <h3 className="text-xl font-semibold text-slate-900">
                  {benefit.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
