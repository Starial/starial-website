// import { useState } from "react";
import { Link } from "react-router-dom";

const stationery = [
  {
    name: "Art & Crafts",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977078/craft_fo3set.jpg",
  },
  {
    name: "Notebooks",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977078/notebooks_thztna.jpg",
  },
  {
    name: "Writing Materials",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977078/pens_ygkami.jpg",
  },
  {
    name: "Office Stationery",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977078/office_nqrvsw.jpg",
  },
];

const uniforms = [
  {
    name: "Regular Dresses",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977185/regular-uniform_suucfu.jpg",
  },
  {
    name: "House Dresses",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977184/house-dress_iruxii.jpg",
  },
  {
    name: "Seasonal Dresses",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977186/winter-uniforms_wxfeuz.jpg",
  },
  {
    name: "Essentials",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977184/essentials_qcv8z2.jpg",
  },
];

const books = [
  {
    name: "Academic Books",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977757/academic2_grk33v.jpg",
  },
  {
    name: "Civil Services",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1745918767/compBooks2_nkiq9i.jpg",
  },
  {
    name: "Novels",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977268/novels2_lijnci.jpg",
  },
  {
    name: "Kids Books",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1744977267/kidsBook2_x1vv1f.jpg",
  },
];

const categories = [
  { name: "Stationery", items: stationery },
  { name: "School Uniforms", items: uniforms },
  { name: "Books", items: books },
];

export default function CategoriesPage() {
  // const [searchText, setSearchText] = useState("");
  // const filteredCategories = categories.map((cate) => ({
  //   ...cate,
  //   items: cate.items.filter((item) =>
  //     item.name.toLowerCase().includes(searchText.toLowerCase())
  //   ),
  // }));
  // const filteredCount = filteredCategories.reduce(
  //   (count, cat) => count + cat.items.length,
  //   0
  // );
  return (
    <section className="categories-page">
      <main className="categories">
        {/* <div className="search-container">
          <input
            type="search"
            placeholder="Search by Categories"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <p>
            Showing results for
            <span> {filteredCount} </span>
            categories...
          </p>
        </div> */}
        <h2>Choose what you need</h2>
        <div className="cate-go-ries">
          {categories.map((category) =>
            category.items.length > 0 ? (
              <div className="stationeries" id="stationery" key={category.name}>
                <h5>{category.name}</h5>
                <div className="cat">
                  {category.items.map((s, idx) => {
                    return (
                      <div className="item" key={idx}>
                        <img src={s.img} alt="" />
                        <Link to="/download-app">Order Now</Link>
                        <h6>{s.name}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null
          )}
        </div>
      </main>
    </section>
  );
}
