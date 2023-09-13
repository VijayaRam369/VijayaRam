import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src="img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Vijaya Ram .K</span></p>
                        <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                        <p><span className="title-s">Email: </span> <span>ramvijay@7549.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>9600551826</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>CSS3</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>PHP</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                      My journey into the realm of technology began with a fascination for both front-end and back-end development.
                      I've honed my proficiency in crafting pixel-perfect layouts using HTML and CSS while adding interactivity and dynamism with JavaScript.
                    </p>
                    <p className="lead">
                      This passion led me to explore modern front-end frameworks like [Front-End Frameworks]
                       that empower me to build responsive and user-centric applications.
                    </p>
                    <p className="lead">
                      Delving into back-end development, I've started working with [Back-End Language] and diving into databases to design efficient data structures.
                       I'm excited to learn more about server-side technologies and API integration to create robust and seamless full stack solutions.
                    </p>
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

export default AboutSection;
