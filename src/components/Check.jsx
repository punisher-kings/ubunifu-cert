import React, { useState } from "react";

function Check() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
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
            <p></p>
            <a className="sohp" href="./Shop">
              Back
            </a>
          </button>
          <p className="order">your order</p>
          <div className="move">
            <div className="pro">
              <p>products</p>
            </div>
            <div className="pro">
              <p>subtotal</p>
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
                    <div style={{}}>
                      <label>
                        Full Name:
                        <input
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
                      </label>
                    </div>
                    <div style={{}}>
                      <label>
                        Email Address:
                        <input
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
                      </label>
                    </div>

                    <div style={{}}>
                      <label>
                        Phone Number:
                        <input
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
                      </label>
                    </div>
                    <div style={{}}>
                      <label>
                        Delivery Address:
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          style={{
                            width: "100%",
                            height: "10%",
                          }}
                        ></textarea>
                      </label>
                    </div>
                    <div style={{}}>
                      <label>
                        Order Items:
                        <textarea
                          name="items"
                          value={formData.items}
                          onChange={handleChange}
                          required
                          style={{
                            width: "100%",
                            height: "10%",
                          }}
                          placeholder="E.g., 2x Pizza, 1x Burger"
                        ></textarea>
                      </label>
                    </div>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        width: "35%",
                        height: "10%",
                        border: "none",
                        padding: "10px 20px",
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
