import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Open/close state for the mobile navigation panel.
// It closes on route change and on Escape (returning focus to the toggle).
export function useMobileNav() {
  const { pathname } = useLocation()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const isOpen = openPath === pathname

  const close = useCallback(() => setOpenPath(null), [])
  const toggle = useCallback(() => setOpenPath(isOpen ? null : pathname), [isOpen, pathname])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenPath(null)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return { isOpen, toggle, close, toggleRef }
}
