import { useEffect, useState } from "react";

const processes = [
  {
    id: 1,
    step: "Customer places order",
    cName: "step1",
    url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688177/step1_om2yjz.png",
  },
  {
    id: 2,
    step: "Starial assign vendor to prepare order",
    cName: "step2",
    url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688181/step2_p1rbof.png",
  },
  {
    id: 3,
    step: "Starial assigns delivery partner",
    cName: "step3",
    url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688184/step3_riwhxk.png",
  },
  {
    id: 4,
    step: " Delivery Partner reaches shop",
    cName: "step4",
    url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688219/step4_fxmsxn.png",
  },
  {
    id: 5,
    step: " Order is picked up & delivered",
    cName: "step5",
    url: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688264/step5_xl0v7f.png",
  },
];

export default function DeliveryProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const delay = activeIndex === processes.length - 1 ? 2000 : 1500;
    const interval = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % processes.length);
    }, delay);
    return () => clearTimeout(interval);
  }, [activeIndex]);
  return (
    <section className="delivery-process">
      <h2>From Cart to Doorstep</h2>
      <div className="process">
        <div className="process-div">
          {processes.map(({ id, step, cName, url }) => {
            return (
              <div className={`${cName} step`} key={id}>
                <div
                  className={`step-img ${
                    id - 1 === activeIndex ? "scaled" : ""
                  }`}
                >
                  <img src={url} alt="" />
                </div>
                <h5>
                  <sup
                    className={`${
                      id - 1 === activeIndex ? "show-step-no" : ""
                    }`}
                  >
                    {id}
                  </sup>
                  {step}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
