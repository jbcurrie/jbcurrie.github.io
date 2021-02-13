import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Header } from '../components/Header'
import HeroCard from '../components/Header/HeroCard'
import { Navbar } from '../components/Navbar'
import { Text } from '../lib'

function Home({ className }) {
  return (
    <div className={className}>
      <Navbar />
      <main>
      <Wrapper id={'home'} >
        <Header />
        <HeroCard title={'Jonathan Currie'} subtitle={'Software Developer'}>
          <Text.Light>
            {
              "This is a description of who I am and what I do. This is a really cool description, and I'm happy I wrote it!"
            }
          </Text.Light>
        </HeroCard>
      </Wrapper>
      <Wrapper id={'about'}></Wrapper>
      <Wrapper id={'portfolio'}></Wrapper>
      <Wrapper id={'contact'}></Wrapper>
      </main>
    </div>
  )
}

export default styled(Home)`
  height: 100vh;
  position: relative;
  overflow: auto;
`

export const Wrapper = styled.div`
  height: calc(100vh - 60px);
  position: relative;
  display: flex;
  ${({theme}) => `
    ${theme.mq.small} {
      flex-direction: column;
    }
  `}
`
