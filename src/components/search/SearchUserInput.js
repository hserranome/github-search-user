import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'


class SearchUsername extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: "",
            query: null,
            submitted: false,
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event){
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
            query: this.state.input,
            submitted: true
        }, () => {
            this.setState({
                submitted: false,
            })
        })
    }

    render(){
        return(
        <div>
            {this.state.submitted === true && this.state.query !== null ? 
                <Redirect to={`/user/${this.state.query}`} />
                : null
            }
            <div>
                <h2>Search username: </h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleInput} />
                    <input type="submit" value="Search"/>
                </form>
            </div>
        </div>
        )
    }
}

export default SearchUsername