import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const Wrapper = styled("div")({
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
});

const Loader = () => (
  <Wrapper>
    <LinearProgress color="primary" />
  </Wrapper>
);

export default Loader;
