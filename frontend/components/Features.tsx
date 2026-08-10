'use client'

import { Lock, Zap, Shield, TrendingUp, Database, Cpu } from 'lucide-react'

const features = [
  {
    icon: Lock,
    title: 'Privacy-First Design',
    description: 'Your data never leaves your servers. Federated learning keeps sensitive information local.',
  },
  {
    icon: Shield,
    title: 'Cryptographic Verification',
    description: 'BLS signatures and homomorphic encryption ensure model integrity and prevent tampering.',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Training',
    description: 'Distributed training reduces time-to-accuracy by 10x compared to traditional approaches.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Analytics',
    description: 'Monitor training progress, model performance, and client contributions in real-time.',
  },
  {
    icon: Database,
    title: 'Scalable Architecture',
    description: 'Built on Supabase and designed to handle thousands of concurrent clients.',
  },
  {
    icon: Cpu,
    title: 'Flexible Model Types',
    description: 'Support for CNNs, RNNs, transformers, and custom architectures with zero friction.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to build, train, and deploy federated learning models securely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
