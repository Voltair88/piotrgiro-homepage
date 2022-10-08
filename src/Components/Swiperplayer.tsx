import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
SwiperCore.use([Autoplay, Navigation, Pagination]);

type Props = {
  slides: Array<{
    src: string;
    title: string;
    alt: string;
  }>;
};
export default function Home({ slides }: Props) {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 3,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    /*     pagination: { true: '.swiper-pagination' },
     */ navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <div>
      <Swiper {...swiperOptions}>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.src} alt={slide.alt} className="skeleton" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
