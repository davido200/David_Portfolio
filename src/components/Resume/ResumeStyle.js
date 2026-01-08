import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
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

export const SubTitle = styled.div`
    font-size: 20px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ResumeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background: ${({ theme }) => theme.card};
    border-radius: 16px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    margin-top: 30px;
    max-width: 900px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    padding-bottom: 8px;
    margin-bottom: 12px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const ItemTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

export const ItemSubtitle = styled.h4`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
`;

export const ItemDate = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media (min-width: 768px){
        display: none;
    }
`;

export const ItemContent = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    line-height: 1.5;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ListItem = styled.li`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    display: flex;
    align-items: flex-start;
    &:before {
        content: "•";
        color: ${({ theme }) => theme.primary};
        font-weight: bold;
        display: inline-block; 
        width: 1em;
        margin-left: -1em;
    }
    padding-left: 1em;
`;

export const SkillWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

export const Skill = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 80};
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    background: ${({ theme }) => theme.bgLight};
    border-radius: 12px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const DownloadButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

export const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
`;
