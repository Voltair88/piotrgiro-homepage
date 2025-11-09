import { useState, useEffect } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import 'swiper/css/bundle';

type Props = {
  slides: Array<{
    src: string;
    title: string;
    alt: string;
  }>;
};

export default function Home({ slides }: Props) {
  const { i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  // Ensure component is mounted and images can load before showing Swiper
  useEffect(() => {
    // Minimal delay to ensure DOM is fully ready (helps with Safari timing)
    // Using requestAnimationFrame is better than setTimeout for browser rendering
    requestAnimationFrame(() => {
      setIsReady(true);
    });
  }, []);

  // Reset Swiper when language changes to prevent stale instances
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update();
    }
  }, [i18n.language, swiperInstance]);

  if (!isReady) {
    // Show placeholder to prevent layout shift
    return <div style={{ minHeight: '400px', background: 'hsl(0, 0%, 70%, 0.5)' }} />;
  }

  return (
    <div>
      <Swiper
        key={i18n.language}
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
        onSwiper={setSwiperInstance}
        observer={true}
        observeParents={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="skeleton"
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
