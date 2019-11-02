/**
 * @license
 * Copyright @haytech. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * https://haytech.ir
 */

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createRootReducer();

export type CoreStore = ReturnType<typeof rootReducer>;

const middlewareStack = [sagaMiddleware];

export default (initialState?: object) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(...middlewareStack));
    sagaMiddleware.run(rootSaga);

    return { store };
};
