import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import baseUrl from "../config";

const initialData = {
  img: null,
  title: "",
};
// { roles, setRole }
export default function AddRoles() {
  const [newRole, setNewRole] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewRole((prev) => {
      return {
        ...prev,
        [name]: files ? files[0] : value,
      };
    });
  };
  // const uploadToCloudinary = async () => {
  //   const formData = new FormData();
  //   formData.append("file", newRole.img);
  //   formData.append("upload_preset", "mxbngjny");
  //   formData.append("folder", "uploads/roles-images");
  //   try {
  //     const res = await fetch(
  //       "https://api.cloudinary.com/v1_1/dgkv2gft7/upload",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );
  //     if (res.ok) {
  //       const data = await res.json();
  //       console.log("Data from cloudinary", data);
  //       console.log("CLoudinary url for image: ", data.secure_url);
  //       setNewRole({ title: newRole.title, img: data.secure_url });
  //     } else {
  //       console.error("Unable to upload image to cloudinary.");
  //     }
  //   } catch (e) {
  //     console.error("Unable to upload image to cloudinary.", e);
  //   }
  // };
  const addRole = async (e) => {
    e.preventDefault();
    // await uploadToCloudinary();
    // return setRole([...roles, newRole]);
    if (!newRole.img) {
      toast.error("Please select a file.");
      return;
    }
    const formData = new FormData();
    formData.append("file", newRole.img);
    formData.append("title", newRole.title);
    try {
      setLoading(true);
      const res = await fetch(`${baseUrl}roles/add`, {
        method: "POST",
        headers: {
          Authorization: authorizationToken,
        },
        body: formData,
      });
      const res_data = await res.json();
      if (res.ok) {
        setLoading(false);
        console.log("Role Added.", res_data);
        setNewRole(initialData);
        e.target.reset();
        toast.success("Role added.", { onClose: navigate("/careers") });
      } else {
        setLoading(false);
        console.error("Unable to add role.");
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (e) {
      setLoading(false);
      console.error("Error while adding role.", e);
    }
  };
  return (
    <section className="add-roles-section">
      <form className="add-roles-form" onSubmit={addRole}>
        <img src="starial-black-logo.png" alt="Starial Logo" />
        <div>
          <label htmlFor="img">Add an image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            id="img"
            name="img"
          />
        </div>
        <div>
          <label htmlFor="title">Add a title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={newRole.title}
            onChange={handleChange}
            required
            aria-required
          />
        </div>
        <button type="submit" className="add-role-btn">
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </section>
  );
}
