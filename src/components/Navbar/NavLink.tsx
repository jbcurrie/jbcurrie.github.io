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
  shouldHighlight?: boolean
  onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
}
const NavLink: FC<NavLinkProps> = ({
  className,
  title,
  children,
  href,
  shouldHighlight = true,
  onClick
}) => {
  const router = useRouter()
  return (
    <Link href={href} passHref scroll={false}>
      <NavButton isActive={router.asPath.includes(href)} onClick={onClick} shouldHighlight={shouldHighlight}>
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
