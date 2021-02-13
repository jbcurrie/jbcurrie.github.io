import styled from '@emotion/styled'
import Image from 'next/image'
import { FC, useState } from 'react'
import { NavLink } from '.'
import { FaUserAstronaut, FaTh, FaEnvelope } from 'react-icons/fa'
import useMediaQuery from '../../hooks/useMediaQuery'
import NavMenu from './NavMenu'
import { css, Theme } from '@emotion/react'

interface NavbarProps {
  className?: string
  activeTab?: string
}

const Navbar: FC<NavbarProps> = ({ className, activeTab }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className={className}>
      <div css={(theme) => overlayCss(theme, isExpanded)} />
      <div
        className={'nav-left'}
        css={(theme) => navLeftCss(theme, isExpanded)}
      >
        <NavLink
          onClick={(e) => setIsExpanded(false)}
          title={'JC'}
          href={'/#home'}
          shouldHighlight={false}
        >
          <ImageWrapper>
            <Image
              src={'/portrait.png'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </ImageWrapper>
        </NavLink>
      </div>
      <NavMenu isExpanded={isExpanded} onExpand={setIsExpanded}>
        <NavLink
          onClick={(e) => setIsExpanded(false)}
          title={'About'}
          href={'/#about'}
        >
          <FaUserAstronaut size={22} color={'#fcfcfc'} />
        </NavLink>
        <NavLink
          onClick={(e) => setIsExpanded(false)}
          title={'Portfolio'}
          href={'/#portfolio'}
        >
          <FaTh size={22} color={'#fcfcfc'} />
        </NavLink>
        <NavLink
          onClick={(e) => setIsExpanded(false)}
          title={'Contact'}
          href={'/#contact'}
        >
          <FaEnvelope size={22} color={'#fcfcfc'} />
        </NavLink>
      </NavMenu>
    </div>
  )
}

export default styled(Navbar)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.color.blue[700]};
  padding: 0 24px;
  z-index: 1;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  img {
    border-radius: 200px;
  }
`
const navLeftCss = (theme: Theme, isExpanded: boolean) => css`
  display: flex;
  ${theme.mq.medium} {
    ${isExpanded
      ? `
      flex: 1;
      button {
        justify-content: flex-start;
      }
    `
      : `
      justify-content: space-evenly;
    `}
  }
`

const overlayCss = (theme: Theme, isExpanded: boolean) => css`
  position: fixed;
  width: 0;
  height: 0;
  transition: ${theme.transition.all};
  ${theme.mq.medium} {
    ${isExpanded
      ? `
      width: 100vw;
      height: 100vh;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background:${theme.color.blue[700]};
      opacity: 40%;
      `
      : `
  `}
  }
`
