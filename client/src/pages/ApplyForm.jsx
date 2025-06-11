import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../App";

const initialData = {
  fullname: "",
  email: "",
  phone: "",
  resume: null,
  portfolio: "",
  role: "",
};

export default function ApplyForm() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialData);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const changeTitle = async () => {
      if (location.state) {
        const { title } = location.state;
        setTitle(title);
        setUser((prev) => ({
          ...prev,
          role: title.toLowerCase(),
        }));
      }
    };
    changeTitle();
  }, [location.state, title]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: files ? files[0] : value,
      };
    });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", user.fullname);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    formData.append("portfolio", user.portfolio);
    formData.append("file", user.resume);
    formData.append("role", user.role);
    try {
      setLoading(true);
      const res = await fetch(`${baseUrl}applicants/new`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setLoading(false);
        const res_data = await res.json();
        console.log("Application Submitted.", res_data);
        setUser(initialData);
        e.target.reset();
        toast.success("Application Submitted.", {
          onClose: navigate("/careers"),
        });
      } else {
        setLoading(false);
        console.error("Unable to send application.");
        toast.error("Unable to send application.");
      }
    } catch (e) {
      setLoading(false);
      console.error("Error while submitting form.", e);
    }
  };
  return (
    <section className="apply-section">
      <div className="apply-form">
        <h3>Apply Now!</h3>
        <form onSubmit={submitForm}>
          <div className="input-container">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter fullname"
              value={user.fullname}
              onChange={handleChange}
              autocomplete="off"
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
              autocomplete="off"
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone"
              name="phone"
              id="phone"
              value={user.phone}
              onChange={handleChange}
              autocomplete="off"
            />
          </div>
          <div className="input-container">
            <label htmlFor="resume">Drop your resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              onChange={handleChange}
              autocomplete="off"
            />
          </div>
          <div className="input-container">
            <label htmlFor="portfolio">Portfolio Link</label>
            <input
              type="text"
              name="portfolio"
              id="portfolio"
              placeholder="Paste Portfolio Link"
              value={user.portfolio}
              onChange={handleChange}
              autocomplete="off"
            />
          </div>
          <div className="input-container">
            <label htmlFor="role" className="select-role">
              Select Internship Role
            </label>
            <select
              name="role"
              id="role"
              value={user.role}
              onChange={handleChange}
            >
              <option value="">Choose role</option>
              <option value="social media manager">Social Media Manager</option>
              <option value="graphic designer">Graphic designer</option>
              <option value="product editor">Product Editor</option>
              <option value="video editor">Video Editor</option>
              <option value="human resource">Human Resources</option>
              <option value="finance">Finance</option>
            </select>
          </div>
          <button type="submit">{loading ? "Submitting..." : "Apply"}</button>
        </form>
      </div>
    </section>
  );
}
