import { useEffect, useRef } from 'react'

const KONAMI = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
  'KeyB','KeyA',
]

export function useKonamiCode(onActivate: () => void) {
  const seq = useRef<string[]>([])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      seq.current = [...seq.current, e.code].slice(-KONAMI.length)
      if (seq.current.join(',') === KONAMI.join(',')) {
        onActivate()
        seq.current = []
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onActivate])
}