import React, { useMemo, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar"; // ✅ usa la Navbar Chakra unica
import ColdChainRing from "./ColdChainRing";
import Footer from "./Footer";

import ceoImage from "../assets/ceo.png";
// import produzioneImg from "../assets/produzione2.png";
// import trasformazioneImg from "../assets/Trasformazione2.png";
// import brandImg from "../assets/brand.png";
// import venditaImg from "../assets/vendita2.png";

export default function LandingPage() {
  const location = useLocation();

  // (Opzionale) se un giorno vuoi passare NAV alla Navbar via props
  const NAV = useMemo(
    () => [
      { type: "section", id: "home", label: "Home" },
      { type: "section", id: "filiera", label: "Filiera" },
      { type: "section", id: "servizi", label: "Servizi" },
      { type: "section", id: "perche", label: "Perché" },
      { type: "section", id: "coldsharing", label: "ColdSharing" },
      { type: "section", id: "ceo", label: "CEO" },
      { type: "section", id: "contatti", label: "Contatti" },
    ],
    [],
  );

  // ✅ scroll robusto + offset (navbar sticky)
  const scrollToId = useCallback((id) => {
    console.log("scrollToId called with id:", id);
    const el = document.getElementById(id);
    console.log("Element found:", el);
    if (!el) {
      console.warn("Element not found for id:", id);
      return;
    }

    // Usa scrollIntoView invece di window.scrollTo
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Aggiusta l'offset della navbar dopo lo scroll
    setTimeout(() => {
      const yOffset = -80;
      const y = window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "auto" });
    }, 100);
  }, []);

  // ✅ se arrivo su "/#filiera" da un'altra pagina, scrollo quando la landing è montata
  useEffect(() => {
    const id = (location.hash || "").replace("#", "");
    if (!id) return;

    const t = setTimeout(() => scrollToId(id), 50);
    return () => clearTimeout(t);
  }, [location.hash, scrollToId]);

  return (
    <div className="page">
      {/* Se in futuro vuoi passare la nav: <Navbar nav={NAV} /> */}
      <Navbar />

      <main>
        {/* HOME */}
        <section
          id="home"
          className="section"
          style={{
            paddingTop: 56,
            paddingBottom: 88,
            backgroundColor: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Cerchio decorativo dietro */}
          <div
            style={{
              position: "absolute",
              top: "-30%",
              right: "-15%",
              width: "700px",
              height: "700px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255, 138, 0, 0.12) 0%, rgba(255, 138, 0, 0.03) 100%)",
              zIndex: 0,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />

          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* LEFT: Testo */}
            <div className="heroLeft" style={{ maxWidth: "100%" }}>
              <p className="p editorialBadge" style={{ marginBottom: 14 }}>
                Marvincla SRL • Soluzioni digitali per aziende agroalimentari
              </p>

              <h1 className="h1" style={{ color: "rgba(0, 0, 0, 0.92)" }}>
                <p>Il partner che fa </p>
                crescere
                <br />
                <span className="accent">il tuo prodotto.</span>
              </h1>

              <p
                className="lead"
                style={{ color: "rgba(0, 0, 0, 0.72)", marginBottom: 32 }}
              >
                Supportiamo le imprese della filiera agroalimentare nella
                digitalizzazione di siti web, e-commerce B2B, dati e processi.
              </p>

              <div className="heroCtas">
                <button
                  className="btn btnPrimary"
                  onClick={() => scrollToId("contatti")}
                >
                  Richiedi una valutazione
                </button>

                <button
                  className="btn btnPrimary"
                  onClick={() => scrollToId("coldsharing")}
                >
                  Vedi un progetto reale
                </button>
              </div>

              <p
                className="p"
                style={{ marginTop: 24, color: "rgba(0, 0, 0, 0.62)" }}
              >
                Un unico partner digitale. Risultati misurabili. Filiera
                agroalimentare al centro.
              </p>
            </div>

            {/* RIGHT: Visual decorativo */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "400px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                  background:
                    "linear-gradient(135deg, rgba(183, 255, 42, 0.08) 0%, rgba(255, 138, 0, 0.08) 100%)",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Decorativo: elementi geometrici */}
                <div
                  style={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "rgba(183, 255, 42, 0.15)",
                    top: "10%",
                    left: "10%",
                  }}
                  aria-hidden="true"
                />
                <div
                  style={{
                    position: "absolute",
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    background: "rgba(255, 138, 0, 0.1)",
                    bottom: "15%",
                    right: "15%",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Responsive */}
          <style>
            {`
              @media (max-width: 980px) {
                [style*="gridTemplateColumns: 1fr 1fr"] {
                  grid-template-columns: 1fr !important;
                  gap: 48px !important;
                }
              }
            `}
          </style>
        </section>

        {/* FILIERA — full-bleed */}
        <section
          id="filiera"
          className="section filieraSection"
          style={{ backgroundColor: "#ffffff", padding: 24 }}
        >
          <div
            className="container"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 14,
            }}
          >
            <div className="filieraFull">
              <div className="filieraLeft">
                <p className="p editorialBadge" style={{ color: "#000000" }}>
                  Dalla terra al digitale
                </p>

                <h2 className="h2">
                  In qualunque punto della filiera,{" "}
                  <span className="accent">noi ci siamo</span>.
                </h2>

                <p className="lead">
                  Il tuo prodotto attraversa passaggi, persone e decisioni.
                  Marvincla rende ogni anello più <b>visibile</b>, più{" "}
                  <b>connesso</b> e più <b>efficiente</b>.
                </p>

                <p
                  className="p subtle"
                  style={{ marginTop: 14, color: "#000000" }}
                >
                  Passa il mouse (o tocca) sugli anelli: scopri cosa facciamo
                  nel punto in cui sei oggi.
                </p>

                <div className="heroCtas" style={{ marginTop: 18 }}>
                  <a
                    className="btn btnPrimary"
                    href="#contatti"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId("contatti");
                    }}
                  >
                    Dimmi dove sei
                  </a>

                  <a
                    className="btn btnGhost"
                    href="/coldsharing/perche-e-nata"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId("coldsharing");
                    }}
                  >
                    Vedi ColdSharing
                  </a>
                </div>

                <p
                  className="p subtle"
                  style={{ marginTop: 16, color: "#000000" }}
                >
                  *ColdSharing nasce dall’anello più critico: lo stoccaggio
                  refrigerato.*
                </p>
              </div>

              <div className="filieraRight">
                <ColdChainRing demo />
              </div>
            </div>
          </div>
        </section>

        {/* ================= I NOSTRI SERVIZI ================= */}
        <section
          id="servizi"
          className="section"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="container">
            <div className="section-header">
              <h2
                className="section-title"
                data-reveal
                data-delay="0"
                style={{ color: "#000000" }}
              >
                Come lavoriamo
              </h2>
            </div>

            <div className="services-grid slim">
              <div className="service-box">
                <span className="service-step">Fase 1</span>
                <div className="service-icon">🌱</div>

                <h3 style={{ color: "#000000" }}>Raccontare</h3>
                <p className="service-subtitle" style={{ color: "#000000" }}>
                  Dare identità e valore al tuo prodotto
                </p>

                <p className="service-desc" style={{ color: "#000000" }}>
                  Prima di vendere, un prodotto deve essere capito, trovato e
                  riconosciuto. Costruiamo una presenza digitale chiara e
                  autorevole per il settore agroalimentare.
                </p>

                <ul className="service-list" style={{ color: "#000000" }}>
                  <li>Siti istituzionali e di prodotto</li>
                  <li>Landing page per fiere e campagne</li>
                  <li>SEO tecnica e contenuti</li>
                </ul>

                <div className="service-ai" style={{ color: "#000000" }}>
                  AI → testi, struttura e intenti di ricerca ottimizzati
                </div>
              </div>

              <div className="service-box featured">
                <span className="service-step">Fase 2</span>
                <div className="service-icon">🛒</div>

                <h3 style={{ color: "#000000" }}>Vendere</h3>
                <p className="service-subtitle" style={{ color: "#000000" }}>
                  Trasformare il valore in fatturato
                </p>

                <p className="service-desc" style={{ color: "#000000" }}>
                  Quando il prodotto è chiaro, il digitale diventa operativo.
                  Realizziamo soluzioni su misura per vendere e controllare il
                  business.
                </p>

                <ul className="service-list" style={{ color: "#000000" }}>
                  <li>E-commerce B2B e B2C</li>
                  <li>Gestione ordini e clienti</li>
                  <li>Dashboard vendite e performance</li>
                </ul>

                <div className="service-ai" style={{ color: "#000000" }}>
                  AI → analisi vendite, stagionalità e suggerimenti operativi
                </div>
              </div>

              <div className="service-box">
                <span className="service-step">Fase 3</span>
                <div className="service-icon">📣</div>

                <h3 style={{ color: "#000000" }}>Crescere</h3>
                <p className="service-subtitle" style={{ color: "#000000" }}>
                  Portare il prodotto sui mercati giusti
                </p>

                <p className="service-desc" style={{ color: "#000000" }}>
                  Dopo aver strutturato la vendita, lavoriamo sulla crescita.
                  Campagne mirate, dati leggibili e investimenti misurabili.
                </p>

                <ul className="service-list" style={{ color: "#000000" }}>
                  <li>Google Ads e Social Ads</li>
                  <li>Campagne locali e nazionali</li>
                  <li>Monitoraggio e report chiari</li>
                </ul>

                <div className="service-ai" style={{ color: "#000000" }}>
                  AI → ottimizzazione annunci, creatività e budget
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MOCKUP VISUAL =================
        <section
          id="mockup"
          className="section section--mockup"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="container">
            <div className="mockup-puzzle">
              <figure className="mockup-item mockup-main" data-reveal>
                <img src={trasformazioneImg} alt="Panificio artigianale" />
                <figcaption>Trasformazione</figcaption>
              </figure>

              <figure
                className="mockup-item mockup-prod"
                data-reveal
                data-delay="80"
              >
                <img src={produzioneImg} alt="Azienda agricola" />
                <figcaption>Produzione</figcaption>
              </figure>

              <figure
                className="mockup-item mockup-brand"
                data-reveal
                data-delay="120"
              >
                <img src={brandImg} alt="Brand agroalimentare" />
                <figcaption>Brand</figcaption>
              </figure>

              <figure
                className="mockup-item mockup-sale"
                data-reveal
                data-delay="160"
              >
                <img src={venditaImg} alt="E-commerce agroalimentare" />
                <figcaption>Vendita</figcaption>
              </figure>
            </div>
          </div>
        </section> */}

        {/* ================= PERCHÉ ================= */}
        <section
          id="perche"
          className="section whySection"
          style={{ color: "#000000" }}
        >
          <div className="container">
            <div className="whyGrid">
              <h2
                className="h2 whyTitle"
                data-reveal
                data-delay="0"
                style={{ color: "#000000" }}
              >
                Perché Marvincla
              </h2>

              <div
                className="whyBlock whyLeftTop"
                data-reveal
                data-delay="80"
                style={{ color: "#000000" }}
              >
                <h3 className="whyH3">Un unico interlocutore</h3>
                <p className="whyP" style={{ color: "#000000" }}>
                  Dalla strategia all’esecuzione: siti, e-commerce, campagne,
                  dati e piattaforme. Un solo metodo, un’unica direzione.
                </p>
              </div>

              <div
                className="whyDivider"
                aria-hidden="true"
                style={{ color: "#000000" }}
              />

              <div
                className="whyBlock whyLeftBottom"
                data-reveal
                data-delay="160"
              >
                <h3 className="whyH3">Approccio strategico</h3>
                <p className="whyP">
                  Prima di costruire, capiamo dove andare: obiettivi, canali,
                  priorità. Così ogni investimento ha una logica e un ritorno.
                </p>
              </div>

              <div className="whyCenter" aria-hidden="true">
                <svg
                  className="whyCurveSvg"
                  viewBox="0 0 300 700"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M150,20 C80,140 80,260 150,340 C220,420 220,540 150,660"
                    fill="none"
                    stroke="rgba(0,0,0,.15)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="whyRightSlot">
                <div className="whyBlock whyRight" data-reveal data-delay="240">
                  <h3 className="whyH3">Filiera prima della tecnologia</h3>
                  <p className="whyP">
                    Non portiamo soluzioni standard. Partiamo dal prodotto, dai
                    processi e dal mercato. Il digitale deve valorizzare la
                    realtà, non complicarla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= IL NOSTRO PROGETTO — ColdSharing ================= */}
        <section id="coldsharing" className="section projectSection">
          <div className="container">
            <div className="projectSplit">
              <div className="projectLeft">
                <p className="projectKicker">Case study • Prodotto Marvincla</p>

                <h2 className="projectTitle">
                  Il nostro progetto
                  <span className="projectTitleAccent"> ColdSharing</span>
                </h2>

                <p className="projectLead">
                  Cold Sharing è una piattaforma digitale dedicata alla{" "}
                  <b>filiera agroalimentare</b>, pensata per ottimizzare la
                  gestione del freddo e la{" "}
                  <b>condivisione delle risorse logistiche</b>.
                </p>

                <div className="projectCards">
                  <div className="projectCard">
                    <div className="projectCardTop">
                      <span className="projectCardDot" />
                      <span className="projectCardTag">Ricerca</span>
                    </div>
                    <h3>Trova spazi in pochi minuti</h3>
                    <p>
                      Filtri rapidi, risultati puliti, contatto immediato con
                      l’operatore.
                    </p>
                  </div>

                  <div className="projectCard">
                    <div className="projectCardTop">
                      <span className="projectCardDot" />
                      <span className="projectCardTag">Valore</span>
                    </div>
                    <h3>Riduci sprechi e inefficienze</h3>
                    <p>
                      Valorizza capacità inutilizzata e ottimizza costi
                      logistici.
                    </p>
                  </div>

                  <div className="projectCard">
                    <div className="projectCardTop">
                      <span className="projectCardDot" />
                      <span className="projectCardTag">Connessioni</span>
                    </div>
                    <h3>Domanda ↔ Offerta senza attriti</h3>
                    <p>
                      Una piattaforma unica che accelera le relazioni di
                      filiera.
                    </p>
                  </div>
                </div>

                <div className="projectCtas">
                  <a
                    className="btn btnPrimary"
                    href="https://cellefrigo.net"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apri ColdSharing
                  </a>

                  <a className="btn btnGhost" href="/coldsharing/perche-e-nata">
                    Perché è nata
                  </a>
                </div>

                <p className="projectNote">
                  *ColdSharing è un marchio di Marvincla SRL*
                </p>
              </div>

              {/* MOCKUP PHONE */}
              <div className="projectRight">
                <div
                  className="handWrap"
                  aria-label="Mockup smartphone ColdSharing"
                >
                  <div className="handPalm" aria-hidden="true" />
                  <div className="handThumb" aria-hidden="true" />

                  <div className="phone">
                    <div className="phoneNotch" aria-hidden="true" />
                    <div className="phoneScreen">
                      <div className="csUiTop">
                        <div className="csUiBrand">
                          <span className="csUiLogo">❄️</span>
                          <div>
                            <div className="csUiName">ColdSharing</div>
                            <div className="csUiSub">
                              Locali refrigerati • Ricerca rapida
                            </div>
                          </div>
                        </div>
                        <div className="csUiChip">B2B</div>
                      </div>

                      <div className="csUiSearch">
                        <div className="csUiSearchIcon">🔎</div>
                        <div className="csUiSearchText">
                          Cerca per città, m³, temperatura…
                        </div>
                      </div>

                      <div className="csUiFilters">
                        <span className="csUiPill">📍 Zona</span>
                        <span className="csUiPill">🌡️ Temp</span>
                        <span className="csUiPill">📦 Capienza</span>
                        <span className="csUiPill">✅ Dispon.</span>
                      </div>

                      <div className="csUiList">
                        <div className="csUiCard">
                          <div className="csUiThumb" />
                          <div className="csUiMeta">
                            <div className="csUiRow">
                              <b>Bari • 0–4°C</b>
                              <span className="csUiPrice">50 €/gg</span>
                            </div>
                            <div className="csUiSmall">
                              Cella frigo di 320 m³ • Capacità 120 pallets
                            </div>
                            <div className="csUiTags">
                              <span>Uva</span>
                              <span>Cella di conservazione</span>
                              <span>Conferma immediata</span>
                            </div>
                          </div>
                        </div>

                        <div className="csUiCard">
                          <div className="csUiThumb alt" />
                          <div className="csUiMeta">
                            <div className="csUiRow">
                              <b>Roma • -18°C</b>
                              <span className="csUiPrice">70 €/gg</span>
                            </div>
                            <div className="csUiSmall">
                              Cella frigo di 500 m³ • Capacità 500 bins
                            </div>
                            <div className="csUiTags">
                              <span>Surgelati</span>
                              <span>Cancellazione gratuita</span>
                              <span>Conferma immediata</span>
                            </div>
                          </div>
                        </div>

                        <div className="csUiCard">
                          <div className="csUiThumb" />
                          <div className="csUiMeta">
                            <div className="csUiRow">
                              <b>Siracusa • 3–7°C</b>
                              <span className="csUiPrice">100 €/gg</span>
                            </div>
                            <div className="csUiSmall">
                              Cella frigo di 500 m³ • Capacità 250 pallets
                            </div>
                            <div className="csUiTags">
                              <span>Arance</span>
                              <span>Cancellazione gratuita</span>
                              <span>Richiesta di prenotazione</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="csUiBottom">
                        <div className="csUiNavItem active">Home</div>
                        <div className="csUiNavItem">Cerca</div>
                        <div className="csUiNavItem">Preferiti</div>
                        <div className="csUiNavItem">Profilo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* FINE MOCKUP */}
            </div>
          </div>
        </section>

        {/* ================= CEO ================= */}
        <section id="ceo" className="section ceoSectionV2">
          <div className="container">
            <div className="ceoWrapV2">
              <div className="ceoMediaV2">
                <div className="ceoMediaCardV2">
                  <div className="ceoQuoteMarkV2" aria-hidden="true">
                    “
                  </div>

                  <img
                    className="ceoPhotoV2"
                    src={ceoImage}
                    alt="Vincenzo, CEO di Marvincla"
                    loading="lazy"
                  />

                  <div className="ceoMediaMetaV2">
                    <div className="ceoMediaNameV2">Ing. Traversa Vincenzo</div>
                    <div className="ceoMediaRoleV2">
                      CEO & Founder — Marvincla SRL
                    </div>
                  </div>
                </div>
              </div>

              <div className="ceoCopyV2">
                <h2 className="ceoHeadlineV2">
                  Il digitale non premia chi urla.
                  <br />
                  Premia chi{" "}
                  <span className="ceoAccentV2">arriva al momento giusto</span>.
                </h2>

                <p className="ceoQuoteV2">
                  Nel digitale non vince chi fa più rumore, ma chi porta il
                  prodotto giusto <b>davanti alle persone giuste</b>, nel
                  momento giusto, lungo la <b>filiera agroalimentare</b>.
                  Marvincla nasce per questo: aiutare le{" "}
                  <b>aziende agroalimentari</b> a essere più visibili, più{" "}
                  <b>connesse</b> e più <b>solide</b>, attraverso piattaforme
                  digitali B2B, dati e processi che funzionano davvero.
                </p>

                <div className="ceoDividerV2" />

                <div className="ceoActionsV2">
                  <a
                    className="btn btnPrimary"
                    href="#contatti"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId("contatti");
                    }}
                  >
                    Contattaci
                  </a>

                  <a
                    className="btn btnGhost"
                    href="mailto:marvinclasrl@gmail.com"
                  >
                    Scrivi via email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTATTI ================= */}
        <section id="contatti" className="section contactSectionV2">
          <div className="container">
            <div className="contactWrapV2">
              <div className="contactLeftV2">
                <h2 className="contactTitleV2">Parlaci del tuo progetto</h2>
                <p className="contactLeadV2">
                  Scopri come <b>Marvincla</b> può supportare la tua azienda
                  nella <b>digitalizzazione della filiera</b>.
                </p>

                <div className="contactQuickV2">
                  <a
                    className="contactQuickCardV2"
                    href="mailto:marvinclasrl@gmail.com"
                  >
                    <div className="contactQuickIconV2">✉️</div>
                    <div className="contactQuickTextV2">
                      <div className="contactQuickTitleV2">Email</div>
                      <div className="contactQuickSubV2">
                        marvinclasrl@gmail.com
                      </div>
                    </div>
                  </a>

                  <a className="contactQuickCardV2" href="tel:+393331800400">
                    <div className="contactQuickIconV2">📞</div>
                    <div className="contactQuickTextV2">
                      <div className="contactQuickTitleV2">Telefono</div>
                      <div className="contactQuickSubV2">+39 3331800400</div>
                    </div>
                  </a>

                  <a
                    className="contactQuickCardV2"
                    href="https://wa.me/393331800400?text=Ciao%20Marvincla%2C%20vorrei%20informazioni%20su%20servizi%20digitali%20per%20il%20settore%20agroalimentare."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="contactQuickIconV2">💬</div>
                    <div className="contactQuickTextV2">
                      <div className="contactQuickTitleV2">WhatsApp</div>
                      <div className="contactQuickSubV2">Messaggio veloce</div>
                    </div>
                  </a>
                </div>

                <div className="contactCtasV2">
                  <a
                    className="btn btnPrimary"
                    href="#contatti-form"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("contatti-form");
                      if (!el) return;

                      const yOffset = -72;
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }}
                  >
                    Compila in 30 secondi
                  </a>
                </div>
              </div>

              <div className="contactRightV2" id="contatti-form">
                <div className="contactPanelV2">
                  <div className="contactPanelTopV2">
                    <div className="contactPanelTitleV2">
                      Raccontaci in 30 secondi
                    </div>
                    <div className="contactPanelSubV2">
                      3 campi e siamo operativi.
                    </div>
                  </div>

                  <form
                    className="contactFormV2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = new FormData(e.currentTarget);
                      const nome = form.get("nome")?.toString() || "";
                      const email = form.get("email")?.toString() || "";
                      const messaggio = form.get("messaggio")?.toString() || "";

                      const subject = encodeURIComponent(
                        "Richiesta contatto Marvincla",
                      );
                      const body = encodeURIComponent(
                        `Nome/Azienda: ${nome}\nEmail: ${email}\n\nObiettivo:\n${messaggio}`,
                      );

                      window.location.href = `mailto:marvinclasrl@gmail.com?subject=${subject}&body=${body}`;
                    }}
                  >
                    <label className="fieldV2">
                      <span>Nome e azienda</span>
                      <input
                        name="nome"
                        type="text"
                        placeholder="Es. Mario Rossi — Azienda Agricola"
                        required
                      />
                    </label>

                    <label className="fieldV2">
                      <span>Email</span>
                      <input
                        name="email"
                        type="email"
                        placeholder="nome@azienda.it"
                        required
                      />
                    </label>

                    <label className="fieldV2">
                      <span>Cosa vuoi ottenere?</span>
                      <textarea
                        name="messaggio"
                        rows={5}
                        placeholder="Es. più contatti, e-commerce, campagne, dashboard, dati di mercato…"
                        required
                      />
                    </label>

                    <button
                      className="btn btnPrimary"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      Invia richiesta
                    </button>

                    <p className="contactMiniV2">
                      *Il form apre il tuo client email (mailto). In
                      alternativa: <b>marvinclasrl@gmail.com</b>*
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
