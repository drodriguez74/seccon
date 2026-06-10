import type { Metadata } from 'next'
import { getDict } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
  return {
    title: { default: dict.meta.siteTitle, template: '%s | SecCon Group' },
    description: dict.meta.siteDescription,
    alternates: { languages: { en: '/en', es: '/es' } },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDict(locale)

  return (
    <>
      <Navbar locale={locale} labels={dict.nav} />
      <main>{children}</main>
      <Footer locale={locale} t={dict.footer} nav={dict.nav} />
    </>
  )
}
