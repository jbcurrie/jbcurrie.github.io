import styled from '@emotion/styled'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Navbar } from '../components/Navbar'
import { useMediaQuery } from '../hooks'



function Home({ className ,userAgent}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(userAgent)
  const isSmallScreen = useMediaQuery('768', userAgent)
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
/**
 * server side props
 */

 export const getServerSideProps: GetServerSideProps = async ({req}) => {
   return {
     props: {
       userAgent: req.headers['user-agent']
     }
   }
 }