import styled from 'styled-components';
import React from 'react';
import ProgressBar from './progressbar';
import { InnerLayout } from '../styles/layout';



const Skills = () => {
    return ( <SkillsStyled>
        
        <InnerLayout>
            <div className="skills">
            <ProgressBar 
           title={'C++'}
            width ={'90%'}
            text ={'90%'}
            />
             <ProgressBar 
           title={'Javascript'}
            width ={'80%'}
            text ={'80%'}
            />
             <ProgressBar 
           title={'React.js'}
            width ={'75%'}
            text ={'75%'}
            />
             <ProgressBar 
           title={'HTML'}
            width ={'85%'}
            text ={'85%'}
            />
             <ProgressBar 
           title={'CSS'}
            width ={'80%'}
            text ={'80%'}
            />
             <ProgressBar 
           title={'Node.js'}
            width ={'80%'}
            text ={'80%'}
            />
            
            </div>
        </InnerLayout>
           
    </SkillsStyled> );
}
 const SkillsStyled =styled.div`
 .skills{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
}
 `;
export default Skills;