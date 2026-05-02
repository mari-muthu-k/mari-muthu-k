// S=... T=- A=.- Y=-.--
const STAY: Array<{ char: string; symbols: Array<'dot' | 'dash'> }> = [
  { char: 'S', symbols: ['dot','dot','dot'] },
  { char: 'T', symbols: ['dash'] },
  { char: 'A', symbols: ['dot','dash'] },
  { char: 'Y', symbols: ['dash','dot','dash','dash'] },
]

export default function MorseCode() {
  let delay = 0
  return (
    <div className="flex items-center gap-4" aria-label="Morse code: STAY">
      {STAY.map(({ char, symbols }) => (
        <div key={char} className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1">
            {symbols.map((type, i) => {
              const d = delay; delay += 0.6
              return (
                <span
                  key={i}
                  className="morse-symbol block"
                  style={{ width: type === 'dot' ? '6px' : '18px', height: '6px', animationDelay: d + 's' }}
                />
              )
            })}
          </div>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#d4a857', opacity: 0.5, letterSpacing: '0.2em' }}>
            {char}
          </span>
        </div>
      ))}
    </div>
  )
}