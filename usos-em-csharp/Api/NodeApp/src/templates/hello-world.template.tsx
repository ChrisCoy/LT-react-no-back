import { Document, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { HtmlToReactPdf } from "../components/html-to-react-pdf";

interface Props {
  name: string;
  html: string;
}

const HelloWorldTemplate: React.FC<Props> = ({ name, html }) => {
  return (
    <Document title={name}>
      <Page size="A4" style={{ padding: 16 }}>
        <View>
          <HtmlToReactPdf html={html} />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "400px",
            width: "100%",
            border: "3px solid purple",
          }}
        >
          <Text style={{ fontSize: 30 }}>To no centro XD</Text>
        </View>
      </Page>
    </Document>
  );
};

export { HelloWorldTemplate };
