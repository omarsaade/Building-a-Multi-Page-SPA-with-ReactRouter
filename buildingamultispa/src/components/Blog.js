import React, { Component } from 'react'
import axios from 'axios';

export default class Blog extends Component {
    state = {
        users: []
    }



    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res.data);
                this.setState({
                    users: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <h2>blog</h2>
                <h2>This is blog section</h2>
                <div>
                    {this.state.users.map((user) =>
                        <div> name is {user.name} and useranme is {user.username} </div>
                    )}
                </div>
            </div>
        )
    }
}
