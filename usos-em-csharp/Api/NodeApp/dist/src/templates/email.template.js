"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplate = void 0;
const components_1 = require("@react-email/components");
const react_1 = __importDefault(require("react"));
const EmailTemplate = ({ username, }) => (react_1.default.createElement(components_1.Html, null,
    react_1.default.createElement(components_1.Head, null),
    react_1.default.createElement(components_1.Preview, null, "A fine-grained personal access token has been added to your account"),
    react_1.default.createElement(components_1.Body, { style: main },
        react_1.default.createElement(components_1.Container, { style: container },
            react_1.default.createElement(components_1.Img, { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png", width: "32", height: "32", alt: "Github" }),
            react_1.default.createElement(components_1.Text, { style: title },
                react_1.default.createElement("strong", null,
                    "@",
                    username),
                ", a personal access was created on your account."),
            react_1.default.createElement(components_1.Section, { style: section },
                react_1.default.createElement(components_1.Text, { style: text },
                    "Hey ",
                    react_1.default.createElement("strong", null, username),
                    "!"),
                react_1.default.createElement(components_1.Text, { style: text },
                    "A fine-grained personal access token (",
                    react_1.default.createElement(components_1.Link, null, "resend"),
                    ") was recently added to your account."),
                react_1.default.createElement(components_1.Button, { style: button }, "View your token")),
            react_1.default.createElement(components_1.Text, { style: links },
                react_1.default.createElement(components_1.Link, { style: link }, "Your security audit log"),
                " \u30FB",
                " ",
                react_1.default.createElement(components_1.Link, { style: link }, "Contact support")),
            react_1.default.createElement(components_1.Text, { style: footer }, "GitHub, Inc. \u30FB88 Colin P Kelly Jr Street \u30FBSan Francisco, CA 94107")))));
exports.EmailTemplate = EmailTemplate;
const main = {
    backgroundColor: "#ffffff",
    color: "#24292e",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};
const container = {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px 0 48px",
};
const title = {
    fontSize: "24px",
    lineHeight: 1.25,
};
const section = {
    padding: "24px",
    border: "solid 1px #dedede",
    borderRadius: "5px",
    textAlign: "center",
};
const text = {
    margin: "0 0 10px 0",
    textAlign: "left",
};
const button = {
    fontSize: "14px",
    backgroundColor: "#28a745",
    color: "#fff",
    lineHeight: 1.5,
    borderRadius: "0.5em",
    padding: "12px 24px",
};
const links = {
    textAlign: "center",
};
const link = {
    color: "#0366d6",
    fontSize: "12px",
};
const footer = {
    color: "#6a737d",
    fontSize: "12px",
    textAlign: "center",
    marginTop: "60px",
};
