import React, { useState, useEffect, useRef } from 'react';
import data from '../data.json';

export default function Testimonials() {
  const sliderItems = data.destinations.slice(0, 4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    if (isHovered) return;
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section 
      className="elementor-section elementor-top-section elementor-element elementor-element-833d630 ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default" 
      data-id="833d630" 
      data-element_type="section" 
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div 
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f385ece" 
            data-id="f385ece" 
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div 
                  className="elementor-element elementor-element-dbc1260 elementor-widget elementor-widget-elementskit-testimonial" 
                  data-id="dbc1260" 
                  data-element_type="widget" 
                  data-widget_type="elementskit-testimonial.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div 
                        className="elementskit-testimonial-slider slick-slider arrow_inside"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{ position: 'relative' }}
                      >
                        <div className="swiper-container swiper-container-initialized swiper-container-horizontal" style={{ overflow: 'hidden' }}>
                          <div 
                            className="slick-list swiper-wrapper" 
                            style={{ 
                              display: 'flex', 
                              transform: `translateX(-${currentIndex * 100}%)`, 
                              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' 
                            }}
                          >
                            {sliderItems.map((item) => (
                              <div key={item.id} className="swiper-slide" style={{ width: '100%', flexShrink: 0 }}>
                                <div className="slick-slide" style={{ width: '100%', display: 'inline-block' }}>
                                  <div 
                                    className="elementskit-testimonial_card" 
                                    style={{ 
                                      backgroundImage: `url(${import.meta.env.BASE_URL}${item.image.replace(/^\.\//, '')})`,
                                      backgroundSize: 'cover',
                                      backgroundPosition: 'center',
                                      borderRadius: '8px',
                                      position: 'relative'
                                    }}
                                  >
                                    <ul className="elementskit-stars">
                                      <li><a><i className="eicon-star active fas fa-star"></i></a></li>
                                      <li><a><i className="eicon-star active fas fa-star"></i></a></li>
                                      <li><a><i className="eicon-star active fas fa-star"></i></a></li>
                                      <li><a><i className="eicon-star active fas fa-star"></i></a></li>
                                      <li><a><i className="eicon-star active fas fa-star"></i></a></li>
                                    </ul>
                                    <p className="elementskit-commentor-coment">{item.description}</p>
                                    <span className="elementskit-profile-info">
                                      <strong className="elementskit-author-name">{item.name}</strong>
                                      <span className="elementskit-author-des">Ciudad de Potosí</span>
                                    </span>
                                    <div className="xs-overlay"></div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Slider arrows */}
                        <button 
                          onClick={prevSlide} 
                          className="slick-arrow slick-prev" 
                          style={{ 
                            left: '20px',
                            zIndex: 10,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            position: 'absolute',
                            background: 'rgba(0,0,0,0.4)', 
                            border: 'none', 
                            color: '#fff', 
                            width: '40px', 
                            height: '40px', 
                            borderRadius: '50%', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            transition: 'background 0.3s'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#007dbb'}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'}
                          aria-label="Previous Slide"
                        >
                          <i className="fas fa-chevron-left" style={{ fontSize: '16px' }}></i>
                        </button>
                        <button 
                          onClick={nextSlide} 
                          className="slick-arrow slick-next" 
                          style={{ 
                            right: '20px',
                            left: 'auto',
                            zIndex: 10,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            position: 'absolute',
                            background: 'rgba(0,0,0,0.4)', 
                            border: 'none', 
                            color: '#fff', 
                            width: '40px', 
                            height: '40px', 
                            borderRadius: '50%', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            transition: 'background 0.3s'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#007dbb'}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'}
                          aria-label="Next Slide"
                        >
                          <i className="fas fa-chevron-right" style={{ fontSize: '16px' }}></i>
                        </button>

                        {/* Pagination dots */}
                        <ul className="slick-dots" style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: '20px 0 0 0', margin: 0 }}>
                          {sliderItems.map((_, index) => (
                            <li key={index} className={index === currentIndex ? 'slick-active' : ''} style={{ margin: '0 6px' }}>
                              <button 
                                onClick={() => goToSlide(index)} 
                                style={{ 
                                  border: 'none', 
                                  width: '12px', 
                                  height: '12px', 
                                  borderRadius: '50%', 
                                  background: index === currentIndex ? '#007dbb' : 'rgba(0,0,0,0.2)', 
                                  padding: 0, 
                                  cursor: 'pointer',
                                  transition: 'background 0.3s, transform 0.3s',
                                  transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)'
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                              ></button>
                            </li>
                          ))}
                        </ul>

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
  );
}
