
import React from 'react';

function ServicesSection() {
  return (
    <section id="services" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <p className="subtitle-a">My services encompass a comprehensive range of skills</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="bi bi-briefcase"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Design</h2>
                <p className="s-description text-center">
                  Advanced web design involves mastery of design principles, advanced techniques,
                  and a deep understanding of user experience.
                  It goes beyond aesthetics, incorporating user-centered design, performance optimization, and cutting-edge technologies
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Development</h2>
                <p className="s-description text-center">
                  Web development is the process of creating websites and web applications that are accessible over the internet.
                  It encompasses various aspects, including front-end and back-end development,
                  as well as database management, user experience design, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="bi bi-bar-chart"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">JS</h2>
                <p className="s-description text-center">
                  JavaScript (JS) is a high-level programming language primarily used for
                  web development to create interactive and dynamic user experiences.
                  It's executed in web browsers, enabling manipulation of web page content and behavior.
                </p>
              </div>
            </div>
          </div>

          {/* Add more services as needed */}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
