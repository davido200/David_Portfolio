import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, SectionLabel, StatsContainer, StatCard, StatValue, StatLabel } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { githubStats, projectFilters, projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('All');
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);
  const filteredProjects = toggle === 'All'
    ? projects
    : projects.filter((project) => project.category === toggle || project.tags?.includes(toggle));

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Analytics, BI, SQL, and machine learning projects focused on business questions, measurable outputs, and practical reporting workflows.
        </Desc>
        <SectionLabel>Featured Projects</SectionLabel>
        <CardContainer>
          {featuredProjects.map((project) => (
            <ProjectCard key={`featured-${project.id}`} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
        </CardContainer>
        <ToggleButtonGroup >
          {projectFilters.map((filter, index) => (
            <React.Fragment key={filter}>
              <ToggleButton active={toggle === filter} value={filter} onClick={() => setToggle(filter)}>
                {filter}
              </ToggleButton>
              {index < projectFilters.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <SectionLabel>{toggle === 'All' ? 'All Projects' : `${toggle} Projects`}</SectionLabel>
        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
        </CardContainer>
        <SectionLabel>GitHub Activity</SectionLabel>
        <StatsContainer>
          {githubStats.map((stat) => (
            <StatCard key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
