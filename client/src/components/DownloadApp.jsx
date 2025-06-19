/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "../config";

export default function DownloadApp() {
  // const [isPhoneSelected, setIsPhoneSelected] = useState(false);
  // const [isEmailSelected, setIsEmailSelected] = useState(true);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email) {
        const res = await fetch(`${baseUrl}download/using-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });
        if (res.ok) {
          console.log("Message sent!");
          toast.success(
            "Email sent successfully! Check your email for the link."
          );
          setEmail("");
        } else {
          toast.error("Error while sending download link!");
        }
      }
      // if (phoneNumber) {
      //   const res = await fetch(
      //     "http://localhost:4002/api/download/using-phone-number",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({ phoneNumber: phoneNumber }),
      //     }
      //   );
      //   if (res.ok) {
      //     console.log("Message sent!");
      //     toast.success(
      //       "Message sent successfully! Check your whatsapp for the link."
      //     );
      //     setPhoneNumber("");
      //   } else {
      //     console.error("Error: ", e);
      //     toast.error("Error while sending download link!");
      //   }
      // }
    } catch (e) {
      console.error("Error: ", e);
      toast.error("Error while sending download link!");
    }
  };
  return (
    <div className="download-app" id="download-app">
      <div className="about-app">
        <h4>Download Our App</h4>
        <p>
          Enter your email, and we'll send you our App link to explore our
          services.
        </p>
        {/* <div className="download-options"> */}
        {/* <div> */}
        {/* <label htmlFor="email">Email</label> */}
        {/* <input
              type="radio"
              name="download-option"
              id="email"
              onChange={() => {
                setIsEmailSelected(true);
                // setIsPhoneSelected(false);
              }}
              checked={isEmailSelected}
            /> */}
        {/* </div> */}
        {/* <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="radio"
              name="download-option"
              id="phoneNumber"
              onChange={() => {
                setIsPhoneSelected(true);
                setIsEmailSelected(false);
              }}
              checked={isPhoneSelected}
            />
          </div> */}
        {/* </div> */}
        <div className="download-form">
          <form method="post" onSubmit={handleSubmit}>
            {/* {isEmailSelected && ( */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* )} */}
            {/* {isPhoneSelected && (
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            )} */}
            <button type="submit">Send Link</button>
          </form>
        </div>
        <div className="download-btns">
          <h6>Download app from</h6>
          <div>
            <Link
              to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1"
              className="download-btn"
            >
              PlayStore <IoLogoGooglePlaystore className="store-icon" />
            </Link>
            <Link
              to="https://apps.apple.com/us/app/starial-stationery-uniform/id6477531287"
              className="download-btn"
            >
              AppStore <FaApple className="store-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="app-decor">
        <img
          src="https://res.cloudinary.com/dgkv2gft7/image/upload/v1744197760/starial-services_dnvmqy.png"
          alt="Starial app"
        />
      </div>
    </div>
  );
}
