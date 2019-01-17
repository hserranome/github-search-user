import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`
const HeaderTitle = styled.h1`
    margin-bottom: 0;
    a{
        color: inherit;
        text-decoration: none;
    }
`
const HeaderSubtitle = styled.p`
    margin-top: 0;
`

const Header = () => (
    <HeaderContainer>
        <HeaderTitle>
            <Link to="/">
                Github User Search
            </Link>
        </HeaderTitle>
        <HeaderSubtitle>
            made as an interview showcase.
        </HeaderSubtitle>
    </HeaderContainer>
)
export default Header