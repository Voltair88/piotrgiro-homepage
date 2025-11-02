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
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dragState, setDragState] = useState({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 });
  const swiperRef = useRef<{ swiper: SwiperCore } | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setCurrentSlide(index);
    setZoomLevel(1);
    setDragState({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 });
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setZoomLevel(1);
    setDragState({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 });

    // Reset all zoom containers
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.slides.forEach((slide) => {
        const zoomContainer = slide?.querySelector('.swiper-zoom-container') as HTMLElement;
        if (zoomContainer) {
          zoomContainer.style.transform = 'translate3d(0, 0, 0) scale(1)';
        }
      });
    }
  };

  const handleZoomIn = () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const activeSlide = swiper.slides[swiper.activeIndex];
    const zoomContainer = activeSlide?.querySelector('.swiper-zoom-container') as HTMLElement;

    if (!zoomContainer) return;

    let newScale = 1;
    if (zoomLevel === 1) {
      newScale = 2;
      setZoomLevel(2);
    } else if (zoomLevel === 2) {
      newScale = 3;
      setZoomLevel(3);
    }

    if (newScale > 1) {
      zoomContainer.style.transform = `translate3d(${dragState.x}px, ${dragState.y}px, 0) scale(${newScale})`;
      zoomContainer.style.transition = 'transform 0.3s';
    }
  };

  const handleZoomOut = () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const activeSlide = swiper.slides[swiper.activeIndex];
    const zoomContainer = activeSlide?.querySelector('.swiper-zoom-container') as HTMLElement;

    if (!zoomContainer) return;

    let newScale = 1;
    if (zoomLevel === 3) {
      newScale = 2;
      setZoomLevel(2);
    } else if (zoomLevel === 2) {
      newScale = 1;
      setZoomLevel(1);
    }

    if (newScale === 1) {
      zoomContainer.style.transform = 'translate3d(0, 0, 0) scale(1)';
      setDragState({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 });
    } else {
      zoomContainer.style.transform = `translate3d(${dragState.x}px, ${dragState.y}px, 0) scale(${newScale})`;
    }
    zoomContainer.style.transition = 'transform 0.3s';
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only respond to left mouse button (button 0)
    if (e.button === 0 && zoomLevel > 1) {
      e.preventDefault(); // Prevent default drag behavior
      e.stopPropagation(); // Prevent Swiper from receiving the event
      setDragState({
        ...dragState,
        isDragging: true,
        startX: e.clientX - dragState.x,
        startY: e.clientY - dragState.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragState.isDragging && zoomLevel > 1) {
      e.stopPropagation(); // Prevent Swiper from receiving the event
      const newX = e.clientX - dragState.startX;
      const newY = e.clientY - dragState.startY;
      setDragState({ ...dragState, x: newX, y: newY });

      const swiper = swiperRef.current?.swiper;
      if (!swiper) return;
      const activeSlide = swiper.slides[swiper.activeIndex];
      const zoomContainer = activeSlide?.querySelector('.swiper-zoom-container') as HTMLElement;
      if (zoomContainer) {
        zoomContainer.style.transform = `translate3d(${newX}px, ${newY}px, 0) scale(${zoomLevel})`;
      }
    }
  };

  const handleMouseUp = () => {
    if (dragState.isDragging) {
      setDragState({ ...dragState, isDragging: false });
    }
  };

  const handleDoubleClick = () => {
    if (zoomLevel < 3) {
      handleZoomIn();
    } else {
      // Reset to 1x if already at max zoom
      const swiper = swiperRef.current?.swiper;
      if (!swiper) return;

      const activeSlide = swiper.slides[swiper.activeIndex];
      const zoomContainer = activeSlide?.querySelector('.swiper-zoom-container') as HTMLElement;

      if (zoomContainer) {
        zoomContainer.style.transform = 'translate3d(0, 0, 0) scale(1)';
        zoomContainer.style.transition = 'transform 0.3s';
        setDragState({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 });
        setZoomLevel(1);
      }
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the overlay background, not its children
    if (e.target === e.currentTarget) {
      closeModal();
    }
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
        <div className="lightbox-overlay" onClick={handleOverlayClick}>
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
              disabled={zoomLevel === 3}
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              className="zoom-button"
              onClick={handleZoomOut}
              disabled={zoomLevel === 1}
              aria-label="Zoom out"
            >
              −
            </button>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Zoom, Navigation, Keyboard]}
            initialSlide={selectedImageIndex}
            zoom={{ maxRatio: 3, toggle: false }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            keyboard={{ enabled: true }}
            loop={true}
            allowTouchMove={zoomLevel === 1}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.realIndex);

              // Reset zoom state
              setZoomLevel(1);
              setDragState({ x: 0, y: 0, isDragging: false, startX: 0, startY: 0 });

              // Reset all slide transforms to ensure clean state
              swiper.slides.forEach((slide) => {
                const zoomContainer = slide?.querySelector('.swiper-zoom-container') as HTMLElement;
                if (zoomContainer) {
                  zoomContainer.style.transform = 'translate3d(0, 0, 0) scale(1)';
                  zoomContainer.style.transition = '';
                }
              });
            }}
            className="lightbox-swiper"
          >
            <div
              className="swiper-button-prev"
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
            ></div>
            <div
              className="swiper-button-next"
              onClick={() => swiperRef.current?.swiper?.slideNext()}
            ></div>
            {archiveImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`swiper-zoom-container ${zoomLevel > 1 ? 'swiper-no-swiping' : ''}`}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onDoubleClick={handleDoubleClick}
                  style={{
                    cursor: zoomLevel > 1 ? 'move' : 'zoom-in',
                  }}
                >
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