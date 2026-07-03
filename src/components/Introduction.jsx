import React from 'react';

export default function Introduction() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-e1d742a ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="e1d742a" 
      data-element_type="section" 
      id="zzz"
    >
      <div className="elementor-container elementor-column-gap-extended">
        <div className="elementor-row">
          <div 
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ca22362"
            data-id="ca22362" 
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div 
                  className="elementor-element elementor-element-5d2b217 elementor-widget elementor-widget-iheading"
                  data-id="5d2b217" 
                  data-element_type="widget"
                  data-widget_type="iheading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ot-heading">
                      <span>generalmente conocida como la Villa Imperial de Potosí</span>
                      <h2 className="main-heading">Ciudad de Potosí centro del Patrimonio Mundial</h2>
                    </div>
                  </div>
                </div>
                <div 
                  className="elementor-element elementor-element-76c6839 elementor-widget elementor-widget-image"
                  data-id="76c6839" 
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">
                      <img 
                        width="1280" 
                        height="559"
                        src={`${import.meta.env.BASE_URL}assets/img/potosi-view3.jpg`}
                        className="attachment-full size-full" 
                        alt="Ciudad de Potosí centro del Patrimonio Mundial" 
                        loading="lazy"
                      />
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
