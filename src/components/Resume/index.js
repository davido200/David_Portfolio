import React from 'react';

import { Bio } from '../../data/constants';
import {
    Container,
    Wrapper,
    Title,
    SubTitle,
    ResumeContainer,
    Section,
    SectionTitle,
    Item,
    ItemTitle,
    ItemSubtitle,
    ItemContent,
    List,
    ListItem,
    SkillWrap,
    Skill,
    DownloadButton,
    HeaderRow
} from './ResumeStyle';

const Resume = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Resume</Title>
                <SubTitle>My professional journey and skills</SubTitle>

                <ResumeContainer>
                    <HeaderRow>
                        <div>
                            <ItemTitle>KEMBOI K. DAVID</ItemTitle>
                            <ItemSubtitle>Data Analyst | Business Intelligence Analyst | Cloud Data Analyst</ItemSubtitle>
                            <ItemContent>📍 Milimani, Nakuru, Kenya | 📞 +254 724 006 182 | 📧 Dkemboi888@gmail.com</ItemContent>
                            <ItemContent>
                                <a href="https://www.linkedin.com/in/davidkemboi" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>🔗 LinkedIn</a> |
                                <a href="https://davido200.github.io/David_Portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}> 🌐 Portfolio</a>
                            </ItemContent>
                        </div>
                    </HeaderRow>

                    <Section>
                        <SectionTitle>Professional Profile</SectionTitle>
                        <ItemContent>
                            Data Analyst with 3+ years of experience delivering end-to-end analytics solutions across healthcare, consulting, and public-sector environments. Strong background in Business Intelligence, Cloud Data Platforms, ETL pipelines, and dashboarding. Proven ability to transform raw data into actionable insights using SQL, Python, Power BI, Tableau, and AWS. Adept at data quality management, stakeholder collaboration, and building scalable analytics solutions that drive business and operational impact.
                        </ItemContent>
                    </Section>

                    <Section>
                        <SectionTitle>Core Competencies</SectionTitle>
                        <SkillWrap>
                            <Skill>Data Analysis & Statistical Modeling</Skill>
                            <Skill>Business Intelligence & Dashboarding</Skill>
                            <Skill>Cloud Data Analytics (AWS)</Skill>
                            <Skill>ETL & Data Pipelines</Skill>
                            <Skill>Data Quality, Validation & Governance</Skill>
                            <Skill>Stakeholder Reporting & Decision Support</Skill>
                        </SkillWrap>
                    </Section>

                    <Section>
                        <SectionTitle>Technical Skills</SectionTitle>
                        <List>
                            <ListItem><strong>Data Analysis & Processing:</strong> Python (Pandas, NumPy), SQL, Excel</ListItem>
                            <ListItem><strong>Visualization & BI:</strong> Power BI, Tableau, Excel</ListItem>
                            <ListItem><strong>Databases:</strong> MySQL, PostgreSQL, SQL Server, Google BigQuery, AWS Aurora</ListItem>
                            <ListItem><strong>Cloud & ETL:</strong> AWS (Glue, Data Pipeline), Airbyte</ListItem>
                            <ListItem><strong>Programming & Web:</strong> Python, JavaScript, PHP, HTML</ListItem>
                            <ListItem><strong>Version Control:</strong> Git</ListItem>
                        </List>
                    </Section>

                    <Section>
                        <SectionTitle>Professional Experience</SectionTitle>

                        <Item>
                            <HeaderRow>
                                <ItemTitle>AMREF Kenya — Data Analyst</ItemTitle>
                                <ItemSubtitle>Turkana County | Nov 2024 – May 2025</ItemSubtitle>
                            </HeaderRow>
                            <List>
                                <ListItem>Delivered analytics insights that improved data-driven decision-making by 20% across health programs</ListItem>
                                <ListItem>Implemented advanced data quality and validation checks, achieving 98% data accuracy</ListItem>
                                <ListItem>Designed interactive Power BI dashboards to support program monitoring and executive reporting</ListItem>
                                <ListItem>Built and optimized ETL pipelines, reducing data processing time by 50%</ListItem>
                                <ListItem>Collaborated with healthcare professionals and policymakers to increase evidence-based strategy adoption</ListItem>
                                <ListItem>Trained staff on analytics tools, improving organizational data literacy by 35%</ListItem>
                            </List>
                        </Item>

                        <Item>
                            <HeaderRow>
                                <ItemTitle>Consultant — Data Analyst</ItemTitle>
                                <ItemSubtitle>Nakuru County | Sep 2021 – Nov 2024</ItemSubtitle>
                            </HeaderRow>
                            <List>
                                <ListItem>Automated data workflows, reducing manual reporting effort by 40%</ListItem>
                                <ListItem>Cleaned, transformed, and standardized datasets, improving data consistency by 65%</ListItem>
                                <ListItem>Developed BI dashboards in Tableau and Power BI for operational and management insights</ListItem>
                                <ListItem>Ensured analytics-ready datasets through strong data governance and integrity practices</ListItem>
                                <ListItem>Performed advanced analysis using SQL, Python (Pandas, NumPy)</ListItem>
                                <ListItem>Produced executive-ready analytical reports supporting strategic business decisions</ListItem>
                            </List>
                        </Item>

                        <Item>
                            <HeaderRow>
                                <ItemTitle>Murang’a County Health — Data Analyst (Attachment)</ItemTitle>
                                <ItemSubtitle>Murang’a County | May 2019 – Apr 2020</ItemSubtitle>
                            </HeaderRow>
                            <List>
                                <ListItem>Maintained 90%+ data accuracy through rigorous extraction and cleaning processes</ListItem>
                                <ListItem>Built BI documentation, training materials, and reporting templates</ListItem>
                                <ListItem>Analyzed large healthcare datasets to support hospital management decision-making</ListItem>
                                <ListItem>Ensured consistency and reliability of hospital performance metrics</ListItem>
                            </List>
                        </Item>
                    </Section>

                    <Section>
                        <SectionTitle>Education</SectionTitle>
                        <Item>
                            <HeaderRow>
                                <ItemTitle>Certificate in Data Analysis — Distinction</ItemTitle>
                                <ItemSubtitle>Turing College, Lithuania | 2024</ItemSubtitle>
                            </HeaderRow>
                        </Item>
                        <Item>
                            <HeaderRow>
                                <ItemTitle>Bachelor of Business Information Technology — Second Class Upper Division</ItemTitle>
                                <ItemSubtitle>Mount Kenya University, Thika | 2020 – 2024</ItemSubtitle>
                            </HeaderRow>
                        </Item>
                        <Item>
                            <HeaderRow>
                                <ItemTitle>Diploma in Business Information Technology — Credit</ItemTitle>
                                <ItemSubtitle>Mount Kenya University, Thika | 2018 – 2019</ItemSubtitle>
                            </HeaderRow>
                        </Item>
                    </Section>

                    <Section>
                        <SectionTitle>Certifications</SectionTitle>
                        <SkillWrap>
                            <Skill>AWS Certified Cloud Practitioner</Skill>
                            <Skill>SQL for Data Analysis</Skill>
                            <Skill>Data Analytics</Skill>
                            <Skill>Python Programmer Bootcamp</Skill>
                            <Skill>Data Visualization Certification</Skill>
                            <Skill>SQL + Tableau + Python Certification</Skill>
                        </SkillWrap>
                    </Section>
                </ResumeContainer>

                <br />
                <DownloadButton href={Bio.resume} target="_blank">Download Resume</DownloadButton>

            </Wrapper>
        </Container>
    )
}

export default Resume
