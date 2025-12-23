import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

// Tema minimale (coerente col tuo dark).
// Se già hai un theme altrove, puoi sostituire questo con il tuo import.
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#0b0b0c",
        color: "rgba(255,255,255,.92)",
      },
    },
  },
});

export function Provider({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
