import styled from '@emotion/styled'

const Text = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.white[100]};
`

const Light = styled(Text)`
  color: ${({ theme }) => theme.color.grey[100]};
`

export default Object.assign(Text, {Light})
