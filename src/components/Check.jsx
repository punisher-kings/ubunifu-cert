import React, { useState, useEffect } from "react";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function Check() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    amount: "",
    items: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [shop, setShop] = useState(
    JSON.parse(localStorage.getItem("shop")) || []
  );
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (!user) {
      // navigate("/login");
    }
  }, [user, navigate]);
  console.log("user", user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order details:", formData);
    setOrderPlaced(true);
  };

  // Calculate total cost and display items ordered
  const calculateTotal = () => {
    return shop.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const getItemsOrdered = () => {
    return shop.map((item) => item.name).join(", ");
  };

  useEffect(() => {
    if (shop.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        amount: calculateTotal().toFixed(2),
        items: getItemsOrdered(),
      }));
    }
  }, [shop]);

  return (
    <>
      <div className="check">
        <div className="pay">
          <button className="btn__back">
            <a className="sohp" href="./Shop">
              Back to shop
            </a>
          </button>
          <p className="order">Your order</p>
          <div className="move">
            <div className="pro">
              <p>Products</p>
            </div>
            <div className="pro">
              <p>Pay here</p>
            </div>
          </div>
          <div className="tradepod">
            <div id="pod">
              {/* Display products from localStorage */}
              <div className="checkout__products">
                {shop.length > 0 ? (
                  shop.map((item, index) => (
                    <div key={item.id}>
                      <img
                        src={item.upload}
                        className="imgcart"
                        alt={item.name}
                      />
                      <p>
                        {item.name} <br />
                        {item.memory} <br /> {item.price}
                      </p>
                    </div>
                  ))
                ) : (
                  <h5>Your cart is empty.</h5>
                )}
              </div>
            </div>
            <div className="trade">
              <div
                style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}
              >
                {!orderPlaced ? (
                  <form className="fort" onSubmit={handleSubmit}>
                    <input
                      placeholder="Full name:"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        height: "35px",
                      }}
                    />

                    <input
                      placeholder="Email Address:"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        height: "35px",
                      }}
                    />

                    <input
                      placeholder="Phone Number:"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        height: "35px",
                      }}
                    />

                    <textarea
                      placeholder="Delivery Address:"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        height: "10%",
                      }}
                    ></textarea>

                    <textarea
                      name="items"
                      value={formData.items}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        height: "10%",
                      }}
                      placeholder="Items ordered"
                    ></textarea>

                    <textarea
                      placeholder="Amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        height: "10%",
                      }}
                    ></textarea>

                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        width: "100%",
                        height: "35px",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      Place Order
                    </button>
                  </form>
                ) : (
                  <div>
                    <h2>Thank You!</h2>
                    <p>Your order has been placed successfully.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Check;
