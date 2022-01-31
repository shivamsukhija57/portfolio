import React from 'react';
import styled from 'styled-components';
import AboutSection from '../components/aboutsection';
import Title from '../components/title';
import { MainLayout } from '../styles/layout';

const About = () => {
    return (  <MainLayout>
            <AboutStyled>
            <Title title={'About Me'} span={'About Me'} />
            <AboutSection/>
            </AboutStyled>
    </MainLayout>
    );
}
const AboutStyled = styled.section`
    
`;
export default About;