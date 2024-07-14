import React from "react";
import { HeaderProps } from "./header.types";
import "./header.css";

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header id="masthead" className="site-header">
      <div className="wrapper">
        <div className="mobile-logo">
          <a href="/"></a>
        </div>
        {/* <div className="hamburger-menu">
          <div className="bar"></div>
        </div> */}

        <nav id="site-navigation" className="main-navigation">
          <div className="menu-main-menu-container">
            <ul id="primary-menu" className="menu">
              <li className="mobile-only menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4298 current_page_item menu-item-28047">
                Home<span></span>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-26592">
                About<span></span>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27054">
                    About 24 Carrots<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27055">
                    Team<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27056">
                    Awards &amp; Press<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28056">
                    Blog<span></span>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-26903">
                Services<span></span>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27057">
                    Gourmet Catering<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27058">
                    Bar Service<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27059">
                    Staffing<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27060">
                    Production<span></span>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-26584">
                Events<span></span>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26586">
                    Weddings<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26591">
                    Corporate<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26593">
                    Social<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27061">
                    Gallery<span></span>
                  </li>
                </ul>
              </li>
              <li className="logo menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4298 current_page_item menu-item-26588">
                Home<span></span>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26595">
                Venues<span></span>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26594">
                Careers<span></span>
              </li>
              <li>
                Get In Touch<span></span>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="mobile-menu">
          <div className="carrots-mobile-logo">
            <a href="/"></a>
          </div>
          <div className="menu-main-menu-container">
            <ul id="primary-menu" className="menu">
              <li className="mobile-only menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4298 current_page_item menu-item-28047">
                Home<span></span>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-26592">
                About<span></span>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27054">
                    About 24 Carrots<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27055">
                    Team<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27056">
                    Awards &amp; Press<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28056">
                    Blog<span></span>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-26903">
                Services<span></span>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27057">
                    Gourmet Catering<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27058">
                    Bar Service<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27059">
                    Staffing<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27060">
                    Production<span></span>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-26584">
                Events<span></span>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26586">
                    Weddings<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26591">
                    Corporate<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26593">
                    Social<span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27061">
                    Gallery<span></span>
                  </li>
                </ul>
              </li>
              <li className="logo menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4298 current_page_item menu-item-26588">
                Home<span></span>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26595">
                Venues<span></span>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26594">
                Careers<span></span>
              </li>
              <li className="nav-btn menu-item menu-item-type-post_type menu-item-object-page menu-item-26583">
                Get In Touch<span></span>
              </li>
            </ul>
          </div>
          <div className="mobile-social">
            <div className="facebook-icon"></div>
            <div className="instagram-icon"></div>
            <div className="twitter-icon"></div>
            <div className="linkedin-icon"></div>
          </div>
          <div className="small-menu">
            <a href="/gallery">GALLERY</a> | <a href="/faq">FAQ</a>
          </div>

          <div className="mobile-copyright">
            <p>
              © 2023 24 Carrots Catering &amp; Events. <br />
              All rights reserved.
            </p>
          </div>

          <div className="mobile-legal">
            <div className="menu-legal-menu-container">
              <ul id="legal-menu" className="menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26900">
                  ADA Accessibility Policy<span></span>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26901">
                  Privacy Policy<span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mobile-site-by">
            <p>Site &amp; Design By Dooley Creative Co.</p>
          </div>
        </nav>
      </div>
    </header>
  );
};
