import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</NavLink>
          <NavLink href='#skills' onClick={(e) => handleNavClick(e, 'skills')}>Skills</NavLink>
          <NavLink href='#experience' onClick={(e) => handleNavClick(e, 'experience')}>Experience</NavLink>
          <NavLink href='#projects' onClick={(e) => handleNavClick(e, 'projects')}>Projects</NavLink>
          <NavLink href='#education' onClick={(e) => handleNavClick(e, 'education')}>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</MobileLink>
            <MobileLink href='#skills' onClick={(e) => handleNavClick(e, 'skills')}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={(e) => handleNavClick(e, 'experience')}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={(e) => handleNavClick(e, 'projects')}>Projects</MobileLink>
            <MobileLink href='#education' onClick={(e) => handleNavClick(e, 'education')}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar