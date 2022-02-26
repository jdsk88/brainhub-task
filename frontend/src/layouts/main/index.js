// React
import React from "react";
import { Outlet } from "react-router-dom";

// Material-UI
import { useTheme } from "@mui/material/styles";

// Components
import MainWrapper from "components/MainWrapper";
import Header from "components/Header";

const MainLayout = () => {
  const theme = useTheme();

  return (
    <MainWrapper theme={theme}>
      <Header />
      <Outlet />
    </MainWrapper>
  );
};

export default MainLayout;
