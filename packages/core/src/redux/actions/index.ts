/**
 * @license
 * Copyright @haytech. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * https://haytech.ir
 */

export type Action = any;

export type ExtractActionByType<T extends Action["type"], A extends Action = Action> = A extends { type: T } ? A : never;
export type PayloadOfAction<T extends Action["type"]> = {
    [P in Action["type"]]: ExtractActionByType<P>;
}[T]["payload"];
