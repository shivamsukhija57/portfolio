import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './primarybutton';
 
let age = new Date().getFullYear() - 2001; 

function AboutSection() {
    return (
        <AboutSectionStyled>
            <div className="left-content">
                <p className="paragraph">
                    I'm currently a Software Engineering Student in Delhi Technological University. 
                </p>
                <p>
                I have experience in front-end development and firebase for web apps and services and have knowledge about cloud computing and am eager to explore more fields of interest.
                  I like to explore , brainstorm myself upon things and loves to new face challenges and work upon them out of my comfort zone.
                </p>
            </div>
            <div className="right-content">
                
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>

                    </div>
                    <div className="info">
                        <p>: Shivam Sukhija</p>
                        <p>: {age}</p>
                        <p>: Indian </p>
                        <p>: English, Hindi </p>
                        <p>: Delhi, India</p>
                    </div>
                </div>
                <PrimaryButton title={'View Resume'} src={'https://drive.google.com/file/d/1uueBaYA2ukL7XIDAQ6y1k4hl2I75XVV1/view?usp=sharing'} />
            </div>
        </AboutSectionStyled>
    )
}


const AboutSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        flex: 7;
        padding-right: 60px;
        .paragraph{
            padding-bottom: 30px;
        }
    }
    .right-content{
        flex: 5;
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default AboutSection;