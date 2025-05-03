import { useRef } from "react";
import ContactUs from "./ContactUs";
import { NavLink } from "react-router-dom";

export default function Vendors() {
  const contactRef = useRef(null);

  const handleClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sellers = [
    {
      text: "Children Book House",
      imgUrl:
        "https://res.cloudinary.com/dgkv2gft7/image/upload/v1746011141/seller3-2_tbdlyy.jpg",
    },
    {
      text: "The Book House",
      imgUrl:
        "https://res.cloudinary.com/dgkv2gft7/image/upload/v1746011144/seller1-2_s60sk0.jpg",
    },
    {
      text: "Om Book",
      imgUrl:
        "https://res.cloudinary.com/dgkv2gft7/image/upload/v1746011149/seller2-2_emwc37.jpg",
    },
  ];
  const steps = [
    {
      title: "Submit Your Application",
      desc: "Fill out the contact form below to apply. Our team will review your details and verify your profile.",
      img: "/verification.svg",
    },
    {
      title: "Get a Seller App",
      desc: "Once verified, you’ll receive access to the Seller App where you can manage products, view analytics, and more.",
      img: "/application.svg",
    },
    {
      title: "Start Selling",
      desc: "After final confirmation, your store goes live and you can begin selling on our platform.",
      img: "/sell.svg",
    },
  ];
  return (
    <section className="vendors-section">
      <div className="become-seller">
        <h2>Partner With Us - Sell Your Study Materials</h2>
        <p>
          Reach thousands of customers by listing your products on our platform.
        </p>
      </div>
      <div className="sellers-testimonies">
        <h2>Shop That Trust Us</h2>
        <div className="sellers">
          {sellers.map((seller, index) => {
            return (
              <div key={index} className="seller">
                <img src={seller.imgUrl} alt="Seller Photo" />
                <h6 className="img-desc">{seller.text}</h6>
              </div>
            );
          })}
        </div>
      </div>
      <div className="seller-verify">
        <h2>Become a Seller in 3 Steps</h2>
        <div className="steps">
          {steps.map((step, index) => {
            return (
              <div className="step" key={index}>
                <div className="step-desc">
                  <h4>
                    <span>1</span> {step.title}
                  </h4>
                  <p>{step.desc}</p>
                  {index === 0 && (
                    <button className="contact-btn" onClick={handleClick}>
                      Contact Us
                    </button>
                  )}
                </div>
                <img src={step.img} alt="Step Graphics" loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>
      {/* <h2 className="contact-heading">Become a Seller - Contact Us Today!</h2> */}
      <div className="contact-container" ref={contactRef}>
        <ContactUs />
      </div>
    </section>
  );
}
