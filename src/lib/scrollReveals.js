import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// play on enter (down or up), reset when fully out of view
const REPLAY = 'play reset play reset'

export function initScrollReveals() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) return () => {}

  const ctx = gsap.context(() => {
    gsap.utils.toArray('.section-heading').forEach((el) => {
      gsap.from(el.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: REPLAY },
      })
    })

    gsap.utils.toArray('.item-grid').forEach((grid) => {
      gsap.from(grid.children, {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: grid, start: 'top 85%', toggleActions: REPLAY },
      })
    })

    gsap.from('.resume-thumbnail-link, .resume-caption', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.resume-thumbnail-link', start: 'top 85%', toggleActions: REPLAY },
    })

    gsap.from('.contact-layout', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-layout', start: 'top 90%', toggleActions: REPLAY },
    })
  })

  return () => ctx.revert()
}