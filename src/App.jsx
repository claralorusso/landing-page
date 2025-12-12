// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contatti from "./pages/Contatti";
import ChiSiamo from "./pages/ChiSiamo";
import Cosafacciamo from "./pages/Cosafacciamo";
import AziendeDelPolo from "./pages/Directory";
import Cookies from "./pages/Cookies";
import Privacy from "./pages/Privacy";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import WhatsAppButton from "./components/Whatsapp-button";
import "./App.css";
import Coldsharing from "./pages/Coldsharing";
import DiventaPartner from "./pages/DiventaPartner";
import PartnerRefromItalia from "./pages/PartnerRefromItalia";
import Partnerbase from "./pages/Partnerbase";
import Partnerpremium from "./pages/Partnerpremium";

const theme = extendTheme({
  components: {
    Menu: {
      baseStyle: {
        list: {
          bg: "white",
          color: "gray.800",
          borderColor: "blackAlpha.200",
          boxShadow: "lg",
        },
        item: {
          _hover: { bg: "gray.50" },
        },
      },
    },
  },
});

function App() {
  return (
    <div style={{ width: "100%" }}>
      <ChakraProvider theme={theme}>
        <Navbar />

        <Routes></Routes>

        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
