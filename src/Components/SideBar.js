import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const SideBar = () => {
  return (
    <Box flex={3} p={4}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#home"
              className="filters-header border-bottom pl-4 pr-4 pt-3 pb-3"
            >
              <ListItemIcon />
              <ListItemText primary="Menu" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon />
              <ListItemText primary="Ordinary Drink" />
              <ArrowForwardIcon />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon />
              <ListItemText primary="Cocktail" />
              <ArrowForwardIcon />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon />
              <ListItemText primary="Shake" />
              <ArrowForwardIcon />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon />
              <ListItemText primary="Coffee / Tea" />
              <ArrowForwardIcon />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon />
              <ListItemText primary="Homemade Liqueur" />
              <ArrowForwardIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
