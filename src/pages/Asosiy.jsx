import React, { useState } from "react";
import "./Asosiy.css";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Link, NavLink } from "react-router-dom";
function Asosiy({products}) {

  const [project, setProject] = useState(true)
  const [project1, setProject1] = useState(false)
  const [barchasi, setBarchasi] = useState(false)
  const [mijoz, setMijoz] = useState(false)
  const [tavsiya, setTavsiya] = useState(false)

  const click = ()=>{
    setProject(false)
  }
  const click1 = ()=>{
    setProject(true)
  }
  const proj = ()=>{
    setProject1(true)
  }
  const proj1 = ()=>{
    setProject1(false)
  }
  const btnClick = ()=>{
    setBarchasi(false)
  }
  const mijoz1 = ()=>{
    setMijoz(true)
  }
  const mijoz2 = [
    {
      img: "./imgs/mijoz.png",
      name : "Aziz Shukurov",
      job : "Shifokor",
      fikr : "Ushbu tabiiy dorilar bemorlarni sog’ligini ijobiy holatga keltirishda katta hissa qo’shdi! ",
      tavsiya : "Sizga ham tavsiya qilaman 👍 ",
      data: "05.04.2023"
    },
    {
      img: "./imgs/mijoz.png",
      name : "Aziz Shukurov",
      job : "Shifokor",
      fikr : "Ushbu tabiiy dorilar bemorlarni sog’ligini ijobiy holatga keltirishda katta hissa qo’shdi! ",
      tavsiya : "Sizga ham tavsiya qilaman 👍 ",
      data: "05.04.2023"
    },
    {
      img: "./imgs/mijoz.png",
      name : "Aziz Shukurov",
      job : "Shifokor",
      fikr : "Ushbu tabiiy dorilar bemorlarni sog’ligini ijobiy holatga keltirishda katta hissa qo’shdi! ",
      tavsiya : "Sizga ham tavsiya qilaman 👍 ",
      data: "05.04.2023"
    },
    {
      img: "./imgs/mijoz.png",
      name : "Aziz Shukurov",
      job : "Shifokor",
      fikr : "Ushbu tabiiy dorilar bemorlarni sog’ligini ijobiy holatga keltirishda katta hissa qo’shdi! ",
      tavsiya : "Sizga ham tavsiya qilaman 👍 ",
      data: "05.04.2023"
    },
  ]
  const tavsiya1 = ()=>{
    setTavsiya(true)
  }
  const tavsiya3 = [
    {
      img: "./imgs/tavsiya.png",
      name: "Bosh og’rig’i"
    },
    {
      img: "./imgs/tavsiya.png",
      name: "Bosh og’rig’i"
    },
    {
      img: "./imgs/tavsiya.png",
      name: "Bosh og’rig’i"
    },
    {
      img: "./imgs/tavsiya.png",
      name: "Bosh og’rig’i"
    },
  ]
  return (
    <div className="Asosiy" onClick={()=>{setMenu(false)}} data-aos="flip-up">
      <div>
        
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="sirob">
              <div className="sirobName">
                <h1>
                  Imunitetni oshiruvchi <br /> tabiiy sirop
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit facilisi ac <br />{" "}
                  habitant lacinia amet enim morbi risus.
                </p>
                <button>Batafsil</button>
              </div>
              <div>
                <img src="./imgs/sirop.png" alt="" />
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
                <img src="./imgs/sirop.png" alt="" />
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
                <img src="./imgs/sirop.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mahsulot">
        <h1>Mahsulotlar</h1>
        <p>
          99 000uzs dan yuqori bo’lgan haridlar uchun yetkazib berish bepul!
        </p>
      </div>
      <div className="imunitetLi">
        <li>
          <img style={{ width: "200px" }} src="./imgs/imunitet.jpg" alt="" />
          <p>Sirop</p>{" "}
        </li>
        <li>
          <img style={{ width: "200px" }} src="./imgs/imunitet.jpg" alt="" />
          <p>Sirop</p>{" "}
        </li>
        <li>
          <img style={{ width: "200px" }} src="./imgs/imunitet.jpg" alt="" />
          <p>Sirop</p>{" "}
        </li>
        <li>
          <img style={{ width: "200px" }} src="./imgs/imunitet.jpg" alt="" />
          <p>Sirop</p>{" "}
        </li>
        <li>
          <img style={{ width: "200px" }} src="./imgs/imunitet.jpg" alt="" />
          <p>Sirop</p>{" "}
        </li>
      </div>

      <div className="news">
        <h1>Yangiliklar</h1>
        <img src="./imgs/news.png" alt="" />
        <h2>Farmaseftika yangiliklari</h2>
        <p style={{width: "75%"}}>
        Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar ac suspendisse ornare id at suspendisse. Tempus nibh vitae consectetur id vel. Mauris egestas posuere quam lacus turpis metus sem non commodo. Accumsan habitant eget quisque gravida sed eget morbi. Eleifend a elementum lacinia justo duis molestie elementum. Massa pretium nulla gravida odio vulputate fringilla nam ligula leo.
        </p>
        <Link to="/yangiliklar">Barchasi</Link>
      </div>

      <div className="project">
        <h1>Mahsulotlar</h1>
        <p>
        100 000uzs dan yuqori bo’lgan haridlar uchun yetkazib berish bepul!
        </p>
        <p>
          <span onClick={()=>{
            click1(), proj1()
          }} className="projectSpan">Ommabop</span>
          <span onClick={()=>{
            proj(), click()
          }} className="projectSpan">Reytingi yuqori</span>
        </p>

        <div className="div">
          {project && products.map((item)=>{
            return(
             <div className="product">
                  <div className="imgPro">
                    <img src={item.img} alt="" />
                  </div>
                <div className="productName">
                <p>{item.name} mln</p>
                <span>{item.price}</span>
                </div>
                <div className="flag">
                    🏳️‍⚧️
                    {/* <span className="flagPharm" style={{fontSize: "18px", color: "#676363"}}>Umidjon Pharm</span> */}
                </div>
                <div className="productStar">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="hoverPro">
                  <div className="productHover">
                    <div  className="productHoverBtn">
                      <NavLink>Batafsil</NavLink> <br /><br />
                    </div>
                      <div className="iconPro">
                        <span style={{fontSize: "20px", cursor: "pointer"}}>❤️</span>
                        <span style={{fontSize: "20px", cursor: "pointer"}}>⭐</span>
                        <span style={{fontSize: "20px", cursor: "pointer"}}>🫡</span>
                      </div>
                  </div>
                </div>
             </div>
            )
          })
          }
        </div>

       {barchasi && 
          <div className="div">
          {project && products.map((item)=>{
            return(
              <div className="product">
                  <div className="imgPro">
                    <img src={item.img} alt="" />
                  </div>
                <div className="productName">
                <p>{item.name} mln</p>
                <span>{item.price}</span>
                </div>
                <div className="flag">
                    🏳️‍⚧️
                    {/* <span className="flagPharm" style={{fontSize: "18px", color: "#676363"}}>Umidjon Pharm</span> */}
                </div>
                <div className="productStar">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="hoverPro">
                  <div className="productHover">
                    <div  className="productHoverBtn">
                      <NavLink>Batafsil</NavLink> <br /><br />
                    </div>
                      <div className="iconPro">
                        <span style={{fontSize: "20px", cursor: "pointer"}}>❤️</span>
                        <span style={{fontSize: "20px", cursor: "pointer"}}>⭐</span>
                        <span style={{fontSize: "20px", cursor: "pointer"}}>🫡</span>
                      </div>
                  </div>
                </div>
             </div>
            )
          })
          }
        </div>}


       {!barchasi && <button className="btnPages" onClick={()=> setBarchasi(true)}>Barchasi</button>}
       {barchasi && <button className="btnPages" onClick={()=> setBarchasi(false)}>Yopish</button>}

        <div className="div">
          {project1 &&
           <div>
            <div className="tavsiyalarBox">
         {tavsiya3.map((item)=>{
           return (
             <div className="tavsiyalarImg">
               <img style={{width: "310px"}} src={item.img} alt="" />
               <p className="tavsiyalarImg">{item.name}</p>
             </div>
           )
         })}
       </div>
          </div>
          }
        </div>
      </div>

      <div className="chegirma">
        <div className="chegirma35">
          <h2>35% chegirma</h2>
          <h1>
            Oyning eng ommabop <br />
            mahsuloti
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</p>
          <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</p>
          <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</p>
          <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</p>
          <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</p>
          <button>Sotib olish!</button>
        </div>
        <div>
          <img style={{width: "350px"}} src="./imgs/propolia.png" alt="" />
        </div>
      </div>

      <div className="yangiTarkib">
        <div className="yangitarkiblar">
          <h1>Yangi tarkiblar</h1>
          <p>100 000uzs dan yuqori bo’lgan haridlar uchun yetkazib berish bepul!</p>
        </div>
     
      <div className="media">
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="imgSlide">
            <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
            <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
            <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
             <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
            <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
             <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
            <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
        <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
        <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>

      <div className="media1">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="imgSlide">
            <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p >name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
            <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
            <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
             <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
            <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
             <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
            <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
        <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imgSlide">
        <img style={{width : "200px", height: "250px"}} src="./imgs/kapsula.png" alt="" />
            <p>name</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      
      </div>

     <div className="Mijoz">
     <h1 style={{textAlign: "center", marginTop: "40px"}}>Mijozlar fikri</h1>
      <div className="Mijozlarfikri">
        {mijoz2.map((item)=>{
          return (
            <div className="mijozBox">
              <div className="mijozCard">
                <div className="mijozImg">
                  <img style={{borderRadius: "50px", width: "60px"}} src={item.img} alt="" />
                </div>
                <div className="mijozName">
                  <h3>{item.name}</h3> 
                  <p>{item.job}</p>
                </div>
              </div>
              <div className="fikr">
                <h6>{item.fikr}</h6>
                <p>{item.tavsiya}</p>
              </div>
              <div className="data">
                {item.data}
              </div>
            </div>
          )
        })}
      </div>

      {mijoz &&
         <div className="Mijozlarfikri">
         {mijoz2.map((item)=>{
           return (
             <div className="mijozBox">
               <div className="mijozCard">
                 <div className="mijozImg">
                   <img style={{borderRadius: "50px", width: "60px"}} src={item.img} alt="" />
                 </div>
                 <div className="mijozName">
                   <h3>{item.name}</h3> 
                   <p>{item.job}</p>
                 </div>
               </div>
               <div className="fikr">
                 <h6>{item.fikr}</h6>
                 <p>{item.tavsiya}</p>
               </div>
               <div className="data">
                 {item.data}
               </div>
             </div>
           )
         })}
       </div>
      }
      {!mijoz && <button className="btnPages" onClick={()=>{
        setMijoz(true)
      }}>Barchasi</button>}
      {mijoz && <button className="btnPages" onClick={()=>{
        setMijoz(false)
      }}>Yoqish</button>}
     </div>

     <div className="Hamkorlar">
       <h1>Hamkorlar</h1>
      <div className="hamkorImg">
        <img src="./imgs/hamkor1.png" alt="" />
        <img src="./imgs/hamkor2.png" alt="" />
        <img src="./imgs/hamkor3.png" alt="" />
        <img src="./imgs/hamkor4.png" alt="" />
      </div>
     </div>

     <div className="Tavsiyalar">
        <h1>Tavsiyalar</h1>
        <div className="tavsiyalarBox">
          {tavsiya3.map((item)=>{
            return (
              <div className="tavsiyalarImg">
                <img style={{width: "310px"}} src={item.img} alt="" />
                <p className="tavsiyalarImg">{item.name}</p>
              </div>
            )
          })}
        </div>

        {tavsiya &&
         <div className="tavsiyalarBox1">
         {tavsiya3.map((item)=>{
           return (
             <div className="tavsiyalarImg">
               <img style={{width: "100%"}} src={item.img} alt="" />
               <p className="tavsiyalarImg">{item.name}</p>
             </div>
           )
         })}
       </div>
        }
        {!tavsiya && <button className="btnPages" onClick={()=>{
          setTavsiya(true);
        }}>Barchasi</button>}
         {tavsiya && <button className="btnPages" onClick={()=>{
          setTavsiya(false);
        }}>Yopish</button>}
     </div>
    </div>
  );
}

export default Asosiy;
