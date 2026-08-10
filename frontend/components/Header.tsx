'use client'

import { Menu, X, Lock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isApiConnected, setIsApiConnected] = useState(false)

  useEffect(() => {
    const checkApi = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/health`,
          { method: 'GET' }
        )
        setIsApiConnected(response.ok)
      } catch (error) {
        setIsApiConnected(false)
      }
    }
    checkApi()
  }, [])

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-primary">FL-Crypto</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-primary transition">Features</a>
          <a href="#how-it-works" className="text-slate-600 hover:text-primary transition">How It Works</a>
          <a href="#benefits" className="text-slate-600 hover:text-primary transition">Benefits</a>
          <a href="#contact" className="text-slate-600 hover:text-primary transition">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isApiConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-xs font-semibold text-slate-600">
              {isApiConnected ? 'API Connected' : 'API Offline'}
            </span>
          </div>
          <button className="btn-ghost">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-slate-600 hover:text-primary">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-primary">How It Works</a>
            <a href="#benefits" className="text-slate-600 hover:text-primary">Benefits</a>
            <a href="#contact" className="text-slate-600 hover:text-primary">Contact</a>
            <div className="flex gap-2 pt-4">
              <button className="btn-ghost flex-1">Sign In</button>
              <button className="btn-primary flex-1">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
