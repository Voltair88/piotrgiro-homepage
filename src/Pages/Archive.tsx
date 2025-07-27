import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArchiveGrid } from 'Styled';

// Placeholder images - these should be replaced with actual archive images
const archiveImages = [
  {
    src: '/placeholder1.webp',
    title: 'Archive Image 1',
    alt: 'Archive Photo 1',
  },
  {
    src: '/placeholder2.webp',
    title: 'Archive Image 2',
    alt: 'Archive Photo 2',
  },
  {
    src: '/placeholder3.webp',
    title: 'Archive Image 3',
    alt: 'Archive Photo 3',
  },
  {
    src: '/placeholder4.webp',
    title: 'Archive Image 4',
    alt: 'Archive Photo 4',
  },
  {
    src: '/placeholder5.webp',
    title: 'Archive Image 5',
    alt: 'Archive Photo 5',
  },
  {
    src: '/placeholder6.webp',
    title: 'Archive Image 6',
    alt: 'Archive Photo 6',
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
        <p>{t('ArchiveDescription')}</p>
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