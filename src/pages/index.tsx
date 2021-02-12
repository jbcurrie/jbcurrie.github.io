import styled from '@emotion/styled'
import { Navbar } from '../components/Navbar'

interface HomeProps {
  className?: string
}

function Home({ className }: HomeProps) {
  return (
    <div className={className}>
      <Navbar />
      <div id={'#home'}></div>
      <div id={'#about'}></div>
      <div id={'#portfolio'}></div>
      <div id={'#contact'}></div>
    </div>
  )
}

export default styled(Home)`
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-areas:
    'nav nav'
    'main main';
  grid-template-rows: 60px 1fr;
`
