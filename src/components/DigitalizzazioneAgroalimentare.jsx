import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// stessa immagine della landing (puoi cambiarla)
import homeImg from "../assets/home2.png";

export default function DigitalizzazioneAgroalimentare() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "Soluzioni digitali per aziende agroalimentari | Marvincla";
  }, []);

  return (
    <div className="page">
      <Navbar />

      <main>
        {/* ================= HERO (DARK IDENTICO LANDING) ================= */}
        <section className="section" style={{ paddingTop: 24 }}>
          <div className="container">
            <div className="frame">
              <div className="hero">
                <div className="heroLeft">
                  <p className="p editorialBadge" style={{ marginBottom: 14 }}>
                    Marvincla SRL • Soluzioni digitali per aziende agroalimentari
                  </p>

                  <h1 className="h1">
                    Digitalizzazione che porta
                    <br />
                    <span className="accent">contatti, ordini e controllo.</span>
                  </h1>

                  <p className="lead">
                    Siti web, e-commerce B2B, dati e processi: soluzioni progettate per la filiera agroalimentare.
                    Un unico metodo, risultati misurabili.
                  </p>

                  <div className="heroCtas">
                    <a className="btn btnPrimary" href="/#contatti">
                      Richiedi una valutazione
                    </a>
                  </div>
                </div>

                <div className="heroRight">
                  <img
                    className="heroImage"
                    src={homeImg}
                    alt="Soluzioni digitali per aziende agroalimentari"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DA QUI IN POI: WHITE PAGE ================= */}
        <div style={styles.lightWrap}>
          {/* COSA FACCIAMO */}
          <section style={styles.lightSection}>
            <div className="container">
              <div style={styles.lightFrame}>
                <div style={{ maxWidth: 920 }}>
                  <h2 style={styles.h2}>
                    Cosa facciamo <span style={styles.accent}>davvero</span>
                  </h2>
                  <p style={styles.lead}>
                    Non “un sito”. Non “una campagna”. Ma un sistema semplice che porta traffico qualificato, lo converte
                    e ti fa lavorare con più controllo.
                  </p>
                </div>

                <div style={styles.grid3}>
                  <LightCard icon="🌱" title="Siti e pagine che ti fanno trovare">
                    Struttura SEO, contenuti e pagine per intercettare aziende della filiera agroalimentare che cercano
                    esattamente quello che fai.
                  </LightCard>

                  <LightCard icon="🛒" title="E-commerce B2B (e B2C se serve)">
                    Catalogo, richieste, listini, ordini, pagamenti e workflow: l’e-commerce diventa operativo, non
                    “vetrina”.
                  </LightCard>

                  <LightCard icon="📊" title="Dati, report e processi">
                    Dashboard e strumenti per misurare: contatti, ordini, margini, stagionalità. Decidi con numeri, non
                    a sensazione.
                  </LightCard>
                </div>

                <div style={styles.ctaRow}>
                  <a className="btn btnPrimary" href="/#contatti">
                    Parliamone
                  </a>
                  <a className="btn btnPrimary" href="/coldsharing/perche-e-nata">
                    Perché è nata ColdSharing
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* METODO (3 fasi) */}
          <section style={styles.lightSection}>
            <div className="container">
              <div style={styles.lightFrame}>
                <h2 style={styles.h2}>Il metodo (3 fasi)</h2>
                <p style={styles.lead}>
                  Un percorso chiaro, per non perdere tempo: prima rendiamo il prodotto “trovabile”, poi lo rendiamo
                  “vendibile”, infine lo facciamo crescere con investimenti misurabili.
                </p>

                <div style={styles.grid3}>
                  <StepCard step="Fase 1" icon="🧭" title="Raccontare">
                    Sito/landing, messaggio, SEO e contenuti: chiarire cosa fai e per chi, per farti trovare e capire.
                  </StepCard>

                  <StepCard step="Fase 2" icon="⚙️" title="Vendere">
                    E-commerce B2B, richieste, listini, ordini e strumenti: far scorrere il processo commerciale.
                  </StepCard>

                  <StepCard step="Fase 3" icon="📣" title="Crescere">
                    Campagne e reporting: portare il prodotto davanti alle persone giuste, con numeri chiari.
                  </StepCard>
                </div>
              </div>
            </div>
          </section>

          {/* ALCUNI PROGETTI */}
          <section style={styles.lightSection}>
            <div className="container">
              <div style={styles.lightFrame}>
                <h2 style={styles.h2}>Alcuni dei nostri progetti</h2>
                <p style={styles.lead}>
                  Prodotti e piattaforme nate da problemi reali. Qui due esempi concreti.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 14,
                    marginTop: 18,
                  }}>
                  <ProjectCard
                    tag="Piattaforma • Filiera del freddo"
                    title="ColdSharing"
                    desc="Marketplace B2B per trovare e valorizzare capacità refrigerata disponibile."
                    cta1={{ label: "Apri ColdSharing", href: "https://cellefrigo.net" }}
                    cta2={{ label: "Perché è nata", href: "/coldsharing/perche-e-nata" }}
                  />

                  <ProjectCard
                    tag="Progetto • Industria / Soluzioni"
                    title="Nitra System"
                    desc="Progetto digitale e presenza online per un brand tecnico e industriale."
                    cta1={{ label: "Visita Nitra System", href: "https://www.nitrasystem.com" }}
                    cta2={{ label: "Parliamone", href: "/#contatti" }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA finale */}
          <section style={{ ...styles.lightSection, paddingBottom: 60 }}>
            <div className="container">
              <div style={{ ...styles.lightFrame, textAlign: "center" }}>
                <h2 style={{ ...styles.h2, margin: "0 auto" }}>
                  Hai una idea e non sai come 
                  <br />
                  <span style={styles.accent}>svilupparla?</span>
                </h2>

                <p style={{ ...styles.lead, margin: "10px auto 0", maxWidth: 820 }}>
                  Marvincla ti aiuta in ogni fase progettuale. Ti mandiamo un primo feedback operativo: priorità, canali e cosa conviene costruire adesso.
                </p>

                <div style={{ ...styles.ctaRow, justifyContent: "center" }}>
                  <a className="btn btnPrimary" href="/#contatti">
                    Richiedi una valutazione
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </div>
  );
}

