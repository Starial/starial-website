import { BiBook, BiPencil } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { RiBookShelfFill } from "react-icons/ri";

export default function Services() {
  const services = [
    {
      title: "Quick Home Delivery",
      icon: <CiDeliveryTruck className="service-icon" />,
    },
    {
      title: "Books & Stationery",
      icon: <RiBookShelfFill className="service-icon" />,
    },
    { title: "School Uniforms", icon: <GiClothes className="service-icon" /> },
    {
      title: "Exam & Project Items",
      icon: <BiPencil className="service-icon" />,
    },
  ];
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services">
        {services.map((service, index) => {
          return (
            <div className="service" key={index}>
              <div>
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto veritatis facilis corrupti doloribus ut corporis.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
