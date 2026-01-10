import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// stessa immagine usata nella landing (se esiste)
import homeImg from "../assets/fotoperchenata2.png";

// ✅ immagine per sessione "L'IDEA"
import ideaImg from "../assets/fotoperchenata.png";
// ✅ immagine per sessione "5 MOTIVI"
import previewImg from "../assets/coldsharinglogo.png";


export default function ColdsharingPercheNata() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "Perché è nata ColdSharing | Marvincla";
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
                    ColdSharing • Perché è nata
                  </p>

                  <h1 className="h1">
                    Il freddo è un costo.
                    <br />
                    <span className="accent">Condividilo!</span>
                  </h1>

                  <p className="lead">
                    ColdSharing nasce per rendere più semplice e trasparente l’accesso alla capacità refrigerata
                    esistente: meno telefonate, meno incertezza, più efficienza operativa nella filiera agroalimentare.
                  </p>

                  <div className="heroCtas">
                    <a className="btn btnPrimary" href="https://cellefrigo.net" target="_blank" rel="noreferrer">
                      Apri ColdSharing
                    </a>

                    <a className="btn btnPrimary" href="/#contatti">
                      Parliamone
                    </a>
                  </div>

                  <p className="p" style={{ marginTop: 14, color: "rgba(255,255,255,.62)" }}>
                    Questa pagina è un approfondimento: sotto trovi problemi reali, paradosso del mercato e benefici.
                  </p>
                </div>

                <div className="heroRight">
                  <img className="heroImage" src={homeImg} alt="ColdSharing — perché è nata" loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DA QUI IN POI: WHITE PAGE (come seconda foto) ================= */}
        <div style={styles.lightWrap}>
          {/* PROBLEMI */}
          <section style={styles.lightSection}>
            <div className="container">
              <div style={styles.lightFrame}>
                <div style={{ maxWidth: 880 }}>
                  <h2 style={styles.h2}>
                    I problemi che abbiamo visto <span style={styles.accent}>sul campo</span>
                  </h2>
                  <p style={styles.lead}>
                    Il freddo non è “un dettaglio logistico”: è una risorsa critica. Eppure spesso è gestita con processi
                    frammentati e poco misurabili.
                  </p>
                </div>

                <div style={styles.grid3}>
                  <LightCard icon="📞" title="Ricerca lenta e frammentata">
                    Disponibilità e condizioni non sono chiare: si procede per telefonate e passaparola.
                  </LightCard>
                  <LightCard icon="🧊" title="Capacità esistente sottoutilizzata">
                    Spazi refrigerati disponibili restano vuoti o non valorizzati perché difficili da “mettere a
                    mercato”.
                  </LightCard>
                  <LightCard icon="💸" title="Costi e investimenti alti">
                    Costruire o gestire freddo richiede capex e costi operativi spesso non sostenibili per tutti.
                  </LightCard>
                </div>

                <div style={{ ...styles.grid3, marginTop: 14 }}>
                  <LightCard icon="📉" title="Bassa digitalizzazione e poca misurabilità">
                    Dati dispersi, report assenti, processi manuali: si decide senza indicatori operativi chiari.
                  </LightCard>
                  <LightCard icon="🤝" title="Domanda e offerta non si incontrano">
                    Chi cerca freddo e chi lo offre non ha un canale unico e trasparente per connettersi velocemente.
                  </LightCard>
                  <div />
                </div>
              </div>
            </div>
          </section>

          {/* PARADOSSO (white, ma con enfasi “10%”) */}
          <section style={styles.lightSection}>
            <div className="container">
              <div style={styles.lightFrame}>
                <div style={{ maxWidth: 980 }}>
                  <div style={styles.kicker}>PARADOSSO DEL MERCATO</div>

                  <h2 style={styles.h2}>
                    Refrigerazione <span style={styles.accent}>ancora limitata</span>.
                  </h2>

                  <p style={styles.lead}>
                    La slide evidenzia un punto chiave: il valore del mercato cresce, ma la catena del freddo non scala
                    allo stesso ritmo. Il motivo principale è il costo: infrastrutture e gestione non sono accessibili in
                    modo semplice e capillare.
                  </p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 16,
                    marginTop: 18,
                    alignItems: "start",
                  }}>
                  <div style={styles.bigBox}>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <MiniKpi label="ITALIA" value="13 Billioni di Euro" sub="entro 2026" />
                      <MiniKpi label="MONDO" value="330 Billioni di Euro" sub="entro 2030" />
                    </div>
                  </div>

                  <div style={styles.paradoxBox}>
                    <div style={styles.paradoxLabel}>Il punto critico</div>
                    <div style={styles.paradoxValue}>10%</div>
                    <p style={styles.paradoxText}>
                      Solo una piccola parte del prodotto raccolto viene refrigerata: non per mancanza di bisogno, ma
                      perché i costi della refrigerazione (capex + gestione) rendono l’accesso alla capacità difficile.
                    </p>

                    <div style={styles.paradoxGrid}>
                      <div style={styles.paradoxMini}>
                        <div style={styles.paradoxMiniT}>Cosa serve</div>
                        <div style={styles.paradoxMiniD}>
                          Rendere la capacità esistente più accessibile, trasparente e misurabile.
                        </div>
                      </div>
                      <div style={styles.paradoxMini}>
                        <div style={styles.paradoxMiniT}>Cosa fa ColdSharing</div>
                        <div style={styles.paradoxMiniD}>
                          Connette domanda↔offerta e riduce tempo e costo di ricerca.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={styles.ctaRow}>
                  <a className="btn btnPrimary" href="https://cellefrigo.net" target="_blank" rel="noreferrer">
                    Vedi la piattaforma
                  </a>
                  <a className="btn btnPrimary" href="/#contatti">
                    Contattaci
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ================= L'IDEA (NUOVA) ================= */}
          <section style={styles.lightSection}>
            <div className="container">
              <div style={styles.lightFrame}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 18, alignItems: "center" }}>
                  {/* Visual */}
                  <div style={styles.ideaIconWrap} aria-hidden="true">
                    {/* ✅ MODIFICA: immagine al posto della lampadina */}
                    <img
                      src={ideaImg}
                      alt=""
                      style={styles.ideaImage}
                      loading="eager"
                    />
                  </div>

                  {/* Copy */}
                  <div>
                    <div style={styles.kicker}>L’IDEA</div>

                    <h2 style={{ ...styles.h2, marginTop: 12 }}>
                      ColdSharing
                      <br />
                      <span style={styles.accent2}>Marketplace B2B</span> per la condivisione del tuo locale refrigerato
                    </h2>

                    <p style={styles.lead}>
                      Mettiamo in contatto chi ha <b>capacità frigorifera</b> con chi ne ha bisogno in pochi minuti:
                      <b> ricerca geolocalizzata</b>, <b>prenotazioni sicure</b> e <b>tracciabilità completa</b>.
                    </p>

                    <div style={styles.ideaPoints}>
                      <div style={styles.ideaPoint}>
                        <div style={styles.ideaDot}>📍</div>
                        <div>
                          <div style={styles.ideaT}>Ricerca geolocalizzata</div>
                          <div style={styles.ideaD}>
                            Trova celle frigo e magazzini refrigerati per zona, temperatura e capienza.
                          </div>
                        </div>
                      </div>

                      <div style={styles.ideaPoint}>
                        <div style={styles.ideaDot}>🔒</div>
                        <div>
                          <div style={styles.ideaT}>Prenotazioni sicure</div>
                          <div style={styles.ideaD}>
                            Gestione digitale di condizioni, disponibilità, accordi e pagamenti.
                          </div>
                        </div>
                      </div>

                      <div style={styles.ideaPoint}>
                        <div style={styles.ideaDot}>🧾</div>
                        <div>
                          <div style={styles.ideaT}>Tracciabilità completa</div>
                          <div style={styles.ideaD}>
                            Accessi, temperature, report e audit trail: meno rischi e più controllo.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={styles.ctaRow}>
                      <a className="btn btnPrimary" href="https://cellefrigo.net" target="_blank" rel="noreferrer">
                        Apri ColdSharing
                      </a>
                      <a className="btn btnPrimary" href="/#contatti">
                        Parliamone
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= A CHI È RIVOLTO (NUOVA) ================= */}
          <section style={styles.lightSection}>
            <div className="container">
              <div style={styles.lightFrame}>
                <div style={{ maxWidth: 980 }}>
                  <div style={styles.kicker}>TARGET</div>
                  <h2 style={{ ...styles.h2, marginTop: 12 }}>
                    A chi è rivolto <span style={styles.accent}>ColdSharing</span>
                  </h2>
                  <p style={styles.lead}>
                    ColdSharing è progettato per le <b>aziende del settore agroalimentare</b> che gestiscono stoccaggio,
                    conservazione e logistica a temperatura controllata. Due ruoli: <b>clienti</b> (cercano spazio refrigerato) e{" "}
                    <b>fornitori</b> (hanno capacità frigorifera disponibile).
                  </p>
                </div>

                <div style={styles.targetGrid}>
                  {/* CLIENTI */}
                  <div style={styles.targetCard}>
                    <div style={styles.targetHead}>
                      <div style={styles.targetIcon}>🔎</div>
                      <div>
                        <div style={styles.targetTitle}>Clienti</div>
                        <div style={styles.targetSub}>
                          Aziende che cercano <b>celle frigorifere</b>, <b>magazzini refrigerati</b> o{" "}
                          <b>deposito a temperatura controllata</b>
                        </div>
                      </div>
                    </div>

                    <ul style={styles.ul}>
                      <li><b>Aziende agricole</b> e produttori (ortofrutta, uva, agrumi, IV gamma)</li>
                      <li><b>Cooperative agricole</b> e <b>consorzi</b> di produttori</li>
                      <li><b>Industrie alimentari</b> e trasformazione (lattiero-caseario, carne, ittico, surgelati)</li>
                      <li><b>Grossisti agroalimentari</b>, piattaforme commerciali, cash &amp; carry</li>
                      <li>Operatori di <b>export agroalimentare</b> e gestione picchi stagionali</li>
                      <li><b>GDO</b> e centrali acquisto (necessità temporanee o emergenze di stoccaggio)</li>
                      <li><b>Trasportatori refrigerati</b> e logistica del freddo (cross-dock / appoggi refrigerati)</li>
                    </ul>

                    <div style={styles.targetNote}>
                      Keyword: celle frigorifere in affitto, deposito refrigerato, magazzino frigorifero, stoccaggio a freddo.
                    </div>
                  </div>

                  {/* FORNITORI */}
                  <div style={styles.targetCard}>
                    <div style={styles.targetHead}>
                      <div style={styles.targetIcon}>🏭</div>
                      <div>
                        <div style={styles.targetTitle}>Fornitori</div>
                        <div style={styles.targetSub}>
                          Aziende con <b>spazio refrigerato vuoto o semivuoto</b> che vogliono valorizzare la capacità
                        </div>
                      </div>
                    </div>

                    <ul style={styles.ul}>
                      <li>Gestori di <b>celle frigorifere</b> e <b>magazzini a temperatura controllata</b></li>
                      <li><b>Operatori logistici</b> (3PL) e piattaforme di logistica agroalimentare</li>
                      <li>Centri di <b>stoccaggio ortofrutta</b>, hub ittici, depositi surgelati</li>
                      <li><b>Trasportatori</b> con strutture di appoggio o transito refrigerato</li>
                      <li>Aziende con <b>capienza frigorifera inutilizzata</b> (stagionalità, volumi variabili)</li>
                      <li>Imprese che vogliono aumentare il <b>tasso di occupazione</b> e ridurre sprechi energetici</li>
                    </ul>

                    <div style={styles.targetNote}>
                      Keyword: capacità frigorifera disponibile, affitto cella frigo, magazzino refrigerato disponibile,
                      outsourcing freddo.
                    </div>
                  </div>
                </div>

                <div style={{ ...styles.ctaRow, marginTop: 18 }}>
                  <a className="btn btnPrimary" href="https://cellefrigo.net" target="_blank" rel="noreferrer">
                    Vai alla piattaforma
                  </a>
                  <a className="btn btnPrimary" href="/#contatti">
                    Valutiamo il tuo caso
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* COME FUNZIONA */}
          <section style={styles.lightSection}>
            <div className="container">
              <div style={styles.lightFrame}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                  <div style={styles.kicker}>COME FUNZIONA</div>
                  <h2 style={{ ...styles.h2, textAlign: "center", marginTop: 12 }}>
                    Tre passaggi, <span style={styles.accent}>zero caos</span>
                  </h2>
                  <p style={{ ...styles.lead, textAlign: "center", marginTop: 10 }}>
                    Un flusso semplice per trovare disponibilità reale, prenotare in sicurezza e monitorare la gestione.
                  </p>
                </div>

                <div style={styles.grid3}>
                  <HowCard step="1. Cerca" bar="dark">
                    Filtra per prodotto, temperatura e posizione. Vedi disponibilità reale.
                  </HowCard>

                  <HowCard step="2. Prenota" bar="warm">
                    Gestione digitale di prezzi, contratti e pagamenti (escrow) in sicurezza.
                  </HowCard>

                  <HowCard step="3. Refrigera" bar="light">
                    Deposito e monitoraggio: accessi, temperature, report e audit trail.
                  </HowCard>
                </div>
              </div>
            </div>
          </section>

          {/* 5 MOTIVI */}
          <section style={styles.lightSection}>
            <div className="container">
              <div style={styles.lightFrame}>
                <h2 style={styles.h2}>5 motivi per cui dovresti usarlo.</h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 18,
                    marginTop: 14,
                    alignItems: "start",
                  }}>
                  <div style={{ display: "grid", gap: 12 }}>
                    <Reason icon="🔎" title="Trovi il locale adatto a te">
                      Scegli celle frigorifere certificate vicino a te, filtrando per prodotto, temperatura e capienza.
                    </Reason>
                    <Reason icon="💸" title="Nessun investimento iniziale">
                      Usi solo lo spazio che ti serve e quando ti serve: paghi a consumo, senza costi fissi o investimenti.
                    </Reason>
                    <Reason icon="⚙️" title="Meno costi di gestione">
                      Ottimizza la tua capacità e riduci sprechi ed energia condividendo lo spazio.
                    </Reason>
                    <Reason icon="♻️" title="Economia circolare">
                      Massimizzi l’uso di infrastrutture esistenti riducendo l’impatto ambientale.
                    </Reason>
                    <Reason icon="🤝" title="Networking">
                      Connetti la tua azienda con produttori, trasportatori e operatori della filiera del freddo.
                    </Reason>
                  </div>

                  <div style={styles.previewBox}>
                    <div style={styles.previewTag}>🔎 COLDSHARING</div>
                    <div style={styles.previewImg} className="hideOnMobile">
                    <img
                        src={previewImg}
                        alt="Celle frigorifere disponibili su ColdSharing"
                        style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 14,
                        display: "block",
                        }}
                    />
                    </div>
                    <div style={styles.previewCtas}>
                      <a className="btn btnPrimary" href="https://cellefrigo.net" target="_blank" rel="noreferrer">
                        Vai alla piattaforma
                      </a>
                      <a className="btn btnPrimary" href="/#contatti">
                        Contattaci
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA FINALE */}
          <section style={{ ...styles.lightSection, paddingBottom: 60 }}>
            <div className="container">
              <div style={{ ...styles.lightFrame, textAlign: "center" }}>
                <h2 style={{ ...styles.h2, margin: "0 auto" }}>
                  Hai in mente una tua
                  <br />
                  <span style={styles.accent}>piattaforma digitale per la filiera agroalimentare?</span>
                </h2>

                <p style={{ ...styles.lead, margin: "10px auto 0", maxWidth: 820 }}>
                  Marvincla supporta aziende e startup nella progettazione e sviluppo di piattaforme digitali B2B, dalla visione alla messa online.
                </p>

                <div style={{ ...styles.ctaRow, justifyContent: "center" }}>
                  <a className="btn btnPrimary" href="/#contatti">
                    Contattaci
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

