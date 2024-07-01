"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlToReactPdf = void 0;
const renderer_1 = require("@react-pdf/renderer");
const React = __importStar(require("react"));
const react_pdf_html_1 = __importDefault(require("react-pdf-html"));
const HtmlToReactPdf = ({ html }) => {
    return (React.createElement(react_pdf_html_1.default, { stylesheet: [
            {
                p: {
                    fontSize: 12,
                    fontFamily: 'Courier',
                    lineHeight: 1,
                    flexWrap: 'wrap',
                },
                b: {
                    fontSize: 12,
                    fontFamily: 'Courier-Bold',
                    lineHeight: 1,
                },
                strong: {
                    fontSize: 12,
                    fontFamily: 'Courier-Bold',
                    lineHeight: 1,
                },
                br: {
                    fontSize: 12,
                    lineHeight: 1,
                },
                i: {
                    fontSize: 12,
                    fontFamily: 'Times-Italic',
                    lineHeight: 1.2,
                },
            },
        ], renderers: {
            br: ({ style }) => {
                return React.createElement(renderer_1.Text, { style: style === null || style === void 0 ? void 0 : style.at(1) }, '\n');
            },
            p: ({ children, style }) => {
                return (React.createElement(renderer_1.Text, { style: style === null || style === void 0 ? void 0 : style.at(1) },
                    children,
                    '\n\n'));
            },
        } }, `<div>${html}</div>`));
};
exports.HtmlToReactPdf = HtmlToReactPdf;
