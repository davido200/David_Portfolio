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
          I have worked on a wide range of projects. From Analysis to Machine Learning. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Analysis' ?
            <ToggleButton active value="Analysis" onClick={() => setToggle('Analysis')}>Analysis</ToggleButton>
            :
            <ToggleButton value="Analysis" onClick={() => setToggle('Analysis')}>Analysis</ToggleButton>
          }
          <Divider />
          {toggle === 'Data Visualization' ?
            <ToggleButton active value="Data Visualization" onClick={() => setToggle('Data Visualization')}>Data Visualization</ToggleButton>
            :
            <ToggleButton value="Data Visualization" onClick={() => setToggle('Data Visualization')}>Data Visualization</ToggleButton>
          }
          <Divider />
          {toggle === 'Machine Learning' ?
            <ToggleButton active value="Machine Learning" onClick={() => setToggle('Machine Learning')}>Machine Learning</ToggleButton>
            :
            <ToggleButton value="Machine Learning" onClick={() => setToggle('Machine Learning')}>Machine Learning</ToggleButton>
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