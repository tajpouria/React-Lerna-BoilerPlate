/**
 * @license
 * Copyright @haytech. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * https://haytech.ir
 */

declare interface INodeModule {
    hot: {
        accept(path?: string, fn?: () => void, callback?: () => void): void;
    };
}
