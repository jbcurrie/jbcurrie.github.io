import styled from '@emotion/styled'
import { FC } from 'react'
import { NavButton } from '.'
import useMediaQuery from '../../hooks/useMediaQuery'
import { FiMenu, FiX } from 'react-icons/fi'
import { css } from '@emotion/react'

interface NavMenuProps {
  className?: string
  isExpanded: boolean
  onExpand: (isExpanded: boolean) => void
}
const NavMenu: FC<NavMenuProps> = ({ className, children, isExpanded, onExpand}) => {
  const isSmallScreen = useMediaQuery()
  return (
    <Wrapper
      className={className}
      css={isSmallScreen ? smallScreenStyles(isExpanded) : css``}
    >
      {isSmallScreen ? (
        <NavButton onClick={() => onExpand(!isExpanded)}>
          {isExpanded ? (
            <FiX color={'#fcfcfc'} size={22} />
          ) : (
            <FiMenu color={'#fcfcfc'} size={22} />
          )}
        </NavButton>
      ) : null}
      {children}
    </Wrapper>
  )
}

export default styled(NavMenu)`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
`

const Wrapper= styled.div`
  
`
const smallScreenStyles = (isExpanded: boolean) => css`
  ${isExpanded
    ? `
    position: fixed;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all .3s;
    button:not(:nth-of-type(1)) {
      display: flex;
    }
    button:nth-of-type(1) {
      justify-content: center;
    }
  `
    : `
    align-items: flex-end;
    button:not(:nth-of-type(1)) {
      display: none;
    }
    button:nth-of-type(1) {
      justify-content: flex-end;
    }
  `}
`
