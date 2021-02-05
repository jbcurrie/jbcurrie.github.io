import { FC } from 'react'

import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from 'next/image'
import HeroCard from './HeroCard'
interface HeaderProps {
  className?: string
}
const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <Image
        src='/headshot_noir.jpg'
        alt="Jonathan's Headshot"
        layout={'fill'}
        objectFit='cover'
        quality={100}
        priority={true}
      />
      <HeroCard title={'Jonathan Currie'} subtitle={'Web Developer'} />
    </header>
  )
}

export default styled(Header)`
  img {
    opacity: 0.75;
  }
`
