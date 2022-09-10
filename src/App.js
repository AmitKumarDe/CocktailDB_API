import { Box, Stack } from "@mui/material";

import React from "react";

import Header from "./Components/Header";
import RightFeed from "./Components/RightFeed";
import SideBar from "./Components/SideBar";

function App() {

  return (
    <Box>
      <Header />
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <SideBar />
        <RightFeed  />
      </Stack>
    </Box>
  );
}

export default App;
