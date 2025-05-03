import { BsLinkedin } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  const links1 = [
    { title: "About Us", url: "/about" },
    { title: "Shipping Policy", url: "/shipping-policy" },
    { title: "Become a Seller", url: "/vendors" },
    { title: "Terms & Conditions", url: "/terms-conditions" },
  ];
  const links2 = [
    { title: "Careers", url: "/careers" },
    { title: "Contact Us", url: "/contact" },
    { title: "Return Policy", url: "/return-policy" },
    { title: "Privacy Policy", url: "/privacy-policy" },
  ];
  const socialLinks = [
    {
      url: "https://www.linkedin.com/company/starial/?originalSubdomain=in",
      icon: <FaLinkedin className="social-icon" />,
      color: "#0A66C2",
    },
    {
      url: "https://www.instagram.com/starial_/?hl=en",
      icon: <FaInstagram className="social-icon" />,
      color: "#E4405F",
    },
  ];
  return (
    <footer className="footer-section">
      <div className="links-section">
        <div className="useful-links">
          <h4>Useful Links</h4>
          <div>
            <ul>
              {links1.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.url}> {link.title}</Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {links2.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.url}> {link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="more-info">
          <ul>
            <li>
              <CiLocationOn className="location-icon" />
              <span>
                <span>Find Us</span>
                Plot No.93, JDA Scheme No. 5, Deendayal Chowk, Vijaynagar,
                Jabalpur - 482002, Madhya Pradesh , India
              </span>
            </li>
            <li>
              <CgMail className="connect-icon" />
              <span>
                <span>Mail Us</span>
                <a href="mailto:connect@starial.in">connect@starial.in</a>
              </span>
            </li>
            <li>
              <IoCall className="connect-icon" />
              <span>
                <span>Call Us</span>
                <a href="tel:+919329885817">+91 9329885817</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <img
            src="https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688557/starial-white-logo_jshtqw.png"
            alt="Starial Logo"
          />
          <div className="socials">
            <h6>Follow Us</h6>
            <div className="links">
              {socialLinks.map((link, index) => {
                return (
                  <Link
                    to={link.url}
                    key={index}
                    style={{ "--accent-color": link.color }}
                    target="_blank"
                  >
                    {link.icon}
                  </Link>
                );
              })}
            </div>
            <div className="download-links">
              <Link to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1">
                <img
                  src="https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688588/play-store-logo_k1g8ob.svg"
                  alt="Play Store Logo"
                />
                <span>
                  <span>GET IT ON</span>
                  <span>Google Play </span>
                </span>
              </Link>
              <Link to="https://apps.apple.com/us/app/starial-stationery-uniform/id6477531287">
                <img
                  src="https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688584/apple-logo_czqbji.svg"
                  alt="App Store Logo"
                />
                <span>
                  <span>Download on the</span>
                  <span>App Store</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p>&copy; {year} All Rights Reserved. Starial Pvt. Ltd.</p>
    </footer>
  );
}
