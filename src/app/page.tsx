import Link from 'next/link'
import Image from 'next/image'
import { Shield, BookOpen, Users } from 'lucide-react'
import ValuesBanner from '@/components/ValuesBanner'
import Badge from '@/components/Badge'
import HeroEarthClient from '@/components/HeroEarthClient'

const serviceCards = [
  {
    Icon: BookOpen,
    title: 'Training',
    description:
      'Guard force security with K9 units, close quarters battle (CQB), protective security specialist, tactical driving, designated defense marksman, firearms qualification, and combat medical (TCCC) training programs.',
    href: '/what-we-do',
    image: '/images/training.png',
  },
  {
    Icon: Shield,
    title: 'Protective Security',
    description:
      'Physical security protecting personnel, assets, government facilities and operations worldwide.',
    href: '/what-we-do',
    image: '/images/protection.jpg',
  },
  {
    Icon: Users,
    title: 'Mentor & Advising',
    description:
      'Law enforcement professional development through mentorship and advisor programs for partner nation forces. These programs give law enforcement officers the tools necessary to be more effective in the field.',
    href: '/what-we-do',
    image: '/images/mentoring.png',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero — always dark/space regardless of theme */}
      <section className="hero-section relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Three.js Earth — full background */}
        <div className="absolute inset-0 z-0">
          <HeroEarthClient />
        </div>

        {/* Gradient overlay — fades Earth into dark base */}
        <div className="hero-gradient absolute inset-0 z-10 pointer-events-none" />

        {/* Hero content — always white text, hero is always dark */}
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="flex justify-center gap-3 mb-6">
            <div className="border border-[#B8960C] text-[#B8960C] rounded px-3 py-2 text-center min-w-[90px]">
              <p className="font-heading font-semibold text-sm uppercase tracking-widest">SDVOSB</p>
            </div>
            <div className="border border-[#B8960C] text-[#B8960C] rounded px-3 py-2 text-center min-w-[90px]">
              <p className="font-heading font-semibold text-sm uppercase tracking-widest">MBE</p>
            </div>
          </div>
          <h1 className="font-heading font-semibold text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wide leading-tight mb-4">
            Trusted Partner.<br />
            <span className="text-[#4A9ECC]">Critical Mission.</span>
          </h1>
          <p className="text-[#8899AA] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Delivering integrated security solutions, training, and mission support to U.S. Government agencies and defense sectors worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/what-we-do"
              className="inline-block bg-[#4A9ECC] text-white font-heading font-medium uppercase tracking-widest text-sm px-8 py-3 rounded hover:bg-[#4A9ECC]/80 transition-colors"
            >
              Our Capabilities
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-[#C0C8D0] text-[#C0C8D0] font-heading font-medium uppercase tracking-widest text-sm px-8 py-3 rounded hover:border-white hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Bridge: fades hero dark into page background */}
      <div className="hero-bridge" aria-hidden="true" />

      {/* Values strip */}
      <ValuesBanner />

      {/* Service preview */}
      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="w-10 h-0.5 bg-accent-blue mx-auto mb-5" />
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-text-primary uppercase tracking-wide mb-3">
              Core Services
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Specialized capabilities built on 20+ years of operational experience in security, training, and risk management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map(({ Icon, title, description, href, image }) => (
              <Link
                key={title}
                href={href}
                className="bg-bg-surface border border-border-subtle rounded-lg overflow-hidden hover:border-accent-blue/40 transition-colors duration-200 group"
              >
                <div className="relative h-48 overflow-hidden bg-[#080C14]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 w-8 h-8 flex items-center justify-center rounded bg-accent-blue/20 text-accent-blue backdrop-blur-sm group-hover:bg-accent-blue/30 transition-colors">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-base font-semibold text-text-primary mb-2 uppercase tracking-wide">
                    {title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve CTA */}
      <section className="py-16 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary text-xs font-heading uppercase tracking-widest mb-4">
            Serving
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text-primary uppercase tracking-wide mb-6">
            U.S. Government Agencies · Defense Sectors · Intelligence Communities
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-text-secondary text-sm font-heading uppercase tracking-wider mb-8">
            <span>ITAR Compliant</span>
            <span className="text-border-subtle">|</span>
            <span>FAR / DFARS</span>
            <span className="text-border-subtle">|</span>
            <span>Active SAM.gov</span>
            <span className="text-border-subtle">|</span>
            <span>Cleared Personnel</span>
          </div>
          <Link
            href="/who-we-serve"
            className="inline-block border border-accent-blue text-accent-blue font-heading font-medium uppercase tracking-widest text-sm px-8 py-3 rounded hover:bg-accent-blue hover:text-white transition-colors"
          >
            Who We Serve
          </Link>
        </div>
      </section>

      {/* SDVOSB / MBE block */}
      <section className="py-16 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex gap-4 shrink-0">
              <Badge label="SDVOSB" sublabel="SBA Certified" />
              <Badge label="MBE" sublabel="Certified" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-text-primary uppercase tracking-wide mb-2">
                Service-Disabled Veteran Owned · Minority Business Enterprise
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                SecCon Group is a proud SDVOSB and MBE, bringing mission-critical experience from military service to the commercial and government contracting space. Our leadership carries the discipline, precision, and accountability that comes from service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
