// import "./styles.css";
import React from 'react'
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Blog from './components/Blog';
import Rout from './components/Rout'
import { Route, Switch } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/:test_params" component={Rout}></Route>
            </Switch >
        </div>
    );
}
