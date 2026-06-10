import type { Metadata } from 'next'
import { Search, AlertTriangle, ShieldX, Mail } from 'lucide-react'
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
  return { title: dict.careers.hero.title, description: dict.careers.hero.metaDescription }
}

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDict(locale)
  const t = dict.careers

  const fraudItems = [
    { icon: ShieldX,       text: t.fraud.items[0] },
    { icon: Mail,          text: t.fraud.items[1] },
    { icon: AlertTriangle, text: t.fraud.items[2] },
    { icon: ShieldX,       text: t.fraud.items[3] },
  ]

  return (
    <>
      <PageHero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image="/images/careers-hero.jpg"
        imagePosition="center"
      />

      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="w-10 h-0.5 bg-accent-blue mb-5" />
              <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-6">
                {t.jobSearch.heading}
              </h2>
              <div className="bg-bg-surface border border-border-subtle rounded-lg p-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-accent-blue/10 flex items-center justify-center mb-5">
                  <Search size={24} className="text-accent-blue" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary uppercase tracking-wide mb-3">
                  {t.jobSearch.emptyTitle}
                </h3>
                <p className="text-text-secondary text-sm max-w-md leading-relaxed">{t.jobSearch.emptyBody}</p>
              </div>
              <div className="mt-8 bg-bg-surface border border-accent-blue/30 rounded-lg p-6">
                <h3 className="font-heading text-sm font-semibold text-accent-blue uppercase tracking-widest mb-3">
                  {t.jobSearch.noticeHeading}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{t.jobSearch.noticeBody}</p>
                <p className="text-text-secondary text-sm mt-3">{t.jobSearch.noticeClose}</p>
              </div>
            </div>

            <div>
              <div className="w-10 h-0.5 bg-accent-blue mb-5" />
              <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-6">
                {t.lookFor.heading}
              </h2>
              <ul className="space-y-3 text-text-secondary text-sm mb-8">
                {t.lookFor.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Mail size={14} className="text-accent-blue shrink-0" />
                <span>
                  {t.lookFor.inquiries}:{' '}
                  <a href="mailto:recruiter@seccongroup.com" className="text-accent-blue hover:underline">
                    recruiter@seccongroup.com
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-14 bg-bg-surface border border-amber-700/40 rounded-lg p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-full bg-amber-700/20 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle size={20} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-amber-400 uppercase tracking-wide">
                  {t.fraud.heading}
                </h3>
                <p className="text-text-secondary text-sm mt-1">{t.fraud.intro}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fraudItems.map(({ icon: Icon, text }) => (
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
