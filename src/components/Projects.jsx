import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import ProjectOverlay from './ProjectOverlay'
import { stopScroll, startScroll } from '../lib/smoothScroll'
import './Projects.css'

import dijkstraTNail from '../assets/projectPics/Dijkstra.png'
import InventoryTNail from '../assets/projectPics/InventoryM.png'
import LockedInTNail from '../assets/projectPics/LockedIn.png'
import PotholeTNail from '../assets/projectPics/PotholeStroom.png'
import TimeTNail from '../assets/projectPics/TimeTracker.png'

import clockIcon from '../assets/icons/clock.png'
import inventoryIcon from '../assets/icons/inventory.png'
import jailIcon from '../assets/icons/jail.png'
import mazeIcon from '../assets/icons/maze.png'
import potholeIcon from '../assets/icons/pothole.png'

// full project data (used by the expanded view in step 2)
export const projects = [
  {
    title: 'Inventory Manager',
    subtitle: 'Full-stack web app',
    icon: inventoryIcon,
    image: InventoryTNail,
    description:
      'A production-ready web application for managing stock, production, and orders — with support for multi-level Bill of Materials (BOMs), inventory tracking, and procurement management.',
    tags: ['Python 3.11', 'FastAPI', 'SQLAlchemy', 'MySQL 8.0', 'React', 'Vite', 'Axios', 'CSS'],
    links: [
      { label: 'View on GitHub →', href: 'https://github.com/HanreDelport/Inventory-Manager' },
      { label: 'Test it out →', href: 'https://inventory-manager-frontend-5bhs.onrender.com/' },
    ],
  },
  {
    title: 'PotholeStroom',
    subtitle: 'Mobile app (prototype)',
    icon: potholeIcon,
    image: PotholeTNail,
    description:
      'Community-driven mobile application that enables road users to report potholes and allows community members to contribute towards funding their repair. The platform connects drivers, road workers, and the community to improve road conditions through collaborative reporting, transparent funding, and efficient repair tracking. The application provides real-time updates on pothole status, repair progress, and completed repairs. (Prototype Phase)',
    tags: ['C#', 'XAML', 'SQLite', 'JSON', '.NET MAUI', 'Firebase Real-Time DB', 'Firebase Auth'],
    links: [{ label: 'View on GitHub →', href: 'https://github.com/HanreDelport/PotholeStroom' }],
  },
  {
    title: 'Time-Tracker',
    subtitle: 'Desktop app',
    icon: clockIcon,
    image: TimeTNail,
    description:
      'A desktop application for tracking work hours across projects and tasks. Built with Python and PyQt6, this lightweight tool helps you monitor time spent on different activities with a clean, intuitive interface.',
    tags: ['Python 3.10+', 'PyQt6', 'SQLite3', 'Qt Designer', 'PyInstaller'],
    links: [{ label: 'View on GitHub →', href: 'https://github.com/HanreDelport/Time-Tracker' }],
  },
  {
    title: 'Locked-In',
    subtitle: 'Desktop system',
    icon: jailIcon,
    image: LockedInTNail,
    description:
      'A Computerized system for the Tlokweng Correctional Facility to automate and manage their community help initiative. Employers (town residents, NPO’s, and charities from the community) can visit the prison when they have day work for the prisoners and advertise the job on the system. Prisoners are encouraged to log onto the system and apply for jobs based on their previously earned skills.',
    tags: ['C#', '.NET', 'Git', 'SQL', 'SQL Server Management Studio'],
    links: [{ label: 'View on GitHub →', href: 'https://github.com/CMPG223-Group-45/LockedIn' }],
  },
  {
    title: 'Dijkstra Pathfinding Visualizer',
    subtitle: 'Interactive web app',
    icon: mazeIcon,
    image: dijkstraTNail,
    description:
      "An interactive web application that demonstrates how Dijkstra's shortest-path algorithm explores a grid and calculates the optimal route between a start and end point. The project includes recursive maze generation, dynamic wall drawing, and animated visualization of both visited nodes and the final shortest path.",
    tags: ['HTML5', 'CSS', 'JavaScript'],
    links: [{ label: 'View on GitHub →', href: 'https://github.com/HanreDelport/dijkstra-visualizer' }],
  },
]

