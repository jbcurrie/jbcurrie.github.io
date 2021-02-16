import styled from '@emotion/styled'
import { FC } from 'react'
import Image from 'next/image'
import useImageFade from '../../hooks/useImageFade'

interface ImageHeaderProps {
  src: string
  className?: string
}

const ImageHeader: FC<ImageHeaderProps> = ({ className, src }) => {
  useImageFade('.header-img', true)
  return (
    <div className={className}>
      <Image
        src={src}
        alt={'header'}
        objectFit={'cover'}
        layout={'fill'}
        className={'header-img'}
      />
    </div>
  )
}

export default styled(ImageHeader)`
  position: sticky;
  top: 60px;
  display: flex;
  flex-direction: column;
  flex: 0 0 20%;
  margin: 24px 0;
  > div {
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0.6;
      background: ${({ theme }) =>
        `linear-gradient(180deg, transparent 0%, ${theme.color.blue[600]} 90%)`};
    }
  }
`
