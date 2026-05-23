import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-heading text-accent-blue text-sm uppercase tracking-widest mb-4">404</p>
        <h1 className="font-heading text-4xl font-semibold text-text-primary uppercase tracking-wide mb-4">
          Page Not Found
        </h1>
        <p className="text-text-secondary text-sm mb-8 max-w-sm mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent-blue text-white font-heading font-medium uppercase tracking-widest text-sm px-8 py-3 rounded hover:bg-accent-blue/80 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
