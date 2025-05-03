const nodemailer = require("nodemailer");
const axios = require("axios");

const sendWhatsappMsg = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    console.log("Phone number: ", phoneNumber, "Req.body", req.body);

    // USING MSG91 FOR SENDING DOWNLOAD LINK
    try {
      const response = await axios.post(
        "https://control.msg91.com/api/v5/flow/",
        {
          template_id: "EntertemplateID",
          sender: "EnterSenderID",
          short_url: "1", // or '0'
          mobiles: `91${phoneNumber}`,
          VAR1: "VALUE 1",
          VAR2: "VALUE 2",
        },
        {
          headers: {
            Authkey: "<authkey>",
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      );
      console.log(response.data);
      res.json({ message: "SMS sent successfully", data: response.data });
    } catch (error) {
      console.error(error.response?.data || error.message);
      res.status(500).json({
        message: "Failed to send SMS",
        extraDetails: error.response?.data || error.message,
      });
    }
  } catch (e) {
    console.error("Error: ", e);
    next(e);
  }
};

const sendEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    console.log("Req.body: ", req.body);

    // GMAIL
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
      to: email,
      subject: `Starial App Download Link`,
      html: `<p>Hello,</p>
      <p>You recently requested the download link for our app.</p>
      <p>Click the button below to download it now.</p>
      <br>
      <p>
      <a href="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1" style="padding: 0.6rem 1rem; border-radius: 5px; border: none; background-color:#49c6f8; text-decoration:none; color: black;font-family: 'Segoe UI'; font-size: 1rem;margin-right: 2rem;">PlayStore Link</a>
      <a href="https://apps.apple.com/us/app/starial-stationery-uniform/id6477531287" style="padding: 0.6rem 1rem; border-radius: 5px; border: none; background-color:#49c6f8; text-decoration:none; color: black;font-family: 'Segoe UI'; font-size: 1rem;">AppStore Link</a>
      </p>
      <br>
      <p>If you didn't request this, you can ignore this email.</p>
      <p>Best regards,<br>Starial</p>`,
    };
    transporter.sendMail(receiver, (err, info) => {
      if (err) {
        console.error("Error while sending mail: ", err);
        return res.status(500).json({ message: "Error while sending email." });
      } else {
        console.log("Email sent: ", info.response);
        return res.status(200).json({ message: "Email sent successfully." });
      }
    });
  } catch (e) {
    console.error("Error while sending email: ", e.message);
    next(e);
  }
};

module.exports = { sendEmail, sendWhatsappMsg };
