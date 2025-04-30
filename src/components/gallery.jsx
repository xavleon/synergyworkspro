import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination, EffectFade, A11y } from "swiper/modules";
import "../styles/gallery.css";
import "swiper/css";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Transformation Gallery</h2>
          <p>
            See the difference our professional cleaning service makes. Swipe
            through our before and after photos to witness the transformations
            we deliver to every space we clean.
          </p>
        </div>

        <div className="gallery-container">
          {/* Before & After Tabs */}
          <div className="gallery-tabs">
            <button className="tab active" data-tab="before">
              Before
            </button>
            <div className="tab-divider">→</div>
            <button className="tab" data-tab="after">
              After
            </button>
          </div>

          <div className="row gallery-row">
            {/* Before Gallery */}
            <div className="col-md-6">
              <div className="gallery-section">
                <h3 className="gallery-subtitle">Before Cleaning</h3>
                <div className="gallery-wrapper">
                  {props.data && props.data.BeforeImages ? (
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      navigation
                      modules={[Navigation, Pagination, EffectFade, A11y]}
                      pagination={{ clickable: true }}
                      effect="fade"
                      loop={true}
                      className="before-swiper compact-swiper"
                      wrapperProps={{ style: { height: "0" } }}
                    >
                      {props.data.BeforeImages.map((d, i) => (
                        <SwiperSlide key={`before-${i}`}>
                          <div className="gallery-slide">
                            <img src={d.image} alt={`Before - ${i + 1}`} />
                            <div className="image-caption">
                              <span className="caption-tag">Before</span>
                              <p>{d.description}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    "Loading..."
                  )}
                </div>
              </div>
            </div>

            {/* After Gallery */}
            <div className="col-md-6">
              <div className="gallery-section">
                <h3 className="gallery-subtitle">After Cleaning</h3>
                <div className="gallery-wrapper">
                  {props.data && props.data.AfterImages ? (
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      navigation
                      modules={[Navigation, Pagination, EffectFade, A11y]}
                      pagination={{ clickable: true }}
                      effect="fade"
                      loop={true}
                      className="after-swiper compact-swiper"
                      wrapperProps={{ style: { height: "0" } }}
                    >
                      {props.data.AfterImages.map((d, i) => (
                        <SwiperSlide key={`after-${i}`}>
                          <div className="gallery-slide">
                            <img src={d.image} alt={`After - ${i + 1}`} />
                            <div className="image-caption">
                              <span className="caption-tag">After</span>
                              <p>{d.description}</p>
                            </div>
                          </div>
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
        </div>
      </div>
    </div>
  );
};
