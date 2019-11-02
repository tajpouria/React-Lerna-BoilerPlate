/**
 * @license
 * Copyright @haytech. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * https://haytech.ir
 */

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const { store } = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
