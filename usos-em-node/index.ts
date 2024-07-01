import express, { Request, Response } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { CustomStaticComponent } from "./src/components/custom-static-component";
import { PdfService } from "./src/services/pdf-service";
import { HelloWorldTemplate } from "./src/templates/hello-world.template";
import { EmailService } from "./src/services/email-service";
import { EmailTemplate } from "./src/templates/email.template";

const app = express();
app.use(express.json());

const pdfService = new PdfService();
const emailService = new EmailService();

// usando react como template-engine
// https://react.dev/reference/react-dom/server/renderToString
app.get("/", (req: Request, res: Response) => {
  const html = renderToString(CustomStaticComponent({message: "Olá LightTalk!"}));

  res.send(html);
});

// gerando pdfs com react-pdf
// https://react-pdf.org/
app.get("/pdf", async (req: Request, res: Response) => {
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

  const pdfBuffer = await pdfService.generatePdfBufferFromTemplate({
    template: HelloWorldTemplate,
    props: {
      html: table,
      name: "ChrisCoy - PDF gerado com react",
    },
  });

  res.setHeader("Content-Type", "application/pdf");
  res.send(pdfBuffer);
});

// gerando pdfs com react-pdf
// https://react-pdf.org/
app.get("/pdf-stream", async (req: Request, res: Response) => {
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

  const stream = await pdfService.generatePdfStreamFromTemplate({
    template: HelloWorldTemplate,
    props: {
      html: table,
      name: "ChrisCoy - PDF gerado com react",
    },
  });

  res.setHeader("Content-Type", "application/pdf");
  stream.pipe(res);
});

// geração de email com react-email
// https://demo.react.email/preview/notifications/github-access-token?view=desktop
app.get("/send-email", async (req: Request, res: Response) => {
  const html = await emailService.generateStringFromEmailTemplate({
    template: EmailTemplate,
    props: {
      username: "ChrisCoy",
    }
  })

  await emailService.sendEmail({
    from: "christopher.lee@gowsolucoes.com",
    to: "christopher.lee@gowsolucoes.com",
    subject: "Teste de email com react-email",
    html: html,
  })

  res.send(html);
});

app.listen(3333, () => console.log("server running on port 3333"));
