interface IMailProvider {
  sendMail(
    to: string,
    subject: string,
    variable: any,
    path: string
  ): Promise<void>;
}

export { IMailProvider };
