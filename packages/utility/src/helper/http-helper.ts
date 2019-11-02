/**
 * @license
 * Copyright @haytech. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * https://haytech.ir
 */

export interface IHttpResponse<T> extends Response {
    parsedData?: T;
}
/**
 *
 * handling HTTP get request
 *
 * @param {request} RequestInfo
 * @param {T} ResponseType
 * @returns {IHttpResponse}
 */

export const get = <T>(request: RequestInfo): Promise<IHttpResponse<T>> => {
    return new Promise((resolve, reject) => {
        let response: IHttpResponse<T>;
        fetch(request)
            .then(res => {
                response = res;
                return res.json();
            })
            .then(body => {
                if (response.ok) {
                    response.parsedData = body;
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch(err => {
                reject(err);
            });
    });
};
