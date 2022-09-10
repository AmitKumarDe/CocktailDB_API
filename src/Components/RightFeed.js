import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RightFeed.css";
import { BsSearch } from "react-icons/bs";

const RightFeed = () => {
  const [searchDrinks, setSearchDrinks] = useState("");
  const [drinks, setDrinks] = useState([]);

  let fetchData = async () => {
    let res = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    );
    console.log(res.data.drinks);
    setDrinks(res.data.drinks);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box bgcolor="whitesmoke" flex={8} p={3}>
      <div className="main-content ">
        <div className="input-group w-50 mx-auto">
          <div className="offer-dedicated-body-left">
            <div className="input-group">
              <input
                type="text"
                placeholder="search your favourite items..."
                className="form-control"
                value={searchDrinks}
                onChange={(e) => {
                  setSearchDrinks(e.target.value);
                }}
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-primary waves-effect waves-light"
                >
                  <BsSearch />
                </button>
              </div>
            </div>
          </div>
          <div>
            {drinks
              .filter((val) =>
                val.strDrink.toLowerCase().includes(searchDrinks.toLowerCase())
              )
              .map((drinks, key) => {
                return (
                  <div key={key}>
                    <div className="row">
                      <h5 className="mb-4 mt-3 col-md-12">
                        <div className="cat-title"></div>
                      </h5>
                      <div className="col-md-12">
                        <div className="bg-white rounded border shadow-sm mb-4">
                          <div className="menu-list p-3 border-bottom">
                            <div className="media d-flex justify-content-between">
                              <img
                                src={drinks.strDrinkThumb}
                                alt={drinks.strDrink}
                                className="mr-3 rounded-pill "
                              />
                              <div className="media-body">
                                <h6 className="mb-1">{drinks.strDrink}</h6>

                                <p className="text-gray mb-0">
                                  ₹ 240.00- 300 mililitre
                                </p>
                              </div>
                              <button className="btn">
                                <span>Add</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default RightFeed;
