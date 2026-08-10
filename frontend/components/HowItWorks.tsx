'use client'

import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Initialize Model',
    description: 'Create or import your machine learning model. Define training parameters and objectives.',
  },
  {
    number: '02',
    title: 'Distribute to Clients',
    description: 'Model is securely distributed to participating clients for federated training.',
  },
  {
    number: '03',
    title: 'Local Training',
    description: 'Each client trains the model locally on their data. Raw data never leaves the device.',
  },
  {
    number: '04',
    title: 'Cryptographic Verification',
    description: 'Model updates are signed and verified using BLS signatures and homomorphic encryption.',
  },
  {
    number: '05',
    title: 'Aggregate Updates',
    description: 'Verified updates are aggregated using FedAvg or custom aggregation methods.',
  },
  {
    number: '06',
    title: 'Deploy Model',
    description: 'Trained model is deployed and ready for inference. Repeat for continuous learning.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How FL-Crypto Works
          </h2>
          <p className="text-xl text-slate-600">
            A seamless workflow designed for distributed machine learning at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-all h-full">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
