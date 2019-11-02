/**
 * @license
 * Copyright @haytech. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * https://haytech.ir
 */

/***
 find element(s) by given attribute in corresponding wrapper
 @arg {ShallowWrapper}
 @returns {ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> | Error}
 */
export const findByTestAttribute = (component: any, attr: string) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper ? wrapper : new Error(`utils:findByTestAttribute: ${component} not found!`);
};
