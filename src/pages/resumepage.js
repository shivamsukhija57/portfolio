import React from "react";
import styled from 'styled-components';
import Skills from "../components/skills";
import Title from "../components/title";
import { MainLayout } from "../styles/layout";
import Resume from './../components/resume';
const ResumePage = () => {
    return ( <MainLayout>
        <Title title={'my skills'} span={'my skills'}/>
        <Skills/>
        <Title title={'resume'} span={'resume'}/>
        <Resume/>

    </MainLayout>
         );
}
 const ResumePageStyled = styled.div`
 `;
export default ResumePage;