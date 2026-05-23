'use client'

import dynamic from 'next/dynamic'

const HeroEarth = dynamic(() => import('./HeroEarth'), { ssr: false })

export default function HeroEarthClient() {
  return <HeroEarth />
}
