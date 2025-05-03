import { FaBookOpen } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="not-found">
        <div>
          <h2>404</h2>
          Oops! Looks like this page took a coffee break with our notebooks.
          Let's get you back on track!
        </div>
        <h4>
          <img src={"starial-black-logo.png"} alt="Logo" />
        </h4>
        <NavLink to="/" className="home-link">
          Back to the desk <FaBookOpen />
        </NavLink>
      </div>
      <div className="starial">
        <img src="Starial-intro.png" alt="" />
      </div>
    </section>
  );
}
