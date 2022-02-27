// React
import React, { useEffect } from "react";
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
import { Box, Container, CssBaseline } from "@mui/material";
import EventsServices from "services/events";

const MainLayout = () => {
  const theme = useTheme();
  const menuOpened = useSelector((state) => state.configuration.opened);
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch({ type: SET_MENU_STATE, opened: !menuOpened });
  };

  // useEffect(() => {
  //   EventsServices.setItems(dispatch);
  // }, [dispatch]);

  return (
    <>
      <Header handleMenuToggle={handleMenuToggle} />
      <CssBaseline />
      <MainWrapper theme={theme}>
        <SideMenu handleMenuToggle={handleMenuToggle} drawerOpen={menuOpened} />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <Outlet />
        </Container>
      </MainWrapper>
    </>
  );
};

export default MainLayout;
