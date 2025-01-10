import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();
  const [shop, setShop] = useState(
    JSON.parse(localStorage.getItem("shop")) || []
  );

  const totalCost = shop.reduce(
    (total, item) => total + parseFloat(item?.price),
    0
  );

  const removeFromShop = (itemId) => {
    const updatedShop = shop.filter((item) => item.id !== itemId);

    setShop(updatedShop);

    localStorage.setItem("shop", JSON.stringify(updatedShop));
  };

  const handleCheckout = () => {
    // localStorage.removeItem("shop");
    // window.location.href = "/check";
    navigate("/check");
  };

  useEffect(() => {
    localStorage.setItem("shop", JSON.stringify(shop));
  }, [shop]);

  return (
    <>
      <div className="cart">
        <div className="navbar">
          <div className="button-container"></div>
          <a href="/">
            <button className="button">
              <svg
                className="icon"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
              </svg>
            </button>
          </a>

          <a href="/Contact">
            <button className="button">
              <svg
                className="icon"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
              </svg>
            </button>
          </a>

          <a href="/Shop">
            <button className="button">
              <svg
                className="icon"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </a>
        </div>
        <div>
          <h5>Cart</h5>
        </div>
        <div className="duct">
          <div className="imgs">
            {shop.length > 0 ? (
              shop.map((item, index) => (
                <div
                  className=""
                  style={
                    {
                      // display: "flex",
                      // flexWrap: "wrap",
                      // justifyContent: "center",
                      // textAlign: "center",
                      // alignItems: "center",
                      // flexDirection: "row",
                      // height: "65%",
                      // width: "35%",
                      // margin: "5px",
                    }
                  }
                  key={item.id}
                >
                  <img src={item.upload} className="imgcart" alt={item.name} />
                  <p className="text">
                    {item.name} <br />
                    {item.memory} <br /> {item.price}
                  </p>
                  {/* Remove button */}
                  <button
                    className="remove-button"
                    onClick={() => removeFromShop(item.id)}
                    style={{
                      backgroundColor: "ButtonShadow",
                      color: "black",
                    }}
                  >
                    Remove item
                  </button>
                </div>
              ))
            ) : (
              <h5>Your cart is empty.</h5>
            )}
          </div>
          <div
            className="price"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              fontFamily: "monospace",
              fontSize: "18px",
              flexDirection: "column",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <ul>
              {shop.map((item, index) => (
                <li
                  key={item.id}
                  style={{
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    fontSize: "10px",
                    flexDirection: "column",
                  }}
                >
                  <img src={item.upload} className="cart__img" />
                  <span>
                    {item.name}: {item.price}
                  </span>
                </li>
              ))}
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <span>Total: Ksh {totalCost.toFixed(2)}</span>
              </li>
            </ul>
            <div>
              <button
                style={{
                  marginTop: "25%",
                  marginBottom: "10px",
                }}
                className="checkout-button"
                onClick={handleCheckout}
              >
                proceed Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
