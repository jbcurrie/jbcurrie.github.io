import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import HeroCard from './HeroCard'
import { css } from '@emotion/react'
import useImageFade from '../../hooks/useImageFade'

interface HeaderProps {
  className?: string
}
const Header: FC<HeaderProps> = ({ className }) => {
  useImageFade('.hero-img')
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
        `linear-gradient(180deg, transparent 0%, ${theme.color.blue[600]} 90%)`};
    }
    img {
    }
  }
`