'use client'

import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Next-Generation FL Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Secure Federated Learning at Scale
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Combine the power of distributed machine learning with cryptographic verification. 
            Train models collaboratively while maintaining complete data privacy and security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary">Watch Demo</button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <p className="text-sm text-slate-600">Uptime SLA</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10k+</div>
              <p className="text-sm text-slate-600">Active Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">256-bit</div>
              <p className="text-sm text-slate-600">Encryption</p>
            </div>
          </div>
        </div>

        <div>
          <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-white shadow-2xl">
            <div className="space-y-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-sm font-semibold mb-2">Federated Learning</div>
                <div className="h-2 bg-white/20 rounded-full"></div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-sm font-semibold mb-2">Cryptographic Verification</div>
                <div className="h-2 bg-white/20 rounded-full"></div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-sm font-semibold mb-2">Distributed Training</div>
                <div className="h-2 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
