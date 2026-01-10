import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogMarvinclaOrigine() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "Come è nata Marvincla | Blog Marvincla";
  }, []);

  return (
    <div className="page">
      <Navbar />

      <main style={{ background: "#FFFFFF" }}>
        <section style={{ padding: "56px 0" }}>
          <div className="container">
            <div style={styles.frame}>
              {/* Back */}
              <Link to="/blog" style={styles.back}>
                ← Torna al blog
              </Link>

              {/* Tag */}
              <div style={styles.tag}>MARVINCLA</div>

              {/* Title */}
              <h1 style={styles.h1}>
                Come è nata Marvincla: dall’esperienza sul campo a un metodo digitale
              </h1>

              {/* Meta */}
              <div style={styles.meta}>6 min • Visione & Metodo</div>

              {/* Subhead (editoriale premium) */}
              <p style={styles.subhead}>
                Un percorso reale: refrigerazione industriale → supply chain → metodo per costruire piattaforme B2B utili.
              </p>

              {/* Divider */}
              <div style={styles.divider} aria-hidden="true" />

              {/* Content */}
              <div style={styles.content}>
                <p>
                  Marvincla nasce dall’idea di <b>Vincenzo Traversa (CEO)</b> e da un percorso professionale
                  maturato direttamente sul campo, nel settore della <b>refrigerazione industriale</b> e
                  della <b>supply chain</b>.
                </p>

                <p>
                  Non nasce da un’idea astratta o da una moda tecnologica, ma da problemi reali osservati
                  lavorando a contatto con aziende, operatori logistici e processi complessi.
                </p>

                <h2 style={styles.h2inPost}>L’esperienza nella refrigerazione industriale</h2>

                <p>
                  Operando nel settore della refrigerazione industriale emerge subito un paradosso evidente.
                </p>

                <p>
                  Il freddo è una risorsa strategica, critica per qualità, sicurezza e continuità operativa.
                  Eppure spesso viene gestito con processi manuali, informazioni frammentate e decisioni
                  prese senza dati strutturati.
                </p>

                <p>
                  Non mancava la capacità. Mancava <b>visibilità, coordinamento e metodo</b>.
                </p>

                <h2 style={styles.h2inPost}>Dalla tecnica alla consulenza di Supply Chain</h2>

                <p>
                  Dopo questa esperienza diretta, il percorso si è spostato verso la
                  <b> consulenza di Supply Chain</b>, lavorando su flussi logistici, processi operativi,
                  integrazione tra attori della filiera e utilizzo dei dati per supportare le decisioni.
                </p>

                <p>
                  È qui che diventa chiaro un punto fondamentale: molte aziende hanno già le risorse
                  necessarie, ma non hanno strumenti per orchestrare i processi in modo efficace.
                </p>

                <p>
                  Il problema non è fare più tecnologia. Il problema è <b>usare quella giusta, nel modo giusto</b>.
                </p>

                {/* Quote box (punto chiave) */}
                <div style={styles.quoteBox}>
                  Prima il processo. <b>Poi</b> la piattaforma.
                </div>

                <h2 style={styles.h2inPost}>Il digitale come infrastruttura, non come vetrina</h2>

                <p>
                  Da questa esperienza nasce l’approccio che oggi è alla base di Marvincla.
                </p>

                <p>
                  Il digitale non come sito vetrina o insieme di funzionalità scollegate, ma come
                  <b> infrastruttura operativa</b>, capace di rendere i processi leggibili, ridurre attriti
                  e creare basi solide per decisioni misurabili.
                </p>

                <p>
                  Prima il processo. Poi la piattaforma.
                </p>

                <h2 style={styles.h2inPost}>ColdSharing: il primo caso concreto</h2>

                <p>
                  Il progetto <b>ColdSharing</b> nasce esattamente da questo percorso.
                </p>

                <p>
                  Nel settore agroalimentare il problema non era la mancanza di freddo, ma la difficoltà
                  di accesso alla capacità disponibile: invisibile, frammentata, cercata tramite
                  telefonate e contatti informali.
                </p>

                <p>
                  ColdSharing nasce come risposta operativa a un problema reale:
                  <b> mettere in connessione domanda e offerta di capacità refrigerata</b> in modo semplice,
                  trasparente e misurabile.
                </p>

                <p>
                  Marvincla ha seguito l’intero percorso: analisi del problema, definizione del modello
                  operativo, progettazione della piattaforma, sviluppo e messa online.
                </p>

                <p>
                  Non come semplice fornitore tecnico, ma come <b>partner di progetto</b>.
                </p>

                <h2 style={styles.h2inPost}>Cos’è oggi Marvincla</h2>

                <p>
                  Marvincla nasce quindi dall’esperienza di Vincenzo Traversa e cresce come
                  <b> studio di progettazione di piattaforme digitali B2B</b>, con un focus chiaro su
                  filiera agroalimentare, supply chain e processi complessi.
                </p>

                <p>
                  Non vendiamo software a catalogo. Costruiamo{" "}
                  <b>soluzioni digitali che devono funzionare nel mondo reale</b>.
                </p>

                <h2 style={styles.h2inPost}>Il metodo Marvincla</h2>

                <ol style={styles.ol}>
                  <li>Capire il problema reale</li>
                  <li>Analizzare i processi operativi</li>
                  <li>Progettare solo ciò che serve davvero</li>
                  <li>Misurare risultati e migliorare nel tempo</li>
                </ol>

                <p>
                  Questo metodo nasce dall’esperienza, non dalla teoria.
                </p>

                <h2 style={styles.h2inPost}>Perché raccontiamo questa storia</h2>

                <p>
                  Marvincla non è nata per fare siti o app. È nata per{" "}
                  <b>trasformare esperienza operativa in piattaforme digitali utili</b>.
                </p>

                <p>
                  Se stai affrontando problemi di coordinamento, visibilità o gestione nella tua filiera,
                  probabilmente sei nello stesso punto da cui siamo partiti noi.
                </p>

                {/* Bridge verso CTA */}
                <div style={styles.bridge}>
                  Se ti interessa il metodo, nel prossimo articolo entriamo nel merito degli errori più comuni quando si
                  costruisce una piattaforma digitale B2B.
                </div>
              </div>

              {/* CTA */}
              <div style={styles.nextCta}>
                <div>
                  <div style={styles.kicker}>PROSSIMO ARTICOLO</div>
                  <div style={styles.nextTitle}>
                    Come nasce la piattaforma ColdSharing per la refrigerazione industriale
                  </div>
                </div>

                <div style={styles.nextBtns}>
                  <a className="btn btnPrimary" href="/coldsharing/perche-e-nata">
                    Vai all'articolo
                  </a>
                  <a className="btn btnPrimary" href="/contatti">
                    Contattaci
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ===================== Styles ===================== */

const styles = {
  frame: {
    background: "#FFFFFF",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 28,
    padding: "32px 28px",
    boxShadow: "0 18px 60px rgba(0,0,0,.06)",
  },

  back: {
    display: "inline-block",
    marginBottom: 12,
    color: "rgba(15,17,20,.70)",
    fontWeight: 900,
    textDecoration: "none",
  },

  tag: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(15,17,20,.05)",
    border: "1px solid rgba(15,17,20,.08)",
    fontWeight: 900,
    fontSize: 12,
    color: "rgba(15,17,20,.70)",
    marginBottom: 12,
  },

  h1: {
    fontSize: 36,
    lineHeight: 1.1,
    letterSpacing: "-0.7px",
    fontWeight: 1000,
    margin: 0,
  },

  meta: {
    marginTop: 10,
    fontSize: 13,
    color: "rgba(15,17,20,.55)",
    fontWeight: 900,
  },

  // ✅ editoriale: frase introduttiva
  subhead: {
    marginTop: 10,
    fontSize: 15.5,
    lineHeight: 1.6,
    color: "rgba(15,17,20,.66)",
    maxWidth: 860,
  },

  divider: {
    marginTop: 16,
    height: 1,
    width: "100%",
    background: "rgba(15,17,20,.08)",
  },

  // ✅ tipografia più “premium”
  content: {
    marginTop: 22,
    maxWidth: 860,
    fontSize: 16.5,
    lineHeight: 1.85,
    color: "rgba(15,17,20,.76)",
  },

  // ✅ H2 più forti e leggibili
  h2inPost: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 20,
    letterSpacing: "-0.3px",
    fontWeight: 1000,
    color: "#0F1114",
  },

  ol: {
    marginTop: 10,
    paddingLeft: 18,
    display: "grid",
    gap: 8,
  },

  // ✅ pausa visiva (punto chiave)
  quoteBox: {
    marginTop: 16,
    padding: "14px 16px",
    borderRadius: 16,
    border: "1px solid rgba(15,17,20,.08)",
    background: "rgba(15,17,20,.02)",
    fontWeight: 900,
    color: "rgba(15,17,20,.82)",
  },

  // ✅ ponte verso la CTA (chiude l’articolo con intenzione)
  bridge: {
    marginTop: 18,
    padding: "12px 14px",
    borderRadius: 14,
    border: "1px solid rgba(15,17,20,.08)",
    background: "rgba(47,125,50,.06)",
    color: "rgba(15,17,20,.76)",
    fontWeight: 800,
  },

  nextCta: {
    marginTop: 32,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 18,
    border: "1px solid rgba(15,17,20,.08)",
    background: "rgba(15,17,20,.02)",
    flexWrap: "wrap",
  },

  kicker: {
    fontSize: 12,
    fontWeight: 1000,
    letterSpacing: 0.4,
    color: "rgba(15,17,20,.60)",
  },

  nextTitle: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: 1000,
    letterSpacing: "-0.3px",
    color: "#0F1114",
  },

  nextBtns: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
  },
};
