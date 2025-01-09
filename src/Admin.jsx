import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./components/Firebase";
import toast from "react-hot-toast";
import ManageProducts from "./components/manageAdmin";

export default function AdminManager() {
  const [formData, setFormData] = useState({
    uploadUrl: "",
    name: "",
    price: "",
    memory: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((initialData) => ({
      ...initialData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "products"), {
        ...formData,
      });
      toast.success("upload success");
      setFormData({
        name: "",
        memory: "",
        uploadUrl: "",
        name: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Admin </h1>
      <h3>Create Product</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">copy image link</label>
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            name="upload"
            id="upload"
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            onChange={(event) => handleChange(event)}
            type="number"
            name="price"
            id="price"
          />
        </div>

        <div>
          <label htmlFor="memory">memory</label>
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            name="memory"
            id="memory"
          />
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div>
          <button>create product</button>
        </div>
        <button
          style={{
            width: "auto",
            height: "25px",
            backgroundColor: "black",
          }}
        >
          <a href="/" style={{ color: "white", fontSize: "15px" }}>
            view added product
          </a>
        </button>
      </form>

      <ManageProducts />
    </div>
  );
}
