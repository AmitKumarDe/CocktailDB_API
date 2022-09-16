import React from "react";
import { Stack } from "react-bootstrap-icons";
import Header from "./Header";
import SideBar from "./SideBar";

const CocktailDetails = () => {
  return <div>
    <Header/>
    <Stack>
        <SideBar/>
    </Stack>
  </div>;
};

export default CocktailDetails;
