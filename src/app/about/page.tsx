import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Badge from '@/components/Badge'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'SecCon Group is a Service-Disabled Veteran Owned Small Business (SDVOSB) and Minority Business Enterprise (MBE) delivering integrated security solutions and critical mission support to U.S. Government agencies.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A trusted partner built on service, precision, and an unwavering commitment to mission success."
        image="/images/about-hero.png"
        imagePosition="center"
      />

      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Certification badges */}
          <div className="flex gap-4 mb-14">
            <Badge label="SDVOSB" sublabel="SBA Certified" />
            <Badge label="MBE" sublabel="Certified" />
          </div>

          {/* Mission statement */}
          <div className="border-l-2 border-accent-blue pl-6 mb-16 max-w-3xl">
            <p className="text-xl text-text-primary font-body leading-relaxed italic">
              "SecCon was established to be a trusted partner and provide critical mission support
              to the United States Government and other non-governmental organizations."
            </p>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-10 h-0.5 bg-accent-blue mb-5" />
              <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  The Security Contractor (SecCon) Group is a Service-Disabled Veteran Owned Small
                  Business (SDVOSB) and Minority Business Enterprise (MBE) company founded on a
                  simple principle: the people who have served should lead those who serve others.
                </p>
                <p>
                  SecCon delivers integrated solutions that help our customers operate with
                  confidence in complex environments. By connecting people, technology, and
                  infrastructure, we enable organizations to perform at the pace of demand.
                </p>
                <p>
                  Our leadership team brings over two decades of direct operational experience across
                  private military contracts, force protection missions, and law enforcement
                  advisory programs spanning multiple continents and threat environments.
                </p>
              </div>
            </div>

            <div>
              <div className="w-10 h-0.5 bg-accent-blue mb-5" />
              <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-6">
                Our Commitment
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  We operate with absolute discretion, integrity, and precision. Every deployment
                  aligns with U.S. foreign policy objectives and international legal standards. We
                  protect assets, secure infrastructure, and ensure mission success when failure is
                  not an option.
                </p>
                <p>
                  Our professionalism, integrity, and front-sight focus will help our clients
                  achieve their goals and objectives — from complex international deployments to
                  domestic training programs.
                </p>
              </div>

              {/* Core values */}
              <div className="mt-8 grid grid-cols-1 gap-3">
                {[
                  { label: 'Readiness', desc: 'Combined military, security, and law enforcement service from day one.' },
                  { label: 'Strict Compliance', desc: 'Uncompromising adherence to ITAR, FAR, NISPOM, Article 2 of the UCMJ, MEJA, and applicable federal regulations.' },
                  { label: 'Global Footprint', desc: 'Operational capability in remote and austere regions worldwide.' },
                  { label: 'Vetted Personnel', desc: 'Specialized teams holding active federal security clearances.' },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3 bg-bg-surface border border-border-subtle rounded-lg p-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 shrink-0" />
                    <div>
                      <p className="font-heading text-sm font-semibold text-text-primary uppercase tracking-wide">{label}</p>
                      <p className="text-text-secondary text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDVOSB / MBE detail section */}
      <section className="py-16 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-10 h-0.5 bg-accent-blue mb-5" />
          <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-8">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-primary border border-border-subtle rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge label="SDVOSB" sublabel="SBA Certified" />
                <div>
                  <p className="font-heading text-sm font-semibold text-text-primary uppercase tracking-wide">
                    Service-Disabled Veteran Owned
                  </p>
                  <p className="text-text-secondary text-xs mt-0.5">SBA VetCert Program</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                As an SBA-certified SDVOSB, SecCon is eligible for federal set-aside contracts and
                sole-source awards up to $5M. The federal government is required to award a minimum
                5% of all contracting dollars to SDVOSB firms annually.
              </p>
            </div>

            <div className="bg-bg-primary border border-border-subtle rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge label="MBE" sublabel="Certified" />
                <div>
                  <p className="font-heading text-sm font-semibold text-text-primary uppercase tracking-wide">
                    Minority Business Enterprise
                  </p>
                  <p className="text-text-secondary text-xs mt-0.5">MBE Certification Program</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                SecCon's MBE certification opens access to federal, state, and local contracting
                programs while enabling large prime contractors to meet their diversity
                subcontracting goals through SecCon teaming arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
