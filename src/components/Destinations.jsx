import React from 'react';
import data from '../data.json';

export default function Destinations() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-9c46f10 elementor-section-content-middle ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="9c46f10" 
      data-element_type="section"
      data-settings='{"background_background":"gradient"}'
    >
      <div className="elementor-container elementor-column-gap-extended">
        <div className="elementor-row">
          <div 
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-79a9100"
            data-id="79a9100" 
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                
                {/* Section Heading */}
                <div 
                  className="elementor-element elementor-element-b24a328 elementor-widget elementor-widget-elementskit-heading"
                  data-id="b24a328" 
                  data-element_type="widget"
                  data-widget_type="elementskit-heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div className="ekit-heading elementskit-section-title-wraper text_center ekit_heading_tablet- ekit_heading_mobile-">
                        <h2 className="ekit-heading--title elementskit-section-title">
                          DEPARTAMENTO DE POTOSÍ
                        </h2>
                        <div className="ekit-heading__description">
                          <p>Desde los pies del Sumaj Orcko, el desierto blanco, las
                            lagunas de colores, la riqueza paleontología y sus
                            valles coloridos el departamento de Potosí se presenta
                            entre misterios y colores. Podemos visitar destinos
                            turísticos como:</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Destinations Icon List */}
                <div 
                  className="elementor-element elementor-element-d8df677 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-id="d8df677" 
                  data-element_type="widget"
                  data-widget_type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      {data.destinations.map((dest) => (
                        <li key={dest.id} className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <i aria-hidden="true" className="fas fa-check"></i>
                          </span>
                          <span className="elementor-icon-list-text">
                            <strong>{dest.name}</strong>, {dest.description}
                          </span>
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
    </section>
  );
}
