import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Toolbar, Typography, InputBase, Box, AppBar } from "@material-ui/core";
import useStyles from "./Styles";
import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>

          {/*

         <Autocomplete>*/}
          <div className={classes.search}>
            <div className={classes.SearchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="search...."
              calsses={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/*</Autocomplete>*/}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
