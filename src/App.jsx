import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Thematics from './components/Thematics';
import Biosecurity from './components/Biosecurity';
import Footer from './components/Footer';

function App() {
  const heroSectionStyle = {
    backgroundImage: `url(${import.meta.env.BASE_URL}assets/img/Casa-de-la-Moneda-Potosi-Bolivia.jpg)`,
    backgroundPosition: '0px -74px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div data-elementor-type="wp-page" data-elementor-id="3749" className="elementor elementor-3749">
      <div className="elementor-inner">
        <div className="elementor-section-wrap">
          
          {/* SECTION 1: HEADER & HERO PORTADA */}
          <section 
            className="elementor-section elementor-top-section elementor-element elementor-element-b797fcb ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="b797fcb" 
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
            style={heroSectionStyle}
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div 
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c7719ec"
                  data-id="c7719ec" 
                  data-element_type="column"
                >
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      
                      {/* Inner Spacer Section */}
                      <section 
                        className="elementor-section elementor-inner-section elementor-element elementor-element-050493d ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="050493d" 
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-row">
                            <div 
                              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f1c1c4b"
                              data-id="f1c1c4b" 
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap">
                                <div className="elementor-widget-wrap"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      
                      <Header />
                      <Hero />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MAIN PAGE SECTIONS */}
          <Introduction />
          <Destinations />
          <Testimonials />
          <Gallery />
          <Thematics />
          <Biosecurity />
          <Footer />

        </div>
      </div>
    </div>
  );
}

export default App;
