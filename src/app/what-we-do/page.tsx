import type { Metadata } from 'next'
import {
  Dog,
  ShieldCheck,
  GraduationCap,
  Crosshair,
  Target,
  HeartPulse,
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'What We Do',
  description:
    'SecCon Group provides canine unit training, physical security, law enforcement advisory, precision marksman training, weapons qualification, and combat medical services for international deployment.',
}

const services = [
  {
    Icon: Dog,
    title: 'Canine Unit Development & Handler Training',
    description:
      'Comprehensive K9 program development covering explosive detection, narcotic detection, and patrol operations. Full handler qualification, certification, and sustainment training for guard force integration.',
  },
  {
    Icon: ShieldCheck,
    title: 'Physical Security Assessment & Personnel Deployment',
    description:
      'Vulnerability assessments of government facilities, embassies, and critical infrastructure. Rapid deployment of physical security specialists for short-term surge or long-term post requirements.',
  },
  {
    Icon: GraduationCap,
    title: 'Law Enforcement Professional Development & Security Sector Reform',
    description:
      'Structured mentorship, advising, and training programs for partner nation law enforcement and security forces. Curriculum development aligned with U.S. doctrine and international standards.',
  },
  {
    Icon: Crosshair,
    title: 'Precision Marksman & Counter-Sniper Training',
    description:
      'Advanced marksmanship qualification for designated defense marksmen at the squad and platoon level. Counter-sniper awareness, concealed observation techniques, and long-range engagement training.',
  },
  {
    Icon: Target,
    title: 'Weapons Systems & Marksmanship Qualification Training',
    description:
      'Firearms instructor-led qualification programs for pistol, rifle, and crew-served weapons. Range design, evaluation standards, and sustainment training for guard force and security personnel.',
  },
  {
    Icon: HeartPulse,
    title: 'Combat Medical (TCCC) Training & Deployable Medical Personnel',
    description:
      'Tactical Combat Casualty Care (TCCC) instruction for forward-deployed personnel. Deployable medics available for international assignment in austere and high-risk environments.',
  },
]

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        title="What We Do"
        subtitle="Specialized security services, mentoring, and training programs built by operators, designed for mission environments."
        image="/images/what-we-do-hero.png"
        imagePosition="top-left"
      />

      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-16">
            <p className="text-text-secondary leading-relaxed text-base">
              SecCon coordinates customized training for guard force security with K9s, physical
              security specialists, law enforcement training, mentoring, advising, designated
              defense marksmen, firearms instructors, and medics for international deployment.
              With over a decade of experience spanning a broad range of security, training, and
              risk management services, we integrate global project management and logistics to
              help you succeed in a fast-paced, ever-changing environment.
            </p>
            <p className="text-text-secondary leading-relaxed text-base mt-4">
              SecCon brings the best-in-class knowledge, resources, capabilities, and people.
              Our professionalism, integrity, and front-sight focus will help our clients achieve
              their goals and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} Icon={s.Icon} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading text-sm text-text-secondary uppercase tracking-widest mb-3">
            All services available for
          </p>
          <h2 className="font-heading text-xl sm:text-2xl font-semibold text-text-primary uppercase tracking-wide mb-2">
            Domestic Training · International Deployment · Surge & Long-Term Contracts
          </h2>
          <p className="text-text-secondary text-sm mt-4 max-w-xl mx-auto">
            Contact us to discuss scope, timeline, and how SecCon can be structured into
            your prime contract or task order.
          </p>
        </div>
      </section>
    </>
  )
}
