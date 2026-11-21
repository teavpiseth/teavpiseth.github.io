import { useEffect, useRef } from 'react'

export function PointerDots({ onBurgundy = false }: { onBurgundy?: boolean }) {
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const layer = layerRef.current
    const surface = layer?.parentElement
    if (!layer || !surface) return

    const canHover = window.matchMedia(
      '(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)',
    )
    let frame = 0

    const hide = () => {
      cancelAnimationFrame(frame)
      delete layer.dataset.active
    }

    const follow = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !canHover.matches) return
      cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        const { left, top } = surface.getBoundingClientRect()
        layer.style.setProperty('--pointer-x', `${event.clientX - left}px`)
        layer.style.setProperty('--pointer-y', `${event.clientY - top}px`)
        layer.dataset.active = 'true'
      })
    }

    surface.addEventListener('pointermove', follow)
    surface.addEventListener('pointerleave', hide)
    surface.addEventListener('pointercancel', hide)
    window.addEventListener('scroll', hide, { passive: true })
    canHover.addEventListener('change', hide)

    return () => {
      hide()
      surface.removeEventListener('pointermove', follow)
      surface.removeEventListener('pointerleave', hide)
      surface.removeEventListener('pointercancel', hide)
      window.removeEventListener('scroll', hide)
      canHover.removeEventListener('change', hide)
    }
  }, [])

  const colors = onBurgundy
    ? '[--pointer-dot:#ffe2eb8a] [--pointer-glow:#ffd4e624]'
    : '[--pointer-dot:#0d948877] [--pointer-glow:#14b8a619] dark:[--pointer-dot:#5eead488] dark:[--pointer-glow:#2dd4bf15]'

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_9rem_at_var(--pointer-x,50%)_var(--pointer-y,50%),var(--pointer-glow),transparent)] opacity-0 transition-opacity duration-200 data-[active=true]:opacity-100 motion-reduce:hidden ${colors}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,var(--pointer-dot)_1.35px,transparent_1.75px)] bg-size-[22px_22px] [mask-image:radial-gradient(circle_11rem_at_var(--pointer-x,50%)_var(--pointer-y,50%),black_18%,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,var(--pointer-dot)_1px,transparent_1.4px)] bg-position-[11px_11px] bg-size-[22px_22px] [mask-image:radial-gradient(circle_6rem_at_var(--pointer-x,50%)_var(--pointer-y,50%),black,transparent)]" />
    </div>
  )
}
