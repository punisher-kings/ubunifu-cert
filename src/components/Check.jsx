import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order details:", formData);
    setOrderPlaced(true);
  };
  return (
    <>
      <div className="check">
        <div className="pay">
          <button className="cucu">
            <a className="sohp" href="./Shop">
              Back to shop
            </a>
          </button>
          <p className="order">your order</p>
          <div className="move">
            <div className="pro">
              <p>products</p>
            </div>
            <div className="pro">
              <p>pay here</p>
            </div>
          </div>
          <div className="tradepod">
            <div className="podcast"></div>
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
                      placeholder=" Email Address:"
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
                      placeholder="   Phone Number:"
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
                      placeholder="items ordered"
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
