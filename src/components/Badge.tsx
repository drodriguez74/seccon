interface BadgeProps {
  label: string
  sublabel?: string
  variant?: 'gold' | 'blue'
}

export default function Badge({ label, sublabel, variant = 'gold' }: BadgeProps) {
  const colors =
    variant === 'gold'
      ? 'border-accent-gold text-accent-gold'
      : 'border-accent-blue text-accent-blue'

  return (
    <div className={`border ${colors} rounded px-3 py-2 text-center min-w-[90px]`}>
      <p className="font-heading font-semibold text-sm uppercase tracking-widest">{label}</p>
      {sublabel && <p className="text-xs mt-0.5 opacity-70">{sublabel}</p>}
    </div>
  )
}
