import { PdfService } from "./src/services/pdf-service";
import { HelloWorldTemplate } from "./src/templates/hello-world.template";

const pdfService = new PdfService();

module.exports = async function (result: any) {
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

  const pdfStream = await pdfService.generatePdfStreamFromTemplate({
    template: HelloWorldTemplate,
    props: {
      html: table,
      name: "ChrisCoy - PDF gerado com react & c#",
    },
  });

  pdfStream.pipe(result.stream);
};
