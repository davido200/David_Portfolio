import React from 'react'
import styled from 'styled-components'


const Button = styled.a`
    width: 100%;
    padding: 11px 12px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        filter: brightness(1.12);
        transform: translateY(-1px);
    }
`
const Card = styled.div`
    width: 330px;
    min-height: 520px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid ${({ theme, featured }) => featured ? theme.primary : theme.text_secondary + 20};
    box-shadow: 0 14px 34px rgba(0,0,0,0.28);
    overflow: hidden;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.25s ease-in-out;
    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 18px 44px rgba(0,0,0,0.42);
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    background-color: ${({ theme }) => theme.white};
    border-radius: 8px;
    box-shadow: 0 10px 24px rgba(0,0,0,0.26);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 4px 8px;
    border-radius: 999px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Metrics = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: auto;
`
const Metric = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary};
    background: ${({ theme }) => theme.bgLight};
    border: 1px solid ${({ theme }) => theme.text_secondary + 20};
    border-radius: 8px;
    padding: 7px 9px;
`

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card featured={project.featured} onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image} alt={project.title} loading="lazy"/>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag key={`${project.id}-${tag}-${index}`}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Metrics>
                {project.metrics?.slice(0, 3).map((metric, index) => (
                    <Metric key={`${project.id}-metric-${index}`}>{metric}</Metric>
                ))}
            </Metrics>
            <Button
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
            >
                View Project Code
            </Button>
        </Card>
    )
}

export default ProjectCards
