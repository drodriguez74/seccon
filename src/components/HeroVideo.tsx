import type { VideoHTMLAttributes } from 'react'

type HeroVideoProps = Pick<VideoHTMLAttributes<HTMLVideoElement>, 'className' | 'poster'>

export default function HeroVideo({ className, poster }: HeroVideoProps) {
  return (
    <video
      className={className}
      autoPlay
      muted
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
  )
}