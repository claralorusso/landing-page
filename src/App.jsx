import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Cookies from "./components/Cookies";
import Privacy from "./components/Privacy";
import DigitalizzazioneAgroalimentare from "./components/DigitalizzazioneAgroalimentare";
import Blog from "./components/Blog";
import ColdsharingPercheNata from "./components/ColdsharingPercheNata";
import BlogPost from "./components/BlogPost";
import BlogMarvinclaOrigine from "./components/BlogMarvinclaOrigine";
import Contatti from "./components/Contatti";
import BlogCelleFrigorifere from "./components/BlogCelleFrigorifere";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/digitalizzazione-agroalimentare" element={<DigitalizzazioneAgroalimentare />}/>

      {/* ✅ pagine “progetto” */}
      <Route path="/coldsharing/perche-e-nata" element={<ColdsharingPercheNata />} />

      {/* ✅ blog */}
      <Route path="/blog" element={<Blog />} />

      {/* ✅ articoli statici (prima del dinamico) */}
      <Route path="/blog/come-e-nata-marvincla" element={<BlogMarvinclaOrigine />} />

      <Route path="/blog/come-si-realizzano-le-celle-frigorifere" element={<BlogCelleFrigorifere />} />

      {/* ✅ fallback dinamico solo per gli altri articoli */}
      <Route path="/blog/:slug" element={<BlogPost />} />

      {/* ✅ fcontatti */}
      <Route path="/contatti" element={<Contatti />} />

    </Routes>
  );
}
