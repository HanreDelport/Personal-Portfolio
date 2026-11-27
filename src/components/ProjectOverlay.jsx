import { useEffect, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import TagList from './TagList'
import './ProjectOverlay.css'

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const rectVars = (r) => ({
  top: r.top,
  left: r.left,
  width: r.width,
  height: r.height,
  borderRadius: 16,
})

function ProjectOverlay({ project, fromRect, getRect, onClosed }) {
  const panelRef = useRef(null)
  const bodyRef = useRef(null)
  const closeBtnRef = useRef(null)
  const closing = useRef(false)

  // open: grow from the card's rectangle to full screen
  useLayoutEffect(() => {
    const panel = panelRef.current
    const items = bodyRef.current.querySelectorAll('[data-reveal]')

    const ctx = gsap.context(() => {
      if (reduceMotion()) return
      gsap.set(items, { opacity: 0, y: 24 })
      gsap.fromTo(panel, rectVars(fromRect), {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        borderRadius: 0,
        duration: 0.7,
        ease: 'power3.inOut',
        onComplete: () => gsap.set(panel, { width: '100%', height: '100%' }),
      })
      gsap.to(items, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, delay: 0.4, ease: 'power3.out' })
    }, panelRef)

    closeBtnRef.current.focus({ preventScroll: true })
    return () => ctx.revert()
  }, [])

  // close: shrink back onto the card (re-measured, in case the window resized)
  const close = () => {
    if (closing.current) return
    closing.current = true
    if (reduceMotion()) return onClosed()

    const panel = panelRef.current
    const items = bodyRef.current.querySelectorAll('[data-reveal]')
    gsap.killTweensOf([panel, ...items])
    gsap.to(items, { opacity: 0, duration: 0.2 })
    gsap.to(panel, {
      ...rectVars(getRect()),
      duration: 0.55,
      ease: 'power3.inOut',
      onComplete: onClosed,
    })
  }

  // Escape (always calls the latest close)
  const closeRef = useRef(close)
  closeRef.current = close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeRef.current()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return createPortal(
    <div
      ref={panelRef}
      className="project-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <button ref={closeBtnRef} type="button" className="project-overlay-close" onClick={close}>
        Close ✕
      </button>

      <div className="project-overlay-scroll" data-lenis-prevent>
        <div className="project-overlay-inner" ref={bodyRef}>
          <img src={project.image} alt={project.title} className="project-overlay-image" data-reveal />
          <h3 className="project-overlay-title" data-reveal>{project.title}</h3>
          <p className="project-overlay-sub" data-reveal>{project.subtitle}</p>
          <p className="project-overlay-desc" data-reveal>{project.description}</p>
          <div data-reveal>
            <TagList tags={project.tags} color="purple" />
          </div>
          <div className="project-overlay-links" data-reveal>
            {project.links.map((l) => (
              <a key={l.href} className="project-link" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ProjectOverlay