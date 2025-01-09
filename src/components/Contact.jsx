import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitter, FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
import { db } from "./Firebase";
function Contact() {
  // contact
  const phoneNumber = "+254708400310"; // Replace with the actual phone number

  // contact
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const q = query(collection(db, "products"));

      const querySnapshot = await getDocs(q);
      const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setProducts(temp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const items = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setProducts(items);
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  console.log(searchQuery);
  const handleSearch = () => {
    console.log("searching for:", searchQuery);
  };
  const handleKeyPress = (event) => {
    if (event.key === "enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="home">
        <div className="nav">
          <div class="button-container"></div>

          <a href="/">
            <button class="button">
              <svg
                class="icon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
              </svg>
            </button>
          </a>

          <input
            className="search"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onkeyPress={handleKeyPress}
            placeholder="Search"
          />
          <a href="/Contact">
            <button onClick={handleSearch} class="button">
              <svg
                class="icon"
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </a>

          <a href="">
            <button class="button">
              <svg
                class="icon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
              </svg>
            </button>
          </a>

          <a className="admin" href="/Admin">
            <button class="button">
              <i className="admin" class="fa-brands fa-discord"></i>
            </button>
          </a>

          <a href="/Shop">
            <button class="button">
              <svg
                class="icon"
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
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

        {/* contact */}
        <div className="contact-us-container">
          {/* Social Media Icons */}
          <div className="social-media-icons">
            <h2>Contact Us</h2>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://wa.me/+245708400310"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaWhatsapp className="social-icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaTelegram className="social-icon" />
            </a>
          </div>

          {/* Contact Form */}

          {/* Company Details */}
          <div className="company-details">
            <h3>Our Company</h3>
            <p>We are located at: Paramount in Ngara</p>
            <address>
              00100 Nairobi
              <br />
              Nairobi city 00100
              <br />
              Phone: (+254) 708400310
              <br />
              Email: kariuki044@gmail.com
            </address>
            <p>Find us easily on the map and feel free to visit us!</p>
          </div>
        </div>
        {/* contact */}
      </div>
    </>
  );
}
export default Contact;
