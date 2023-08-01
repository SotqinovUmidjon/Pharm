import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({ products }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
		console.log("jhg");

    const filteredResults = products.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setResults(filteredResults);
  };

  const [menu, setMenu] = useState(false);

  const btnMenu = () => {
    setMenu();
  };

  const [top, setTop] = useState(false);
  const [navbarTop, setNavbarTop] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      setTop(true);
      setNavbarTop(true);
    } else {
      setTop(false);
      setNavbarTop(false);
    }
  });
  return (
    <div className="Navbar">
      <div
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        className={top ? "top active" : "top"}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </div>
      <div className="nav">
        <div className="loc">
          <span>
            <img style={{ marginRight: "5px" }} src="./imgs/Map.png" alt="" />
            <b>Manzilimiz</b>
          </span>
          <span>
            <img style={{ marginRight: "5px" }} src="./imgs/tel.png" alt="" />
            <b>Savollar yo’llang!</b>
          </span>
        </div>

        <div className="num">
          <span>
            <span>Biz bilan bog’laning!:</span>
            <b>+998 91 119 52 35</b>
          </span>
          <span>
            <select>
              <option value="ozbekcha">O'zbekcha</option>
              <option value="ruscha">Ruscha</option>
              <option value="inglizcha">Inglizcha</option>
            </select>
          </span>
        </div>
      </div>

      <div className="pharm">
        <div
          onClick={() => {
            setMenu(true);
          }}
          className="menu"
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        {menu && (
          <div className="links1">
            <div className="links1Img">
              <div>
                <img
                  style={{ width: "150px" }}
                  src="./imgs/umidjonPharm.png"
                  alt=""
                />
              </div>
              <div
                className="exit"
                onClick={() => {
                  setMenu(false);
                }}
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </div>
            </div>
            <NavLink
              onClick={() => {
                setMenu(false);
              }}
              to="/"
            >
              Asosiy
            </NavLink>{" "}
            <br />
            <br />
            <NavLink
              onClick={() => {
                setMenu(false);
              }}
              to="/bizhaqimizda"
            >
              Biz haqimizda
            </NavLink>{" "}
            <br />
            <br />
            <NavLink
              onClick={() => {
                setMenu(false);
              }}
              to="/mahsulotlar"
            >
              Mahsulotlar
            </NavLink>{" "}
            <br />
            <br />
            <NavLink
              onClick={() => {
                setMenu(false);
              }}
              to="/yangiliklar"
            >
              Yangiliklar
            </NavLink>{" "}
            <br />
            <br />
            <NavLink
              onClick={() => {
                setMenu(false);
              }}
              to="/kareyra"
            >
              Kareyra
            </NavLink>{" "}
            <br />
            <br />
            <NavLink
              onClick={() => {
                setMenu(false);
              }}
              to="/hamkorlik"
            >
              Hamkorlik
            </NavLink>{" "}
            <br />
            <br />
            <div className="u2023">© 2023 umidjonPharm.uz</div>
          </div>
        )}
        <div className="pharmImg">
          <img style={{ width: "100px" }} src="./imgs/umidjon.png" alt="" />
          <b
            style={{ color: "#C25F2C", fontSize: "22px", letterSpacing: "2px" }}
          >
            Umidjon <br /> Pharm
          </b>
        </div>
        <div className="pharmInput">
          <a href="#input">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Bu yerdan qidiring ..."
            />
						<ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
          </a>
        </div>
      </div>

      <div
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        className={navbarTop ? "links active" : "links"}
      >
        <NavLink to="/">Asosiy</NavLink>
        <NavLink to="/bizhaqimizda">Biz haqimizda</NavLink>
        <NavLink to="/mahsulotlar">Mahsulotlar</NavLink>
        <NavLink to="/yangiliklar">Yangiliklar</NavLink>
        <NavLink to="/kareyra">Kareyra</NavLink>
        <NavLink to="/hamkorlik">Hamkorlik</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
