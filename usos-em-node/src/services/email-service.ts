import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import React from "react";
import { ReactTemplate } from "../@types/react-template";

interface SendEmailProps {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export class EmailService {
  transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "ocie.wiza42@ethereal.email",
      pass: "McdGUtCJ9tMPKp6GNd",
    },
  });

  async generateStringFromEmailTemplate<T extends React.FunctionComponent<any>>(
    template: ReactTemplate<T>
  ) {
    const html = render(React.createElement(template.template, template.props));

    return html;
  }

  async sendEmail(props: SendEmailProps) {
    const info = await this.transporter.sendMail({
      from: props.from,
      to: props.to,
      subject: props.subject,
      html: props.html,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
}
