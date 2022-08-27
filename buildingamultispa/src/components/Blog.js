import React, { Component } from 'react'
import axios from 'axios';

export default class Blog extends Component {
    state = {
        users: []
    }



    componentDidMount() {
        console.log(this.props);
        console.log(this.props.match.path); //{history: {…}, location: {…}, match: {…}, staticContext: undefined}


        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                // console.log(res.data);
                this.setState({
                    users: res.data
                })
            })
    }

    render() {
        const { users } = this.state;
        const userList = users.map((user) =>
            <div key={user.id}>
                <div className='content'>
                    <div>Name: {user.name}</div>
                    <div>UserName : {user.username}</div>
                </div>
            </div>
        )

        return (
            <div>
                <h2>Blog</h2>
                <h2>This is Blog section</h2>
                <div>
                    {userList}
                </div>
            </div>
        )
    }
}
