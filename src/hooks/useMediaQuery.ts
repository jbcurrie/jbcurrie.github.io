import { useCallback, useEffect, useMemo, useState } from 'react'
import uaParser from 'ua-parser-js'
export default function useMediaQuery(query: string, userAgent: string ) {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const handleMediaQuery = useCallback((e) => {
    return e.matches ? setIsSmallScreen(true) : setIsSmallScreen(false)
  }, [])
  const deviceType = useMemo(() => new uaParser(userAgent).getDevice().type, [userAgent])

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${query}px)`)
    if (deviceType === 'mobile') {
      setIsSmallScreen(true)
    }
    
    if (window) {
      mediaQuery.addEventListener('change', handleMediaQuery)
    }
    return () => mediaQuery.removeEventListener('change', handleMediaQuery)
  },[handleMediaQuery, query, deviceType])
  console.log(isSmallScreen)
  return isSmallScreen
}
