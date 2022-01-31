import Work from '@mui/icons-material/Work';
import React from 'react';
import styled from 'styled-components';
import SmallTitle from './smalltitle';
//import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ResumeItem from './resumeitem';
import SchoolIcon from '@mui/icons-material/School';

const Resume = () => {
    return ( <ResumeStyled>
        <div className="small-title">
        <SmallTitle 
        title={'Experience'}
        icon = {<BusinessCenterIcon/>}
        />
        </div>
        <div className="resume-content">
                    <ResumeItem 
                        year={'July-Sept 2021'} 
                        title={'Cloud Security Intern'}
                        subTitle={'Virtually Testing Foundation'}
                        text={'Hands on learning experience of  working  on AWS cloud platform and perform cloud security tasks'} 
                    />
         </div>
         <div className="small-title u-small-title-margin">
             <SmallTitle 
             title={'Education'}
             icon={<SchoolIcon/>}
             />
         </div>
         <div className="resume-content">
         <ResumeItem className="resume"
                        year={'2019 - 2023'} 
                        title={'Bachelor of Technology (B.Tech.)'}
                        subTitle={'Delhi Technology University'}
                        textb={'CGPA (till 4th Sem): 9.44/10'}
                        
                        text2={' ⦿ Event Head  INNOVA (Techno-Management fest of DTU): Organized and managed events in the virtual fest - INNOVA’21'} 
                        text3={'⦿ Logistic Head in YUVAAN  (Literature fest of DTU):  Execution and handling of Webinars held by YUVAAN '} 
                    />
         <ResumeItem className="resume"
                        year={'2017-2019'} 
                        title={'Higher Secondary School Certificate (Class XII))'}
                        subTitle={'Delhi Public School: Vasant Kunj'}
                        textb={'Percentage:93.4%'}
                        
                        text2={' ⦿ Scholar Badge reciever for excellence in academics in Class XI'} 
                         
                    />
        <ResumeItem className="resume"
                        year={'2012-2017'} 
                        title={' Secondary School Certificate (Class X))'}
                        subTitle={'Our Lady of Fatima Convent School:Gurgaon'}
                        textb={'CGPA:10/10'}
                        
                        text2={' ⦿ Finance Head of the School in Class X'}
                        text3={'⦿ House Captain in Class IX'} 
                         
                    />
         </div>
    </ResumeStyled> );
}
const ResumeStyled = styled.section`
.small-title{
    padding-top: 1.3rem;
    padding-bottom: 3rem;
}
.u-small-title-margin{
    margin-top: 2rem;
}
.resume-content{
    border-left: 2px solid var(--border-color);
}
.resume{
    align-items: left;
}
`;
export default Resume;