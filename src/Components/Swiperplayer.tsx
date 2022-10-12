import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { useEffect } from 'react';
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
    pagination: { clickable: true, el: '.swiper-pagination' },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  // clicking on the slide will open the modal with the image in full size
  const openModal = (src: string) => {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    modal?.classList.add('open');
    modalImg?.setAttribute('src', src);
  };

  // clicking on the close button will close the modal
  const closeModal = () => {
    const modal = document.querySelector('.modal');
    modal?.classList.remove('open');
  };
  // clicking on the modal will close the modal
  const clickOutside = (e: any) => {
    const modal = document.querySelector('.modal');
    if (e.target === modal) {
      modal?.classList.remove('open');
    }
  };

  useEffect(() => {
    const modal = document.querySelector('.modal');
    modal?.addEventListener('click', clickOutside);
    return () => {
      modal?.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <div>
      <Swiper {...swiperOptions}>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {slides.map((slide, index) => (
          <SwiperSlide key={index} onClick={() => openModal(slide.src)}>
            <img src={slide.src} alt={slide.alt} className="skeleton" />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
      <div className="modal" onClick={clickOutside}>
        <Swiper {...swiperOptions}>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.src} alt={slide.alt} className="skeleton" />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
        <span className="close" onClick={() => closeModal()}>
          &times;
        </span>
      </div>
    </div>
  );
}
