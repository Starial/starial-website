import { GiBookshelf, GiPencilBrush } from "react-icons/gi";
import { IoBookSharp, IoColorPalette } from "react-icons/io5";
import { ImPencil } from "react-icons/im";
import { useEffect, useState } from "react";

export default function Loading() {
  const icons = [
    GiBookshelf,
    IoBookSharp,
    GiPencilBrush,
    IoColorPalette,
    ImPencil,
  ];
  const [visibleIndex, setVisibleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="loading-page">
      {icons.map((Icon, index) => (
        <Icon
          className="icon"
          key={index}
          style={{ opacity: index === visibleIndex ? 1 : 0 }}
        />
      ))}
      <p>Loading...</p>
    </section>
  );
}
