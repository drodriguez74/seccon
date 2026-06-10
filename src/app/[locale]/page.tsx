import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, BookOpen, Users } from 'lucide-react'
import ValuesBanner from '@/components/ValuesBanner'
import Badge from '@/components/Badge'
import HeroEarthClient from '@/components/HeroEarthClient'
import HeroVideo from '@/components/HeroVideo'
import { getDict } from '@/lib/i18n'

const USE_VIDEO_HERO = true

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
  return { title: dict.meta.siteTitle, description: dict.meta.siteDescription }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDict(locale)
  const t = dict.home

  const serviceCards = [
    { Icon: BookOpen, ...t.services.training, href: `/${locale}/what-we-do`, image: '/images/training.png' },
    { Icon: Shield,   ...t.services.protective, href: `/${locale}/what-we-do`, image: '/images/protection.jpg' },
    { Icon: Users,    ...t.services.mentoring, href: `/${locale}/what-we-do`, image: '/images/mentoring.png' },
  ]

  return (
    <>
      <section className="hero-section relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {USE_VIDEO_HERO ? (
            <HeroVideo className="h-full w-full object-cover object-center" />
          ) : (
            <HeroEarthClient />
          )}
        </div>
        <div className="hero-gradient absolute inset-0 z-10 pointer-events-none" />
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="flex justify-center gap-3 mb-6">
            <div className="border border-[#B8960C] text-[#B8960C] rounded px-3 py-2 text-center min-w-[90px]">
              <p className="font-heading font-semibold text-sm uppercase tracking-widest">SDVOSB</p>
            </div>
            <div className="border border-[#B8960C] text-[#B8960C] rounded px-3 py-2 text-center min-w-[90px]">
              <p className="font-heading font-semibold text-sm uppercase tracking-widest">MBE</p>
            </div>
          </div>
          <h1 className="font-heading font-semibold text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wide leading-tight mb-4">
            {t.hero.line1}<br />
            <span className="text-[#4A9ECC]">{t.hero.line2}</span>
          </h1>
          <p className="text-white/95 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${locale}/what-we-do`}
              className="inline-block bg-[#4A9ECC] text-white font-heading font-medium uppercase tracking-widest text-sm px-8 py-3 rounded hover:bg-[#4A9ECC]/80 transition-colors"
            >
              {t.hero.cta1}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-block border border-[#C0C8D0] text-[#C0C8D0] font-heading font-medium uppercase tracking-widest text-sm px-8 py-3 rounded hover:border-white hover:text-white transition-colors"
            >
              {t.hero.cta2}
            </Link>
          </div>
        </div>
      </section>

      <div className="hero-bridge" aria-hidden="true" />

      <ValuesBanner values={dict.values} />

      <section className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="w-10 h-0.5 bg-accent-blue mx-auto mb-5" />
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-text-primary uppercase tracking-wide mb-3">
              {t.services.heading}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">{t.services.subheading}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map(({ Icon, title, desc, href, image }) => (
              <Link
                key={title}
                href={href}
                className="bg-bg-surface border border-border-subtle rounded-lg overflow-hidden hover:border-accent-blue/40 transition-colors duration-200 group"
              >
                <div className="relative h-48 overflow-hidden bg-[#080C14]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 w-8 h-8 flex items-center justify-center rounded bg-accent-blue/20 text-accent-blue backdrop-blur-sm group-hover:bg-accent-blue/30 transition-colors">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-base font-semibold text-text-primary mb-2 uppercase tracking-wide">
                    {title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary text-xs font-heading uppercase tracking-widest mb-4">
            {t.serving.label}
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text-primary uppercase tracking-wide mb-6">
            {t.serving.orgs}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-text-secondary text-sm font-heading uppercase tracking-wider mb-8">
            <span>{t.serving.itar}</span>
            <span className="text-border-subtle">|</span>
            <span>{t.serving.far}</span>
            <span className="text-border-subtle">|</span>
            <span>{t.serving.sam}</span>
            <span className="text-border-subtle">|</span>
            <span>{t.serving.cleared}</span>
          </div>
          <Link
            href={`/${locale}/who-we-serve`}
            className="inline-block border border-accent-blue text-accent-blue font-heading font-medium uppercase tracking-widest text-sm px-8 py-3 rounded hover:bg-accent-blue hover:text-white transition-colors"
          >
            {t.serving.cta}
          </Link>
        </div>
      </section>

      <section className="py-16 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex gap-4 shrink-0">
              <Badge label="SDVOSB" sublabel={t.badge.sdvosbSub} />
              <Badge label="MBE" sublabel={t.badge.mbeSub} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-text-primary uppercase tracking-wide mb-2">
                {t.sdvosb.heading}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">{t.sdvosb.body}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
