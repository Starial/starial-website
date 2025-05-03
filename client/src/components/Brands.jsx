/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Brands() {
  const brands = [
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688426/apsara_vqw45x.png",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688430/cello_tbzvcq.png",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688434/classmate_p9ummp.svg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688438/doms_dru2qq.png",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688443/faber-castell2_oclpkh.png",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688458/pidilite_v29oek.png",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688462/reynolds_vccpne.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688466/youva-logo2_qkcwc2.png",
  ];
  const allImages = [...brands, ...brands];
  return (
    <section className="brands-section">
      <h2>Shop the top brands</h2>
      <div className="brands">
        {/* {brands.map((b, index) => {
          return <img src={b} alt="Brand logo" className="brand" key={index} />;
        })}
        {brands.map((b, index) => {
          return <img src={b} alt="Brand logo" className="brand" key={index} />;
        })} */}
        <motion.div
          className="brand"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {allImages.map((src, index) => (
            <img key={index} src={src} alt={`Item ${index}`} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
