const template = (title, body, email) => `
  <html>
  <head>
  <style>
  .button {
    text-decoration: none;
    background: #0E71EB;
    border-radius: 11px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    text-align: center;
    color: #FFFFFF !important;
    padding: 10px 20px;
  }
  h3 {
    color: #0E71EB;
  }
</style>
</head>
<body>
  <table width="100%" cellpadding="0" cellspacing="0" border="0" summary="">
      <tr align="center">
        <td valign="top" style="width: 100%;">
          <table cellspacing="0" cellpadding="0" border="0" summary="">
            <tr align="center">
              <td valign="middle" style="width: 100%;">
                <a href="#">
                  <img style="width: 125px; cursor: pointer" src="https://res.cloudinary.com/dnch08bzc/image/upload/v1556821936/39444439254_9566a41625_b.jpg" alt="random">
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr align="center">
        <td valign="top" style="width: 100%;">
          <table style="padding: 0px; border: 0; max-width: 520px; text-align: center;" width="100%" cellpadding="0" cellspacing="0" border="0" summary="">
            <tr align="center" style="margin: 0px 10px;">
              <td style="width: 100%; line-height: 24px; font-size: 11pt;">
                <h3>${title}</h3>
                <p>${body}</p>
              </td>
            </tr>
          </table>
          <table style="border-collapse:collapse; max-width: 520px; text-align: center; margin-top: 30px" cellpadding="0" cellspacing="0" border="0" summary="">
            <tr align="center">
              <td style="width: 100%; ">
                <div style="background: #EFEEEE; padding: 20px 0px">
                  <p style="line-height: 20px; font-size: 0.75rem; color: black;">You’re getting this message because your Karneek account is connected to <a href="#">${email}</a><br />
                      <a href="#">unsubscribe</a> from similar emails
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
</body>
</html>`;

export default template;
