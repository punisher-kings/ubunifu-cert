import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "./Firebase";

function ViewProduct() {
  const navigate = useNavigate();
  const removeFromShop = (itemId) => {
    setShop((prevShop) => prevShop.filter((item) => item.id !== itemId));
  };
  const { id } = useParams();
  const shop = JSON.parse(localStorage.getItem("shop")) || [];
  const [product, setproduct] = useState({});

  const handleAddToShop = () => {
    console.log("id", id);
    const existingShop = JSON.parse(localStorage.getItem("shop")) || [];
    const newProd = {
      id: id,
      ...product,
    };
    existingShop.push(newProd);
    localStorage.setItem("shop", JSON.stringify(existingShop));
    navigate("/Shop");
  };

  async function getProduct() {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setproduct(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      <h5>Selected product</h5>
      <div className="duct" style={{ position: "fixed" }}>
        <div className="imgs" style={{ height: "80%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={product.upload}
              className="imgcart"
              style={{ width: "65%", height: "50%" }}
            />
          </div>
        </div>
        <div
          className="price"
          style={{
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <p>
              {product.name} <br />
              {product.memory} <br /> {product.price}
            </p>
            <div>
              <button
                onClick={() => handleAddToShop(product.id)}
                className="btn_cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
