import { EmailService } from "./src/services/email-service";
import { EmailTemplate } from "./src/templates/email.template";

const emailService = new EmailService();

module.exports = async function (callback: any) {
  const html = await emailService.generateStringFromEmailTemplate({
    template: EmailTemplate,
    props: {
      username: "ChrisCoy",
    },
  });

  await emailService.sendEmail({
    from: "christopher.lee@gowsolucoes.com",
    to: "christopher.lee@gowsolucoes.com",
    subject: "Teste de email com react-email",
    html: html,
  });

  callback(/* error */ null, html);
};