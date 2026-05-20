import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AffiliAI Autopilot — AI-Powered Affiliate System | Hafiz Naveed Uddin',
  description:
    'An end-to-end AI-automated affiliate marketing system built by Agentic AI Developer Hafiz Naveed Uddin. 14 factory-direct products. Targeting USA, UK, Germany, Korea, Canada.',
};

const stats = [
  { value: '14', label: 'Products Curated' },
  { value: '2', label: 'Live Websites' },
  { value: '17', label: 'Blog Posts' },
  { value: '2', label: 'YouTube Videos' },
  { value: '6', label: 'Global Markets' },
  { value: '48h', label: 'Built In' },
];

const techStack = [
  { cat: 'Frontend', items: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel'] },
  { cat: 'AI Tools', items: ['Claude AI', 'NotebookLM', 'OpenAI SDK', 'Qdrant RAG'] },
  { cat: 'Backend', items: ['Python', 'FastAPI', 'GitHub Actions', 'CI/CD'] },
  { cat: 'Marketing', items: ['YouTube', 'Pinterest', 'LinkedIn', 'Blogger', 'Reddit'] },
];

const products = [
  { icon: '💆', name: 'Neck & Shoulder Massager', price: '$20-$45', problem: '3 years of neck pain eliminated' },
  { icon: '✨', name: 'LED Light Therapy Face Mask', price: '$15-$45', problem: '$300 dermatology session → $35' },
  { icon: '🦺', name: 'Smart Posture Corrector', price: '$5-$20', problem: '$80/week physio → $12 device' },
  { icon: '💪', name: 'Professional Massage Gun', price: '$20-$60', problem: '$400 Theragun rival for $40' },
  { icon: '⌚', name: 'Smart Fitness Band', price: '$10-$30', problem: '188 body stats — complete health track' },
  { icon: '🧊', name: 'Ice Roller & Gua Sha Set', price: '$5-$15', problem: 'Korean glass skin — 5 min ritual' },
  { icon: '🌈', name: 'RGB Smart LED Strip Lights', price: '$8-$25', problem: 'Room transformed in 10 minutes' },
  { icon: '🌸', name: 'Bluetooth Aroma Diffuser', price: '$15-$45', problem: '5-star spa at home' },
  { icon: '♨️', name: 'Premium Insulated Tumbler', price: '$12-$35', problem: '$70 Stanley rival for $20' },
  { icon: '🎬', name: '4K Mini Portable Projector', price: '$35-$80', problem: '130-inch cinema screen for $60' },
  { icon: '💍', name: '18K Gold Chunky Jewelry Set', price: '$8-$28', problem: '$500 jewelry look for $14' },
  { icon: '🎁', name: "Father's Day Business Gift Set", price: '$8-$20', problem: 'Premium executive gift under $20' },
  { icon: '🎇', name: 'Patriotic String Lights', price: '$8-$22', problem: 'July 4th 250th anniversary decor' },
  { icon: '🎈', name: 'Patriotic Balloon Garland Kit', price: '$12-$28', problem: '132 balloons — magazine-worthy setup' },
];

const timeline = [
  { day: 'Hour 1-4', task: 'Product research using Claude AI — 14 products selected from 200+ analyzed' },
  { day: 'Hour 5-12', task: 'Next.js websites built and deployed on Vercel with full CI/CD pipeline' },
  { day: 'Hour 13-20', task: '17 SEO-optimized blog posts generated and published on Blogger' },
  { day: 'Hour 21-30', task: 'NotebookLM AI video system built — English + Urdu videos generated' },
  { day: 'Hour 31-38', task: 'Pinterest strategy deployed in 3 languages (English, Korean, German)' },
  { day: 'Hour 39-48', task: 'LinkedIn launch, YouTube upload, Reddit posts, analytics configured' },
];

export default function AffiliAIPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Back to portfolio */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
          style={{ background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.3)', color: '#67e8f9' }}>
          ← Portfolio
        </Link>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Background */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at top left, rgba(0,240,255,0.12) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(139,92,246,0.15) 0%, transparent 50%), #030712'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono mb-8"
            style={{ background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.2)', color: '#67e8f9' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            LIVE PROJECT — MAY 2026 — AGENTIC AI IN PRODUCTION
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'monospace' }}>
            <span style={{ background: 'linear-gradient(135deg, #00f0ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              AffiliAI
            </span>
            <br />
            <span style={{ color: '#f1f5f9' }}>Autopilot</span>
          </h1>

          <p className="text-xl md:text-2xl mb-4" style={{ color: '#94a3b8' }}>
            An end-to-end AI-automated affiliate marketing system
          </p>
          <p className="text-base mb-10" style={{ color: '#67e8f9' }}>
            Built in 48 hours · 0 team members · $0 budget · Targeting 6 global markets
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="https://aliexpress-toppicks.vercel.app" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all"
              style={{ background: 'linear-gradient(135deg, #00f0ff22, #7c3aed22)', border: '1px solid #00f0ff44', color: '#00f0ff' }}>
              🌐 Live Site
            </a>
            <a href="https://youtu.be/ZvJu6kWpQA0" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5' }}>
              📺 YouTube Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-xl text-center"
                style={{ background: 'rgba(0,240,255,0.05)', border: '1px solid rgba(0,240,255,0.1)' }}>
                <div className="text-2xl font-black mb-1" style={{ color: '#00f0ff', fontFamily: 'monospace' }}>{s.value}</div>
                <div className="text-xs" style={{ color: '#64748b' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="py-20 px-6" style={{ background: 'rgba(0,240,255,0.02)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono mb-3" style={{ color: '#00f0ff' }}>// SYSTEM OVERVIEW</p>
            <h2 className="text-4xl font-black mb-4">What is AffiliAI Autopilot?</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#94a3b8' }}>
              A fully automated affiliate marketing system that uses Agentic AI to research products,
              generate content, and distribute across 6 platforms — on autopilot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🤖', title: 'AI Research Engine', desc: 'Claude AI analyzes thousands of products to find 14 factory-direct items solving real problems — products retail brands charge 5x for.' },
              { icon: '⚡', title: 'Automated Content Pipeline', desc: 'NotebookLM generates AI videos with human voice. Python scripts auto-publish blog posts. GitHub Actions manages CI/CD deployment.' },
              { icon: '🌍', title: 'Multi-Platform Distribution', desc: 'YouTube, Pinterest (3 languages), LinkedIn, TikTok, Reddit, Blogger — content distributed automatically across 6 platforms to 6 global markets.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,240,255,0.1)' }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#e2e8f0' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono mb-3" style={{ color: '#7c3aed' }}>// TECH STACK</p>
            <h2 className="text-4xl font-black">Built With Production-Grade Tools</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((t) => (
              <div key={t.cat} className="p-5 rounded-xl"
                style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.15)' }}>
                <h3 className="text-xs font-mono font-bold mb-3" style={{ color: '#a78bfa' }}>{t.cat}</h3>
                {t.items.map((item) => (
                  <div key={item} className="text-sm py-1 px-2 mb-1 rounded"
                    style={{ background: 'rgba(255,255,255,0.03)', color: '#cbd5e1' }}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-6" style={{ background: 'rgba(0,240,255,0.02)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono mb-3" style={{ color: '#00f0ff' }}>// BUILD TIMELINE</p>
            <h2 className="text-4xl font-black">48 Hours. Start to Launch.</h2>
          </div>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-24 py-2 px-3 rounded-lg text-center text-xs font-mono font-bold"
                  style={{ background: 'rgba(0,240,255,0.1)', color: '#00f0ff', border: '1px solid rgba(0,240,255,0.2)' }}>
                  {t.day}
                </div>
                <div className="flex-1 py-2 px-4 rounded-lg text-sm"
                  style={{ background: 'rgba(255,255,255,0.03)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {t.task}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono mb-3" style={{ color: '#f43f5e' }}>// 14 CURATED PRODUCTS</p>
            <h2 className="text-4xl font-black">Factory-Direct. Life-Changing.</h2>
            <p className="mt-3" style={{ color: '#64748b' }}>Retail brands charge 5x. We bypass the middleman.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
              <div key={p.name} className="p-5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#e2e8f0' }}>{p.name}</div>
                    <div className="text-xs font-mono" style={{ color: '#00f0ff' }}>{p.price}</div>
                  </div>
                </div>
                <p className="text-xs" style={{ color: '#64748b' }}>{p.problem}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://aliexpress-toppicks.vercel.app" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all"
              style={{ background: 'linear-gradient(135deg, #00f0ff22, #7c3aed22)', border: '1px solid #00f0ff44', color: '#00f0ff' }}>
              Browse All 14 Products →
            </a>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 px-6" style={{ background: 'rgba(124,58,237,0.05)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono mb-3" style={{ color: '#7c3aed' }}>// WEEK 1 RESULTS</p>
            <h2 className="text-4xl font-black">Real Numbers. Day 1.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: '88+', label: 'LinkedIn Impressions', sub: 'Day 1' },
              { metric: '17', label: 'Blog Posts Live', sub: 'Published' },
              { metric: '2', label: 'YouTube Videos', sub: 'English + Urdu' },
              { metric: '3', label: 'Pinterest Languages', sub: 'EN + KR + DE' },
              { metric: '28', label: 'Profile Views', sub: 'LinkedIn 24hrs' },
              { metric: '6,052', label: 'LinkedIn Followers', sub: 'Existing audience' },
              { metric: '$0', label: 'Launch Budget', sub: 'All free tools' },
              { metric: '48h', label: 'Build Time', sub: 'Total' },
            ].map((r) => (
              <div key={r.metric} className="p-5 rounded-xl text-center"
                style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)' }}>
                <div className="text-3xl font-black mb-1" style={{ color: '#a78bfa', fontFamily: 'monospace' }}>{r.metric}</div>
                <div className="text-sm font-medium mb-1" style={{ color: '#e2e8f0' }}>{r.label}</div>
                <div className="text-xs" style={{ color: '#64748b' }}>{r.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{
        background: 'linear-gradient(135deg, rgba(0,240,255,0.05), rgba(124,58,237,0.08))'
      }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Want to See the Live System?</h2>
          <p className="text-lg mb-10" style={{ color: '#94a3b8' }}>
            Visit the live affiliate website, watch the YouTube demo, or explore the code on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://aliexpress-toppicks.vercel.app" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all"
              style={{ background: 'linear-gradient(135deg, #00f0ff, #7c3aed)', color: '#000' }}>
              🌐 Visit Live Site
            </a>
            <a href="https://youtu.be/ZvJu6kWpQA0" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all"
              style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5' }}>
              📺 Watch Demo
            </a>
            <Link href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
              💬 Hire Me
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
