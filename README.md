# 💻 HanreDelport.dev
> **A code-editor-themed personal portfolio, built to look and feel like the inside of an IDE**

HanreDelport.dev is my personal portfolio site, designed to present myself the way I actually spend my time — inside a code editor. Instead of a traditional scrolling resume, the site is framed as a class definition (`class HanreDelport:`), with each section of my background presented as an expandable "method" (`getAboutMe()`, `getProjects()`, `getSkills()`, `getResume()`, `getContact()`).

The project was built with **React + Vite** and deployed via **GitHub Pages**, with a strong focus on interaction design — typing animations, sticky scroll behavior, expandable cards, and a consistent dark, syntax-highlighted visual language throughout.

Check it out at: [https://hanredelport.github.io](https://hanredelport.github.io/Personal-Portfolio/)

---

## ✨ Features

- ⌨️ Typewriter-animated hero (`class HanreDelport:`) with syntax-highlighted keyword/name/colon styling
- 📌 Sticky hero section that stays pinned while an intro "docstring" paragraph scrolls in underneath
- 🎬 Scroll-triggered fade-in animation on the intro paragraph, using `IntersectionObserver`
- 🗂️ Expandable method-style cards for About Me, Projects, Skills, and Resume
- 🏷️ Reusable tag-list component for skills and tech stacks, with configurable color themes
- 📬 Contact card with direct with a working contact form (Formspree)
- 🔗 Fixed top-right social bar (GitHub, Twitter, contact shortcut, profile picture) that adapts into a locked top bar on mobile
- 📱 Fully responsive layout — card sizing, scroll behavior, and hero height all adapt across breakpoints
- 🎨 Custom-styled scrollbars matching the editor color palette

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React** | Component architecture & UI state |
| **Vite** | Build tooling & dev server |
| **JavaScript (ES6+)** | Application logic |
| **CSS3** | Styling, animations, responsive layout |
| **Lucide React** | Icon system (GitHub, Twitter, Mail) |
| **Formspree** | Contact form submission handling |
| **Git & GitHub** | Version control |
| **gh-pages** | Deployment to GitHub Pages |

---

## 🧠 Skills Demonstrated

- React component design & state management
- CSS animation, transitions, and scroll-driven UI (`position: sticky`, `IntersectionObserver`)
- Responsive/mobile-first design
- Component reusability (shared card, tag, and icon patterns)
- Front-end architecture & file organization
- Attention to UX detail (z-index stacking, flex sizing, overflow handling)
- Deployment & CI-free static hosting via GitHub Pages

---

## 📖 How It Works

1. The hero loads with a typewriter effect, spelling out `class HanreDelport:`.
2. An intro "docstring" paragraph scrolls in underneath, fading into view once visible.
3. As the user continues scrolling, the hero stays pinned at the top, visually covering the paragraph as it passes behind it.
4. Below the hero, a row of expandable cards represents each section of my background — About Me, Projects, Skills, and Resume.
5. Clicking a card expands it into a focused view with a backdrop overlay; each card reveals sub-cards or content specific to that section.
6. A fixed social bar in the top-right (GitHub, Twitter, Contact, profile picture) stays accessible at all times, including while scrolling.
7. The Contact icon opens the Contact card directly, where visitors can get my email address or message me via the contact form.

---

## 📈 Future Improvements

- 🌗 Light/dark theme toggle
- 🧩 Blog / dev-log section written in the same "method" style
- 🖱️ Custom cursor and micro-interactions for a fuller IDE feel
- 📊 Visitor analytics integration
- 🗣️ Testimonials/recommendations card

---

## 📷 Preview

<img width="1918" height="852" alt="Screenshot 2026-07-22 195915" src="https://github.com/user-attachments/assets/8672d125-a381-48c5-b044-521bee72a32e" />

---

⭐ If you found this project interesting, feel free to check out the code or get in touch!
