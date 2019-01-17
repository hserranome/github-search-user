import React, {Component} from 'react'
import {getUserData, getRepos} from '../../github-api'

import UserProfile from '../user/UserProfile';
import UserOrgs from '../user/UserOrgs';
import UserRepos from '../user/UserRepos';
import Loading from '../navigation/Loading';
import SearchError from './SearchError';

class SearchResult extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: undefined,

            query: undefined,
            user: undefined,
            orgs: undefined,
            repos: undefined,
        }
    }

    getQueryResults(){
        //Reset search state
        this.setState({
            loading: true,
            error: undefined,
            query: this.props.match.params.user,
        })

        getUserData(this.props.match.params.user)
        .then((res) => {
            if(res){
                
                if(res.status === undefined){
                    this.setState({
                        user: res.user,
                        orgs: res.orgs,
                    })
                    //only search for repos if user exists
                    getRepos(this.props.match.params.user)
                    .then(repos => {
                        this.setState({
                            repos: repos,
                            loading: false
                        })
                    })
                } else {
                    //Error handling
                    this.setState({
                        error: res,
                        loading: false
                    })
                }

            } else {
                //Error handling
                this.setState({
                    error: {data: { message: "Couldn't receive server response."}},
                    loading: false
                })
            }
        })
    }

    componentDidUpdate(){
        //if statement avoids update loop
        if(this.state.query !== this.props.match.params.user){
            this.getQueryResults()
        }
    }
    componentDidMount(){
        this.getQueryResults()
    }

    render(){
        if (this.state.loading === true){
            return(
                <Loading />
           )

        } else if (this.state.error === undefined && this.state.loading === false){
            return (
                <div>
                    <UserProfile user={this.state.user}/>
                    <UserOrgs orgs={this.state.orgs}/>
                    <UserRepos repos={this.state.repos}/>
                </div>
            )

        }
        else if (this.state.error !== undefined && this.state.loading === false){
            return (
                <SearchError error={this.state.error} />
            )
        }
        else {
            return <h3>Something went wrong!</h3>
        }

    }
}

export default SearchResult