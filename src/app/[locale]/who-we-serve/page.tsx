import type { Metadata } from 'next'
import { Globe, ShieldAlert, Scale, Zap, BarChart2, AlertTriangle } from 'lucide-react'
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
  return { title: dict.whoWeServe.hero.title, description: dict.whoWeServe.hero.metaDescription }
}

export default async function WhoWeServePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDict(locale)
  const t = dict.whoWeServe

  const capabilities = [
    { Icon: Globe,        ...t.capabilities.logistics },
    { Icon: ShieldAlert,  ...t.capabilities.tactical },
    { Icon: Scale,        ...t.capabilities.lawEnf },
    { Icon: Zap,          ...t.capabilities.mission },
    { Icon: BarChart2,    ...t.capabilities.intel },
    { Icon: AlertTriangle, ...t.capabilities.contingency },
  ]

  const trustPillars = [t.trust.readiness, t.trust.compliance, t.trust.global, t.trust.vetted]

  return (
    <>
      <PageHero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image="/images/mentoring.png"
      />

      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-text-secondary leading-relaxed text-base">{t.intro}</p>
          </div>

          <div className="w-10 h-0.5 bg-accent-blue mb-5" />
          <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-8">
            {t.capabilities.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {capabilities.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-bg-surface border border-border-subtle rounded-lg p-6 hover:border-accent-blue/40 transition-colors duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded bg-accent-blue/10 text-accent-blue mb-4">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="w-10 h-0.5 bg-accent-blue mb-5" />
          <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-8">
            {t.trust.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {trustPillars.map(({ label, body }) => (
              <div key={label} className="flex gap-5 items-start">
                <div className="w-1 self-stretch bg-accent-blue rounded-full shrink-0" />
                <div>
                  <h3 className="font-heading text-sm font-semibold text-text-primary uppercase tracking-widest mb-2">{label}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-border-subtle rounded-lg p-8 bg-bg-surface">
            <div className="w-10 h-0.5 bg-accent-blue mb-5" />
            <h3 className="font-heading text-lg font-semibold text-text-primary uppercase tracking-wide mb-4">
              {t.commitment.heading}
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-3xl">{t.commitment.body}</p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-heading uppercase tracking-widest text-text-secondary">
            <span className="text-accent-silver">{t.compliance.itar}</span>
            <span className="text-border-subtle select-none">|</span>
            <span className="text-accent-silver">{t.compliance.far}</span>
            <span className="text-border-subtle select-none">|</span>
            <span className="text-accent-silver">{t.compliance.sam}</span>
            <span className="text-border-subtle select-none">|</span>
            <span className="text-accent-silver">{t.compliance.cleared}</span>
            <span className="text-border-subtle select-none">|</span>
            <span className="text-accent-silver">{t.compliance.certLabel}</span>
          </div>
        </div>
      </section>
    </>
  )
}
