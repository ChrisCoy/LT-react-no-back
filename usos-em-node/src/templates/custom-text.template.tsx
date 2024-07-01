import { Document, Page, View } from "@react-pdf/renderer";
import React from "react";
import { HtmlToReactPdf } from "../components/html-to-react-pdf";

interface Props {
  text: string;
}

const HelloWorldTemplate: React.FC<Props> = ({ text }) => {
  return (
    <Document title={text}>
      <Page size="A4" style={{ padding: 16 }}>
        <View>
          <HtmlToReactPdf html={text} />
        </View>
      </Page> 
    </Document>
  );
};

export { HelloWorldTemplate };
