import React from 'react';
import styled from 'styled-components';
import SmallTitle from '../components/smalltitle';
import Title from '../components/title';
import PrimaryButton from '../components/primarybutton';
import { InnerLayout, MainLayout } from '../styles/layout';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactItem from '../components/contactitem';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import Alert from '@mui/material/Alert';
  import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
    const success =()=>toast.success(' Thankyou for reaching me out !, I will get in touch with you shortly', {
        theme:"dark",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    const errortoast =()=>toast.error('🦄 An error occurred, Please try again', {
        theme:"dark",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const handleSubmit =(e)=>{
        e.preventDefault();
        
        
         emailjs.sendForm('service_ahmjcrr', 'template_vurhp8d', e.target, 'user_ajFFJmqVXiXeOj7gWVFvj')
       .then((result) => {
        success();
        
         document.getElementById("form-details").reset();

       }, (error) => {
           errortoast();
           console.log(error.text);
           document.getElementById("form-details").reset();
           
       });

    }
    return ( <MainLayout>
        <ContactPageStyled>
        <Title 
        title={'contact'}
        span={'contact'}
        />
        <InnerLayout  className={'contact-section'}>
        <div className="left-content">
        <SmallTitle
        title={'Get In Touch'}
        />
        
            <form id='form-details' className='form' onSubmit={handleSubmit}>
            <ToastContainer
                    theme="dark"
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
        {/* Same as */}
        <ToastContainer />

                <div className="form-field">
                <label htmlFor="name"> Name </label>
                 <input type="text" id="name" name="name" required />
                </div>
                <div className="form-field">
                <label htmlFor='email'> Email </label>
                 <input type="email" id="email" name="email" required />
                </div>
                <div className="form-field">
                <label htmlFor="subject"> Subject  </label>
                 <input type="text" id="subject" name="subject" required />
                 

                </div>
                <div className="form-field">
                <label htmlFor ="Name">Description </label>
                <textarea name="textarea" id="textarea" cols="30" rows="10" name="message" ></textarea>
                </div>
                <div className="form-field f-button">
                
                    <PrimaryButton title={'Send Email'} />
                 </div>
            </form>
        </div>
        <div className="right-content">
        <ContactItem title={'Phone'} icon={<PhoneIcon/>} cont={'+91-9654129244'} />
        <ContactItem title={'Email'} icon={<EmailIcon/>} cont={'shivamsukhija57@gmail.com'} />
        </div>
       

        </InnerLayout>

    </ContactPageStyled>
    </MainLayout> );
}
 const ContactPageStyled = styled.div`
 .Toastify__toast-container {
     color:black;
}
 .contact-section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px){
        grid-template-columns: repeat(1, 1fr);
        .f-button{
            margin-bottom: 3rem;
        }
    }
    .right-content{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        @media screen and (max-width: 502px){
            width: 70%;
        }
    }
    .contact-title{
        h4{
            color: var(--white-color);
            padding: 1rem 0;
            font-size: 1.8rem;
        }
    }
    .form{
        width: 100%;
        @media screen and (max-width: 502px){
            width: 100%;
        }
        .form-field{
            margin-top: 2rem;
            position: relative;
            width: 100%;
            label{
                position: absolute;
                left: 20px;
                top: -19px;
                display: inline-block;
                background-color: var(--background-dark-color);
                padding:0 .5rem;
                color: inherit;
            }
            input{
                border: 1px solid var(--border-color);
                outline: none;
                background: transparent;
                height: 50px;
                padding:0 15px;
                width: 100%;
                color: inherit;
            }
            textarea{
                background-color: transparent;
                border: 1px solid var(--border-color);
                outline: none;
                color: inherit;
                width: 100%;
                padding: .8rem 1rem;
                resize: none;
            }
        }
        
    }
}
 `;
export default ContactPage;