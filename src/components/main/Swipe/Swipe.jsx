import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";
import "./Swipe.css"

const Swipe = () => {
    return (
        <div className="wrapper-swipe">
            <h2 className="titel-swipe">Lorem ipsum dolor sit amet</h2>
            <Swiper
                direction={"horizontal"}
                slidesPerView={4.6}
                spaceBetween={35}
                mousewheel={true}
                modules={[Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide className="swipe1"></SwiperSlide>
                <SwiperSlide className="swipe2"></SwiperSlide>
                <SwiperSlide className="swipe3"></SwiperSlide>
                <SwiperSlide className="swipe4"></SwiperSlide>
                <SwiperSlide className="swipe5"></SwiperSlide>
                <SwiperSlide className="swipe6"></SwiperSlide>
                <SwiperSlide className="swipe7"></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Swipe;