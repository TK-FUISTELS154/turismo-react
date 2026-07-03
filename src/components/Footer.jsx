import React from 'react';
import data from '../data.json';

export default function Footer() {
  const { entity, subentity, address, email, phone, fax, socials } = data.contacts;

  return (
    <>
      {/* FOOTER TOP - CONTACTS AND SOCIALS */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-6773c10 elementor-section-full_width ot-traditional elementor-section-height-default elementor-section-height-default"
        data-id="6773c10" 
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            
            {/* Column 1: CONTACTOS / Entity & Address */}
            <div 
              className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-795f889"
              data-id="795f889" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-5c59388 elementor-widget elementor-widget-heading"
                    data-id="5c59388" 
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">CONTACTOS</h4>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-0048b44 elementor-widget elementor-widget-text-editor"
                    data-id="0048b44" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>{entity}<br />{subentity}</p>
                        <p><strong>Dirección:</strong><br />{address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Email, Phone, Fax */}
            <div 
              className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-c6c2ad3"
              data-id="c6c2ad3" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-f95d347 elementor-widget elementor-widget-text-editor"
                    data-id="f95d347" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix"></div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-95bc0f5 elementor-widget elementor-widget-text-editor"
                    data-id="95bc0f5" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p style={{ textAlign: 'left' }}><strong>Email:</strong> {email}</p>
                        <p style={{ textAlign: 'left' }}><b>Teléfono</b>: {phone}</p>
                        <p style={{ textAlign: 'left' }}><strong>Fax</strong>: {fax}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Facebook */}
            <div 
              className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-2b42548"
              data-id="2b42548" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-7441359 elementor-widget elementor-widget-text-editor"
                    data-id="7441359" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix"></div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-f19d615 elementor-view-default elementor-widget elementor-widget-icon"
                    data-id="f19d615" 
                    data-element_type="widget"
                    data-widget_type="icon.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <a className="elementor-icon" href="https://www.facebook.com/vmtbolivia">
                          <i aria-hidden="true" className="fab fa-facebook"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-a8daa25 elementor-widget elementor-widget-heading"
                    data-id="a8daa25" 
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">
                        <a href="https://www.facebook.com/vmtbolivia">Facebook</a>
                      </p>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-a85c43e elementor-widget elementor-widget-text-editor"
                    data-id="a85c43e" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>Viceministerio de Turismo</p>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-ebc045d elementor-widget elementor-widget-text-editor"
                    data-id="ebc045d" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>Ministerio de Desarrollo Productivo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: YouTube */}
            <div 
              className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-c06fd70"
              data-id="c06fd70" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-76e724b elementor-widget elementor-widget-text-editor"
                    data-id="76e724b" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix"></div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-b9c1661 elementor-view-default elementor-widget elementor-widget-icon"
                    data-id="b9c1661" 
                    data-element_type="widget"
                    data-widget_type="icon.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <a className="elementor-icon" href="https://www.youtube.com/channel/UCJH90kEH04vCNS4jUU29Fhw">
                          <i aria-hidden="true" className="icon icon-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-b56b62f elementor-widget elementor-widget-heading"
                    data-id="b56b62f" 
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">
                        <a href="https://www.facebook.com/vmtbolivia">YouTube</a>
                      </p>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-ab63834 elementor-widget elementor-widget-text-editor"
                    data-id="ab63834" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>Viceministerio de Turismo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 5: Website */}
            <div 
              className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-ccfbbda"
              data-id="ccfbbda" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-e8182d1 elementor-widget elementor-widget-text-editor"
                    data-id="e8182d1" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix"></div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-34b7482 elementor-view-default elementor-widget elementor-widget-icon"
                    data-id="34b7482" 
                    data-element_type="widget"
                    data-widget_type="icon.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <a className="elementor-icon" href="https://produccion.gob.bo/">
                          <i aria-hidden="true" className="icon icon-internet"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-21f111f elementor-widget elementor-widget-heading"
                    data-id="21f111f" 
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">
                        <a href="https://www.facebook.com/vmtbolivia">Pagina Web</a>
                      </p>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-bd5cfd5 elementor-widget elementor-widget-text-editor"
                    data-id="bd5cfd5" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>Ministerio de Desarrollo Productivo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 6: Instagram */}
            <div 
              className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-1eaafd0"
              data-id="1eaafd0" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-4be115d elementor-widget elementor-widget-text-editor"
                    data-id="4be115d" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix"></div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-8936a3b elementor-view-default elementor-widget elementor-widget-icon"
                    data-id="8936a3b" 
                    data-element_type="widget"
                    data-widget_type="icon.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <a className="elementor-icon" href="https://www.instagram.com/vmtbolivia/">
                          <i aria-hidden="true" className="icon icon-instagram-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-96056ea elementor-widget elementor-widget-heading"
                    data-id="96056ea" 
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">
                        <a href="https://www.facebook.com/vmtbolivia">Instagram</a>
                      </p>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-2d4b9c6 elementor-widget elementor-widget-text-editor"
                    data-id="2d4b9c6" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>Viceministerio de Turismo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 7: Phone */}
            <div 
              className="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-4736e3f"
              data-id="4736e3f" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-4969284 elementor-widget elementor-widget-text-editor"
                    data-id="4969284" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix"></div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-9175a73 elementor-view-default elementor-widget elementor-widget-icon"
                    data-id="9175a73" 
                    data-element_type="widget"
                    data-widget_type="icon.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <a className="elementor-icon" href="https://www.instagram.com/vmtbolivia/">
                          <i aria-hidden="true" className="fas fa-phone-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-ecf3ca6 elementor-widget elementor-widget-heading"
                    data-id="ecf3ca6" 
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">
                        <a href="https://www.facebook.com/vmtbolivia">Teléfono</a>
                      </p>
                    </div>
                  </div>
                  <div 
                    className="elementor-element elementor-element-bc7f438 elementor-widget elementor-widget-text-editor"
                    data-id="bc7f438" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>Viceministerio de Turismo</p>
                        <p>Telefono: (+591) 2-2356738</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUBFOOTER - PARTNER LOGOS */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-79ec79b ot-traditional elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="79ec79b" 
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            
            {/* Subfooter Text */}
            <div 
              className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-f4b5a93"
              data-id="f4b5a93" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-ecb2780 elementor-widget elementor-widget-text-editor"
                    data-id="ecb2780" 
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p style={{ textAlign: 'center' }}>
                          Esta página web ha sido desarrollada con el apoyo del Programa de las Naciones Unidas para el 
                          Desarrollo en Bolivia y la Fundación CODESPA.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PNUD Logo */}
            <div 
              className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-b7e4b1e"
              data-id="b7e4b1e" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-5a159ff elementor-widget elementor-widget-image"
                    data-id="5a159ff" 
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-image">
                        <img 
                          width="37" 
                          height="75" 
                          src="https://www.turismo.produccion.gob.bo/wp-content/uploads/2019/12/PNUD-Logo-White35.png" 
                          className="attachment-large size-large" 
                          alt="Logo PNUD" 
                          loading="lazy" 
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <span style={{ display: 'none', color: '#fff', fontWeight: 'bold' }}>PNUD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CODESPA Logo */}
            <div 
              className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-2972b46"
              data-id="2972b46" 
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div 
                    className="elementor-element elementor-element-c7f1c30 elementor-widget elementor-widget-image"
                    data-id="c7f1c30" 
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-image">
                        <img 
                          width="98" 
                          height="65" 
                          src="https://www.turismo.produccion.gob.bo/wp-content/uploads/2021/02/Color-logotipo-CODESPA-v2-98.png" 
                          className="attachment-large size-large" 
                          alt="Logo CODESPA" 
                          loading="lazy" 
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <span style={{ display: 'none', color: '#fff', fontWeight: 'bold' }}>CODESPA</span>
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
