import styled from '@emotion/styled'

export interface NavButtonProps {
  isActive?: boolean
  shouldHighlight?: boolean
  className?: string
}

const NavButton = styled.button<NavButtonProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 60px;
  background: ${({ theme, isActive }) =>
    isActive ? theme.color.blue[500] : theme.color.blue[700]};
  border: none;
  svg,
  img {
    margin-right: 16px;
  }
  &:hover {
    background: ${({ theme }) => theme.color.blue[600]};
  }
  &::after {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    bottom: 0;
    transition: width 0.3s;
    background: ${({ theme }) => theme.color.white[100]};
  }
  ${({ shouldHighlight }) =>
    shouldHighlight
      ? `
      &:hover::after {
        width: 100%;
      }
      &::after {
        width: ${({ isActive }) => (isActive ? '100%' : 0)};
      }
      `
      : ''}
`
export default NavButton
