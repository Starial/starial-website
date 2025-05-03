import About from "./About";
import Brands from "./Brands";
import Clients from "./Clients";
import DeliveryProcess from "./DeliveryProcess";
import DownloadApp from "./DownloadApp";
import Intro from "./Intro";
import Products from "../pages/Products";

export default function Home() {
  return (
    <main className="home-page">
      <Intro />
      <Products />
      <About />
      <DeliveryProcess />
      <Clients />
      <Brands />
      <DownloadApp />
    </main>
  );
}
