// import "./styles.css";
import React from 'react'
import Home from "./components12/Home";
import About from "./components12/About";
import Nav from "./components12/Nav";
import Blog from './components12/Blog';
import Rout from './components12/Rout'
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
