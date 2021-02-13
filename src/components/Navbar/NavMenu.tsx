import styled from '@emotion/styled'
import { FC } from 'react'
import { NavButton } from '.'
import useMediaQuery from '../../hooks/useMediaQuery'
import { FiMenu, FiX } from 'react-icons/fi'
import { css, Theme } from '@emotion/react'

interface NavMenuProps {
  className?: string
  isExpanded: boolean
  onExpand: (isExpanded: boolean) => void
}
const NavMenu: FC<NavMenuProps> = ({
  className,
  children,
  isExpanded,
  onExpand,
}) => {
  return (
    <div className={className}>
      <NavButton
        onClick={() => onExpand(!isExpanded)}
        shouldHighlight={false}
        css={(theme) => menuButtonCss(theme, isExpanded)}
      >
        {isExpanded ? (
          <FiX color={'#fcfcfc'} size={22} />
        ) : (
          <FiMenu color={'#fcfcfc'} size={22} />
        )}
      </NavButton>
      {children}
    </div>
  )
}

export default styled(NavMenu)`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  width: 0;
  ${({ theme, isExpanded}) => `
    ${theme.mq.medium} {
      ${isExpanded
          ? `
        position: fixed;
        flex-direction: column;
        top: 0;
        bottom: 0;
        right: 0;
        width: calc(100vw/2);
        height: 100vh;
        transition: ${theme.transition.all};
        flex-grow: 1;
        button:not(:nth-of-type(1)) {
          display: flex;
        }
      `
          : `
        position: relative;
        justify-content: flex-end;
        width: 0;
        right: 0;
        button:not(:nth-of-type(1)) {
          display: none;
        }
      `}
    }
  `}
`

const menuButtonCss = (theme: Theme, isExpanded: boolean) => css`
  display: none;
  ${theme.mq.medium} {
    display: flex;
    ${isExpanded
      ? `
      margin-right: 24px;
      flex: 0 0 60px;
      justify-content: flex-end;
    `
      : `
      justify-content: flex-end;
    `}
  }
`
