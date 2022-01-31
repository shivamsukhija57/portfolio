import React from 'react';
import styled from 'styled-components';
import Particle from '../components/particle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home(props) {
    return (

       < HomePageStyled>
       <Particle/>
       
       <div className="typography">
           <h1>Hi, I'm <span className='name'>Shivam Sukhija</span></h1>
           
           <div className="icons">
           
               <a className="icon i-linkedin" href="https://www.linkedin.com/in/shivam-sukhija-67a194206" target="_blank">
               <LinkedInIcon/>
               </a>
           
        
               <a  className="icon i-github" href="https://github.com/shivamsukhija57" target="_blank">
               <GitHubIcon/>
               </a>
           
           
               <a className="icon i-twitter"href="https://twitter.com/shivamsukhija4" target="_blank">
               <TwitterIcon/>
               </a>
           

           </div>
       </div>
       </HomePageStyled>
    );
}
const HomePageStyled =styled.header`
width: 100%;
height: 100vh;
position: relative;
.particlejs{
    margin-left:16.3rem;
}
.typography{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    
    .icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon{
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover{
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
            }
            &:not(:last-child){
                margin-right: 1rem;
            }
            svg{
                margin: .5rem;
            }
        }
        .i-github{
            &:hover{
                border: 2px solid #5F4687;
                color: #5F4687;
            }
        }
        
    }
}


`;
export default Home;