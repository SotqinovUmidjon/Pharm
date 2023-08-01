import React from "react";
import "./Hamkorlik.css";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

function Hamkorlik() {
  return (
    <div className="Hamkorlik">
      <div className="hamkorlikHeader">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="sirob">
              <div className="sirobName">
                <h1>
                  Qanday qilib <br />
                  Al-ximik hamkori <br />
                  bo’lish mumkin?
                </h1>
                <button>Ariza qoldirish</button>
              </div>
              <div className="hamkorlikHeaderImg">
                <img src="./imgs/hamkorlik.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sirob">
              <div className="sirobName">
                <h1>
                  Qanday qilib <br />
                  Al-ximik hamkori <br />
                  bo’lish mumkin?
                </h1>
                <button>Ariza qoldirish</button>
              </div>
              <div className="hamkorlikHeaderImg">
                <img src="./imgs/hamkorlik.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
					<SwiperSlide>
            <div className="sirob">
              <div className="sirobName">
                <h1>
                  Qanday qilib <br />
                  Al-ximik hamkori <br />
                  bo’lish mumkin?
                </h1>
                <button>Ariza qoldirish</button>
              </div>
              <div className="hamkorlikHeaderImg">
                <img src="./imgs/hamkorlik.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

			<div className="hamkorlikTurlari">
				<h1>Hamkorlik turlari</h1>

				<div className="hamkorlikTurlariBox1">
					<img src="./imgs/hamkorlikTurlari1.png" alt="" /> <br />
					<h1>Fermer xo’jaliklari</h1>
					<p>
					Lorem ipsum dolor sit amet consectetur. Luctus vulputate in purus et dictum. Justo ullamcorper laoreet suspendisse nisl vitae praesent interdum. Dui semper velit in dolor volutpat. Id in amet aenean vestibulum aenean scelerisque. Scelerisque iaculis pretium amet netus nulla metus. Magna imperdiet feugiat pretium aliquam velit tincidunt nulla nisl. Semper pellentesque urna ut sit porttitor purus. Fusce viverra ornare ullamcorper ornare in aliquam sed quis diam. Mauris risus scelerisque pretium arcu vulputate amet.
					</p>
					<button>Ariza qoldirish</button>
					<button className="hamkorlikTurlariBox1Button">Qo’ng’iroq qilish</button>
				</div>
			</div>
    </div>
  );
}

export default Hamkorlik;
