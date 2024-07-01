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
Object.defineProperty(exports, "__esModule", { value: true });
const pdf_service_1 = require("./src/services/pdf-service");
const hello_world_template_1 = require("./src/templates/hello-world.template");
const pdfService = new pdf_service_1.PdfService();
module.exports = function (result) {
    return __awaiter(this, void 0, void 0, function* () {
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
        const pdfStream = yield pdfService.generatePdfStreamFromTemplate({
            template: hello_world_template_1.HelloWorldTemplate,
            props: {
                html: table,
                name: "ChrisCoy - PDF gerado com react & c#",
            },
        });
        pdfStream.pipe(result.stream);
    });
};
