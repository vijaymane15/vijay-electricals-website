
import React, { useState } from 'react';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ 
  images, 
  title = "Our Project Gallery", 
  subtitle = "View some of our recent electrical installations and projects" 
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    if (direction === 'prev') {
      setSelectedImageIndex(prevIndex => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setSelectedImageIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImageIndex]);

  return (
    <div className="py-12 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-brand-black mb-4">{title}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => openModal(index)}
            >
              <div className="aspect-video md:aspect-square w-full overflow-hidden bg-gray-200">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Expand className="text-white h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              {image.caption && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged view */}
      {isModalOpen && selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-brand-red transition-colors"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white hover:text-brand-red transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white hover:text-brand-red transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          <div className="w-full max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img 
              src={images[selectedImageIndex].src} 
              alt={images[selectedImageIndex].alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            {images[selectedImageIndex].caption && (
              <div className="mt-4 text-white text-center">
                <p className="text-lg">{images[selectedImageIndex].caption}</p>
              </div>
            )}
            <div className="mt-4 text-white text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
