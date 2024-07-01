import ReactPDF from "@react-pdf/renderer";
import React from "react";
import { ReactTemplate } from "../@types/react-template";

export class PdfService {
  async generatePdfBufferFromTemplate<T extends React.FunctionComponent<any>>(
    template: ReactTemplate<T>
  ) {
    const stream = await ReactPDF.renderToStream(
      React.createElement(template.template, template.props)
    );
    const buffer = await new Promise<Buffer>((resolve, reject) => {
      const buffers: Buffer[] = [];
      stream.on("data", (chunk) => buffers.push(chunk));
      stream.on("end", () => resolve(Buffer.concat(buffers)));
      stream.on("error", (error) => reject(error));
    });

    return buffer;
  }

  async generatePdfStreamFromTemplate<T extends React.FunctionComponent<any>>(
    template: ReactTemplate<T>
  ) {
    const stream = await ReactPDF.renderToStream(
      React.createElement(template.template, template.props)
    );

    return stream;
  }
}
