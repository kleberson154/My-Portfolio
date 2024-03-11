import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

//theme
import { lightTheme } from '../components/Themes'

//components
import LogoComponent from '../components/LogoComponent'
import SocialIcons from '../components/SocialIcons'
import PowerButton from '../components/PowerButton'
import ParticleComponent from '../components/ParticleComponent'

import { Certificate } from '../data/WorkData'
import CardCert from '../components/CardCert'
import { YinYang } from '../components/AllSvgs'

//style
// const Box = styled.div`
//   background-color: ${props => props.theme.body};
//   height: auto;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   user-select: none;
// `

const Main = styled(motion.div)`
  position: absolute;
  top: 6rem;
  left: 5.5rem;
  padding-bottom: 5rem;
  padding-right: 5.5rem;
  display: grid;
  gap: 1.5rem;
  padding-bottom: 5rem;
  /* @media (max-width: 1348px) {
    top: 6rem;
    left: 8rem;
    right: 2rem;
  } */

  @media (max-width: 500px) {
    padding-right: 1.5rem;
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

//html
const Certificates = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <ThemeProvider theme={lightTheme}>
        {/* <Box> */}
        <LogoComponent theme="light" />

        <SocialIcons theme="light" />
        <PowerButton alt="Go to HomePage" />
        <ParticleComponent />

        <Main variants={container} initial="hidden" animate="show">
          {Certificate.map(d => (
            <CardCert key={d.id} data={d} />
          ))}
        </Main>

        {/* </Box> */}
      </ThemeProvider>
    </motion.div>
  )
}

export default Certificates
