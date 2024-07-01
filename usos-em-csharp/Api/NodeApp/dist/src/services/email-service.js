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
exports.EmailService = void 0;
const render_1 = require("@react-email/render");
const nodemailer_1 = __importDefault(require("nodemailer"));
const react_1 = __importDefault(require("react"));
class EmailService {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: "ocie.wiza42@ethereal.email",
                pass: "McdGUtCJ9tMPKp6GNd",
            },
        });
    }
    generateStringFromEmailTemplate(template) {
        return __awaiter(this, void 0, void 0, function* () {
            const html = (0, render_1.render)(react_1.default.createElement(template.template, template.props));
            return html;
        });
    }
    sendEmail(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.transporter.sendMail({
                from: props.from,
                to: props.to,
                subject: props.subject,
                html: props.html,
            });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
        });
    }
}
exports.EmailService = EmailService;
