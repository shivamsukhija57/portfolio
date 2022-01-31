import React from 'react';
import  styled  from 'styled-components';
import Navigation from './navigation';

function Sidebar() {
    return (
        <SidebarStyled>
            <Navigation/>
        </SidebarStyled>
    );
}
const SidebarStyled=styled.div`
width:16.3rem;
height:100vh;
position:fixed;
opacity:1;
overflow: hidden;
background-color:var(--sidebar-dark-color);
transition: all .4s ease-in-out;
@media screen and (max-width:1200px){
    transform: translateX(-100%);
    z-index: 20;
}
`;
export default Sidebar;