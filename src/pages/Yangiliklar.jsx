import React from "react";
import "./Yangiliklar.css";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Yangiliklar() {
  const yutuq = [
    {
      id: 1,
      img: "./imgs/yutuqlar.png",
      name: "Yil brendi 2023",
    },
    {
      id: 1,
      img: "./imgs/yutuqlar.png",
      name: "Yil brendi 2023",
    },
    {
      id: 1,
      img: "./imgs/yutuqlar.png",
      name: "Yil brendi 2023",
    },
    {
      id: 1,
      img: "./imgs/yutuqlar.png",
      name: "Yil brendi 2023",
    },
    {
      id: 1,
      img: "./imgs/yutuqlar.png",
      name: "Yil brendi 2023",
    },
    {
      id: 1,
      img: "./imgs/yutuqlar.png",
      name: "Yil brendi 2023",
    },
  ];

  return (
    <div className="Yangiliklar" data-aos="zoom-in-down">
      <div className="img">
        <img style={{ width: "350px" }} src="./imgs/umidjonPharm.png" alt="" />
      </div>
      <h1 className="yutuqlarH1">Yutuqlar</h1>
      <div className="yutuqlar">
        {yutuq.map((item) => {
          return (
            <div className="yutuqlarBox">
              <img src={item.img} alt="" />
              <p>{item.name}</p>
              <Link>Batafsil</Link>
            </div>
          );
        })}
      </div>

      <div className="news">
        <h1>Yangiliklar</h1>
        <img src="./imgs/news.png" alt="" />
        <h2>Farmaseftika yangiliklari</h2>
        <p style={{ width: "75%" }}>
          Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar ac
          suspendisse ornare id at suspendisse. Tempus nibh vitae consectetur id
          vel. Mauris egestas posuere quam lacus turpis metus sem non commodo.
          Accumsan habitant eget quisque gravida sed eget morbi. Eleifend a
          elementum lacinia justo duis molestie elementum. Massa pretium nulla
          gravida odio vulputate fringilla nam ligula leo.
        </p>
      </div>

      <div className="ishJarayoni">
        <h1>Ish jarayonidan lavhalar</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./imgs/ish.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imgs/ish.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imgs/ish.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imgs/ish.png" />
          </SwiperSlide>
        </Swiper>
        <h2>Marketing bo‘limi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar ac
          suspendisse ornare id at suspendisse. Tempus nibh vitae consectetur id
          vel. Mauris egestas posuere quam lacus turpis metus sem non commodo.
          Accumsan habitant eget quisque gravida sed eget morbi. Eleifend a
          elementum lacinia justo duis molestie elementum. Massa pretium nulla
          gravida odio vulputate fringilla nam ligula leo.
        </p>
      </div>

      <div className="yangiliklarSleder">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="sirob">
              <div className="sirobName">
                <h1>
                  Imunitetni oshiruvchi <br /> tabiiy sirop.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit facilisi ac <br />{" "}
                  habitant lacinia amet enim morbi risus.
                </p>
                <button>Batafsil</button>
              </div>
              <div>
                <img src="./imgs/boshImg.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sirob">
              <div className="sirobName">
                <h1>
                  Imunitetni oshiruvchi <br /> tabiiy sirop.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit facilisi ac <br />{" "}
                  habitant lacinia amet enim morbi risus.
                </p>
                <button>Batafsil</button>
              </div>
              <div>
                <img src="./imgs/boshImg.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sirob">
              <div className="sirobName">
                <h1>
                  Bosh og’rig’ini <br /> davolashning 10 usuli
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit facilisi ac <br />{" "}
                  habitant lacinia amet enim morbi risus.
                </p>
                <button>Batafsil</button>
              </div>
              <div>
                <img src="./imgs/boshImg.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="yangiliklarTarmoq">
        <h1>Bizni ijtimoiy tarmoqlarda kuzatib boring!</h1>
        <div className="tarmoqImg">
          <a href="https://www.facebook.com/profile.php?id=100072950771308&mibextid=ZbWKwL" target="_blank">
            <img src="./imgs/facebook.png" alt="" />
          </a>
          <a href="https://instagram.com/umidjon_coder" target="_blank">
            <img src="./imgs/instagram.png" alt="" />
          </a>
          <a href="https://t.me/umidjon_sotqinov" target="_blank">
            <img src="./imgs/telegram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Yangiliklar;
