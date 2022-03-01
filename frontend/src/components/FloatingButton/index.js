import React, { useState } from "react";
import EventFormHorizontal from "components/Form";
import { Button, Box } from "@mui/material";
import { Add, ArrowBackIos } from "@mui/icons-material";

export const FloatingButton = () => {
  const [isShow, setIsShow] = useState(false);
  const handleState = () => {
    setIsShow((state) => !state);
  };
  const style = {
    containerBox: {
      // position: "fixed",

      display: "flex",
      flexDirection: "row",
      justifyContent: "stretch",
      width: "calc(100vw - 240px)",
    },
    formBox: {
      position: "fixed",
      bottom: 5,
      marginLeft: "auto",
      marginRight: "auto",
      width: "calc(100vw - 420px)",
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
            <ArrowBackIos />
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
            <ArrowBackIos />
          </Button>
        )}
      </Box>
    </Box>
  );
};
