import styled from '@emotion/styled'
import Image from 'next/image'
import { FC, useState } from 'react'
import { NavLink } from '.'
import { FaUserAstronaut, FaTh, FaEnvelope } from 'react-icons/fa'
import useMediaQuery from '../../hooks/useMediaQuery'
import NavMenu from './NavMenu'
interface NavbarProps {
  className?: string
  activeTab?: string
}
const Navbar: FC<NavbarProps> = ({ className, activeTab }) => {
  const isSmallScreen = useMediaQuery()
  const [isExpanded, setIsExpanded] = useState(false)
  console.log(isSmallScreen)
  return (
    <div className={className}>
      <div className={'nav-left'}>
        <NavLink
          onClick={(e) => setIsExpanded(false)}
          title={'Jonathan Currie'}
          href={'/#home'}
        >
          <ImageWrapper>
            <Image
              src={'/portrait.png'}
              layout={'fill'}
              objectFit={'cover'}
              quality={75}
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
  grid-area: nav;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  background: ${({ theme }) => theme.color.blue[700]};
  padding: 0 24px;
  .nav-left {
    display: flex;
    justify-content: space-evenly;
  }
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
