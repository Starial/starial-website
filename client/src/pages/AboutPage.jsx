import { Link } from "react-router-dom";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

export default function AboutPage() {
  const images = [
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743690953/glimpse2_g4rket.jpg",
      title: "Global Invest Event",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1745930263/work2_xe7xx0.jpg",
      title: "Honoring Excellence",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1745930267/team4-2_ijxr2y.jpg",
      title: "Moments of Joy",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687514/work14_dnmsly.jpg",
      title: "Festive Grace",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687494/work4-1_ayt8sj.jpg",
      title: "Ad Shoot",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687421/work2-1_mqo9le.jpg",
      title: "Face and Hand Art Fun",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687490/work12-1_bb7p7b.jpg",
      title: "Orientation Session",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687511/work3_woje1c.jpg",
      title: "Conference",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687506/work19-1_nm4aoa.jpg",
      title: "Diwali Celebration",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687505/work5_cfbc5e.jpg",
      title: "Our Team",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687441/work10_ws5eg7.jpg",
      title: "Innocent Moments",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687454/work13-1_azyu3y.jpg",
      title: "Hackathon",
    },
    {
      url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687489/work16_im5hx3.jpg",
      title: "Ad Shoot",
    },
  ];
  const teamMembers = [
    {
      name: "Rahul Rai",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744113165/rahulSir3_pvejs8.jpg",
      designation: "Founder & CEO",
    },
    {
      name: "Shubham Singh",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744113164/appDev2_o2s4bj.jpg",
      designation: "CTO",
    },
    {
      name: "Deeksha Sen",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744113166/deekshaMaam2_hoxumg.jpg",
      designation: "Manager",
    },
    {
      name: "Anusha Pandey",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744113164/anushaMaam2_hvyq6y.jpg",
      designation: "Talent Acquisition Manager",
    },
    {
      name: "Shruti Khatri",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687050/shruti_b8detu.jpg",
      designation: "Social Media Manager",
    },
    {
      name: "Resham Katariya",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743708510/resham2_u9gyeh.jpg",
      designation: "Human Resources",
    },
    {
      name: "Mayank Meshram",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743708384/mayank2_txndx3.jpg",
      designation: "Graphic Designer",
    },
    {
      name: "Arpita Halvi",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743708382/arpita2_pbphhi.jpg",
      designation: "Web Developer",
    },
  ];
  const about = [
    {
      title: "What is Starial?",
      text: "Your go-to destination for fast and reliable stationery delivery! We are here to revolutionize the way you get your stationery essentials, making sure you never have to wait for what you need.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687785/about1_m6mygv.jpg",
    },
    {
      title: "Who Are We?",
      text: "We are a passionate team of innovators, problem-solvers, and stationery enthusiasts dedicated to bringing convenience to your doorstep.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687791/team_bejk64.jpg",
    },
    {
      title: "What we do?",
      text: "At Starial, we provide an on-demand stationery delivery service, ensuring you get your supplies within just one hour. Whether you need notebooks, pens, art supplies, office essentials, or school materials, we’ve got you covered.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687785/delivery_pblvqr.jpg",
    },
  ];
  const workculture = [
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687669/starial4_rqnxzy.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687665/starial2_q4se9w.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687668/starial3_svrs1o.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1745929439/starial4_u2zpyx.jpg",
  ];
  return (
    <section className="about-page">
      <div className="about-landing">
        <div className="landing-image">
          <div>
            <h2>Where creativity meets functionality</h2>
            <p>
              At Starial, we take pride in our commitment to speed, reliability,
              and quality. Our team works tirelessly to source the best
              stationery products and optimize our delivery network, ensuring
              that every order reaches you in record time.
            </p>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="about-members">
          <div className="about-starial">
            {about.map(({ title, text, img }, index) => {
              return (
                <div className="about" key={index}>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <img src={img} alt="Pictures about us" loading="lazy" />
                </div>
              );
            })}
          </div>
          <div className="work-culture">
            <h2>Culture at Starial</h2>
            <div className="culture">
              {workculture.map((w, idx) => {
                return (
                  <div key={idx}>
                    <img
                      src={w}
                      alt="Images that depicts creativity"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="team">
            <h2>Meet Our Team</h2>
            <div>
              {teamMembers.map((member, index) => {
                return (
                  <div className="member" key={index}>
                    <img src={member.img} alt="" />
                    <div>
                      <h5>{member.name}</h5>
                      <h6>{member.designation}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="some-glimpes">
          <h3>A Peek into our world!</h3>
          <div className="masonry-grid">
            {images.map((img, index) => {
              return (
                <div key={index} className="masonry-item">
                  <img src={img.url} alt="Event Images" loading="lazy" />
                  <h6 className="img-desc">{img.title}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="download-now">
        <div className="download">
          <h3>Download the app now!</h3>
          <div className="download-links">
            <Link to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1">
              <IoLogoGooglePlaystore className="link-icon" /> Play Store
            </Link>
            <Link to="https://apps.apple.com/us/app/starial-stationery-uniform/id6477531287">
              <FaApple className="link-icon" /> App Store
            </Link>
          </div>
        </div>
        <div className="starial-app">
          <img
            src="https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687822/starial_ewf2vu.jpg"
            alt="Starial Brochure"
          />
        </div>
      </div>
    </section>
  );
}
