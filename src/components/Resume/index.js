
import React from "react";
import styled from "styled-components";
import { experiences, education } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ResumeWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px; /* Space between sections */
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  display: inline-block;
  padding-bottom: 4px;
`;

const Item = styled.div`
  margin-bottom: 15px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 6px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const ItemTitle = styled.span`
  font-weight: 700;
`;

const ItemSubtitle = styled.span`
  font-style: italic;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const List = styled.ul`
  margin-top: 6px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-bottom: 4px;
  line-height: 1.5;
`;

const Resume = () => {
    return (
        <Container id="resume">
            <Wrapper>
                <Title>Resume</Title>
                <Desc>My Professional Journey and Education</Desc>
                <ResumeWrapper>
                    <Section>
                        <SectionTitle>Professional Experience</SectionTitle>
                        {experiences.map((experience) => (
                            <Item key={experience.id}>
                                <HeaderRow>
                                    <ItemTitle>
                                        {experience.company} — {experience.role}
                                    </ItemTitle>
                                    <ItemSubtitle>
                                        {experience.location} | {experience.date}
                                    </ItemSubtitle>
                                </HeaderRow>
                                <List>
                                    {experience.desc.map((point, index) => (
                                        <ListItem key={index}>{point}</ListItem>
                                    ))}
                                </List>
                            </Item>
                        ))}
                    </Section>

                    <Section>
                        <SectionTitle>Education</SectionTitle>
                        {education.map((edu) => (
                            <Item key={edu.id}>
                                <HeaderRow>
                                    <ItemTitle>{edu.school} — {edu.degree}</ItemTitle>
                                    <ItemSubtitle>{edu.date}</ItemSubtitle>
                                </HeaderRow>
                                <List>
                                    <ListItem>Grade: {edu.grade}</ListItem>
                                    <ListItem>{edu.desc}</ListItem>
                                </List>
                            </Item>
                        ))}
                    </Section>
                </ResumeWrapper>
            </Wrapper>
        </Container>
    );
};

export default Resume;
