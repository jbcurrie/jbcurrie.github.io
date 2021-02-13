import { FC } from 'react'
import styled from '@emotion/styled'
import { Button, H1, H2, Sizes, Text } from '../../lib'
import { useRouter } from 'next/router'

interface HeroCardProps {
  className?: string
  title: string
  subtitle: string
}
const HeroCard: FC<HeroCardProps> = ({
  className,
  title,
  subtitle,
  children,
}) => {
  const router = useRouter()
  return (
    <div className={className}>
      <H1>{title}</H1>
      <H2>{subtitle}</H2>
      {children}
      <Button.Primary size={Sizes.large} onClick={(e) => router.push('#contact')}>
        <H2>Contact Me</H2>
      </Button.Primary>
    </div>
  )
}

export default styled(HeroCard)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  h1,
  h2 {
    margin: 8px 0;
  }
  p {
    margin: 16px 0 24px;
  }
`
