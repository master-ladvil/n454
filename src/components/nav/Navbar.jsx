import React from 'react'
import styled from 'styled-components'
import Burger from './burger'


const Nav = styled.nav`
    width : 100%;
    height : 65px;
    position: absolute;
    padding : 0 20px;
    display : flex;
    justify-content : space-between;
    z-index : 2;
    .logo{
        padding: 15px 0;
        color: #727272
    }

    `

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                Nav Bar
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar