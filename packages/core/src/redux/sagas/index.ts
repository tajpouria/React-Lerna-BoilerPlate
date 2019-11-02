/**
 * @license
 * Copyright @haytech. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * https://haytech.ir
 */

import { all } from "redux-saga/effects";
import likeUserWatcher from "./likeUser";

export default function* rootSaga() {
    yield all([likeUserWatcher()]);
}
