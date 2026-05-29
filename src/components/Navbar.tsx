'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Who We Serve', href: '/who-we-serve' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
]

// All pages have a dark hero — navbar uses white text until scrolled past it
const DARK_HERO_PAGES = ['/', '/about', '/what-we-do', '/who-we-serve', '/careers', '/contact']

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const prevPathRef = useRef(pathname)

  // Reset scrolled state synchronously when route changes so we never flash
  // themed colors over the dark hero on the incoming page
  if (prevPathRef.current !== pathname) {
    prevPathRef.current = pathname
    setScrolled(false)
  }

  useEffect(() => {
    // Home hero spans the full viewport; inner PageHero is min-h-[480px]
    const threshold = pathname === '/' ? window.innerHeight - 64 : 460
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const isHero = DARK_HERO_PAGES.includes(pathname) && !scrolled

  // Link colour rules:
  //   Over dark hero  → active = bright white + white underline
  //                     inactive = white/70, hover white
  //   Scrolled/themed → active = accent blue + blue underline
  //                     inactive = text-secondary, hover text-primary
  const linkClass = (active: boolean) =>
    `px-3 py-2 text-sm font-heading font-medium tracking-wide uppercase transition-colors duration-150 rounded ${
      isHero
        ? active
          ? 'text-white border-b-2 border-white/60'
          : 'text-white/70 hover:text-white'
        : active
          ? 'text-[#4A9ECC] border-b-2 border-[#4A9ECC]'
          : 'text-text-secondary hover:text-text-primary'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isHero
          ? 'bg-transparent border-b border-white/10'
          : 'bg-bg-primary/95 backdrop-blur-sm border-b border-border-subtle shadow-sm'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <Image src="/seccon-mark-detailed.svg" alt="SecCon Group" width={55} height={45} priority />
          <div className="ml-3 flex flex-col leading-tight">
            <span className="font-heading font-semibold text-lg">
              <span className="metallic-text-blue">Sec</span>
              <span className="metallic-text">Con</span>
              <span className="metallic-text-blue"> Group</span>
            </span>
            <span className="font-heading text-[10px] tracking-widest proper-case">
              <span className="metallic-text">Security Contractor Group</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(pathname === link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right: theme toggle */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle isHero={isHero} />
        </div>

        {/* Mobile right: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle isHero={isHero} />
          <button
            className={`p-2 transition-colors ${isHero ? 'text-white/70 hover:text-white' : 'text-text-secondary hover:text-text-primary'}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — always solid dark so it's readable */}
      {open && (
        <div className="md:hidden bg-[#0F1624] border-t border-white/10">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2.5 text-sm font-heading uppercase tracking-wide rounded transition-colors
                      ${active ? 'text-[#4A9ECC] bg-[#4A9ECC]/10' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
