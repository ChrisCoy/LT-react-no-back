"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("react-dom/server");
const custom_static_component_1 = require("./src/components/custom-static-component");
module.exports = function (callback, message) {
    const html = (0, server_1.renderToString)((0, custom_static_component_1.CustomStaticComponent)({ message: message }));
    callback(/* error */ null, html);
};
