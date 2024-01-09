/* eslint-disable react/prop-types */
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../styles/Carousel.css"

export function Carousel({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
        }}
        className="swiper-top"
        navigation={true}
        modules={[Navigation, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          autoScrollOffset: 1,
        }}
      >
        {images.map((i, index) => {
          return i.width > 300 ? (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={i.href} />
            </SwiperSlide>
          ) : null;
        })}
      </Swiper>

      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        className="swiper-bottom"
      >
        {images.map((i, index) => {
          return i.width > 300 ? (
            <SwiperSlide
              className="swiper-slide"
              key={index}
            >
              <img src={i.href} />
            </SwiperSlide>
          ) : null;
        })}
      </Swiper>
    </>
  );
}
