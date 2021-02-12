import { FC } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { H2 } from '../../lib'
import { NavButton } from '.'

interface NavLinkProps {
  className?: string
  title: string
  href?: string
  onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
}
const NavLink: FC<NavLinkProps> = ({
  className,
  title,
  children,
  href,
  onClick
}) => {
  const router = useRouter()
  return (
    <Link href={href} passHref>
      <NavButton isActive={router.asPath.includes(href)} onClick={onClick}>
        {children}
        <A className={className}>
          <H2>{title}</H2>
        </A>
      </NavButton>
    </Link>
  )
}

export default styled(NavLink)`
`


const A = styled.a`
  text-decoration: none;
`
