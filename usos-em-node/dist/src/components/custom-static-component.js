"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStaticComponent = void 0;
const react_1 = __importDefault(require("react"));
const CustomStaticComponent = ({ message }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, message),
        react_1.default.createElement("p", null, "Esse componente funciona como um template estatico, removendo a necessidade de templates-engines como EJS, Pug, Handlebars, etc.")));
};
exports.CustomStaticComponent = CustomStaticComponent;
