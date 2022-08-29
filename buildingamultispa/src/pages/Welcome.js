import React from 'react'
import { Route } from 'react-router-dom';

function Welcome() {
    return (
        <section>
            <h1>The Welcome Page</h1>
            {/* Nested Routes */}
            <Route path="/welcome/new-user">
                <p>welcome, new user!</p>
            </Route>
        </section>
    )
}

export default Welcome
