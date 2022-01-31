import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avator from '../images/avator.jpg';
import profilepic from '../images/profilepic.jpeg';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={profilepic} alt=""/>
                <h6>Shivam Sukhija</h6>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" className={({isActive}) => (isActive ? "active-class" : 'none')} exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={({isActive}) => (isActive ? "active-class" : 'none')} exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" className={({isActive}) => (isActive ? "active-class" : 'none')} exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" className={({isActive}) => (isActive ? "active-class" : 'none')} exact>Projects</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink to="/contact" className={({isActive}) => (isActive ? "active-class" : 'none')} exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@ Made by <b>Shivam Sukhija</b></p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
     
    .avatar{
        width: 80%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        h6{
            padding-top:1rem;
            color: #a4acc4;
        }
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }
    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;