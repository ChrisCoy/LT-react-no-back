"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldTemplate = void 0;
const renderer_1 = require("@react-pdf/renderer");
const react_1 = __importDefault(require("react"));
const html_to_react_pdf_1 = require("../components/html-to-react-pdf");
const HelloWorldTemplate = ({ text }) => {
    return (react_1.default.createElement(renderer_1.Document, { title: text },
        react_1.default.createElement(renderer_1.Page, { size: "A4", style: { padding: 16 } },
            react_1.default.createElement(renderer_1.View, null,
                react_1.default.createElement(html_to_react_pdf_1.HtmlToReactPdf, { html: text })))));
};
exports.HelloWorldTemplate = HelloWorldTemplate;
