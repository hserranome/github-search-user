import React from 'react'
import styled from 'styled-components'

const UserContainer = styled.div`
    display: flex;
    
    margin-top: 1rem;
    padding: 24px 0;
`
const UserImg = styled.img`
    min-width: 100px;
    max-height: 100px;
`
const UserInfo = styled.div`
    margin-left: 1rem;
`
const UserName = styled.h3`
`
const UserWebsite = styled.h4`
`

const UserProfile = (props) => {
    if(!props.user){
        return null
    }
    return (
        <UserContainer>
            <UserImg src={props.user.avatar_url} />
            <UserInfo>
                <UserName>
                    <a href={props.user.html_url}>{props.user.login}</a> - {props.user.name}
                </UserName>
                <UserWebsite> 
                    <a href={'http://' + props.user.blog}>
                        {props.user.blog}
                    </a>
                </UserWebsite>
            </UserInfo> 
        </UserContainer>
    )
}
export default UserProfile