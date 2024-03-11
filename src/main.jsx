import React from "react";
import ReactDOM from "react-dom/client";
import { extendTheme, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // Import mode function from Chakra UI
import App from "./App.jsx";
import "./index.css";

const styles = {
  global: (props) => ({
    body: {
      color: mode("#616161", "#1e1e1e")(props),
      bg: mode("#101010", "#000000")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e",
  },
};
const theme = extendTheme({ config, styles, colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
