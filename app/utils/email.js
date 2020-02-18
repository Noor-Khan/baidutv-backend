import Nodemailer from "nodemailer";
/**
 * Reponsible for sending emails accross the app.
 */
export default class Email {
  server;
  state;
  constructor() {
    // setup email client isntances.
    const username = process.env.SMTP_USERNAME;
    const password = process.env.SMTP_PASSWORD;
    const port = process.env.SMTP_PORT;
    const server = process.env.SMTP_SERVER;
    if (!username || !password || !port || !server) {
      throw new Error(
        "SMTP details must be set in the .env file. Please have a look at .env-example."
      );
    }
    this.server = Nodemailer.createTransport({
      host: server,
      port,
      secure: false,
      auth: {
        user: username,
        pass: password
      }
    });

    this.state = {
      to: "",
      from: "info@baidu.tv",
      subject: "",
      attachments: [],
      template: "",
      html: ""
    };
  }

  to(email) {
    this.state.to = email;
  }
  compose(to, subject, html, from = "", template = null, attachments = []) {
    this.state.to = to;
    this.state.subject = subject;
    this.state.html = html;
    this.state.template = template;
    this.state.attachments = attachments;

    if (from !== "") {
      this.state.from = from;
    }
    return this;
  }

  setTemplate(template) {
    this.state.template = template;
  }

  attachments(attachments) {
    this.state.attachments = attachments;
  }

  async send() {
    const response = await this.server.sendMail({
      to: this.state.to,
      from: this.state.from,
      subject: this.state.subject,
      html: this.state.html,
      attachments: this.state.attachments
    });
  }
}