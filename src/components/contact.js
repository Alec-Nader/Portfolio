import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
class Contact extends React.Component {
  outLink(url){
    window.open(url, '_blank');
  }
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Contact Information</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          
                        </p>
                        {<ul className="list-ico">
                                <li className="lead"><span className="ion-ios-location"></span> Cincinnati, Ohio</li>
                                <li className="lead"><span className="ion-ios-telephone"></span> (440)-715-0909</li>
                                <li className="lead"><span className="ion-email"></span> AlecNader@Gmail.com</li>
                                </ul> }
                      </div>
                      
                    </div>
                    <div className="col-md-6">
                      <div className="socials">
                              <FaGithub onClick={() => {this.outLink("https://github.com/Alec-Nader")}} className="contactButton"/>
                              <FaLinkedin onClick={() => {this.outLink("https://www.linkedin.com/in/alec-nader/")}} className="contactButton"/>
                      </div>
                      </div>
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
