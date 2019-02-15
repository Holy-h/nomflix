import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "Routes/Home";
import Tv from "Routes/Tv";
import Search from "Routes/Search";

export default () => (
    <Router>
        <>
            <Route path ="/"exact component={Home} />
            <Route path ="/tv" component={Tv} />
            <Route path ="/search" component={Search} />
        </>
    </Router>
);