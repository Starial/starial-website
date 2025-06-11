import { useState } from "react";
// import StatusModal from "../modals/StatusModal";
import { toast } from "react-toastify";
import { baseUrl } from "../App";

const initialData = {
  fullname: "",
  email: "",
  phoneNumber: "",
  message: "",
};
export default function ContactUs() {
  const [contactData, setContactData] = useState(initialData);
  const [error, setError] = useState("");
  // const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
      const res_data = await response.json();
      console.log("Response from contact form:", res_data);
      if (response.ok) {
        setLoading(false);
        // console.log("Message sent successfully.");
        setSuccess("Message sent successfully.");
        // setOpenModal(true);
        toast.success(success);
        setContactData(initialData);
      } else {
        setLoading(false);
        // console.error("Error: ");
        // setOpenModal(true);
        setError(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        toast.error(error);
      }
    } catch (e) {
      setLoading(false);
      console.error(e.message);
      setError("Unable to send message.");
      toast.error(error);
      // setOpenModal(true);
    }
  };
  // useEffect(() => {
  //   if (openModal) {
  //     const timer = setTimeout(() => {
  //       setOpenModal(false);
  //     }, 3000);
  //     return () => clearInterval(timer);
  //   }
  // });
  return (
    <section className="contact-section" id="contact-us">
      {/* <StatusModal
        msg={error ? error : success}
        statusType={error ? "error" : "success"}
        onClose={() => setOpenModal(false)}
        isOpen={openModal}
      /> */}
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
            autoComplete="off"
            required
          />
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone"
              value={contactData.phoneNumber}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <textarea
            name="message"
            className="msg"
            placeholder="Message"
            value={contactData.message}
            onChange={handleChange}
            autoComplete="off"
            required
          ></textarea>
          <button type="submit">{loading ? "Sending..." : "Send"}</button>
        </form>
      </div>
    </section>
  );
}
