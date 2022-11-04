import { Link } from 'ice';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

const Banner = () => {
  return (
    <Swiper
      className={styles.banner}
      centeredSlides
      loop
      speed={2000}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <Link to="/" target="_blank">
          <img src="/images/banner1.png" alt="banner 1" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/" target="_blank">
          <img src="/images/banner2.jpg" alt="banner 2" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/" target="_blank">
          <img src="/images/banner3.jpg" alt="banner 3" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/" target="_blank">
          <img src="/images/banner4.jpg" alt="banner 4" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/" target="_blank">
          <img src="/images/banner5.jpg" alt="banner 5" />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
