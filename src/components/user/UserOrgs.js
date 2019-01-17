import React from 'react'
import styled from 'styled-components'

const UserOrgsContainer = styled.div`
    margin-bottom: 2rem;
`
const OrgContainer = styled.div`
    display: flex;
    
    padding: 12px 0;

    border-bottom: 1px solid #e1e4e8;
`
const OrgImage = styled.img`
    min-width: 25px;
    max-height: 25px;
`
const OrgInfo = styled.div`
    margin-left: 1rem;
`

const UserOrgs = (props) => {
    if(props.orgs && props.orgs.length !== 0){
        return(
            <UserOrgsContainer>
                <h3>Organizations</h3>
                {props.orgs.map(org => (
                    <OrgContainer key={org.id}>
                        <OrgImage src={org.avatar_url} />
                        <OrgInfo><a href={`https://github.com/${org.login}`}>{org.login}</a></OrgInfo>
                    </OrgContainer>
                ))}
            </UserOrgsContainer>
        )
    } else {
        return (
            <UserOrgsContainer>
                No orgs found for this user.
            </UserOrgsContainer>
        )
    }
}
export default UserOrgs