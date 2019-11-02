/**
 * @license
 * Copyright @haytech. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * https://haytech.ir
 */

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Core from "src/components/core";

class App extends Component {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={Core} />
                </Switch>
            </Router>
        );
    }
}

export default App;
