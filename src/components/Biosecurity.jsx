import React from 'react';

export default function Biosecurity() {
  const bgStyle = {
    backgroundImage: `url(${import.meta.env.BASE_URL}assets/img/potosi-view2.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-4ec8380 ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="4ec8380" 
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
      style={bgStyle}
    >
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div 
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3634aef"
            data-id="3634aef" 
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div 
                  className="elementor-element elementor-element-cdfb436 elementor-widget elementor-widget-heading"
                  data-id="cdfb436" 
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">
                      Certificación COVID-19, conoce todas las
                    </p>
                  </div>
                </div>
                <div 
                  className="elementor-element elementor-element-37d1059 elementor-widget elementor-widget-heading"
                  data-id="37d1059" 
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      PRESTADORES DE SERVICIOS TURÍSTICOS BIOSEGUROS
                    </h2>
                  </div>
                </div>
                <div 
                  className="elementor-element elementor-element-14379dd elementor-align-center elementor-widget elementor-widget-ibutton"
                  data-id="14379dd" 
                  data-element_type="widget"
                  data-widget_type="ibutton.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ot-button">
                      <a 
                        href="https://www.turismo.produccion.gob.bo/wp-content/uploads/2021/06/Potosi.pdf"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="octf-btn octf-btn-primary"
                        id="biosecurity-pdf-link"
                      >
                        INGRESAR
                      </a>
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
