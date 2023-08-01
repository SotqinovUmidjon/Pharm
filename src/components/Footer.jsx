import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="footerTop">
        <div className="footerPharm">
          <h1 style={{ color: "#F2CE9A" }}>
            <img src="./imgs/umidjonPharm.png" alt="" />
          </h1>
          <p style={{ width: "100%", color: "#fff" }}>
            Lorem ipsum dolor sit amet consectetur. In elementum morbi amet diam
            vel nisl amet vel. Eu tellus cras scelerisque rhoncus malesuada cras
            id at. In mattis ac adipiscing aliquam massa pellentesque donec
            laoreet.
          </p>
        </div>
        <div className="Xarita">
          <h2>Xarita</h2>
          <li>
            <Link to="/">Asosiy</Link>
          </li>
          <li>
            <Link to="/bizhaqimizda">Biz haqimizda</Link>
          </li>
          <li>
            <Link to="/mahsulotlar">Mahsulotlar</Link>
          </li>
          <li>
            <Link to="/yangiliklar">Yangiliklar</Link>
          </li>
          <li>
            <Link to="/kareyra">Kareyra</Link>
          </li>
          <li>
            <Link to="/hamkorlik">Hamkorlik</Link>
          </li>
        </div>

        <div className="Xarita">
          <h2>Maxfiylik siyosati</h2>
          <li>
            <Link to="/">Yordam</Link>
          </li>
          <li>
            <Link to="/bizhaqimizda">Eng ko’p so’ralgan savollar </Link>
          </li>
          <li>
            <Link to="/mahsulotlar">Foydalanish shartlari</Link>
          </li>
          <li>
            <Link to="/yangiliklar">Sotib olish</Link>
          </li>
          <li>
            <Link to="/hamkorlik">Tavsiyalar</Link>
          </li>
          <li>
            <Link to="/kareyra">Kareyra</Link>
          </li>
        </div>

        <div className="Xarita">
          <h2>Ijtimoiy tarmoqlar</h2>
          <li>
            <a href="https://t.me/umidjon_sotqinov" target="_blank">
              Telegaram
            </a>
          </li>
          <li>
            <a href="https://instagram.com/umidjon_coder" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100072950771308&mibextid=ZbWKwL" target="_blank">Facebook</a>
          </li>
          <li>
           +998 91 119 52 35
          </li>
        </div>
      </div>
      <div className="line">
        <p>© 2023 umidjonPharm.uz Barcha huquqlar himoyalangan!</p>
      </div>
    </div>
  );
}

export default Footer;
