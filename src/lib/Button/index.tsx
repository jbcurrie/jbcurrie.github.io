import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'

interface ButtonProps {
  className?: string
  size?: Sizes
}
export enum Sizes {
  small = 'small',
  normal = 'normal',
  large = 'large',
}

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.blue[400]};
  border: none;
  border-radius: 50px;
  padding: 8px 16px;
  ${({size, theme}) => sizes(theme, size)}
`
const Primary = styled(Button)`
  border: 1px solid ${({ theme }) => theme.color.white[100]};
`

const sizes = (theme: Theme, size: Sizes) => {
  switch (size) {
    case 'small':
      return css`
        height: 32px;
        width: 50px;
      `
    case 'normal':
      return css`
        height: 40px;
        width: 100px;
      `
    case 'large':
      return css`
        height: 56px;
        width: 200px;
      `
    default:
      return css`
        height: 40px;
        width: 100px;
      `
  }
}


export default Object.assign(Button, {Primary})