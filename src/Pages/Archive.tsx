import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArchiveGrid } from 'Styled';
import { arkiv1, arkiv2, arkiv4, arkiv5, arkiv6, arkiv7, arkiv8, arkiv9 } from '../Assets';
import SwiperCore, { Zoom, Navigation, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

SwiperCore.use([Zoom, Navigation, Keyboard]);

const archiveImages = [
  {
    src: arkiv1,
    title: 'Archive Image 1',
    alt: 'Archive Photo 1',
  },
  {
    src: arkiv2,
    title: 'Archive Image 2',
    alt: 'Archive Photo 2',
  },
  {
    src: arkiv4,
    title: 'Archive Image 4',
    alt: 'Archive Photo 4',
  },
  {
    src: arkiv5,
    title: 'Archive Image 5',
    alt: 'Archive Photo 5',
  },
  {
    src: arkiv6,
    title: 'Archive Image 6',
    alt: 'Archive Photo 6',
  },
  {
    src: arkiv7,
    title: 'Archive Image 7',
    alt: 'Archive Photo 7',
  },
  {
    src: arkiv8,
    title: 'Archive Image 8',
    alt: 'Archive Photo 8',
  },
  {
    src: arkiv9,
    title: 'Archive Image 9',
    alt: 'Archive Photo 9',
  },
];

export default function Archive() {
  const { t } = useTranslation();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<{ swiper: SwiperCore } | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setCurrentSlide(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    // Reset zoom when closing
    if (swiperRef.current?.swiper?.zoom) {
      swiperRef.current.swiper.zoom.out();
    }
  };

  const handleZoomIn = () => {
    swiperRef.current?.swiper?.zoom.in();
  };

  const handleZoomOut = () => {
    swiperRef.current?.swiper?.zoom.out();
  };

  return (
    <ArchiveGrid>
      <div className="archive-header">
        <h1>{t('Archive')}</h1>
      </div>
      
      <div className="archive-grid">
        {archiveImages.map((image, index) => (
          <div
            key={index}
            className="archive-item"
            onClick={() => openModal(index)}
            onKeyDown={(e) => e.key === 'Enter' && openModal(index)}
            tabIndex={0}
            role="button"
            aria-label={`View ${image.title} in full size`}
          >
            <img src={image.src} alt={image.alt} className="skeleton" />
            <div className="archive-overlay">
              <span className="view-text">{t('ViewFullSize')}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="lightbox-overlay">
          <div className="lightbox-header">
            <div className="image-counter">
              {currentSlide + 1} / {archiveImages.length}
            </div>
            <button
              className="lightbox-close"
              onClick={closeModal}
              aria-label="Close lightbox"
            >
              ×
            </button>
          </div>

          <div className="lightbox-zoom-controls">
            <button
              className="zoom-button"
              onClick={handleZoomIn}
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              className="zoom-button"
              onClick={handleZoomOut}
              aria-label="Zoom out"
            >
              −
            </button>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Zoom, Navigation, Keyboard]}
            initialSlide={selectedImageIndex}
            zoom={{ maxRatio: 3, toggle: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            keyboard={{ enabled: true }}
            loop={true}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            className="lightbox-swiper"
          >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            {archiveImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img src={image.src} alt={image.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </ArchiveGrid>
  );
}