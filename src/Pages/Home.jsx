/* eslint-disable camelcase */
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiotrGiro1, PiotrGiro2, PiotrGiro3, PiotrGiro4, PiotrGiro5 } from '../Assets/Pictures';
import 'swiper/css/bundle';
import { Hom } from 'Styled';
SwiperCore.use([Autoplay, Navigation, Pagination]);

const slides = [
  {
    src: PiotrGiro1,
    title: 'Piotr Giro',
    alt: 'Slide 1',
  },
  {
    src: PiotrGiro2,
    title: 'Piotr Giro',
    alt: 'Slide 2',
  },
  {
    src: PiotrGiro3,
    title: 'Piotr Giro',
    alt: 'Slide 3',
  },
  {
    src: PiotrGiro4,
    title: 'Piotr Giro',
    alt: 'Slide 4',
  },
  {
    src: PiotrGiro5,
    title: 'Piotr Giro',
    alt: 'Slide 5',
  },
];
export default function Home() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 3,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: { true: '.swiper-pagination' },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <Hom>
      <Swiper {...swiperOptions}>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.src} alt={slide.alt} fetchpriority="high" className="skeleton" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Hom>
  );
}
