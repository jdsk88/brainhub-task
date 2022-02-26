export const cors_options = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

export const logger =
  ":method :remote-addr :url :status :res[content-length] :response-time ms  [:date[clf]]";
