// import { useEffect, useRef, useState } from "react";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [isAdmin, setIsAdmin] = useState(false);
  const { token } = useAuth();
  useEffect(() => {
    const checkAdmin = () => {
      if (!token) setIsAdmin(false);
      else {
        setIsAdmin(true);
      }
    };
    checkAdmin();
  }, [token]);
  return (
    <header className="head-section">
      <div className="logo">
        <NavLink to="/">
          <img
            src="https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688541/starial-black-logo_u6xvbw.png"
            alt="Starial LOGO"
          />
        </NavLink>
      </div>
      <nav className="navbar">
        <ul className={`links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "a")}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "a")}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? "active" : "a")}
              onClick={() => setIsOpen(false)}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) => (isActive ? "active" : "a")}
              onClick={() => setIsOpen(false)}
            >
              Careers
            </NavLink>
          </li>
          {isAdmin && (
            <li>
              <NavLink to="/admin-panel" onClick={() => setIsOpen(false)}>
                Admin Panel
              </NavLink>
            </li>
          )}
          <NavLink
            to="/contact"
            className="contact-us"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
        </ul>
        <div className="menu" onClick={toggleMenu}>
          {isOpen ? (
            <CgClose className="menu-icon" />
          ) : (
            <CiMenuFries className="menu-icon" />
          )}
        </div>
      </nav>
    </header>
  );
}
