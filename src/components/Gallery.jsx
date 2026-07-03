import React, { useState, useEffect, useRef } from 'react';
import data from '../data.json';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef();

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % data.gallery.length);
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => 
      prevIndex === 0 ? data.gallery.length - 1 : prevIndex - 1
    );
  };

  // Carousel Next/Prev
  const nextSlide = () => {
    // 6 images total, show 3 on desktop, so max index is 3 (0, 1, 2, 3)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (data.gallery.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? data.gallery.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    if (isHovered || lightboxOpen) return;
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 4000);
    return () => clearInterval(interval);
  }, [isHovered, lightboxOpen]);

  return (
    <section 
      className="elementor-section elementor-top-section elementor-element elementor-element-0e77799 ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="0e77799" 
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
      id="galeria"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div 
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-83273db"
            data-id="83273db" 
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                
                {/* Heading */}
                <div 
                  className="elementor-element elementor-element-a0d0a09 elementor-widget elementor-widget-iheading"
                  data-id="a0d0a09" 
                  data-element_type="widget"
                  data-widget_type="iheading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ot-heading">
                      <span>Visita los destinos turísticos del departamento de </span>
                      <h3 className="main-heading">POTOSÍ <br /> Patrimonial y Natural</h3>
                    </div>
                  </div>
                </div>

                {/* Inner Gallery Carousel Section */}
                <section 
                  className="elementor-section elementor-inner-section elementor-element elementor-element-ac9cd96 elementor-section-full_width ot-traditional elementor-section-height-default elementor-section-height-default"
                  data-id="ac9cd96" 
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-extended">
                    <div className="elementor-row">
                      <div 
                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-644dea9"
                        data-id="644dea9" 
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div 
                            className="elementor-widget-wrap e-swiper-container"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            <div 
                              className="elementor-element elementor-element-6818a02 elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel e-widget-swiper"
                              data-id="6818a02" 
                              data-element_type="widget"
                              data-widget_type="image-carousel.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image-carousel-wrapper swiper-container swiper-container-initialized swiper-container-horizontal" dir="ltr" style={{ overflow: 'hidden', position: 'relative' }}>
                                  
                                  {/* Carousel Track */}
                                  <div 
                                    className="elementor-image-carousel swiper-wrapper" 
                                    style={{ 
                                      display: 'flex', 
                                      transform: `translateX(-${currentIndex * (100 / 3)}%)`, 
                                      transition: 'transform 0.5s ease-in-out' 
                                    }}
                                  >
                                    {data.gallery.map((img, idx) => (
                                      <div key={idx} className="swiper-slide" style={{ width: '33.333%', flexShrink: 0, padding: '0 10px' }}>
                                        <a 
                                          data-elementor-open-lightbox="yes"
                                          href="#"
                                          onClick={(e) => { e.preventDefault(); openLightbox(idx); }}
                                          style={{ display: 'block', cursor: 'zoom-in' }}
                                        >
                                          <figure className="swiper-slide-inner" style={{ margin: 0 }}>
                                            <img 
                                              className="swiper-slide-image" 
                                              src={`${import.meta.env.BASE_URL}${img.src.replace(/^\.\//, '')}`} 
                                              alt={img.title} 
                                              style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '4px' }}
                                            />
                                          </figure>
                                        </a>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Navigation Arrows */}
                                  <div 
                                    className="elementor-swiper-button elementor-swiper-button-prev" 
                                    onClick={prevSlide}
                                    style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, cursor: 'pointer', background: 'rgba(0,0,0,0.5)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
                                  >
                                    <i className="eicon-chevron-left fas fa-chevron-left"></i>
                                  </div>
                                  <div 
                                    className="elementor-swiper-button elementor-swiper-button-next" 
                                    onClick={nextSlide}
                                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, cursor: 'pointer', background: 'rgba(0,0,0,0.5)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
                                  >
                                    <i className="eicon-chevron-right fas fa-chevron-right"></i>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
            &times;
          </button>
          
          <button className="lightbox-nav-btn prev" onClick={prevLightboxImage} aria-label="Previous Image">
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={`${import.meta.env.BASE_URL}${data.gallery[activeImageIndex].src.replace(/^\.\//, '')}`} 
              alt={data.gallery[activeImageIndex].title} 
              className="lightbox-image"
            />
            <p className="lightbox-caption">{data.gallery[activeImageIndex].title}</p>
          </div>
          
          <button className="lightbox-nav-btn next" onClick={nextLightboxImage} aria-label="Next Image">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
}
