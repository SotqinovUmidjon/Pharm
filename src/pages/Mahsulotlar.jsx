import "./Mahsulotlar.css"
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { NavLink } from "react-router-dom";

function Mahsulotlar({products}) {
  const [imunitet, setImunitet] = useState(true)
  const [erkaklar, setErkaklar] = useState(false)
  const [ayollar, setAyollar] = useState(false)
  const [bolalar, setBolalar] = useState(false)
  const [keksalar, setKeksalar] = useState(false)

	return (
		<div className="Mahsulotlar" data-aos="flip-left">
				 <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="sirob">
              <div className="sirobName">
                <h1>
                  Imunitetni oshiruvchi <br /> tabiiy sirop.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit facilisi ac <br />
                  habitant lacinia amet enim morbi risus.
                </p>
                <button>Batafsil</button>
              </div>
              <div>
                <img src="./imgs/propolia.png" alt="" />
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
                  Lorem ipsum dolor sit amet consectetur. Sit facilisi ac <br />
                  habitant lacinia amet enim morbi risus.
                </p>
                <button>Batafsil</button>
              </div>
              <div>
                <img src="./imgs/propolia.png" alt="" />
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
                <img src="./imgs/propolia.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="imunitetlar">
         <div className="stestlar">
            <li onClick={()=>{
              setImunitet(true), setErkaklar(false), setAyollar(false),setBolalar(false), setKeksalar(false)
            }}>Imunitet</li>
            <li onClick={()=>{
              setImunitet(false), setErkaklar(true), setAyollar(false),setBolalar(false), setKeksalar(false)
            }}>Erkaklar</li>
            <li onClick={()=>{
              setAyollar(true), setErkaklar(false), setImunitet(false),setBolalar(false), setKeksalar(false)
            }}>Ayollar</li>
            <li onClick={()=>{
              setBolalar(true), setErkaklar(false), setImunitet(false), setAyollar(false), setKeksalar(false)
            }}>Bolalar</li>
            <li onClick={()=>{
              setKeksalar(true), setErkaklar(false), setImunitet(false), setBolalar(false),setAyollar(false)
            }}>Keksalar</li>
         </div>

          <div className="imunitetDiv">
          {imunitet && products.slice(0, 5).map((item)=>{
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

        <div className="imunitetDiv">
          {erkaklar && products.slice(0, 1).map((item)=>{
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

        <div className="imunitetDiv">
          {ayollar && products.slice(0, 2).map((item)=>{
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

        <div className="imunitetDiv">
          {bolalar && products.slice(0, 3).map((item)=>{
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

        <div className="imunitetDiv">
          {keksalar && products.slice(0, 4).map((item)=>{
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

      <div className="youtubeVideo">
        <h1>Mahsulot tayyorlanishidan lavhalar</h1>
      <iframe width="70%" height="500" src="https://www.youtube.com/embed/rcZ9gDnodPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
		</div>
	)
}

export default Mahsulotlar