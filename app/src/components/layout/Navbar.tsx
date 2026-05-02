import { useEffect, useState } from 'react'
import { NAV_SECTIONS } from '../../lib/data'

interface Props { activeSection: string; scrollTo: (id: string) => void }

export default function Navbar({ activeSection, scrollTo }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll(e: Event) { setScrolled((e.target as HTMLElement).scrollTop > 60) }
    const main = document.getElementById('snap-main')
    main?.addEventListener('scroll', onScroll)
    return () => main?.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.5s',
        ...(scrolled ? { background: 'rgba(0,5,18,0.88)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(122,188,220,0.1)' } : {}),
      }}
    >
      <nav style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={() => scrollTo('hero')}
          style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', letterSpacing: '0.2em', color: '#e8e6e1', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          MARI
        </button>

        <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none', padding: 0, margin: 0 }} className="hidden-mobile">
          {NAV_SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.2em',
                  textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer',
                  color: activeSection === id ? '#d4a857' : 'rgba(232,230,225,0.55)',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/mari-muthu-k"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.15em',
            textTransform: 'uppercase', padding: '0.5rem 1rem',
            border: '1px solid #d4a857', color: '#d4a857', textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='#d4a857'; (e.currentTarget as HTMLElement).style.color='#00000a' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background=''; (e.currentTarget as HTMLElement).style.color='#d4a857' }}
        >
          GitHub
        </a>
      </nav>
    </header>
  )
}