import { useEffect, useState } from 'react'

export default function useMediaQuery() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  useEffect(() => {
    if (window) {
      const mediaQuery = window.matchMedia('(max-width: 768px)')
      mediaQuery.addEventListener('change', (e) => {
        return e.matches ? setIsSmallScreen(true) : setIsSmallScreen(false)
      })
    }
  })
  return isSmallScreen
}
