import React, { useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ✅ (opzionale) metti una cover nell'assets e importala qui
// import cover from "../assets/refrom-article-cover.png";

export default function BlogCelleFrigorifere() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "Come si realizza una cella frigorifera | Blog";
  }, []);

  const TOC = useMemo(
    () => [
      { id: "perche", label: "Perché realizzare una cella" },
      { id: "domande", label: "Le 4 domande chiave" },
      { id: "fasi", label: "Le fasi di realizzazione" },
      { id: "problemi", label: "Dove nascono i problemi" },
      { id: "perche-refrom", label: "Perché Refromitalia" },
      { id: "cta", label: "Richiedi una consulenza" },
    ],
    []
  );

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -84; // navbar sticky
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <div className="page" style={styles.page}>
      <Navbar />

      <main>
        {/* ===== HERO (stile "Refrom": chiaro, tecnico, pulito) ===== */}
        <header style={styles.heroWrap}>
          <div className="container" style={styles.container}>
            <div style={styles.heroCard}>
              <div style={styles.kickerRow}>
                <span style={styles.kickerPill}>Guida pratica</span>
                <span style={styles.kickerText}>Refrigerazione • Celle frigorifere • Agroalimentare</span>
              </div>

              <h1 style={styles.h1}>
                Come si realizza una <span style={styles.accent}>cella frigorifera</span>
              </h1>

              <p style={styles.lead}>
                Una guida chiara per capire cosa conta davvero prima di progettare, costruire o rinnovare una cella frigo:
                decisioni, fasi operative ed errori da evitare.
              </p>

              <div style={styles.heroCtas}>
                <a
                  href="#cta"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("cta");
                  }}
                  style={{ ...styles.btn, ...styles.btnPrimary }}
                >
                  Richiedi una consulenza
                </a>

                <a
                  href="https://www.refromitalia.it/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...styles.btn, ...styles.btnGhost }}
                >
                  Affidati a Refrom Italia
                </a>
              </div>

              {/* Indice */}
              <div style={styles.tocWrap}>
                <div style={styles.tocTitle}>Indice</div>
                <div style={styles.tocGrid}>
                  {TOC.map((x) => (
                    <button key={x.id} onClick={() => scrollToId(x.id)} style={styles.tocItem}>
                      {x.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* mini breadcrumb */}
              <div style={styles.breadcrumb}>
                <Link to="/blog" style={styles.breadcrumbLink}>
                  ← Torna al Blog
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* ===== CONTENUTO ===== */}
        <section style={styles.section}>
          <div className="container" style={styles.container}>
            <article style={styles.article}>
              {/* Intro breve */}
              <div style={styles.intro}>
                <p style={styles.p}>
                  Realizzare una cella frigorifera non significa solo “fare freddo”. Significa{" "}
                  <b>proteggere il prodotto</b>, garantire continuità operativa e mantenere costi e consumi sotto controllo.
                </p>
              </div>

              {/* PERCHÉ */}
              <Block id="perche" title="Prima di tutto: perché realizzare una cella frigorifera">
                <p style={styles.p}>
                  Una cella frigorifera nasce quasi sempre da una di queste esigenze:
                </p>
                <ul style={styles.ul}>
                  <li>Aumentare la capacità di stoccaggio</li>
                  <li>Migliorare la qualità di conservazione</li>
                  <li>Ridurre sprechi e perdite di prodotto</li>
                  <li>Rendere più efficiente la logistica interna</li>
                  <li>Adeguarsi a nuovi volumi o nuovi mercati</li>
                </ul>

                <Callout title="Punto chiave">
                  Il primo errore è pensare alla cella come a un impianto standard. In realtà è una{" "}
                  <b>scelta strategica</b> che impatta costi, qualità e operatività quotidiana.
                </Callout>
              </Block>

              {/* DOMANDE */}
              <Block id="domande" title="Le 4 domande che vanno chiarite prima di progettare">
                <div style={styles.grid2}>
                  <MiniCard
                    num="1"
                    title="Cosa conservi"
                    text="Prodotti diversi richiedono condizioni diverse: temperatura, umidità e tempi di permanenza."
                  />
                  <MiniCard
                    num="2"
                    title="Quanta merce e con quali picchi"
                    text="Una cella sottodimensionata crea colli di bottiglia. Una sovradimensionata spreca energia."
                  />
                  <MiniCard
                    num="3"
                    title="Come si muove la merce"
                    text="Ingressi/uscite, carico-scarico, turni: la cella deve seguire l’uso reale di chi la vive ogni giorno."
                  />
                  <MiniCard
                    num="4"
                    title="Quanto deve durare"
                    text="Una cella deve essere affidabile negli anni: manutenibile, adattabile, pensata per il lungo periodo."
                  />
                </div>
              </Block>

              {/* FASI */}
              <Block id="fasi" title="Come si realizza una cella frigorifera, in pratica">
                <p style={styles.p}>
                  Una realizzazione corretta segue un percorso chiaro. Qui sotto la versione “operativa” (senza tecnicismi inutili):
                </p>

                <ol style={styles.ol}>
                  <li>
                    <b>Analisi delle esigenze</b> — prodotto, volumi, flussi, obiettivi aziendali.
                  </li>
                  <li>
                    <b>Progettazione su misura</b> — layout, impianto e struttura coerenti con l’uso reale.
                  </li>
                  <li>
                    <b>Realizzazione e installazione</b> — coordinamento tra struttura, impianto e accessori.
                  </li>
                  <li>
                    <b>Collaudo e avviamento</b> — verifica prestazioni e messa in funzione operativa.
                  </li>
                  <li>
                    <b>Supporto post-installazione</b> — per garantire continuità e tranquillità nel tempo.
                  </li>
                </ol>

                <Callout title="Consiglio pratico">
                  Prima di firmare, chiedi sempre come verranno gestiti: flussi reali, manutenzione, consumi e scenari di picco. Affidati a Refrom Italia per la realizzazione della tua cella frigorifera!
                </Callout>
              </Block>

              {/* PROBLEMI */}
              <Block id="problemi" title="Dove nascono più spesso i problemi">
                <p style={styles.p}>
                  Molte criticità non dipendono dalla tecnologia, ma da decisioni iniziali sbagliate:
                </p>
                <ul style={styles.ul}>
                  <li>Dimensionamento basato su stime approssimative</li>
                  <li>Progettazione scollegata dai flussi reali</li>
                  <li>Impianto difficile da manutenere</li>
                  <li>Consumi energetici non controllati</li>
                </ul>

                <p style={styles.p}>
                  Il punto è semplice: questi problemi emergono <b>dopo</b>, quando intervenire costa molto di più.
                </p>
              </Block>

              {/* PERCHÉ REFROM */}
              <Block id="perche-refrom" title="Perché affidarsi a Refrom Italia">
                <p style={styles.p}>
                  Refrom Italia affianca aziende agroalimentari che devono <b>realizzare</b>, <b>ampliare</b> o <b>rinnovare</b> celle frigorifere.
                  Il valore non è solo nella costruzione, ma nell’approccio:
                </p>

                <ul style={styles.ul}>
                  <li>Ascolto delle esigenze reali</li>
                  <li>Progettazione su misura</li>
                  <li>Esperienza nella refrigerazione industriale</li>
                  <li>Soluzioni pensate per durare nel tempo</li>
                </ul>

                <Callout title="In sintesi">
                  Una cella ben progettata lavora “in silenzio”: protegge il prodotto, riduce imprevisti e sostiene il business.
                </Callout>
              </Block>

              {/* CTA */}
              <section id="cta" style={styles.ctaBox}>
                <div style={styles.ctaLeft}>
                  <div style={styles.ctaKicker}>Stai valutando una nuova cella (o un rifacimento)?</div>
                  <h2 style={styles.ctaTitle}>Parlane con Refrom Italia</h2>
                  <p style={styles.ctaText}>
                    Se vuoi una valutazione rapida su dimensionamento, uso reale, consumi e scelte progettuali,
                    contatta Refrom Italia direttamente dal sito.
                  </p>
                </div>

                <div style={styles.ctaRight}>
                  <a
                    href="https://www.refromitalia.it/contattaci/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ ...styles.btn, ...styles.btnPrimary, width: "100%", justifyContent: "center" }}
                  >
                    Richiedi consulenza
                  </a>

                  <a
                    href="https://www.refromitalia.it/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ ...styles.btn, ...styles.btnGhost, width: "100%", justifyContent: "center" }}
                  >
                    Visita il sito
                  </a>
                </div>
              </section>

              {/* Conclusione */}
              <div style={styles.outro}>
                <h3 style={styles.h3}>In conclusione</h3>
                <p style={styles.p}>
                  Realizzare una cella frigorifera non significa scegliere un modello, ma costruire una soluzione coerente
                  con il tuo lavoro quotidiano. Se stai valutando un progetto, un confronto con un partner esperto come Refrom Italia fa la differenza.
                </p>
              </div>
            </article>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

/* -------------------- Small UI components -------------------- */

function Block({ id, title, children }) {
  return (
    <section id={id} style={styles.block}>
      <h2 style={styles.h2}>{title}</h2>
      {children}
    </section>
  );
}

function Callout({ title, children }) {
  return (
    <div style={styles.callout}>
      <div style={styles.calloutTitle}>{title}</div>
      <div style={styles.calloutBody}>{children}</div>
    </div>
  );
}

function MiniCard({ num, title, text }) {
  return (
    <div style={styles.miniCard}>
      <div style={styles.miniTop}>
        <div style={styles.miniNum}>{num}</div>
        <div>
          <div style={styles.miniTitle}>{title}</div>
          <div style={styles.miniText}>{text}</div>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Styles (white + industrial) -------------------- */

const styles = {
  page: {
    background: "#FFFFFF",
    color: "#121826",
  },

  container: {
    maxWidth: 1120,
  },

  heroWrap: {
    padding: "clamp(18px, 3vw, 28px) 0",
    background: "linear-gradient(180deg, #F7FAFC, #FFFFFF)",
    borderBottom: "1px solid rgba(17,24,39,.08)",
  },

  heroCard: {
    background: "#FFFFFF",
    border: "1px solid rgba(17,24,39,.10)",
    borderRadius: 22,
    padding: "clamp(16px, 3vw, 26px)",
    boxShadow: "0 18px 60px rgba(0,0,0,.06)",
  },

  kickerRow: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 12,
  },

  kickerPill: {
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(16,185,129,.10)",
    border: "1px solid rgba(16,185,129,.25)",
    color: "#065F46",
    fontWeight: 900,
    fontSize: 12,
  },

  kickerText: {
    color: "rgba(17,24,39,.62)",
    fontWeight: 800,
    fontSize: 12.5,
    letterSpacing: ".1px",
  },

  h1: {
    margin: "0 0 10px",
    fontSize: "clamp(28px, 4.5vw, 44px)",
    lineHeight: 1.08,
    letterSpacing: "-0.8px",
    fontWeight: 1000,
    color: "#111827",
  },

  accent: { color: "#0EA5A4" }, // ✅ cambia qui l'accento se vuoi

  lead: {
    margin: 0,
    fontSize: "clamp(15px, 2.2vw, 18px)",
    lineHeight: 1.7,
    color: "rgba(17,24,39,.70)",
    maxWidth: 900,
  },

  heroCtas: {
    marginTop: 16,
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 14,
    border: "1px solid transparent",
    transition: "transform .12s ease, box-shadow .12s ease, filter .12s ease",
  },

  btnPrimary: {
    background: "#0EA5A4",
    color: "#06201F",
    borderColor: "rgba(0,0,0,.10)",
    boxShadow: "0 10px 24px rgba(14,165,164,.20)",
  },

  btnGhost: {
    background: "#FFFFFF",
    color: "#111827",
    borderColor: "rgba(17,24,39,.14)",
  },

  tocWrap: {
    marginTop: 16,
    paddingTop: 14,
    borderTop: "1px solid rgba(17,24,39,.10)",
  },

  tocTitle: {
    fontWeight: 1000,
    marginBottom: 10,
    color: "#111827",
    letterSpacing: "-0.2px",
  },

  tocGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 10,
  },

  tocItem: {
    textAlign: "left",
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(17,24,39,.10)",
    background: "#FFFFFF",
    color: "#111827",
    cursor: "pointer",
    fontWeight: 900,
    boxShadow: "0 8px 18px rgba(0,0,0,.04)",
  },

  breadcrumb: {
    marginTop: 14,
  },

  breadcrumbLink: {
    color: "rgba(17,24,39,.70)",
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 13,
  },

  section: {
    padding: "clamp(22px, 4vw, 44px) 0",
  },

  article: {
    maxWidth: 920,
    margin: "0 auto",
    background: "#FFFFFF",
    border: "1px solid rgba(17,24,39,.10)",
    borderRadius: 22,
    padding: "clamp(16px, 3vw, 26px)",
    boxShadow: "0 18px 60px rgba(0,0,0,.06)",
  },

  intro: {
    paddingBottom: 14,
    borderBottom: "1px solid rgba(17,24,39,.10)",
    marginBottom: 16,
  },

  block: {
    padding: "16px 0",
    borderBottom: "1px solid rgba(17,24,39,.08)",
  },

  h2: {
    margin: "0 0 10px",
    fontSize: "clamp(18px, 2.6vw, 24px)",
    lineHeight: 1.2,
    fontWeight: 1000,
    letterSpacing: "-0.3px",
    color: "#111827",
  },

  h3: {
    margin: "0 0 8px",
    fontSize: 18,
    fontWeight: 1000,
    color: "#111827",
  },

  p: {
    margin: "8px 0",
    lineHeight: 1.75,
    color: "rgba(17,24,39,.78)",
    fontSize: 15.5,
  },

  ul: {
    margin: "10px 0 0",
    paddingLeft: 18,
    lineHeight: 1.75,
    color: "rgba(17,24,39,.78)",
  },

  ol: {
    margin: "10px 0 0",
    paddingLeft: 18,
    lineHeight: 1.8,
    color: "rgba(17,24,39,.78)",
  },

  callout: {
    marginTop: 12,
    borderRadius: 16,
    border: "1px solid rgba(14,165,164,.22)",
    background: "rgba(14,165,164,.06)",
    padding: 14,
  },

  calloutTitle: {
    fontWeight: 1000,
    color: "#0F766E",
    marginBottom: 6,
  },

  calloutBody: {
    color: "rgba(17,24,39,.80)",
    lineHeight: 1.7,
    fontSize: 15,
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
    marginTop: 10,
  },

  miniCard: {
    borderRadius: 16,
    border: "1px solid rgba(17,24,39,.10)",
    background: "#FFFFFF",
    padding: 14,
    boxShadow: "0 10px 26px rgba(0,0,0,.05)",
  },

  miniTop: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
  },

  miniNum: {
    width: 28,
    height: 28,
    borderRadius: 10,
    display: "grid",
    placeItems: "center",
    background: "rgba(16,185,129,.12)",
    border: "1px solid rgba(16,185,129,.26)",
    color: "#065F46",
    fontWeight: 1000,
  },

  miniTitle: {
    fontWeight: 1000,
    color: "#111827",
    marginBottom: 4,
  },

  miniText: {
    color: "rgba(17,24,39,.72)",
    lineHeight: 1.6,
    fontSize: 14.5,
  },

  ctaBox: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "1.1fr .9fr",
    gap: 14,
    padding: 16,
    borderRadius: 18,
    border: "1px solid rgba(17,24,39,.10)",
    background: "linear-gradient(180deg, #F7FAFC, #FFFFFF)",
  },

  ctaLeft: {},

  ctaKicker: {
    fontWeight: 1000,
    color: "rgba(17,24,39,.62)",
    textTransform: "uppercase",
    letterSpacing: ".8px",
    fontSize: 12,
    marginBottom: 6,
  },

  ctaTitle: {
    margin: "0 0 6px",
    fontWeight: 1000,
    letterSpacing: "-0.3px",
    color: "#111827",
    fontSize: 20,
  },

  ctaText: {
    margin: 0,
    color: "rgba(17,24,39,.72)",
    lineHeight: 1.65,
    fontSize: 15,
  },

  ctaRight: {
    display: "grid",
    gap: 10,
    alignContent: "start",
  },

  ctaNote: {
    color: "rgba(17,24,39,.60)",
    fontSize: 12.5,
    lineHeight: 1.5,
  },

  outro: {
    paddingTop: 16,
    borderTop: "1px solid rgba(17,24,39,.10)",
    marginTop: 16,
  },
};

/**
 * ✅ Nota: per mobile, se vuoi migliorare la grid2 e ctaBox senza CSS esterno,
 * puoi aggiungere una piccola regola CSS globale:
 *
 * @media (max-width: 860px){
 *   .container { padding-left: 16px; padding-right: 16px; }
 * }
 *
 * ...oppure spostare questi styles in un CSS file e usare media queries.
 */
