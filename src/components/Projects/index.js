import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From data analysis to web scraping. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Python Projects' ?
            <ToggleButton active value="Python Projects" onClick={() => setToggle('Python Projects')}>Python</ToggleButton>
            :
            <ToggleButton value="Python Projects" onClick={() => setToggle('Python Projects')}>Python</ToggleButton>
          }
          <Divider />
          {toggle === 'WEB Scraping' ?
            <ToggleButton active value="WEB Scraping" onClick={() => setToggle('WEB Scraping')}>WEB Scraping</ToggleButton>
            :
            <ToggleButton value="WEB Scraping" onClick={() => setToggle('WEB Scraping')}>WEB Scraping</ToggleButton>
          }
          <Divider />
          {toggle === 'Data Analysis' ?
            <ToggleButton active value="Data Analysis" onClick={() => setToggle('Data Analysis')}>Data Analysis</ToggleButton>
            :
            <ToggleButton value="Data Analysis" onClick={() => setToggle('Data Analysis')}>Data Analysis</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects