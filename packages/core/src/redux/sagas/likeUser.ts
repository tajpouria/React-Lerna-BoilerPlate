/**
 * @license
 * Copyright @haytech. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * https://haytech.ir
 */

import { takeEvery } from "redux-saga/effects";

export default function* generatorWatcher() {
    yield takeEvery("ACTION_TYPE", () => console.log());
}
