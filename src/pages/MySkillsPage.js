import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

//theme
import { lightTheme } from '../components/Themes'
import { Design, Develope } from '../components/AllSvgs'

//components
import LogoComponent from '../components/LogoComponent'
import SocialIcons from '../components/SocialIcons'
import PowerButton from '../components/PowerButton'
import ParticleComponent from '../components/ParticleComponent'
import SoundBar from '../components/SoundBar'

//style
const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 92vw;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 500px) {
    height: 8rem;
  }
`

const Tab = styled(motion.div)`
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 3rem;
  position: relative;
  left: -1rem;
  top: 140px;

  @media (max-width: 875px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    left: 23%;
    padding-bottom: 2rem;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 0 2rem;
  width: 30vw;
  height: auto;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color ease 0.5s;

  h2 {
    transition: color ease 0.5s;
  }
  svg {
    transition: fill ease 0.5s;
  }
  div {
    transition: color ease 0.5s;
  }

  &:hover {
    background-color: ${props => props.theme.text};
    h2 {
      color: ${props => props.theme.body};
    }
    div {
      color: ${props => props.theme.body};
    }
    svg {
      fill: ${props => props.theme.body};
    }
  }
  @media (max-width: 900px) {
    width: 18rem;
    padding: 0 1rem;
    justify-content: space-around;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  color: ${props => props.theme.text};

  & > *:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 17px;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.2em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
  @media (max-width: 1050px) {
    font-size: calc(0.5em + 1vw);
    padding: 0;
  }
`
const Liskill = styled.li`
  font-size: calc(0.2em + 1vw);
  @media (max-width: 1050px) {
    font-size: calc(0.5em + 1vw);
  }
`

const Ulskill = styled.ul`
  padding: 0;
  margin-left: 0;
`

//html
const MySkillsPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <ThemeProvider theme={lightTheme}>
        <Box>
          <LogoComponent theme="light" />
          <SoundBar />
          <SocialIcons theme="light" />
          <PowerButton alt="Go to HomePage" />
          <ParticleComponent />

          <Tab
            initial={{
              opacity: 0,
              y: 200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
          >
            <Main>
              <Title>
                <Design width={40} height={40} /> Designer
              </Title>
              <Description>
                I love to create design which speaks, Keep it clean, minimal and
                simple.
              </Description>
              <Description>
                <strong>I LIKE TO DESIGN</strong>
                <Ulskill>
                  <Liskill>Web Design</Liskill>
                  <Liskill>UI/UX Design</Liskill>
                </Ulskill>
              </Description>
              <Description>
                <strong>Tools</strong>
                <Ulskill>
                  <Liskill>Figma</Liskill>
                </Ulskill>
              </Description>
            </Main>
            <Main>
              <Title>
                <Develope width={40} height={40} /> FullStack Developer
              </Title>
              <Description>
                I am a specialized JavaScript developer with skills in the main
                Front-End and Back-End frameworks
              </Description>
              <Description>
                <strong>SKILLS</strong>
                <Ulskill>
                  <Liskill>
                    Html, Css, Js, TypeScript, React, NextJs, ChakraUI,
                    Styled-Components, Bootstrap, Sass, NodeJs, MySQL.
                  </Liskill>
                </Ulskill>
              </Description>
              <Description>
                <strong>Tools</strong>
                <Ulskill>
                  <Liskill>VScode, Github, Codepen etc.</Liskill>
                </Ulskill>
              </Description>
            </Main>
          </Tab>
        </Box>
      </ThemeProvider>
    </motion.div>
  )
}

export default MySkillsPage
