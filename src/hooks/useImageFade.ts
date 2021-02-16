import { useEffect } from "react"

export default function useImageFade (className: string, isReverse?: boolean) {
  useEffect(() => {
    const target: HTMLImageElement = document.querySelector(`${className}`)
    const ratio = () => {
      const ratios = [0.0]
      let i = 0
      while (ratios[i] < 1) {
        ratios.push((ratios[i] += 0.01))
        i++
      }
      return ratios
    }

    const options = {
      root: document.querySelector('.intersection'),
      rootMargin: '0px',
      threshold: ratio(),
    }
    const callback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
    ) => {
      entries.forEach((entry) => {
        const opacity = String(entry.intersectionRatio < .9 ? entry.intersectionRatio: 1)
        const reverseOpacity = String(entry.intersectionRatio)
        target.style.opacity = isReverse ? reverseOpacity : opacity
      })
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(target)
  },[className, isReverse])
}