/* ===================== Light components ===================== */

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

function MiniKpi({ label, value, sub }) {
  return (
    <div style={styles.miniKpi}>
      <div style={styles.miniKpiLabel}>{label}</div>
      <div style={styles.miniKpiValue}>{value}</div>
      <div style={styles.miniKpiSub}>{sub}</div>
    </div>
  );
}

function HowCard({ step, bar, children }) {
  // Colori barra: il "light" prima risultava quasi invisibile
  const barColor =
    bar === "dark"
      ? "rgba(13, 59, 74, .95)"
      : bar === "warm"
      ? "rgba(139, 74, 61, .95)"
      : "rgba(15,17,20,.22)"; // FIX: ora si vede sempre

  // percentuali (solo estetica)
  const fill = bar === "dark" ? "86%" : bar === "warm" ? "78%" : "62%";

  return (
    <div style={styles.card}>
      <div style={{ ...styles.cardTitle, marginBottom: 10 }}>{step}</div>

      {/* Barra */}
      <div style={styles.progressBg} aria-hidden="true">
        <div
          style={{
            ...styles.progressFill,
            width: fill,
            background: barColor,
          }}
        />
      </div>

      <div style={{ ...styles.cardDesc, marginTop: 12 }}>{children}</div>
    </div>
  );
}

