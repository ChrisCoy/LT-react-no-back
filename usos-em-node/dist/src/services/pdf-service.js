"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfService = void 0;
const renderer_1 = __importDefault(require("@react-pdf/renderer"));
const react_1 = __importDefault(require("react"));
class PdfService {
    generatePdfBufferFromTemplate(template) {
        return __awaiter(this, void 0, void 0, function* () {
            const stream = yield renderer_1.default.renderToStream(react_1.default.createElement(template.template, template.props));
            const buffer = yield new Promise((resolve, reject) => {
                const buffers = [];
                stream.on("data", (chunk) => buffers.push(chunk));
                stream.on("end", () => resolve(Buffer.concat(buffers)));
                stream.on("error", (error) => reject(error));
            });
            return buffer;
        });
    }
    generatePdfStreamFromTemplate(template) {
        return __awaiter(this, void 0, void 0, function* () {
            const stream = yield renderer_1.default.renderToStream(react_1.default.createElement(template.template, template.props));
            return stream;
        });
    }
}
exports.PdfService = PdfService;
