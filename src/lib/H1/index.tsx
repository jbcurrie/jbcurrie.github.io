import styled from '@emotion/styled'

export default styled.h1`
  --minFontSize: 32px;
  --maxFontSize: 64px;
  --scaler: 10vw;
  font-size: clamp(var(--minFontSize), var(--scaler), var(--maxFontSize));
  color: ${({ theme }) => theme.color.white[100]};
`
