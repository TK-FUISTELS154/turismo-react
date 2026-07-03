import React, { useState } from 'react';
import data from '../data.json';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div className="elementor-element elementor-element-e004e62 elementor-widget elementor-widget-ekit-nav-menu" data-id="e004e62" data-element_type="widget" data-widget_type="ekit-nav-menu.default">
      <div className="elementor-widget-container">
        <div className={`ekit-wid-con ekit_menu_responsive_tablet ${mobileMenuOpen ? 'ekit-nav-menu-mobile-active' : ''}`} data-hamburger-icon="" data-hamburger-icon-type="icon" data-responsive-breakpoint="1024"> 
          <button className="elementskit-menu-hamburger elementskit-menu-toggler" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <span className="elementskit-menu-hamburger-icon"></span>
            <span className="elementskit-menu-hamburger-icon"></span>
            <span className="elementskit-menu-hamburger-icon"></span>
          </button>
          
          <div id="ekit-megamenu-promocion-turistica" className={`elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default elementskit_line_arrow ekit-nav-menu-one-page-no ekit-nav-dropdown-hover ${mobileMenuOpen ? 'active' : ''}`} ekit-dom-added="yes">
            <ul id="menu-promocion-turistica" className="elementskit-navbar-nav elementskit-menu-po-center submenu-click-on-icon">
              {data.navigation.map((item, index) => {
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                return (
                  <li 
                    key={index} 
                    className={`menu-item menu-item-type-custom menu-item-object-custom ${hasSubmenu ? 'menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width' : 'nav-item'} elementskit-mobile-builder-content ${activeDropdown === index ? 'elementskit-dropdown-show' : ''}`} 
                    data-vertical-menu="750px"
                    onMouseEnter={() => !mobileMenuOpen && setActiveDropdown(index)}
                    onMouseLeave={() => !mobileMenuOpen && setActiveDropdown(null)}
                  >
                    {hasSubmenu ? (
                      <>
                        <a href="#" className="ekit-menu-nav-link ekit-menu-dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleDropdown(index); }}>
                          {item.name}
                          <i className="icon icon-down-arrow1 elementskit-submenu-indicator"></i>
                        </a>
                        <ul className="elementskit-dropdown elementskit-submenu-panel">
                          {item.submenu.map((sub, sIdx) => (
                            <li key={sIdx} className="menu-item menu-item-type-post_type menu-item-object-page nav-item elementskit-mobile-builder-content">
                              <a href={sub.url} className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                                {sub.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <a href={item.url} className="ekit-menu-nav-link" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
            
            <div className="elementskit-nav-identity-panel">
              <div className="elementskit-site-title">
                <a className="elementskit-nav-logo" href="https://www.turismo.produccion.gob.bo" target="_self" rel="noopener noreferrer">
                  <img 
                    width="1330" 
                    height="208" 
                    src="https://www.turismo.produccion.gob.bo/wp-content/uploads/2021/01/Logos-Viceministerio-de-Turismo.png" 
                    className="attachment-full size-full" 
                    alt="Logos Viceministerio de Turismo" 
                    loading="lazy" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="logo-fallback" style={{ display: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#007dbb', padding: '10px' }}>
                    <span style={{ fontSize: '18px', display: 'block' }}>Bolivia</span>
                    <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1px' }}>Viceministerio de Turismo</span>
                  </div>
                </a>
              </div>
              <button className="elementskit-menu-close elementskit-menu-toggler" type="button" onClick={toggleMobileMenu}>X</button>
            </div>
          </div>
          <div className="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay" onClick={toggleMobileMenu}></div>
        </div>
      </div>
    </div>
  );
}
