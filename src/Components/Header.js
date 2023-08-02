import React from "react";
import "./Header.css";
import { BiTime } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
const Header = () => {
  return (
    <div className="container mw-100">
      <section className="restaurant-detailed-banner">
        <div className="text-center">
          <img
            src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=1060&t=st=1690987966~exp=1690988566~hmac=f4e228a42a9e20872eb42412cab1a3579bfbe006c2c4950add3439b9f7d4ba96"
            alt="Le Cafe"
            className="img-fluid cover"
          />
        </div>
        <div className="restaurant-detailed-header">
          <div className="container">
            <div className="row d-flex align-items-end">
              <div className="col-md-8">
                <div className="restaurant-detailed-header-left">
                  <img
                    className="img-fluid mr-3 float-left"
                    src="https://img.freepik.com/free-vector/illustration-people-sitting-cafe_23-2148245388.jpg?w=740&t=st=1690989753~exp=1690990353~hmac=832a071ae101a8cd9c0f72cf656fcda7a02ed4d1865872c00d8b1f425849e3d5"
                    alt="Le Cafe"
                  />
                  <h2 className="text-white">Le Cafe</h2>
                  <p className="text-white mb-1">
                    <FaMapMarkerAlt />
                    78 Sazz Street, India
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="restaurant-detailed-header-right text-right">
                  <span className="shop-time">
                    <BiTime /> time: 12:00AM - 11:59PM
                  </span>
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
