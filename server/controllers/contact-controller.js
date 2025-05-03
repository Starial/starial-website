const nodemailer = require("nodemailer");

const contact = (req, res, next) => {
  try {
    const { fullname, email, phoneNumber, message } = req.body;
    console.log("Req.body: ", req.body);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "starialofficial@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const receiver = {
      // from: "starialofficial@gmail.com",
      from: "starialofficial@gmail.com",
      to: "starialofficial@gmail.com",
      subject: `New message from ${fullname}`,
      text: `New Message Received!\n\nName: ${fullname}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
      html: `<h1>New Message Received!</h1>
          <p>Name: ${fullname}</p>
          <p>Email: ${email}</p>
          <p>Phone Number: ${phoneNumber}</p>
          <p>Message: ${message}</p>`,
    };
    transporter.sendMail(receiver, (err, info) => {
      if (err) {
        console.error("Error while sending mail: ", err);
        return res.status(500).json({ message: "Error while sending mail." });
      } else {
        console.log("Email sent: ", info.response);
        return res.status(200).json({ message: "Email sent successfully." });
      }
    });
    // if (info) {
    //   console.log("Email sent: ", info);
    //   return res.status(200).json({ message: "Successfully sent email." });
    // } else {
    //   return res.status(500).json({ message: "Error while sending email." });
    // }
    // console.log("Message sent: %s", info.messageId);

    // SENDING EMAIL USING RESEND
    // const resend = new Resend(process.env.RESEND_API_KEY);

    // const emailSent = resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: "arpitahalvi@gmail.com",
    //   subject: "Contact Message",
    //   html: `<h1>New Message Received!</h1>
    //       <p>Name: ${fullname}</p>
    //       <p>Email: ${email}</p>
    //       <p>Phone Number: ${phoneNumber}</p>
    //       <p>Message: ${message}</p>`,
    // });
    // console.log("Resend email sent!");
    // if (emailSent) {
    //   return res.status(200).json({ message: "Message sent successfully." });
    // } else {
    //   return res.status(500).json({ message: "Unable to send email." });
    // }
  } catch (e) {
    console.error("Error from contact controller: ", e);
    next(e);
  }
};

module.exports = contact;

// (error, emailResponse) => {
// if (error) {
// console.error("Email sending error: ", error);
// return res.status(500).json({ message: "Error while sending email!" });
// return;
// }
// console.log("Email sent successfully!");
// console.log("Email response: ", emailResponse);
// return res.status(200).json({ message: "Email sent successfully!" });
// }
