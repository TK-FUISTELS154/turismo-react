import React from 'react';
import data from '../data.json';

export default function Thematics() {
  const { patrimonial, gastronomy, culture } = data.thematics;

  return (
    <>
      {/* 1. POTOSÍ PATRIMONIAL */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-34c812a ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="34c812a" 
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
        id="institucion"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div 
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7b9c22a"
              data-id="7b9c22a" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-3aa40b0 elementor-widget elementor-widget-heading"
                    data-id="3aa40b0" 
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">{patrimonial.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-8f46856 ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="8f46856" 
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div 
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5f75367"
              data-id="5f75367" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-8a5cd8b elementor-widget elementor-widget-image"
                    data-id="8a5cd8b" 
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-image">
                        <img 
                          width="300" 
                          height="200"
                          src={`${import.meta.env.BASE_URL}${patrimonial.image.replace(/^\.\//, '')}`} 
                          className="attachment-medium size-medium" 
                          alt="Cerro Rico Potosi" 
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9a61c09"
              data-id="9a61c09" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-ff162bd elementor-widget elementor-widget-text-editor"
                    data-id="ff162bd" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <div style={{ marginTop: '5px', textAlign: 'justify' }}>{patrimonial.text}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GASTRONOMÍA */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-392e4d0 ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="392e4d0" 
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div 
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f4bb474"
              data-id="f4bb474" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-8591949 elementor-widget elementor-widget-heading"
                    data-id="8591949" 
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">{gastronomy.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-da01cd5 ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="da01cd5" 
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div 
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-850f1d5"
              data-id="850f1d5" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-bc5b13c elementor-widget elementor-widget-image"
                    data-id="bc5b13c" 
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-image">
                        <img 
                          width="680" 
                          height="453"
                          src={`${import.meta.env.BASE_URL}${gastronomy.image.replace(/^\.\//, '')}`} 
                          className="attachment-full size-full" 
                          alt="Gastronomia Potosi" 
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-948e195"
              data-id="948e195" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-12c04e7 elementor-widget elementor-widget-text-editor"
                    data-id="12c04e7" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <div style={{ marginTop: '5px', textAlign: 'justify' }}>{gastronomy.text}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CULTURAS VIVAS */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-d2d1b29 ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="d2d1b29" 
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div 
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5ea5bd8"
              data-id="5ea5bd8" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-d3668cb elementor-widget elementor-widget-heading"
                    data-id="d3668cb" 
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">{culture.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-2478e3d ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="2478e3d" 
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div 
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-44722f2"
              data-id="44722f2" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-6077680 elementor-widget elementor-widget-image"
                    data-id="6077680" 
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-image">
                        <img 
                          width="300" 
                          height="158"
                          src={`${import.meta.env.BASE_URL}${culture.image.replace(/^\.\//, '')}`} 
                          className="attachment-medium size-medium" 
                          alt="Cultura Viva Potosi" 
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d6d683e"
              data-id="d6d683e" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-d56c82c elementor-widget elementor-widget-text-editor"
                    data-id="d56c82c" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <div style={{ marginTop: '1px', textAlign: 'justify' }}>{culture.text}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
