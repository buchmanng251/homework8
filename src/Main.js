import React, { Component } from "react";
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Information from "./Information";
import Act1 from "./Act1";
import Act2 from "./Act2";
import Act3 from "./Act3";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <br/>
                    <h1><i>Tomorrow</i></h1>
                    <br/>
                    <br/>
                    <ul className="header">
                        <li><NavLink exact="true" to="/">Information</NavLink></li>
                        <li><NavLink to="/act1">Act 1</NavLink></li>
                        <li><NavLink to="/act2">Act 2</NavLink></li>
                        <li><NavLink to="/act3">Act 3</NavLink></li>
                    </ul>

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Information />} />
                            <Route path="/act1" element={<Act1 />} />
                            <Route path="/act2" element={<Act2 />} />
                            <Route path="/act3" element={<Act3 />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
