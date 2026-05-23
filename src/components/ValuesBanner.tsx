const values = ['Trust', 'Performance', 'Dedication', 'Accountability', 'Results']

export default function ValuesBanner() {
  return (
    <div className="bg-bg-surface border-y border-border-subtle py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-y-3">
          {values.map((v, i) => (
            <span key={v} className="flex items-center">
              <span className="px-5 text-sm font-heading font-medium uppercase tracking-widest text-accent-silver">
                {v}
              </span>
              {i < values.length - 1 && (
                <span className="text-border-subtle text-lg select-none">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
