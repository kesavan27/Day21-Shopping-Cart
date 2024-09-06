import React, { useState } from "react";

import home from "/home.png";
import cartImage from "/cart.png";
import dress1 from "/beach.png";
import dress2 from "/bridal.png";
import dress3 from "/casual.png";
import dress4 from "/couple.png";
import dress5 from "/family.png";
import dress6 from "/formal.png";
import dress7 from "/party.png";
import dress8 from "/swim.png";

import "./App.css";

const Product = [
  {
    id: 1,
    item: "Fancy Product",
    prize: "$40.00 - $80.00",
    rating: false,
    offer: false,
    image: dress1,
    content: "Add to Cart",
  },
  {
    id: 2,
    item: "Special Item",
    prize: "$18.00",
    prize1: "$20.00",
    rating: true,
    offer: true,
    image: dress2,
    content: "Add to Cart",
  },
  {
    id: 3,
    item: "Sale Item",
    prize: "$25.00",
    prize1: "$50.00",
    rating: false,
    offer: true,
    image: dress3,
    content: "Add to Cart",
  },
  {
    id: 4,
    item: "Popular Item",
    prize: "$40.00",
    rating: true,
    offer: false,
    image: dress4,
    content: "Add to Cart",
  },
  {
    id: 5,
    item: "Sale Item",
    prize: "$25.00",
    prize1: "$50.00",
    rating: false,
    offer: true,
    image: dress5,
    content: "Add to Cart",
  },
  {
    id: 6,
    item: "Fancy Product",
    prize: "$120.00 - $280.00",
    rating: false,
    offer: false,
    image: dress6,
    content: "Add to Cart",
  },
  {
    id: 7,
    item: "Special Item",
    prize: "$18.00",
    prize1: "$20.00",
    rating: true,
    offer: true,
    image: dress7,
    content: "Add to Cart",
  },
  {
    id: 8,
    item: "Popular Item",
    prize: "$40.00",
    rating: true,
    offer: false,
    image: dress8,
    content: "Add to Cart",
  },
];

function App() {
  const [products, setProducts] = useState(Product);
  const [count, setCount] = useState(0);

  const handleButtonClick = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          const updatedContent =
            product.content === "Add to Cart" ? "Remove" : "Add to Cart";

          const countChange = product.content === "Add to Cart" ? 1 : -1;
          console.log("Previous count:", count);
          console.log("Count change:", countChange);
          setCount((prevCount) => {
            console.log("Previous count inside setCount:", prevCount);
            return prevCount + countChange;
          });
          console.log("Updated count:", count);
          return { ...product, content: updatedContent };
        }
        return product;
      })
    );
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ padding: "0px", backgroundColor: "#F4C2C2" }}
      >
        <a className="navbar-brand" style={{ marginLeft: "2%" }} href="#">
          Mintmade<br></br>fashion
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  All products
                </a>
                <hr></hr>
                <a className="dropdown-item" href="#">
                  Popular Items
                </a>
                <a className="dropdown-item" href="#">
                  New items
                </a>
              </div>
            </li>
          </ul>
          <button className="cart alert alert-dark cart">
            Cart {count}{" "}
            <img
              src={cartImage}
              alt="images"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
      </nav>

      <img src={home} alt="images" style={{ width: "100%", height: "300px" }} />

      <div className="container">
        {products.map((val) => (
          <div key={val.id} className="card">
            {val.offer && (
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                Sale
              </div>
            )}
            <img
              src={val.image}
              style={{
                minWidth: "100px",
                maxWidth: "200px",
                minHeight: "100px",
                maxHeight: "200px",
              }}
            />
            <p className="content">{val.item}</p>
            {val.rating && <div className="rating">⭐⭐⭐⭐⭐</div>}
            {!val.rating && (
              <div className="rating">
                <br></br>
              </div>
            )}

            <p>
              <span>
                {val.offer && (
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "black",
                      margin: "5px",
                      textAlign: "center",
                    }}
                  >
                    {val.prize1}
                  </span>
                )}
              </span>{" "}
              <span style={{ color: "black", margin: "5px" }}>{val.prize}</span>
            </p>
            <button
              className="btn"
              onClick={() => handleButtonClick(val.id)}
              style={{ textAlign: "center" }}
            >
              {val.content}
            </button>
          </div>
        ))}
      </div>
      <footer style={{ backgroundColor: "#FFF1DC", padding: "20px" }}>
        &copy; 2024 My Website
      </footer>
    </>
  );
}

export default App;
