import { Link } from 'react-router-dom';
import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, SecondaryButton, ButtonRow, SpecialtyList, Specialty } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>{Bio.name}</Title>
                        <TextLoop>
                            {Bio.headline}
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SpecialtyList>
                            {Bio.specialties.map((specialty) => (
                                <Specialty key={specialty}>{specialty}</Specialty>
                            ))}
                        </SpecialtyList>
                        <ButtonRow>
                            <ResumeButton as={Link} to='/resume'>Download Resume</ResumeButton>
                            <SecondaryButton href={Bio.github} target="_blank" rel="noreferrer">GitHub</SecondaryButton>
                            <SecondaryButton href={Bio.linkedin} target="_blank" rel="noreferrer">LinkedIn</SecondaryButton>
                            <SecondaryButton href="#contact">Contact Me</SecondaryButton>
                        </ButtonRow>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection
