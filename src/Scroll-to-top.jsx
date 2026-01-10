import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollWindowToTop() {
  // copre Safari iOS / Chrome / scroll strani
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // evita che il browser ripristini lo scroll da solo
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // usa layoutEffect per essere più “forte” del rendering
  useLayoutEffect(() => {
    if (!hash) {
      scrollWindowToTop();
      return;
    }

    // se c'è hash (#servizi ecc.), aspetta il render e poi scrolla
    const id = hash.replace("#", "");
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (!el) return false;

      const yOffset = -72; // navbar sticky
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, left: 0, behavior: "smooth" });
      return true;
    };

    // 2 tentativi: subito + dopo un tick (Drawer/Chakra spesso “disturba”)
    if (!tryScroll()) {
      setTimeout(() => {
        if (!tryScroll()) scrollWindowToTop();
      }, 80);
    }
  }, [pathname, hash]);

  return null;
}
