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
const email_service_1 = require("./src/services/email-service");
const email_template_1 = require("./src/templates/email.template");
const emailService = new email_service_1.EmailService();
module.exports = function (callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const html = yield emailService.generateStringFromEmailTemplate({
            template: email_template_1.EmailTemplate,
            props: {
                username: "ChrisCoy",
            },
        });
        yield emailService.sendEmail({
            from: "christopher.lee@gowsolucoes.com",
            to: "christopher.lee@gowsolucoes.com",
            subject: "Teste de email com react-email",
            html: html,
        });
        callback(/* error */ null, html);
    });
};
