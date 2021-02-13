import { FC } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import HeroCard from './HeroCard'

interface HeaderProps {
  className?: string
}
const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <Image
        src="/portrait.png"
        alt="Jonathan's Headshot"
        layout={'fill'}
        objectFit={'cover'}
      />
    </header>
  )
}

export default styled(Header)`
  display:flex;
  flex: 1;
  position: relative;
  ${({theme}) => `
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
        `linear-gradient(180deg, transparent 0%, ${theme.color.blue[600]} 98.96%)`};
    }
  }
`
