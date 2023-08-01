import React, { useState } from "react";
import "./BizHaqimizda.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import ImageSlider from "./ImagesSlider";

function BizHaqimizda() {

  const containerStyles = {
    width: "550px",
    height: "450px",
    margin: "0 auto",
  };

  const slides = [
    { url: "./imgs/slider2.png", title: "beach" },
    { url: "./imgs/slider1.png", title: "boat" },
    { url: "./imgs/slider2.png", title: "forest" },
    { url: "./imgs/slider1.png", title: "city" },
    { url: "./imgs/slider2.png", title: "italy" },
  ];

  const [counterOn, setCounterOn] = useState(false)
  return (
    <div className="BizHaqimizda" data-aos="fade-left">
      <div className="haqimizda" >
        <div className="bizHaqimizda">
          <img src="./imgs/umidjonPharm.png" alt="" />
          <h1>
            Biz insonlarga <br />
            salomatlik <br />
            ulashamiz!
          </h1>
          <p style={{ width: "350px", fontSize: "12px" }}>
            Lorem ipsum dolor sit amet consectetur. Rutrum sit quisque varius
            interdum dictumst id. Eget mi sed tempus mattis lectus orci. Amet
            sit accumsan nec suspendisse neque netus neque adipiscing. Porttitor
            tincidunt quisque a ornare donec.Lorem ipsum dolor sit amet
            consectetur. Rutrum sit quisque varius interdum dictumst id. Eget mi
            sed tempus mattis lectus orci
          </p>
        </div>
      </div>

      <div className="foyda">
        <div className="foydaDiv">
          Umidjon Pharm <br />
          <span style={{ color: "#000" }}>mijozlar foydasini o'ylaydi</span>
        </div>
        <div className="foydaMijoz">
          <span>
            Umidjon Farm Kompaniyasi Kanada nanotexnologiyalari asosida yuqori
            sifatli kolloid minerallar hamda dorivor o’simliklardan tayyorlangan
            shifobaxsh ekstraktlar ishlab chiqarish bilan shug’ullanadi.
            Ekstraktlar gidrolat usulida bo’lib, MDX davlatlari ichida ularni
            iste’mol uchun chiqargan ilk kompaniya hisoblanadi! Korxona
            2019-yilda tashkil topgan bo’lib, mana shu qisqa vaqt mobaynida 20
            dan ortiq mahsulot assortimenti hamdan 5000 dan ortiq o’zining
            mamnun mijozlariga ega. Kompaniya sifatli, tabiiy hamda hamyonbob
            mahsulotlar ishlab chiqarish asosida millatning salomatligiga hissa
            qo’shishni o’z oldiga maqsad qilib qo’ygan.
          </span>
        </div>
      </div>

      <div className="count">
        <div>
          <h2>
            Xorijiy va mahalliy ilmiy- tadqiqot <br /> markazlari bilan
            hamkorlik!
          </h2>
          <ScrollTrigger onEnter={()=>{setCounterOn(true)}} onExit={()=>{setCounterOn(false)}}>
          <h1>
            {<CountUp start={0} end={7} duration={2} delay={0} />}
            <span className="countSpan">+</span>
          </h1>
          </ScrollTrigger>
        </div>
        <div>
          <h2>
            Doimiy mamnun <br />
            iste'molchilar!
          </h2>
          <h1>
            {<CountUp start={0} end={4000} duration={2} delay={0} />}
            <span className="countSpan">+</span>
          </h1>
        </div>
        <div>
          <h2>
            Shifobaxsh mahsulotla <br /> assortimenti
          </h2>
          <h1>
            {<CountUp start={0} end={22} duration={2} delay={0} />}
            <span className="countSpan">+</span>
          </h1>
        </div>
      </div>

			<div className="HamkorlarAbout">
       <h1>Hamkorlar</h1>
      <div className="hamkorImg">
        <img src="./imgs/hamkor1.png" alt="" />
        <img src="./imgs/hamkor2.png" alt="" />
        <img src="./imgs/hamkor3.png" alt="" />
        <img src="./imgs/hamkor3.png" alt="" />
        <img src="./imgs/hamkor4.png" alt="" />
      </div>
     </div>

		 <div className="Aloqa">
			<h1>Kanada bilan aloqalarimiz</h1>
			<p>
			Umidjon Farm Kompaniyasi Kanada nanotexnologiyalari asosida yuqori sifatli kolloid minerallar hamda dorivor o’simliklardan tayyorlangan shifobaxsh ekstraktlar ishlab chiqarish bilan shug’ullanadi. Ekstraktlar gidrolat usulida bo’lib, MDX davlatlari ichida ularni iste’mol uchun chiqargan ilk kompaniya hisoblanadi! Korxona 2019-yilda tashkil topgan bo’lib, mana shu qisqa vaqt mobaynida 20 dan ortiq mahsulot assortimenti hamdan 5000 dan ortiq o’zining mamnun mijozlariga ega. Kompaniya sifatli, tabiiy hamda hamyonbob mahsulotlar ishlab chiqarish asosida millatning salomatligiga hissa qo’shishni o’z oldiga maqsad qilib qo’ygan.
			</p>
			<div className="aloqaImg">
				<img style={{width: "70%"}} src="./imgs/kanada_uzb.png" alt="" />
			</div>
		 </div>

		 <div className="Jamoa">
			<div className="jamoaDiv">
				<h2>Jamoamiz bilan tanishing!</h2>
				<h3>
				Umidjon Sotqinov <br />
				<span>Developer</span>
				</h3>
				<p style={{width: "95%"}}>
				Lorem ipsum dolor sit amet consectetur. Consectetur dictum egestas tellus sit massa leo. Lorem adipiscing in vestibulum donec tortor viverra ornare aliquet amet. In nulla elementum eu quam. Consectetur risus velit neque tincidunt aliquam tempor.Consectetur dictum egestas tellus sit massa leo. Lorem adipiscing in vestibulum donec tortor viverra ornare aliquet amet.
				</p>
			</div>
			<div style={containerStyles}>
        <ImageSlider slides={slides}/>
			</div>
		 </div>
    </div>
  );
}

export default BizHaqimizda;
