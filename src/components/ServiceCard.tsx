import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  Icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-bg-surface border border-border-subtle rounded-lg p-6 hover:border-accent-blue/40 transition-colors duration-200 group">
      <div className="w-10 h-10 flex items-center justify-center rounded bg-accent-blue/10 text-accent-blue mb-4 group-hover:bg-accent-blue/20 transition-colors">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <h3 className="font-heading text-base font-semibold text-text-primary mb-2 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  )
}
