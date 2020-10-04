import React from 'react'
import styled from 'styled-components'
import sing from '../../images/sing.png'

const UL = styled.ul`
    
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    background-image: url${sing};
    opacity : 0.6;
    position:fixed;
    transform : ${({ open }) => open ? 'translateX(0)':'translateX(100%)'};
    top: 0;
    right: 0;
    height : 100vh;
    width: 300px;
    padding-top: 3.5rem; 
    transition: transform 0.5s ease-in-out;

    li {
        padding : 35px 10px;
        color : #fff;
        opacity: 1;
    }
    li:hover{
        background-color : #fff;
        color:#727272;
    }


`




const RightNav = ({ open }) => {
    return(
    <UL open = {open}>
        <li>Home</li>
        <li>Galleries</li>
        <li>about</li>
        <li>Problems</li>
        
    </UL>
    )
}

export default RightNav