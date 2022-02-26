// React
import React from "react";
import { Outlet } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { SET_MENU_STATE } from "store/actions";

// Material-UI
import { useTheme } from "@mui/material/styles";

// Components
import MainWrapper from "components/MainWrapper";
import Header from "components/Header";
import SideMenu from "components/SideMenu";
import { Box, CssBaseline } from "@mui/material";

const MainLayout = () => {
  const theme = useTheme();
  const menuOpened = useSelector((state) => state.configuration.opened);
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch({ type: SET_MENU_STATE, opened: !menuOpened });
  };

  return (
    <>
      <Header handleMenuToggle={handleMenuToggle} />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <MainWrapper theme={theme}>
          <SideMenu
            handleMenuToggle={handleMenuToggle}
            drawerOpen={menuOpened}
          />
          <Outlet />
        </MainWrapper>
      </Box>
    </>
  );
};

export default MainLayout;