const carouselItems = projects.map((p) => ({
  src: p.image,
  alt: p.title,
  title: p.title,
  subtitle: p.subtitle,
}))

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

const GAP = 80 // px between cards
const WHEEL_K = 0.004 // cards per wheel pixel
const COUNT = projects.length

function Projects() {
  const [active, setActive] = useState(null) // { index, rect }
  const triggerRef = useRef(null)
  const trackRef = useRef(null)
  const wakeRef = useRef(() => {})
  const s = useRef({
    pos: 0, // what's drawn (eased)
    target: 0, // where it's heading
    settled: 0, // last snapped card index
    travel: 0, // net cards moved since the carousel took over the wheel
    released: 0, // direction the wheel was handed back to the page (0 = none)
    dir: 1,
    dragging: false,
    drag: null,
    suppress: false,
    step: 0,
    raf: 0,
    last: 0,
    timer: 0,
  })

  const go = (t) => {
    const st = s.current
    st.target = t
    st.settled = t
    wakeRef.current()
  }

  useEffect(() => {
    const track = trackRef.current
    const st = s.current
    const cards = Array.from(track.children)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // place every card relative to the current position (wraps around)
    const render = () => {
      cards.forEach((card, i) => {
        let d = i - st.pos
        d -= COUNT * Math.round(d / COUNT) // shortest signed distance on the loop
        const a = Math.abs(d)
        const face = card.firstElementChild
        face.style.transform =
          `perspective(1200px) translate3d(${d * st.step}px, 0, ${-Math.min(a, 1.5) * 220}px) ` +
          `rotateY(${clamp(d, -1.5, 1.5) * 14}deg)`
        face.style.filter = `brightness(${1 - Math.min(a, 1) * 0.45})`
        card.style.zIndex = String(100 - Math.round(a * 10))
        card.style.visibility = a > 2.2 ? 'hidden' : ''
      })
    }

    const measure = () => {
      st.step = cards[0].offsetWidth + GAP
      render()
    }

    const frame = (now) => {
      st.raf = 0
      const dt = st.last ? Math.min((now - st.last) / 1000, 0.05) : 1 / 60
      st.last = now
      const tau = st.dragging ? 0.04 : 0.11
      st.pos += (st.target - st.pos) * (reduce ? 1 : 1 - Math.exp(-dt / tau))
      if (Math.abs(st.target - st.pos) < 0.0005) st.pos = st.target
      render()
      if (st.pos !== st.target) st.raf = requestAnimationFrame(frame)
      else st.last = 0
    }

    const wake = () => {
      if (!st.raf) st.raf = requestAnimationFrame(frame)
    }
    wakeRef.current = wake

    // wheel gesture ended: snap to a card. Even one small notch moves one card.
    const settle = () => {
      const t = st.dir > 0 ? Math.ceil(st.target - 0.1) : Math.floor(st.target + 0.1)
      const moved = t - st.settled
      st.target = t
      st.settled = t
      if (moved) {
        st.travel += moved
        // a full pass through the projects hands the wheel back to the page
        if (Math.abs(st.travel) >= COUNT - 1) {
          st.released = Math.sign(st.travel)
          st.travel = 0
        }
      }
      wake()
    }

    const onWheel = (e) => {
      if (e.ctrlKey) return // pinch-zoom
      const raw = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      if (!raw) return
      const delta = clamp(raw * (e.deltaMode === 1 ? 16 : 1), -300, 300)
      const dir = Math.sign(delta)

      // only take over once the whole row is on screen, so scrolling down from About stays vertical
      const rect = track.getBoundingClientRect()
      if (rect.top < 0 || rect.bottom > window.innerHeight + 16) {
        st.released = 0
        st.travel = 0
        return
      }
      if (st.released === dir) return // handed back: let the page scroll
      if (st.released) {
        st.released = 0 // direction reversed: take over again
        st.travel = 0
      }

      e.preventDefault()
      e.stopPropagation() // keeps Lenis from also scrolling the page

      st.dir = dir
      st.target += delta * WHEEL_K
      clearTimeout(st.timer)
      st.timer = setTimeout(settle, 90)
      wake()
    }

    track.addEventListener('wheel', onWheel, { passive: false })
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    measure()

    return () => {
      track.removeEventListener('wheel', onWheel)
      ro.disconnect()
      cancelAnimationFrame(st.raf)
      clearTimeout(st.timer)
    }
  }, [])

  // drag (mouse and touch)
  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    const st = s.current
    st.suppress = false
    st.drag = { id: e.pointerId, x: e.clientX, lx: e.clientX, t: performance.now(), startTarget: st.target, vel: 0, moved: false }
  }

  const onPointerMove = (e) => {
    const st = s.current
    const d = st.drag
    if (!d || d.id !== e.pointerId) return
    const dx = e.clientX - d.x
    if (!d.moved) {
      if (Math.abs(dx) < 5) return
      d.moved = true
      st.dragging = true
      st.released = 0
      st.travel = 0
      trackRef.current.setPointerCapture(e.pointerId)
    }
    const now = performance.now()
    const dt = (now - d.t) / 1000
    if (dt > 0) d.vel = 0.8 * d.vel + 0.2 * (-(e.clientX - d.lx) / st.step / dt)
    d.lx = e.clientX
    d.t = now
    st.target = d.startTarget - dx / st.step
    wakeRef.current()
  }

  const endDrag = (e) => {
    const st = s.current
    const d = st.drag
    if (!d || d.id !== e.pointerId) return
    st.drag = null
    if (!d.moved) return
    st.dragging = false
    st.suppress = true // the click that follows a drag must not open a card
    go(Math.round(st.target + clamp(d.vel, -6, 6) * 0.18))
  }

  const onClickCapture = (e) => {
    const st = s.current
    if (st.suppress) {
      e.preventDefault()
      e.stopPropagation()
      st.suppress = false
    }
  }

  const onKeyDown = (e) => {
    const st = s.current
    if (e.key === 'ArrowRight') go(Math.round(st.target) + 1)
    else if (e.key === 'ArrowLeft') go(Math.round(st.target) - 1)
    else return
    e.preventDefault()
  }

  const openProject = (index) => {
    const card = trackRef.current.children[index]
    triggerRef.current = card
    const rect = card.firstElementChild.getBoundingClientRect()
    stopScroll()
    setActive({ index, rect })
  }

  const closeProject = () => {
    setActive(null)
    startScroll()
    triggerRef.current?.focus({ preventScroll: true })
  }

  // clicking a side card brings it to the centre; clicking the centre card opens it
  const onCardClick = (i) => {
    const st = s.current
    const current = Math.round(st.target)
    let d = i - (((current % COUNT) + COUNT) % COUNT)
    d -= COUNT * Math.round(d / COUNT)
    if (d !== 0) go(current + d)
    else openProject(i)
  }

  return (
    <Section id="projects" label="// 02" title="Projects">
      <div className="projects-wrap">
        <div
          className="projects-track"
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          onKeyDown={onKeyDown}
        >
          {projects.map((p, i) => (
            <button key={p.title} type="button" className="project-card" onClick={() => onCardClick(i)}>
              <span className="project-card-face">
                <span className="project-card-media">
                  <img src={p.image} alt={p.title} draggable={false} />
                </span>
                <span className="project-card-info">
                  <span className="project-card-head">
                    <img src={p.icon} alt="" className="project-card-icon" draggable={false} />
                    <span className="project-card-title">{p.title}</span>
                  </span>
                  <span className="project-card-sub">{p.subtitle}</span>
                  <span className="project-card-hint">View project →</span>
                </span>
              </span>
            </button>
          ))}

        </div>
      </div>
        {active && (
          <ProjectOverlay
            project={projects[active.index]}
            fromRect={active.rect}
            getRect={() => trackRef.current.children[active.index].firstElementChild.getBoundingClientRect()}
            onClosed={closeProject}
          />
        )}
    </Section>
  )
}

export default Projects