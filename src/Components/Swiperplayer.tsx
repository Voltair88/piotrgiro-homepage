import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

type Props = {
  slides: Array<{
    src: string;
    title: string;
    alt: string;
  }>;
};

export default function Home({ slides }: Props) {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={3}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.src} alt={slide.alt} className="skeleton" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
