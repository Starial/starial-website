/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Intro() {
  const [index, setIndex] = useState(0);
  const words = ["Books", "Stationery", "Uniforms"];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIdx) => (prevIdx + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <section className="intro-part">
      <div className="intro">
        <div className="intro-heading" data-aos="slide-right">
          <div>
            <h2>Get</h2>
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="word-carousel"
            >
              {words[index]}
            </motion.div>
            <h2>at your doorstep.</h2>
          </div>
          <p>Starial delivers your favorite stationery within an hour.</p>
          <Link to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1">
            Download App
          </Link>
        </div>
      </div>
      <div className="intro-img">
        {/* <img src="Starial-intro.png" alt="" /> */}
        <img
          src="https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687934/Starial-intro_h1iwvs.png"
          alt="Starial Intro Image"
        />
      </div>
    </section>
  );
}
