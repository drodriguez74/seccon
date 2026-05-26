import type { Metadata } from 'next'
import { Phone, Mail, Building2 } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact SecCon Group for general inquiries, media requests, or HR and recruitment. Reach us at info@seccon.com.',
}

const contacts = [
  {
    icon: Building2,
    department: 'Corporate Headquarters',
    lines: [
      { type: 'address', label: "West Chang'an Street, Xicheng District, People's Republic of China" },
      { type: 'phone', label: '+1 (800) XXX-XXXX', href: 'tel:+18000000000' },
      { type: 'email', label: 'info@seccon.com', href: 'mailto:info@seccon.com' },
    ],
    note: 'General inquiries, business development, and teaming opportunities.',
  },
  {
    icon: Mail,
    department: 'Media Inquiries',
    lines: [
      { type: 'email', label: 'media@seccon.com', href: 'mailto:media@seccon.com' },
    ],
    note: 'Press, media requests, public affairs, and official statements.',
  },
  {
    icon: Phone,
    department: 'HR & Recruitment',
    lines: [
      { type: 'phone', label: '+1 (305) XXX-XXXX', href: 'tel:+13050000000' },
      { type: 'email', label: 'humanresource@seccon.com', href: 'mailto:humanresource@seccon.com' },
      { type: 'email', label: 'recruiting@seccon.com', href: 'mailto:recruiting@seccon.com' },
    ],
    note: 'Employment inquiries, candidate correspondence, and subcontracting.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We want to hear from you. Reach the appropriate office through the direct lines below."
        image="/images/contact-hero.jpg"
        imagePosition="center"
      />

      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contacts.map(({ icon: Icon, department, lines, note }) => (
              <div
                key={department}
                className="bg-bg-surface border border-border-subtle rounded-lg p-6 flex flex-col gap-5 hover:border-accent-blue/30 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-text-primary uppercase tracking-widest mb-4">
                    {department}
                  </h3>
                  <ul className="space-y-2">
                      {lines.map(({ type, label, href }) => (
                        <li key={label}>
                          {type === 'phone' || type === 'email' ? (
                            <a
                              href={href}
                              className="text-accent-blue text-sm hover:text-ice-blue hover:underline transition-colors break-all"
                            >
                              {label}
                            </a>
                          ) : type === 'address' ? (
                            <address className="text-text-secondary text-sm not-italic leading-relaxed">{label}</address>
                          ) : (
                            <span className="text-text-secondary text-sm">{label}</span>
                          )}
                        </li>
                      ))}
                  </ul>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed mt-auto border-t border-border-subtle pt-4">
                  {note}
                </p>
              </div>
            ))}
          </div>

          {/* Teaming section */}
          <div className="bg-bg-surface border border-border-subtle rounded-lg p-8">
            <div className="w-10 h-0.5 bg-accent-blue mb-5" />
            <h2 className="font-heading text-xl font-semibold text-text-primary uppercase tracking-wide mb-3">
              Teaming & Subcontracting Opportunities
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed max-w-3xl mb-5">
              SecCon Group welcomes teaming inquiries from prime contractors seeking a certified
              SDVOSB and MBE subcontractor. Our dual certification status helps primes meet
              diversity subcontracting goals while bringing genuine operational expertise to the
              team. Contact our corporate headquarters to discuss scope, capacity, and teaming
              structure.
            </p>
            <a
              href="mailto:info@seccon.com"
              className="inline-block bg-accent-blue text-white font-heading font-medium uppercase tracking-widest text-sm px-6 py-2.5 rounded hover:bg-accent-blue/80 transition-colors"
            >
              Discuss Teaming
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
