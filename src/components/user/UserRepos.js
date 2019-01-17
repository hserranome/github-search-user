import React from 'react'
import styled from 'styled-components'

const UserReposContainer = styled.div`
`
const RepoContainer = styled.div`
    padding: 12px 0;
    border-bottom: 1px solid #e1e4e8;
`
const RepoTitle = styled.div`
  margin: 0;  
`
const RepoSubtitle = styled.div`
  margin: 0;  
`

const UserRepos = (props) => {
    if(props.repos){
        return(
            <UserReposContainer>
                <h3>Repositories</h3>
                {props.repos.map(repo => (
                    <RepoContainer key={repo.id}>
                        <RepoTitle><a href={repo.html_url}>{repo.name}</a></RepoTitle>
                        <RepoSubtitle>Updated on {new Date(repo.updated_at).toLocaleString()}</RepoSubtitle>
                    </RepoContainer>
                ))}
            </UserReposContainer>
        )
    } else {
        return (
            <UserReposContainer>
                No repositories found for this user.
            </UserReposContainer>
        )
    }
}
export default UserRepos