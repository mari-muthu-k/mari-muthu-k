import { NAV_SECTIONS } from '../../lib/data'

interface Props { activeSection: string; scrollTo: (id: string) => void }

export default function MissionNav({ activeSection, scrollTo }: Props) {
  return (
    <nav style={{ position:'fixed', right:'1.5rem', top:'50%', transform:'translateY(-50%)', zIndex:50, display:'flex', flexDirection:'column', gap:'1rem' }}>
      {NAV_SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          aria-label={label}
          style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'flex-end', padding:'4px' }}
        >
          <span style={{
            display: 'block', borderRadius: '50%', transition: 'all 0.3s',
            width:  activeSection === id ? '10px' : '6px',
            height: activeSection === id ? '10px' : '6px',
            background: activeSection === id ? '#d4a857' : 'rgba(232,230,225,0.3)',
            boxShadow: activeSection === id ? '0 0 8px #d4a857' : 'none',
          }} />
        </button>
      ))}
    </nav>
  )
}