/* ===================== Components (light) ===================== */

function LightCard({ icon, title, children }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardTop}>
        <div style={styles.cardIcon}>{icon}</div>
        <div style={styles.cardTitle}>{title}</div>
      </div>
      <div style={styles.cardDesc}>{children}</div>
    </div>
  );
}

function StepCard({ step, icon, title, children }) {
  return (
    <div style={{ ...styles.card, background: "rgba(15,17,20,.02)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
        <div style={styles.stepPill}>{step}</div>
        <div style={styles.cardIcon}>{icon}</div>
      </div>
      <div style={{ ...styles.cardTitle, marginTop: 10 }}>{title}</div>
      <div style={{ ...styles.cardDesc, marginTop: 8 }}>{children}</div>
    </div>
  );
}

function ProjectCard({ tag, title, desc, cta1, cta2 }) {
  return (
    <div style={styles.projectCard}>
      <div style={styles.tag}>{tag}</div>
      <div style={styles.projectTitle}>{title}</div>
      <div style={styles.cardDesc}>{desc}</div>

      <div style={styles.projectCtas}>
        <a className="btn btnPrimary" href={cta1.href} target={cta1.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {cta1.label}
        </a>
        <a className="btn btnPrimary" href={cta2.href}>
          {cta2.label}
        </a>
      </div>
    </div>
  );
}

/* ===================== Styles ===================== */

const styles = {
  lightWrap: {
    background: "#FFFFFF",
    color: "#0F1114",
  },

  lightSection: {
    padding: "56px 0",
  },

  lightFrame: {
    background: "#FFFFFF",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 28,
    padding: "32px 28px",
    boxShadow: "0 18px 60px rgba(0,0,0,.06)",
  },

  h2: {
    marginTop: 0,
    fontSize: 34,
    lineHeight: 1.1,
    letterSpacing: "-0.6px",
    fontWeight: 900,
  },

  accent: {
    color: "#2F7D32",
  },

  lead: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 1.65,
    color: "rgba(15,17,20,.68)",
  },

  grid3: {
    marginTop: 18,
    display: "grid",
    /* su mobile evita 3 colonne forzate: si adatta in automatico */
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
  },

  card: {
    background: "#FFFFFF",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 18,
    padding: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,.06)",
  },

  cardTop: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },

  cardIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    background: "rgba(15,17,20,.05)",
    display: "grid",
    placeItems: "center",
    fontSize: 16,
    flex: "0 0 auto",
  },

  cardTitle: {
    fontWeight: 900,
    fontSize: 15,
    letterSpacing: "-0.2px",
    color: "#0F1114",
  },

  cardDesc: {
    fontSize: 13.5,
    lineHeight: 1.55,
    color: "rgba(15,17,20,.70)",
  },

  stepPill: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(15,17,20,.05)",
    border: "1px solid rgba(15,17,20,.08)",
    fontSize: 12,
    fontWeight: 900,
    color: "rgba(15,17,20,.70)",
  },

  tag: {
    display: "inline-block",
    width: "fit-content",
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(15,17,20,.05)",
    border: "1px solid rgba(15,17,20,.08)",
    fontWeight: 900,
    fontSize: 12,
    color: "rgba(15,17,20,.70)",
    marginBottom: 10,
  },

  projectCard: {
    background: "#FFFFFF",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 14px 44px rgba(0,0,0,.08)",
  },

  projectTitle: {
    fontWeight: 1000,
    fontSize: 18,
    letterSpacing: "-0.3px",
    marginBottom: 8,
  },

  projectCtas: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 14,
  },

  ctaRow: {
    marginTop: 18,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
  },
};
