import { Image } from "./image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Take a look at our gallery to see the outstanding cleaning results
            we deliver. From pristine residential spaces to immaculate
            commercial properties, our work showcases our commitment to
            excellence and attention to detail. Each image reflects the high
            standards we uphold in every project
          </p>
        </div>
        <div className="row">
          <div
            className="portfolio-items"
            style={{
              height: "fit-content",
            }}
          >
            {props.data ? (
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation // Enable navigation
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
              >
                {props.data.map((d, i) => (
                  <SwiperSlide key={`${d.title}-${i}`}>
                    <img src={d.largeImage} alt={d.title} />{" "}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
