import Lenis from 'lenis'
import gsap from 'gsap'

let lenis = null

export function initSmoothScroll() {
  // respect reduced motion: keep native scrolling
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  lenis = new Lenis({ lerp: 0.1 })

  const tick = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(tick)
    lenis.destroy()
    lenis = null
  }
}

// target: element id (string) or a pixel position (number)
export function scrollToTarget(target) {
  const el = typeof target === 'string' ? document.getElementById(target) : null
  const top = el ? el.getBoundingClientRect().top + window.scrollY : target

  // Lenis ignores scroll-margin-top, so apply the section's offset manually
  const offset = el ? -(parseFloat(getComputedStyle(el).scrollMarginTop) || 0) : 0

  if (lenis) lenis.scrollTo(top, { offset })
  else window.scrollTo({ top: top + offset, behavior: 'smooth' })
}

// lock/unlock page scroll (used by the project overlay)
export function stopScroll() {
  if (lenis) lenis.stop()
  else document.body.style.overflow = 'hidden' // reduced-motion: no Lenis
}

export function startScroll() {
  if (lenis) lenis.start()
  else document.body.style.overflow = ''
}