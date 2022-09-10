import React from "react";
import "./Header.css";
import { BiTime } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
const Header = () => {
  return (
    <div className="container">
      <section className="restaurant-detailed-banner">
        <div className="text-center">
          <img
            src="https://d1uxq5uu95as1y.cloudfront.net/covers/3bd8570f2d74094c_Screen-Shot-2021-03-10-at-3.08.11-PM.png"
            alt="Le Cafe"
            className="img-fluid cover"
          />
        </div>
        <div className="restaurant-detailed-header">
                        <div className="container">
                            <div className="row d-flex align-items-end">
                                <div className="col-md-8">
                                    <div className="restaurant-detailed-header-left">
                                        <img className="img-fluid mr-3 float-left" src="https://d1uxq5uu95as1y.cloudfront.net/logos/655b1a2a825e03d2_lecafelogo.png?width=300" alt="Le Cafe" />
                                        <h2 className="text-white">
                                            Le Cafe
                                        </h2>
                                        <p className="text-white mb-1">
                                            <FaMapMarkerAlt/>
                                            78 Sazz Street, India
                                                </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="restaurant-detailed-header-right text-right">
                                        <span className="shop-time"><BiTime/> time: 12:00AM - 11:59PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      </section>
    </div>
  );
};

export default Header;
