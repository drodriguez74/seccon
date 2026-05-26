import type { Metadata } from 'next'
import {
  Globe,
  ShieldAlert,
  Scale,
  Zap,
  BarChart2,
  AlertTriangle,
} from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Who We Serve',
  description:
    'SecCon Group delivers critical mission support to U.S. government agencies, DoD, defense sectors, and intelligence communities worldwide.',
}

const capabilities = [
  {
    Icon: Globe,
    title: 'Global Logistics',
    description: 'Rapid supply chain deployment and personnel mobilization across domestic and international theaters.',
  },
  {
    Icon: ShieldAlert,
    title: 'Tactical Security',
    description: 'Risk mitigation in hostile zones — physical security, force protection, and threat assessment.',
  },
  {
    Icon: Scale,
    title: 'Law Enforcement',
    description: 'Training, mentoring, and advising for partner nation law enforcement and security forces.',
  },
  {
    Icon: Zap,
    title: 'Mission Training',
    description: 'Advanced tactical readiness programs tailored to contract requirements and operational environments.',
  },
  {
    Icon: BarChart2,
    title: 'Intelligence Support',
    description: 'Real-time threat analysis, data analytics, and situational awareness for high-stakes environments.',
  },
  {
    Icon: AlertTriangle,
    title: 'Contingency Operations',
    description: 'Crisis response, disaster recovery frameworks, and expeditionary support in austere conditions.',
  },
]

const trustPillars = [
  {
    label: 'Readiness',
    body: 'SecCon will prove its readiness through combined security and law enforcement service. Our personnel are trained, vetted, and deployable.',
  },
  {
    label: 'Strict Compliance',
    body: 'Uncompromising adherence to ITAR, FAR, DFARS, NISPOM, Article 2 of the UCMJ, MEJA, and all applicable federal regulations. Compliance is not a checkbox — it is a core operational standard.',
  },
  {
    label: 'Global Footprint',
    body: 'Operational capability in remote and austere regions. We have experience deploying personnel across multiple continents in high-threat environments.',
  },
  {
    label: 'Vetted Personnel',
    body: 'Specialized teams holding active federal security clearances. Every individual is background-screened, reference-checked, and qualification-verified.',
  },
]

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        title="Who We Serve"
        subtitle="Delivering critical mission support to U.S. Government agencies, defense sectors, and intelligence communities worldwide."
        image="/images/mentoring.png"
      />

      {/* Intro */}
      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-text-secondary leading-relaxed text-base">
              SecCon Group delivers critical mission support to United States government agencies,
              defense sectors, and intelligence communities worldwide. We bridge operational gaps
              with elite logistics, tactical security, and specialized advisory services. Our team
              safeguards national security interests in high-stakes environments.
            </p>
          </div>

          {/* Capability grid */}
          <div className="w-10 h-0.5 bg-accent-blue mb-5" />
          <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-8">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {capabilities.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-bg-surface border border-border-subtle rounded-lg p-6 hover:border-accent-blue/40 transition-colors duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded bg-accent-blue/10 text-accent-blue mb-4">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">
                  {title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Why trust us */}
          <div className="w-10 h-0.5 bg-accent-blue mb-5" />
          <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-8">
            Why Government Partners Can Trust Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {trustPillars.map(({ label, body }) => (
              <div key={label} className="flex gap-5 items-start">
                <div className="w-1 self-stretch bg-accent-blue rounded-full shrink-0" />
                <div>
                  <h3 className="font-heading text-sm font-semibold text-text-primary uppercase tracking-widest mb-2">
                    {label}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Commitment statement */}
          <div className="border border-border-subtle rounded-lg p-8 bg-bg-surface">
            <div className="w-10 h-0.5 bg-accent-blue mb-5" />
            <h3 className="font-heading text-lg font-semibold text-text-primary uppercase tracking-wide mb-4">
              Our Commitment
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-3xl">
              We operate with absolute discretion, integrity, and precision. Every deployment
              aligns with U.S. foreign policy objectives and international legal standards. We
              protect personnel, assets, secure infrastructure, and ensure mission success when failure is
              not an option.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="py-10 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-heading uppercase tracking-widest text-text-secondary">
            <span className="text-accent-silver">ITAR Compliant</span>
            <span className="text-border-subtle select-none">|</span>
            <span className="text-accent-silver">FAR / DFARS Compliant</span>
            <span className="text-border-subtle select-none">|</span>
            <span className="text-accent-silver">Active SAM.gov Registration</span>
            <span className="text-border-subtle select-none">|</span>
            <span className="text-accent-silver">Cleared Personnel Available</span>
            <span className="text-border-subtle select-none">|</span>
            <span className="text-accent-silver">SDVOSB · MBE Certified</span>
          </div>
        </div>
      </section>
    </>
  )
}
