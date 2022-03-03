import React, { useState } from "react";
import EventFormHorizontal from "components/Form";
import { Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { OpenInBrowser } from "@mui/icons-material";

export const FloatingForm = () => {
  const [isShow, setIsShow] = useState(false);
  const { opened } = useSelector((state) => state.configuration);
  console.log(opened);
  const handleState = () => {
    setIsShow((state) => !state);
  };
  const style = {
    containerBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "stretch",
      width: !opened ? "calc(100vw - 240px)" : "calc(100vw - 72px)",
      marginLeft: "auto",
      marginRight: "auto",
    },
    formBox: {
      position: "fixed",
      bottom: 10,
      marginLeft: 3,
      width: !opened ? "calc(100vw - 390px)" : "calc(100vw - 212px)",
    },
    buttonBox: {
      position: "fixed",
      bottom: 25,
      right: 30,
    },
    button: {
      fontSize: 32,
      borderRadius: "50%",
      width: 75,
      height: 75,
      transform: isShow ? "rotate(180deg)" : "rotate(0deg)",
    },
  };
  return (
    <Box sx={style.containerBox}>
      {isShow ? (
        <Box sx={style.formBox}>
          <EventFormHorizontal />
        </Box>
      ) : (
        <></>
      )}
      <Box sx={style.buttonBox}>
        {isShow ? (
          <Button
            sx={style.button}
            variant="contained"
            onClick={() => {
              handleState();
            }}
            color="primary"
            aria-label="add"
          >
            <OpenInBrowser />
          </Button>
        ) : (
          <Button
            sx={style.button}
            variant="contained"
            onClick={() => {
              handleState();
            }}
            color="success"
            aria-label="add"
          >
            <OpenInBrowser />
          </Button>
        )}
      </Box>
    </Box>
  );
};