function Reason({ icon, title, children }) {
  return (
    <div style={styles.reason}>
      <div style={styles.reasonIcon}>{icon}</div>
      <div>
        <div style={styles.reasonTitle}>{title}</div>
        <div style={styles.reasonDesc}>{children}</div>
      </div>
    </div>
  );
}

/* ===================== Styles ===================== */

const styles = {
  colors: {
    text: "#0F1114",
    muted: "rgba(15,17,20,.68)",
    border: "rgba(15,17,20,.10)",
    cardBg: "#FFFFFF",
    shadow: "0 14px 40px rgba(0,0,0,.08)",
  },

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

  kicker: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(15,17,20,.04)",
    border: "1px solid rgba(15,17,20,.08)",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 0.4,
    color: "rgba(15,17,20,.70)",
  },

  h2: {
    marginTop: 14,
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

  bigBox: {
    background: "rgba(15,17,20,.02)",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 18,
    padding: 16,
  },

  miniKpi: {
    minWidth: 140,
    background: "#fff",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 14,
    padding: 12,
    boxShadow: "0 8px 24px rgba(0,0,0,.05)",
  },

  miniKpiLabel: {
    fontSize: 11,
    fontWeight: 900,
    color: "rgba(15,17,20,.62)",
    letterSpacing: 0.3,
  },

  miniKpiValue: {
    marginTop: 6,
    fontSize: 22,
    fontWeight: 1000,
    letterSpacing: "-0.4px",
  },

  miniKpiSub: {
    marginTop: 2,
    fontSize: 12,
    color: "rgba(15,17,20,.62)",
  },

  paradoxBox: {
    background: "#FFFFFF",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 18,
    padding: 16,
    boxShadow: "0 14px 40px rgba(0,0,0,.08)",
  },

  paradoxLabel: {
    fontSize: 12,
    fontWeight: 900,
    color: "rgba(15,17,20,.60)",
  },

  paradoxValue: {
    marginTop: 8,
    fontSize: 44,
    fontWeight: 1000,
    letterSpacing: "-1px",
    color: "#FF4D5A",
  },

  paradoxText: {
    marginTop: 8,
    fontSize: 13.5,
    lineHeight: 1.55,
    color: "rgba(15,17,20,.70)",
  },

  paradoxGrid: {
    marginTop: 12,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 10,
  },

  paradoxMini: {
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 14,
    padding: 10,
    background: "rgba(15,17,20,.02)",
  },

  paradoxMiniT: {
    fontSize: 12,
    fontWeight: 900,
    color: "#0F1114",
  },

  paradoxMiniD: {
    marginTop: 6,
    fontSize: 12.5,
    lineHeight: 1.5,
    color: "rgba(15,17,20,.68)",
  },

  progressBg: {
    width: "100%",
    height: 10,
    borderRadius: 999,
    background: "rgba(15,17,20,.08)",
    border: "1px solid rgba(15,17,20,.08)",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 999,
  },

  reason: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    background: "#fff",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 16,
    padding: 14,
    boxShadow: "0 10px 30px rgba(0,0,0,.06)",
  },

  reasonIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    background: "rgba(15,17,20,.05)",
    display: "grid",
    placeItems: "center",
    fontSize: 16,
    flex: "0 0 auto",
  },

  reasonTitle: {
    fontWeight: 900,
    fontSize: 14,
    color: "#0F1114",
  },

  reasonDesc: {
    marginTop: 4,
    fontSize: 13,
    color: "rgba(15,17,20,.68)",
    lineHeight: 1.5,
  },

  previewBox: {
    background: "#fff",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 18,
    padding: 16,
    boxShadow: "0 16px 48px rgba(0,0,0,.10)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "space-between",
  },

  previewTag: {
    display: "inline-block",
    width: "fit-content",
    padding: "6px 10px",
    borderRadius: 10,
    background: "rgba(15,17,20,.05)",
    fontWeight: 900,
    fontSize: 12,
    color: "rgba(15,17,20,.70)",
  },

  previewTitle: {
    fontWeight: 1000,
    fontSize: 18,
    letterSpacing: "-0.3px",
  },

  previewSub: {
    fontSize: 13,
    color: "rgba(15,17,20,.65)",
  },

  previewImg: {
    height: 300,
    borderRadius: 16,
    background: "linear-gradient(180deg, rgba(15,17,20,.06), rgba(15,17,20,.02))",
    border: "1px solid rgba(15,17,20,.08)",
  },

  previewCtas: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 6,
  },

  ctaRow: {
    marginTop: 16,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
  },

  accent2: { color: "#C25A3E" },

  ideaIconWrap: {
    borderRadius: 22,
    border: "1px solid rgba(15,17,20,.10)",
    background:
      "radial-gradient(1200px 700px at 20% 20%, rgba(13,59,74,.10), rgba(255,255,255,0) 55%), radial-gradient(900px 600px at 90% 30%, rgba(194,90,62,.14), rgba(255,255,255,0) 55%), rgba(15,17,20,.02)",
    boxShadow: "0 18px 60px rgba(0,0,0,.06)",
    padding: 22,
    minHeight: 260,
    display: "grid",
    placeItems: "center",
    overflow: "hidden", // ✅ per tagliare l'immagine ai bordi
  },

  // ✅ NUOVO: stile immagine per riempire il box
  ideaImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 18,
    display: "block",
  },

  ideaPoints: { marginTop: 14, display: "grid", gap: 10 },

  ideaPoint: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    padding: 12,
    borderRadius: 16,
    border: "1px solid rgba(15,17,20,.08)",
    background: "rgba(15,17,20,.02)",
  },

  ideaDot: {
    width: 34,
    height: 34,
    borderRadius: 12,
    background: "rgba(15,17,20,.05)",
    display: "grid",
    placeItems: "center",
    fontSize: 16,
    flex: "0 0 auto",
  },

  ideaT: { fontWeight: 1100, fontSize: 13.5, color: "#0F1114" },
  ideaD: { marginTop: 3, fontSize: 13, lineHeight: 1.45, color: "rgba(15,17,20,.68)" },

  targetGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 14,
  },

  targetCard: {
    background: "#FFFFFF",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 18,
    padding: 16,
    boxShadow: "0 12px 40px rgba(0,0,0,.06)",
  },

  targetHead: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    marginBottom: 12,
  },

  targetIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    background: "rgba(15,17,20,.05)",
    display: "grid",
    placeItems: "center",
    fontSize: 18,
    flex: "0 0 auto",
  },

  targetTitle: { fontWeight: 1100, fontSize: 16, letterSpacing: "-0.3px" },
  targetSub: { marginTop: 4, fontSize: 13, lineHeight: 1.45, color: "rgba(15,17,20,.68)" },

  ul: {
    margin: 0,
    paddingLeft: 18,
    display: "grid",
    gap: 8,
    color: "rgba(15,17,20,.72)",
    fontSize: 13.5,
    lineHeight: 1.5,
  },

  targetNote: {
    marginTop: 12,
    fontSize: 12,
    color: "rgba(15,17,20,.60)",
    background: "rgba(15,17,20,.03)",
    border: "1px solid rgba(15,17,20,.08)",
    padding: "10px 12px",
    borderRadius: 14,
    fontWeight: 900,
  },
};
