import type { Metadata } from 'next'
import { Dog, ShieldCheck, GraduationCap, Crosshair, Target, HeartPulse } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ServiceCard from '@/components/ServiceCard'
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
  return { title: dict.whatWeDo.hero.title, description: dict.whatWeDo.hero.metaDescription }
}

export default async function WhatWeDoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDict(locale)
  const t = dict.whatWeDo

  const services = [
    { Icon: Dog,         ...t.services.canine },
    { Icon: ShieldCheck, ...t.services.physical },
    { Icon: GraduationCap, ...t.services.lawEnf },
    { Icon: Crosshair,   ...t.services.marksman },
    { Icon: Target,      ...t.services.weapons },
    { Icon: HeartPulse,  ...t.services.medical },
  ]

  return (
    <>
      <PageHero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image="/images/what-we-do-hero.png"
        imagePosition="top-left"
      />

      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-text-secondary leading-relaxed text-base">{t.intro.p1}</p>
            <p className="text-text-secondary leading-relaxed text-base mt-4">{t.intro.p2}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} Icon={s.Icon} title={s.title} description={s.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading text-sm text-text-secondary uppercase tracking-widest mb-3">
            {t.cta.label}
          </p>
          <h2 className="font-heading text-xl sm:text-2xl font-semibold text-text-primary uppercase tracking-wide mb-2">
            {t.cta.heading}
          </h2>
          <p className="text-text-secondary text-sm mt-4 max-w-xl mx-auto">{t.cta.body}</p>
        </div>
      </section>
    </>
  )
}
