import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FiFileText, FiLogOut } from "react-icons/fi";
import { useEffect } from "react";
import { useAuth } from "../store/auth";

export default function AdminPanel() {
  const links = [{ title: "Applications", link: "/admin-panel/applications" }];
  const navigate = useNavigate();
  const { token } = useAuth();
  useEffect(() => {
    if (!token) navigate("/");
  });
  return (
    <section className="admin-panel">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.link}>
                  <FiFileText className="application-icon" /> {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
      <div className="collections">
        <Outlet />
      </div>
      <NavLink to="/logout" className="logout-btn">
        {/* Logout */}
        <FiLogOut className="logout-icon" />
      </NavLink>
    </section>
  );
}
