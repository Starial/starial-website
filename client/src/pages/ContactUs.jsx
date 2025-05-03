import { useEffect, useState } from "react";
import StatusModal from "../modals/StatusModal";
// import axios from "axios";

const initialData = {
  fullname: "",
  email: "",
  phoneNumber: "",
  message: "",
};
export default function ContactUs() {
  const [contactData, setContactData] = useState(initialData);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.post("http://localhost:5002/api/contact", contactData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   console.log("Message sent successfully.");
    //   setSuccess("Message sent successfully.");
    //   setOpenModal(true);
    //   setContactData(initialData);
    // } catch (e) {
    //   console.error("Error: ", e);
    //   setOpenModal(true);
    //   setError(e.reponse?.data?.extraDetails || e.message);
    //   console.error("Error while sending message.", e);
    // }
    try {
      const response = await fetch("http://localhost:5002/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
      const res_data = await response.json();
      console.log("Response from contact form:", res_data);
      if (response.ok) {
        console.log("Message sent successfully.");
        setSuccess("Message sent successfully.");
        setOpenModal(true);
        setContactData(initialData);
      } else {
        console.error("Error: ");
        setOpenModal(true);
        setError(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        // console.error("Error while sending message.");
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  useEffect(() => {
    if (openModal) {
      const timer = setTimeout(() => {
        setOpenModal(false);
      }, 3000);
      return () => clearInterval(timer);
    }
  });
  return (
    <section className="contact-section" id="contact-us">
      <StatusModal
        msg={error ? error : success}
        statusType={error ? "error" : "success"}
        onClose={() => setOpenModal(false)}
        isOpen={openModal}
      />
      <div className="contact-decor">
        <img
          src="https://res.cloudinary.com/dgkv2gft7/image/upload/v1743691469/contact-bg_ucvxx5.png"
          alt="Contact us Image"
        />
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <h3>Contact Us</h3>
          <input
            type="text"
            name="fullname"
            placeholder="Fullname"
            value={contactData.fullname}
            onChange={handleChange}
          />
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone"
              value={contactData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            className="msg"
            placeholder="Message"
            value={contactData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
