import React from 'react';
import styled from 'styled-components';
import Title from '../components/title';
import { InnerLayout, MainLayout } from '../styles/layout';
import { useState } from 'react';
import Menu from '../components/menu';
import project from '../data/projects';
import Buttons from './../components/buttons';


const allButtons = ['All', ...new Set(project.map(item => item.category))]
const Projects = () => {
    const [menuItem,setMenuItems] = useState(project);
    const [buttons,setButtons] = useState(allButtons);
    const filter = (buttons) => {

        if(buttons === 'All'){
            setMenuItems(project);
            return;
        }

        const filteredData = project.filter(item => item.category === buttons);
        setMenuItems(filteredData);
    }
    return ( <MainLayout>
        <ProjectsStyled>
        <Title 
        title={'projects'}
        span={'projects'}
        />
        <InnerLayout>
        <Buttons filter={filter} button={buttons} />
        <Menu mitem={menuItem}/>
        </InnerLayout>



    </ProjectsStyled>
    </MainLayout> );
}
 const ProjectsStyled = styled.div`
 `;
export default Projects;