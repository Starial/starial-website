import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./pages/PageNotFound";
import Loading from "./pages/Loading";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";
import DownloadApp from "./components/DownloadApp";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import Vendors from "./pages/Vendors";
import Careers from "./pages/Careers";
import ApplyForm from "./pages/ApplyForm";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AdminPanel from "./pages/AdminPanel";
import Applications from "./components/Applications";

export const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  AOS.init({
    offset: 300,
    duration: 1000,
  });
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer theme="light" draggable />
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/download-app" element={<DownloadApp />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers-access-admin/admin/true" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/careers/apply-now" element={<ApplyForm />} />
          <Route path="/admin-panel" element={<AdminPanel />}>
            <Route path="applications" element={<Applications />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
