import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Badge from '@/components/Badge'
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
  return { title: dict.about.hero.title, description: dict.about.hero.metaDescription }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDict(locale)
  const t = dict.about

  const pillars = [t.pillars.readiness, t.pillars.compliance, t.pillars.global, t.pillars.vetted]

  return (
    <>
      <PageHero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image="/images/about-hero.png"
        imagePosition="center"
      />

      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 mb-14">
            <Badge label="SDVOSB" sublabel={t.certs.sdvosb.sublabel} />
            <Badge label="MBE" sublabel={t.certs.mbe.sublabel} />
          </div>

          <div className="border-l-2 border-accent-blue pl-6 mb-16 max-w-3xl">
            <p className="text-xl text-text-primary font-body leading-relaxed italic">{t.mission}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-10 h-0.5 bg-accent-blue mb-5" />
              <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-6">
                {t.whoWeAre.heading}
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>{t.whoWeAre.p1}</p>
                <p>{t.whoWeAre.p2}</p>
                <p>{t.whoWeAre.p3}</p>
              </div>
            </div>

            <div>
              <div className="w-10 h-0.5 bg-accent-blue mb-5" />
              <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-6">
                {t.commitment.heading}
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>{t.commitment.p1}</p>
                <p>{t.commitment.p2}</p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-3">
                {pillars.map(({ label, desc }) => (
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

      <section className="py-16 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-10 h-0.5 bg-accent-blue mb-5" />
          <h2 className="font-heading text-2xl font-semibold text-text-primary uppercase tracking-wide mb-8">
            {t.certs.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-primary border border-border-subtle rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge label="SDVOSB" sublabel={t.certs.sdvosb.sublabel} />
                <div>
                  <p className="font-heading text-sm font-semibold text-text-primary uppercase tracking-wide">
                    {t.certs.sdvosb.heading}
                  </p>
                  <p className="text-text-secondary text-xs mt-0.5">{t.certs.sdvosb.sub}</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">{t.certs.sdvosb.desc}</p>
            </div>

            <div className="bg-bg-primary border border-border-subtle rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge label="MBE" sublabel={t.certs.mbe.sublabel} />
                <div>
                  <p className="font-heading text-sm font-semibold text-text-primary uppercase tracking-wide">
                    {t.certs.mbe.heading}
                  </p>
                  <p className="text-text-secondary text-xs mt-0.5">{t.certs.mbe.sub}</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">{t.certs.mbe.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
