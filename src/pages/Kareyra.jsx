import React from "react";
import "./Kareyra.css";
import "./BizHaqimizda.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { EffectCoverflow } from "swiper";

function Kareyra() {
  return (
    <div className="Kareyra">
      <div className="jamoa">
        <div className="bizHaqimizda">
          <img src="./imgs/umidjonPharm.png" alt="" />
          <h2>
            Alximik jamoasining <br />
            farmaseftiga <br />
            aylaning!
          </h2>
          <button>Ariza qoldirish</button>
        </div>
        <div></div>
      </div>

      <div className="qadriyatlar">
        <h1>Bizning qadriyatlar!</h1>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="kareyraSlider">
              <img src="./imgs/doctor.png" alt="" /> <br />
              <h2>Professionallar bilan ishlash!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. In posuere morbi enim
                lectus nulla amet. Vitae urna egestas porttitor ullamcorper
                neque nunc rhoncus potenti vulputate. Penatibus interdum
                condimentum pellentesque amet arcu lobortis. Amet nisl arcu
                malesuada lacus tempus tellus nam nunc at. Posuere feugiat
                pellentesque viverra pulvinar lectus. Egestas ante tellus quis
                elit sed. Proin risus mi bibendum imperdiet nisl sodales
                ultrices. Ullamcorper diam vel nisl feugiat pretium quis mattis
                dolor ac.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="kareyraSlider">
              <img src="./imgs/doctor.png" alt="" /> <br />
              <h2>Professionallar bilan ishlash!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. In posuere morbi enim
                lectus nulla amet. Vitae urna egestas porttitor ullamcorper
                neque nunc rhoncus potenti vulputate. Penatibus interdum
                condimentum pellentesque amet arcu lobortis. Amet nisl arcu
                malesuada lacus tempus tellus nam nunc at. Posuere feugiat
                pellentesque viverra pulvinar lectus. Egestas ante tellus quis
                elit sed. Proin risus mi bibendum imperdiet nisl sodales
                ultrices. Ullamcorper diam vel nisl feugiat pretium quis mattis
                dolor ac.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="kareyraSlider">
              <img src="./imgs/doctor.png" alt="" /> <br />
              <h2>Professionallar bilan ishlash!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. In posuere morbi enim
                lectus nulla amet. Vitae urna egestas porttitor ullamcorper
                neque nunc rhoncus potenti vulputate. Penatibus interdum
                condimentum pellentesque amet arcu lobortis. Amet nisl arcu
                malesuada lacus tempus tellus nam nunc at. Posuere feugiat
                pellentesque viverra pulvinar lectus. Egestas ante tellus quis
                elit sed. Proin risus mi bibendum imperdiet nisl sodales
                ultrices. Ullamcorper diam vel nisl feugiat pretium quis mattis
                dolor ac.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
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

      <div className="kareyraAriza">
        <h1>Bizga ariza qoldiring!</h1>
        <form>
          <label htmlFor="">Vakansiyalar</label> <br />
          <select className="kareyraForm" name="" id="">
            <option value=""></option>
            <option value="">Umidjon</option>
            <option value="">Umidjon</option>
          </select>{" "}
          <br />
          <br />
          <div className="inputKoreyra">
            <div className="inputName">
              <label htmlFor="">Ism va familiya</label> <br />
              <input type="text" name="" id="" />
              <br />
              <br />
              <label htmlFor="">Tug’ilgan sana</label> <br />
              <input type="text" name="" id="" />
              <br />
              <br />
              <label htmlFor="">Ma’lumot</label> <br />
              <select name="" id="">
                <option value=""></option>
                <option value="">Umidjon</option>
                <option value="">Umidjon</option>
              </select>
            </div>
            <div className="inputManzil">
              <label htmlFor="">Manzil</label> <br />
              <select name="" id="">
                <option value=""></option>
                <option value="">Fergana</option>
                <option value="">Tashkent</option>
              </select>{" "}
              <br /> <br />
              <label htmlFor="">Telefon raqam</label> <br />
              <input type="text" name="" id="" /> <br /> <br />
              <label htmlFor="">Maosh</label> <br />
              <select name="" id="">
                <option value=""></option>
                <option value="">4 000 000</option>
                <option value="">5 000 000</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Kareyra;
