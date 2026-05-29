import type { Metadata } from 'next'
import { Search, AlertTriangle, ShieldX, Mail } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Explore career opportunities with SecCon Group. All legitimate roles are posted through seccongroup.com/careers. We never charge fees or use personal email accounts for recruitment.',
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join a team that operates with discipline, precision, and an unwavering commitment to mission."
        image="/images/careers-hero.jpg"
        imagePosition="center"
      />

      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Job search — main column */}
            <div className="lg:col-span-2">
              <div className="w-10 h-0.5 bg-accent-blue mb-5" />
              <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-6">
                Job Search
              </h2>

              {/* Empty state */}
              <div className="bg-bg-surface border border-border-subtle rounded-lg p-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-accent-blue/10 flex items-center justify-center mb-5">
                  <Search size={24} className="text-accent-blue" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary uppercase tracking-wide mb-3">
                  Future Roles Will Be Posted Here
                </h3>
                <p className="text-text-secondary text-sm max-w-md leading-relaxed">
                  SecCon Group is actively building its talent pipeline. Qualified candidates in
                  security, law enforcement, and military specialties are encouraged to check back
                  as contract opportunities develop.
                </p>
              </div>

              {/* Available roles notice */}
              <div className="mt-8 bg-bg-surface border border-accent-blue/30 rounded-lg p-6">
                <h3 className="font-heading text-sm font-semibold text-accent-blue uppercase tracking-widest mb-3">
                  Available Roles — Notice
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Some candidates from a prior selection pool have been contacted with contingent
                  offers of employment. Please refrain from submitting unsolicited resumes and
                  cover letters unless specifically requested. Future employment opportunities will
                  be posted here as they become available.
                </p>
                <p className="text-text-secondary text-sm mt-3">
                  Thank you in advance for your understanding and cooperation.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="w-10 h-0.5 bg-accent-blue mb-5" />
              <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-6">
                What We Look For
              </h2>
              <ul className="space-y-3 text-text-secondary text-sm mb-8">
                {[
                  'Military, Executive Protection or Law Enforcement background',
                  'K9 certification',
                  'EMT, AEMT, or Paramedic certification',
                  'DDM certification',
                  'Firearms Instructor certification',
                  'Law Enforcement training certification',
                  'Active or eligibility to acquire federal security clearance',
                  'International deployment experience',
                  'Ability to operate in austere environments',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Mail size={14} className="text-accent-blue shrink-0" />
                <span>Inquiries: <a href="mailto:recruiter@seccongroup.com" className="text-accent-blue hover:underline">recruiter@seccongroup.com</a></span>
              </div>
            </div>
          </div>

          {/* Fraud warning */}
          <div className="mt-14 bg-bg-surface border border-amber-700/40 rounded-lg p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-full bg-amber-700/20 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle size={20} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-amber-400 uppercase tracking-wide">
                  Fraud Warning
                </h3>
                <p className="text-text-secondary text-sm mt-1">
                  SecCon Group has been made aware of fraudulent job offers circulating under our name.
                  Please review the following before engaging with any recruiter.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: ShieldX,
                  text: 'We never charge fees or request payments from candidates at any stage of the hiring process.',
                },
                {
                  icon: Mail,
                  text: 'Recruiters will always contact you from a @seccongroup.com email address. We do not use Gmail, Yahoo, or any other personal email services.',
                },
                {
                  icon: AlertTriangle,
                  text: 'If you receive correspondence from a private email address, do not respond or click on any links.',
                },
                {
                  icon: ShieldX,
                  text: 'All legitimate roles are posted through seccongroup.com/careers. Any other source should be treated as suspicious.',
                },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={16} className="text-amber-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <p className="text-text-secondary text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
