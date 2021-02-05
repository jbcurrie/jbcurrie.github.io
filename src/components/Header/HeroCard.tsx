import { FC } from "react"
import styled from '@emotion/styled'
import { H1, H2 } from "../../lib"

interface HeroCardProps {
  className?:string
  title: string
  subtitle: string
}
const HeroCard:FC<HeroCardProps> = ({className, title, subtitle}) => {
  return <div className={className}>
    <H1>{title}</H1>
    <H2>{subtitle}</H2>
  </div>
}

export default styled(HeroCard)`
  position: absolute;
  top: 50%;
  display: grid;
  grid-gap: 1rem;
  transform: translate(-50%,-50%);
  left: 25%;
  h1, h2 {
    background: ${({theme}) => theme.color.black[700]};
    text-align: center;
    padding: 8px;
  }

`