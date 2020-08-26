import React from "react";
//import stock
import iMechanic from "../img/iMechanic.png";
import nadersFarm from "../img/nadersfarm.png";
import dep from "../img/DEP.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

class Portfolio extends React.Component {
  outLink(url){
    window.open(url, '_blank');
  }
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Have a look at some of my projects.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={iMechanic} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">iMechanic</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Vehicle maintenance logbook and utility.<br></br>
                            Log maintenace, track vehicle statistics,<br></br> find a mechanic.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                      <FontAwesomeIcon icon={faLink} onClick={() => {this.outLink("https://imechanic-dev.com/html/landing.html")}} className="outLink"/>
                      </div>
                    </div>
                  </div>

              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={nadersFarm} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">NadersFarm</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Marketing and Ecommerce website for an agricultural company based in Tionesta, PA.<br></br>
                            Farm fresh produce delivered to you!
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                      <FontAwesomeIcon icon={faLink} onClick={() => {this.outLink("https://nadersfarm.com")}} className="outLink"/>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={dep} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">Direct Energy Products</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Marketing website for a start-up Energy provider based in Tionesta, PA.<br></br>
                            Increasing marketing presence online.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                      <FontAwesomeIcon icon={faLink} onClick={() => {this.outLink("https://directenergyproducts.energy/")}} className="outLink"/>
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
}

export default Portfolio;
