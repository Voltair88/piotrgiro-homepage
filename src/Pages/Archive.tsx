import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArchiveGrid } from 'Styled';
import { arkiv1, arkiv2, arkiv3, arkiv4, arkiv5, arkiv6, arkiv7, arkiv8, arkiv9 } from '../Assets';

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
/*   {
    src: arkiv3,
    title: 'Archive Image 3',
    alt: 'Archive Photo 3',
  }, */
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
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
            onClick={() => openModal(image.src)}
            onKeyDown={(e) => e.key === 'Enter' && openModal(image.src)}
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

      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={handleModalClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Full size image view"
        >
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close full size view"
            >
              ×
            </button>
            <img src={selectedImage} alt="Full size view" />
          </div>
        </div>
      )}
    </ArchiveGrid>
  );
}