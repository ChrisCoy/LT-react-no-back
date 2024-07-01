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
const express_1 = __importDefault(require("express"));
const server_1 = require("react-dom/server");
const custom_static_component_1 = require("./src/components/custom-static-component");
const pdf_service_1 = require("./src/services/pdf-service");
const hello_world_template_1 = require("./src/templates/hello-world.template");
const email_service_1 = require("./src/services/email-service");
const email_template_1 = require("./src/templates/email.template");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pdfService = new pdf_service_1.PdfService();
const emailService = new email_service_1.EmailService();
// usando react como template-engine
// https://react.dev/reference/react-dom/server/renderToString
app.get("/", (req, res) => {
    const html = (0, server_1.renderToString)((0, custom_static_component_1.CustomStaticComponent)({ message: "Olá LightTalk!" }));
    res.send(html);
});
// gerando pdfs com react-pdf
// https://react-pdf.org/
app.get("/pdf", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const table = `
    <table style="border: 1px solid black; margin: 16px 0;">
      <tr style="border: 1px solid black;">
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr style="border: 1px solid black;">
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr style="border: 1px solid black;">
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>
  `;
    const pdfBuffer = yield pdfService.generatePdfBufferFromTemplate({
        template: hello_world_template_1.HelloWorldTemplate,
        props: {
            html: table,
            name: "ChrisCoy - PDF gerado com react",
        },
    });
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
}));
// gerando pdfs com react-pdf
// https://react-pdf.org/
app.get("/pdf-stream", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const table = `
    <table style="border: 1px solid black; margin: 16px 0;">
      <tr style="border: 1px solid black;">
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr style="border: 1px solid black;">
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr style="border: 1px solid black;">
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>
  `;
    const stream = yield pdfService.generatePdfStreamFromTemplate({
        template: hello_world_template_1.HelloWorldTemplate,
        props: {
            html: table,
            name: "ChrisCoy - PDF gerado com react",
        },
    });
    res.setHeader("Content-Type", "application/pdf");
    stream.pipe(res);
}));
// geração de email com react-email
// https://demo.react.email/preview/notifications/github-access-token?view=desktop
app.get("/send-email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const html = yield emailService.generateStringFromEmailTemplate({
        template: email_template_1.EmailTemplate,
        props: {
            username: "ChrisCoy",
        }
    });
    yield emailService.sendEmail({
        from: "christopher.lee@gowsolucoes.com",
        to: "christopher.lee@gowsolucoes.com",
        subject: "Teste de email com react-email",
        html: html,
    });
    res.send(html);
}));
app.listen(3333, () => console.log("server running on port 3333"));
