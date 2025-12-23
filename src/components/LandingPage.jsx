import React, { useMemo, useState } from "react";
import ColdChainRing from "./ColdChainRing";
import Footer from "./Footer";
import ceoImage from "../assets/ceo.png";
import homeImg from "../assets/home2.png";
import produzioneImg from "../assets/produzione2.png";
import trasformazioneImg from "../assets/Trasformazione2.png";
import brandImg from "../assets/brand.png";
import venditaImg from "../assets/vendita2.png";
import logo from "../assets/logoMtrasp.png";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "filiera", label: "Filiera" },
      { id: "perche", label: "Perché" },
      { id: "coldsharing", label: "ColdSharing" },
      { id: "ceo", label: "CEO" },
      { id: "contatti", label: "Contatti" },
    ],
    []
  );

  function go(id) {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navWrap">
        <div className="container">
          <div className="nav">
            <a
              href="#home"
              className="brand"
              onClick={(e) => {
                e.preventDefault();
                go("home");
              }}
              aria-label="Marvincla - Home"
            >
              <div className="nav-logo">
                <img
                  src={logo}
                  alt="Marvincla"
                  className="nav-logo-img"
                />
              </div>
              <span>Marvincla</span>
            </a>

            <nav className="navLinks" aria-label="Navigazione">
              {NAV.map((l) => (
                <a
                  key={l.id}
                  className="navLink"
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.id);
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="navActions">
              <a
                className="btn btnPrimary"
                href="#contatti"
                onClick={(e) => {
                  e.preventDefault();
                  go("contatti");
                }}
              >
                Parliamone
              </a>

              <button
                className="burger"
                type="button"
                aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>

        <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
          <div className="mobileMenuInner">
            {NAV.map((l) => (
              <a
                key={l.id}
                className="mobileLink"
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.id);
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* HOME (resta in frame, ok) */}
        <section id="home" className="section" style={{ paddingTop: 24 }}>
          <div className="container">
            <div className="frame">
              <div className="hero">
                <div className="heroLeft">
                  <p className="p editorialBadge" style={{ marginBottom: 14 }}>
                    Marvincla SRL • Dalla terra al digitale
                  </p>

                  <h1 className="h1">
                    Il partner che fa crescere
                    <br />
                    <span className="accent">il tuo prodotto.</span>
                  </h1>

                  <p className="lead">
                    Sito, e-commerce, campagne e dati: ti aiutiamo a farti trovare, vendere meglio e lavorare con più efficienza.
                    Con un metodo semplice, costruito per l’agroalimentare.
                  </p>

                  <div className="heroCtas">
                    <a
                      className="btn btnPrimary"
                      href="#contatti"
                      onClick={(e) => {
                        e.preventDefault();
                        go("contatti");
                      }}
                    >
                      Richiedi una valutazione
                    </a>

                    <a
                      className="btn btnGhost"
                      href="#coldsharing"
                      onClick={(e) => {
                        e.preventDefault();
                        go("coldsharing");
                      }}
                    >
                      Vedi un progetto reale
                    </a>
                  </div>

                  <p className="p" style={{ marginTop: 14, color: "rgba(255,255,255,.62)" }}>
                    Un unico interlocutore. Risultati misurabili. Filiera al centro.
                  </p>
                </div>

                <div className="heroRight">
                  <img
                    className="heroImage"
                    src={homeImg}
                    alt="Il digitale che fa crescere il tuo prodotto"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FILIERA — full-bleed (NO frame, NO box) */}
        <section id="filiera" className="section filieraSection">
          <div className="container">
            <div className="filieraFull">
              <div className="filieraLeft">
                <p className="p editorialBadge">Dalla terra al digitale</p>

                <h2 className="h2">
                  In qualunque punto della filiera, <span className="accent">noi ci siamo</span>.
                </h2>

                <p className="lead">
                  Il tuo prodotto attraversa passaggi, persone e decisioni. Marvincla rende ogni anello più{" "}
                  <b>visibile</b>, più <b>connesso</b> e più <b>efficiente</b>.
                </p>

                <p className="p subtle" style={{ marginTop: 14 }}>
                  Passa il mouse (o tocca) sugli anelli: scopri cosa facciamo nel punto in cui sei oggi.
                </p>

                <div className="heroCtas" style={{ marginTop: 18 }}>
                  <a
                    className="btn btnPrimary"
                    href="#contatti"
                    onClick={(e) => {
                      e.preventDefault();
                      go("contatti");
                    }}
                  >
                    Dimmi dove sei
                  </a>

                  <a
                    className="btn btnGhost"
                    href="#coldsharing"
                    onClick={(e) => {
                      e.preventDefault();
                      go("coldsharing");
                    }}
                  >
                    Vedi ColdSharing
                  </a>
                </div>

                <p className="p subtle" style={{ marginTop: 16 }}>
                  *ColdSharing nasce dall’anello più critico: lo stoccaggio refrigerato.*
                </p>
              </div>

              <div className="filieraRight">
                <ColdChainRing demo />
              </div>
            </div>
          </div>
        </section>

{/* ================= I NOSTRI SERVIZI ================= */}
<section id="servizi" className="section">
  <div className="container">

    {/* HEADER SEZIONE (FUORI dalla grid) */}
    <div className="section-header">
      <h2 className="section-title" data-reveal data-delay="0">
        Come lavoriamo
      </h2>
    </div>

    {/* GRID SERVIZI */}
    <div className="services-grid slim">
      {/* STEP 1 */}
      <div className="service-box">
        <span className="service-step">Fase 1</span>
        <div className="service-icon">🌱</div>

        <h3>Raccontare</h3>
        <p className="service-subtitle">Dare identità e valore al tuo prodotto</p>

        <p className="service-desc">
          Prima di vendere, un prodotto deve essere capito, trovato e riconosciuto.
          Costruiamo una presenza digitale chiara e autorevole per il settore agroalimentare.
        </p>

        <ul className="service-list">
          <li>Siti istituzionali e di prodotto</li>
          <li>Landing page per fiere e campagne</li>
          <li>SEO tecnica e contenuti</li>
        </ul>

        <div className="service-ai">
          AI → testi, struttura e intenti di ricerca ottimizzati
        </div>
      </div>

      {/* STEP 2 */}
      <div className="service-box featured">
        <span className="service-step">Fase 2</span>
        <div className="service-icon">🛒</div>

        <h3>Vendere</h3>
        <p className="service-subtitle">Trasformare il valore in fatturato</p>

        <p className="service-desc">
          Quando il prodotto è chiaro, il digitale diventa operativo.
          Realizziamo soluzioni su misura per vendere e controllare il business.
        </p>

        <ul className="service-list">
          <li>E-commerce B2B e B2C</li>
          <li>Gestione ordini e clienti</li>
          <li>Dashboard vendite e performance</li>
        </ul>

        <div className="service-ai">
          AI → analisi vendite, stagionalità e suggerimenti operativi
        </div>
      </div>

      {/* STEP 3 */}
      <div className="service-box">
        <span className="service-step">Fase 3</span>
        <div className="service-icon">📣</div>

        <h3>Crescere</h3>
        <p className="service-subtitle">Portare il prodotto sui mercati giusti</p>

        <p className="service-desc">
          Dopo aver strutturato la vendita, lavoriamo sulla crescita.
          Campagne mirate, dati leggibili e investimenti misurabili.
        </p>

        <ul className="service-list">
          <li>Google Ads e Social Ads</li>
          <li>Campagne locali e nazionali</li>
          <li>Monitoraggio e report chiari</li>
        </ul>

        <div className="service-ai">
          AI → ottimizzazione annunci, creatività e budget
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= MOCKUP VISUAL ================= */}
<section id="mockup" className="section section--mockup">
  <div className="container">
    <div className="section-header">
    </div>
    <div className="mockup-puzzle">
      {/* CENTRALE — TRASFORMAZIONE */}
      <figure className="mockup-item mockup-main" data-reveal>
        <img src={trasformazioneImg} alt="Panificio artigianale" />
        <figcaption>Trasformazione</figcaption>
      </figure>

      {/* PRODUZIONE */}
      <figure className="mockup-item mockup-prod" data-reveal data-delay="80">
        <img src={produzioneImg} alt="Azienda agricola" />
        <figcaption>Produzione</figcaption>
      </figure>

      {/* BRAND */}
      <figure className="mockup-item mockup-brand" data-reveal data-delay="120">
        <img src={brandImg} alt="Brand agroalimentare" />
        <figcaption>Brand</figcaption>
      </figure>

      {/* VENDITA */}
      <figure className="mockup-item mockup-sale" data-reveal data-delay="160">
        <img src={venditaImg} alt="E-commerce agroalimentare" />
        <figcaption>Vendita</figcaption>
      </figure>
    </div>
  </div>
</section>



        {/* ================= PERCHÉ ================= */}
        <section id="perche" className="section whySection">
          <div className="container">
            <div className="whyGrid">
              <h2 className="h2 whyTitle" data-reveal data-delay="0">
                Perché Marvincla
              </h2>

              <div className="whyBlock whyLeftTop" data-reveal data-delay="80">
                <h3 className="whyH3">Un unico interlocutore</h3>
                <p className="whyP">
                  Dalla strategia all’esecuzione: siti, e-commerce, campagne, dati e piattaforme.
                  Un solo metodo, un’unica direzione.
                </p>
              </div>

              <div className="whyDivider" aria-hidden="true" />

              <div className="whyBlock whyLeftBottom" data-reveal data-delay="160">
                <h3 className="whyH3">Approccio strategico</h3>
                <p className="whyP">
                  Prima di costruire, capiamo dove andare: obiettivi, canali, priorità.
                  Così ogni investimento ha una logica e un ritorno.
                </p>
              </div>

              <div className="whyCenter" aria-hidden="true">
                <svg className="whyCurveSvg" viewBox="0 0 300 700" preserveAspectRatio="none">
                  <path
                    d="M150,20
                       C80,140 80,260 150,340
                       C220,420 220,540 150,660"
                    fill="none"
                    stroke="rgba(255,255,255,.34)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="whyRightSlot">
                <div className="whyBlock whyRight" data-reveal data-delay="240">
                  <h3 className="whyH3">Filiera prima della tecnologia</h3>
                  <p className="whyP">
                    Non portiamo soluzioni standard. Partiamo dal prodotto, dai processi e dal mercato.
                    Il digitale deve valorizzare la realtà, non complicarla.
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
                  La piattaforma B2B che rende semplice trovare e valorizzare <b>locali refrigerati</b> nella filiera
                  agroalimentare.
                </p>

                <div className="projectCards">
                  <div className="projectCard">
                    <div className="projectCardTop">
                      <span className="projectCardDot" />
                      <span className="projectCardTag">Ricerca</span>
                    </div>
                    <h3>Trova spazi in pochi minuti</h3>
                    <p>Filtri rapidi, risultati puliti, contatto immediato con l’operatore.</p>
                  </div>

                  <div className="projectCard">
                    <div className="projectCardTop">
                      <span className="projectCardDot" />
                      <span className="projectCardTag">Valore</span>
                    </div>
                    <h3>Riduci sprechi e inefficienze</h3>
                    <p>Valorizza capacità inutilizzata e ottimizza costi logistici.</p>
                  </div>

                  <div className="projectCard">
                    <div className="projectCardTop">
                      <span className="projectCardDot" />
                      <span className="projectCardTag">Connessioni</span>
                    </div>
                    <h3>Domanda ↔ Offerta senza attriti</h3>
                    <p>Una piattaforma unica che accelera le relazioni di filiera.</p>
                  </div>
                </div>

                <div className="projectCtas">
                  <a className="btn btnPrimary" href="https://cellefrigo.net" target="_blank" rel="noreferrer">
                    Apri ColdSharing
                  </a>

                  <a
                    className="btn btnGhost"
                    href="#contatti"
                    onClick={(e) => {
                      e.preventDefault();
                      go("contatti");
                    }}
                  >
                    Portami un progetto simile
                  </a>
                </div>

                <p className="projectNote">*ColdSharing è un marchio di Marvincla SRL*</p>
              </div>

              <div className="projectRight">
                <div className="handWrap" aria-label="Mockup smartphone ColdSharing">
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
                            <div className="csUiSub">Locali refrigerati • Ricerca rapida</div>
                          </div>
                        </div>
                        <div className="csUiChip">B2B</div>
                      </div>

                      <div className="csUiSearch">
                        <div className="csUiSearchIcon">🔎</div>
                        <div className="csUiSearchText">Cerca per città, m³, temperatura…</div>
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
                            <div className="csUiSmall">Cella frigo di 320 m³ • Capacità 120 pallets</div>
                            <div className="csUiTags">
                              <span>Uva</span>
                              <span>Cella di conservazione </span>
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
                            <div className="csUiSmall">Cella frigo di 500 m³ • Capacità 500 bins</div>
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
                            <div className="csUiSmall">Cella frigo di 500 m³ • Capacità 250 pallets</div>
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

                  <img className="ceoPhotoV2" src={ceoImage} alt="Vincenzo, CEO di Marvincla" loading="lazy" />

                  <div className="ceoMediaMetaV2">
                    <div className="ceoMediaNameV2">Ing. Traversa Vincenzo</div>
                    <div className="ceoMediaRoleV2">CEO & Founder — Marvincla SRL</div>
                  </div>
                </div>
              </div>

              <div className="ceoCopyV2">
                <h2 className="ceoHeadlineV2">
                  Il digitale non premia chi urla.
                  <br />
                  Premia chi <span className="ceoAccentV2">arriva al momento giusto</span>.
                </h2>

                <p className="ceoQuoteV2">
                  Nel digitale non vince chi fa più rumore, ma chi porta il prodotto giusto davanti alle persone giuste,
                  nel momento giusto. Marvincla nasce per questo: rendere l’agroalimentare più visibile, più connesso
                  e più forte.
                </p>

                <div className="ceoDividerV2" />

                <div className="ceoActionsV2">
                  <a
                    className="btn btnPrimary"
                    href="#contatti"
                    onClick={(e) => {
                      e.preventDefault();
                      go("contatti");
                    }}
                  >
                    Contattaci
                  </a>

                  <a className="btn btnGhost" href="mailto:marvinclasrl@gmail.com">
                    Scrivi via email
                  </a>
                </div>

                <p className="ceoNoteV2">Rispondiamo con un primo feedback operativo: cosa fare, in che ordine, con quali priorità.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTATTI ================= */}
        <section id="contatti" className="section contactSectionV2">
          <div className="container">
            <div className="contactWrapV2">
              <div className="contactLeftV2">
                <h2 className="contactTitleV2">Parliamo del tuo progetto</h2>
                <p className="contactLeadV2">
                  Raccontaci cosa produci e dove vuoi arrivare. Ti rispondiamo con una proposta concreta:
                  <b> cosa fare, in che ordine e con quali priorità</b>.
                </p>

                <div className="contactQuickV2">
                  <a className="contactQuickCardV2" href="mailto:marvinclasrl@gmail.com">
                    <div className="contactQuickIconV2">✉️</div>
                    <div className="contactQuickTextV2">
                      <div className="contactQuickTitleV2">Email</div>
                      <div className="contactQuickSubV2">marvinclasrl@gmail.com</div>
                    </div>
                  </a>

                  <a className="contactQuickCardV2" href="tel:+39XXXXXXXXXX">
                    <div className="contactQuickIconV2">📞</div>
                    <div className="contactQuickTextV2">
                      <div className="contactQuickTitleV2">Telefono</div>
                      <div className="contactQuickSubV2">+39 3331800400</div>
                    </div>
                  </a>

                  <a
                    className="contactQuickCardV2"
                    href="https://wa.me/39XXXXXXXXXX?text=Ciao%20Marvincla%2C%20vorrei%20informazioni%20su%20servizi%20digitali%20per%20il%20settore%20agroalimentare."
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
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    Compila in 30 secondi
                  </a>

                  <a
                    className="btn btnGhost"
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      go("home");
                    }}
                  >
                    Torna su
                  </a>
                </div>

                <p className="contactNoteV2">*Nessun impegno: ti mandiamo una risposta operativa e una prima roadmap.*</p>
              </div>

              <div className="contactRightV2" id="contatti-form">
                <div className="contactPanelV2">
                  <div className="contactPanelTopV2">
                    <div className="contactPanelTitleV2">Raccontaci in 30 secondi</div>
                    <div className="contactPanelSubV2">3 campi e siamo operativi.</div>
                  </div>

                  <form
                    className="contactFormV2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = new FormData(e.currentTarget);
                      const nome = form.get("nome")?.toString() || "";
                      const email = form.get("email")?.toString() || "";
                      const messaggio = form.get("messaggio")?.toString() || "";

                      const subject = encodeURIComponent("Richiesta contatto Marvincla");
                      const body = encodeURIComponent(`Nome/Azienda: ${nome}\nEmail: ${email}\n\nObiettivo:\n${messaggio}`);

                      window.location.href = `mailto:marvinclasrl@gmail.com?subject=${subject}&body=${body}`;
                    }}
                  >
                    <label className="fieldV2">
                      <span>Nome e azienda</span>
                      <input name="nome" type="text" placeholder="Es. Mario Rossi — Azienda Agricola" required />
                    </label>

                    <label className="fieldV2">
                      <span>Email</span>
                      <input name="email" type="email" placeholder="nome@azienda.it" required />
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

                    <button className="btn btnPrimary" type="submit" style={{ width: "100%" }}>
                      Invia richiesta
                    </button>

                    <p className="contactMiniV2">
                      *Il form apre il tuo client email (mailto). In alternativa: <b>marvinclasrl@gmail.com</b>*
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,.12)",
  background: "rgba(255,255,255,.06)",
  color: "rgba(255,255,255,.92)",
  outline: "none",
  fontSize: 14,
};
