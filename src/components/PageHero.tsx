import Image from 'next/image'

interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
  imagePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left'
}

export default function PageHero({
  title,
  subtitle,
  image,
  imagePosition = 'center',
}: PageHeroProps) {
  const positionClass = {
    center: 'object-center',
    top: 'object-top',
    bottom: 'object-bottom',
    left: 'object-left',
    right: 'object-right',
    'top-left': 'object-left-top',
  }[imagePosition]

  return (
    <section className="relative overflow-hidden min-h-[480px] flex items-end pb-14 bg-[#080C14]">
      {/* Fixed top clearance for navbar */}
      <div className="absolute top-0 left-0 right-0 h-20" />

      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className={`object-cover ${positionClass}`}
            priority
          />
          {/* Multi-stop overlay: darkens top (navbar area) and bottom (text area) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/60 via-[#080C14]/30 to-[#080C14]/80" />
          {/* Side vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/40 via-transparent to-[#080C14]/20" />
        </div>
      ) : (
        /* Decorative grid for pages without a photo */
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#4A9ECC 1px, transparent 1px), linear-gradient(90deg, #4A9ECC 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="w-10 h-0.5 bg-[#4A9ECC] mb-5" />
        <h1 className={`text-4xl md:text-5xl font-heading font-semibold mb-4 uppercase tracking-wide
          ${image ? 'text-white' : 'text-text-primary'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg max-w-2xl leading-relaxed
            ${image ? 'text-white/75' : 'text-text-secondary'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
