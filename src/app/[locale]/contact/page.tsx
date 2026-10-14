import type { Metadata } from 'next'
import { Phone, Mail, Building2 } from 'lucide-react'
import PageHero from '@/components/PageHero'
import { getDict } from '@/lib/i18n'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDict(locale)
  return { title: dict.contact.hero.title, description: dict.contact.hero.metaDescription }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDict(locale)
  const t = dict.contact

  const offices = [
    {
      city: 'Fairfax, Virginia',
      role: t.addresses.hq,
      lines: ['Willow Oaks II', '8280 Willow Oaks Corporate Drive', 'Suite 600, #17738264', 'Fairfax, VA 22031'],
      mapQuery: '8280 Willow Oaks Corporate Drive, Fairfax, VA 22031',
    },
    {
      city: 'Medellín, Colombia',
      role: t.addresses.regional,
      lines: [
        'San Fernando Plaza, Torre Protection',
        'Cra 43a #1-50, Torre 1',
        '6th Floor, Office 652',
        'Medellín, Antioquia, Colombia 050021',
      ],
      mapQuery: 'San Fernando Plaza, Cra 43a #1-50, Medellín, Antioquia, Colombia',
    },
  ]

  const contacts = [
    {
      icon: Building2,
      department: t.depts.hq.name,
      lines: [
        { type: 'phone',   label: '1-844-4-SECCON', href: 'tel:+18444732266' },
        { type: 'email',   label: 'info@seccongroup.com', href: 'mailto:info@seccongroup.com' },
      ],
      note: t.depts.hq.note,
    },
    {
      icon: Mail,
      department: t.depts.media.name,
      lines: [{ type: 'email', label: 'media@seccongroup.com', href: 'mailto:media@seccongroup.com' }],
      note: t.depts.media.note,
    },
    {
      icon: Phone,
      department: t.depts.hr.name,
      lines: [
        { type: 'phone', label: '1-844-4-SECCON', href: 'tel:+18444732266' },
        { type: 'email', label: 'humanresource@seccongroup.com', href: 'mailto:humanresource@seccongroup.com' },
        { type: 'email', label: 'recruiter@seccongroup.com', href: 'mailto:recruiter@seccongroup.com' },
      ],
      note: t.depts.hr.note,
    },
  ]

  return (
    <>
      <PageHero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image="/images/contact-hero.jpg"
        imagePosition="center"
      />

      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
                    {lines.map(({ type, label, href }) => {
                      let content: React.ReactNode
                      if (type === 'phone' || type === 'email') {
                        content = (
                          <a href={href} className="text-accent-blue text-sm hover:text-ice-blue hover:underline transition-colors break-all">
                            {label}
                          </a>
                        )
                      } else {
                        content = <span className="text-text-secondary text-sm">{label}</span>
                      }
                      return <li key={label}>{content}</li>
                    })}
                  </ul>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed mt-auto border-t border-border-subtle pt-4">{note}</p>
              </div>
            ))}
          </div>

          <div className="bg-bg-surface border border-border-subtle rounded-lg mb-16 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle">
            {offices.map(({ city, role, lines, mapQuery }) => {
              const query = encodeURIComponent(mapQuery)
              return (
                <div key={city} className="p-6 flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-1/2 shrink-0">
                    <h3 className="font-heading text-sm font-semibold text-text-primary uppercase tracking-widest mb-1">
                      {city}
                    </h3>
                    <p className="text-text-secondary text-xs mb-4">{role}</p>
                    <address className="text-text-secondary text-sm not-italic leading-relaxed">
                      {lines.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </address>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.addresses.openMap}: ${city}`}
                    className="relative block flex-1 min-h-44 rounded overflow-hidden border border-border-subtle hover:border-accent-blue/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blue"
                  >
                    <iframe
                      src={`https://maps.google.com/maps?q=${query}&z=15&output=embed`}
                      title={city}
                      loading="lazy"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                    />
                  </a>
                </div>
              )
            })}
          </div>

          <div className="bg-bg-surface border border-border-subtle rounded-lg p-8">
            <div className="w-10 h-0.5 bg-accent-blue mb-5" />
            <h2 className="font-heading text-xl font-semibold text-text-primary uppercase tracking-wide mb-3">
              {t.teaming.heading}
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed max-w-3xl mb-5">{t.teaming.body}</p>
            <a
              href="mailto:info@seccongroup.com"
              className="inline-block bg-accent-blue text-white font-heading font-medium uppercase tracking-widest text-sm px-6 py-2.5 rounded hover:bg-accent-blue/80 transition-colors"
            >
              {t.teaming.cta}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
