// import "./styles.css";
import React from 'react'
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    );
}
