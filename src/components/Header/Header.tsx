import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import HeroCard from './HeroCard'
import { css } from '@emotion/react'

interface HeaderProps {
  className?: string
}
const Header: FC<HeaderProps> = ({ className }) => {
  useEffect(() => {
    const target: HTMLImageElement = document.querySelector('.hero-img')
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
        target.style.opacity = String(entry.intersectionRatio < .9 ? entry.intersectionRatio: 1)
      })
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(target)
    return (observer.unobserve(target))
  })
  return (
    <header className={className}>
      <Image
        src="/portrait.png"
        alt="Jonathan's Headshot"
        layout={'fill'}
        objectFit={'cover'}
        className={'hero-img'}
      />
    </header>
  )
}

export default styled(Header)`
  display: flex;
  flex: 1;
  position: relative;
  ${({ theme }) => `
    ${theme.mq.small} {
      flex: 2;
    }
  `}
  > div {
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0.6;
      background: ${({ theme }) =>
        `linear-gradient(180deg, transparent 0%, ${theme.color.blue[600]} 100%)`};
    }
    img {
    }
  }
`