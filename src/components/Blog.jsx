import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import homeImg from "../assets/blog.png";
import logoM from "../assets/logoM2.png";
import coldsharinglogo from "../assets/coldsharinglogo.png";
import refromCover from "../assets/refrom.png"; // (creala o usa un placeholder)


// ✅ Data con URL esplicita: ogni card porta alla pagina corretta (NON a /blog/:slug)
const POSTS = [
  {
    url: "/blog/come-e-nata-marvincla",
    title: "Come è nata Marvincla: dall’esperienza sul campo a un metodo digitale",
    excerpt:
      "Dall’esperienza nella refrigerazione industriale alla consulenza di Supply Chain: da qui nasce il metodo Marvincla.",
    meta: "6 min • Visione & Metodo Marvincla",
    image: logoM,
  },
    {
    url: "/coldsharing/perche-e-nata",
    title: "Come nasce una piattaforma B2B per la refrigerazione agroalimentare",
    excerpt:
        "Dall’esperienza diretta nella refrigerazione industriale alla creazione di una piattaforma B2B per rendere accessibile la capacità frigorifera.",
    meta: "5 min • Piattaforma digitale B2B",
    image: coldsharinglogo,
  },
    {
  url: "/blog/come-si-realizzano-le-celle-frigorifere",
  title: "Come si realizzano le celle frigorifere: guida pratica (progettazione, pannelli, impianto, collaudo)",
  excerpt:
    "Dalla progettazione all’isolamento, dall’impianto frigorifero al collaudo: fasi, scelte tecniche e errori da evitare. Con CTA per richiedere un preventivo a Refrom Italia.",
  meta: "8 min • Refrigerazione industriale",
  image: refromCover,
  },

];


export default function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "Blog | Marvincla";
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
                    Marvincla • Blog
                  </p>

                  <h1 className="h1">
                    Articoli e approfondimenti
                    <br />
                    <span className="accent">per la filiera agroalimentare.</span>
                  </h1>

                  <p className="lead">
                    Contenuti brevi e operativi su digitalizzazione, siti web, e-commerce B2B, dati e processi.
                  </p>

                  <div className="heroCtas">
                    <a className="btn btnPrimary" href="/#contatti">
                      Proponi un tema
                    </a>
                    <a className="btn btnGhost" href="/digitalizzazione-agroalimentare">
                      Vedi le soluzioni
                    </a>
                  </div>

                  <p className="p" style={{ marginTop: 14, color: "rgba(255,255,255,.62)" }}>
                    Scorri: articoli e risorse.
                  </p>
                </div>

                <div className="heroRight">
                  <img className="heroImage" src={homeImg} alt="Blog Marvincla" loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LISTA ARTICOLI (CARD VERTICALI) ================= */}
        <div style={styles.lightWrap}>
          <section style={styles.lightSection}>
            <div className="container">
              <div style={styles.lightFrame}>
                <div style={{ maxWidth: 900 }}>
                  <h2 style={styles.h2}>
                    Articoli <span style={styles.accent}>operativi</span>
                  </h2>
                  <p style={styles.lead}>
                    Una selezione di contenuti pensati per aziende agroalimentari: visibilità, conversione, processi,
                    strumenti e casi reali.
                  </p>
                </div>

                <div style={styles.postsGrid}>
                  {POSTS.map((post) => (
                    <ArticleCard key={post.url} post={post} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA FINALE */}
          <section style={{ ...styles.lightSection, paddingBottom: 60 }}>
            <div className="container">
              <div style={{ ...styles.lightFrame, textAlign: "center" }}>
                <h2 style={{ ...styles.h2, margin: "0 auto" }}>
                  Vuoi che parliamo di te, di un progetto o di un argomento che merita di
                  <br />
                  <span style={styles.accent}>essere approfondito?</span>
                </h2>

                <p style={{ ...styles.lead, margin: "10px auto 0", maxWidth: 820 }}>
                  Scrivici e valutiamo se raccontarlo nel nostro blog.
                </p>

                <div style={{ ...styles.ctaRow, justifyContent: "center" }}>
                  <a className="btn btnPrimary" href="/#contatti">
                    Contattaci
                  </a>
                  <a className="btn btnPrimary" href="/digitalizzazione-agroalimentare">
                    Soluzioni digitali
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

function ArticleCard({ post }) {
  return (
    <Link to={post.url} style={styles.cardLink} aria-label={`Leggi: ${post.title}`}>
      <article style={styles.articleCard}>
        <div style={styles.articleMedia}>
          <img
            src={post.image}
            alt={post.title}
            style={styles.articleImg}
            loading="lazy"
          />

          {post.tag && (
            <div style={styles.mediaBadge}>{post.tag}</div>
          )}
        </div>

        <div style={styles.articleBody}>
          <div style={styles.articleTitle}>{post.title}</div>
          <div style={styles.articleExcerpt}>{post.excerpt}</div>
          <div style={styles.articleMeta}>{post.meta}</div>
        </div>
      </article>
    </Link>
  );
}

/* ===================== Styles ===================== */

const styles = {
  lightWrap: { background: "#FFFFFF", color: "#0F1114" },
  lightSection: { padding: "clamp(28px, 5vw, 56px) 0" },

  lightFrame: {
    background: "#FFFFFF",
    border: "1px solid rgba(15,17,20,.08)",
    borderRadius: 28,
    padding: "clamp(16px, 3.5vw, 32px) clamp(14px, 3vw, 28px)",
    boxShadow: "0 18px 60px rgba(0,0,0,.06)",
  },

  h2: {
    marginTop: 0,
    fontSize: "clamp(24px, 4.2vw, 34px)",
    lineHeight: 1.1,
    letterSpacing: "-0.6px",
    fontWeight: 900,
  },

  accent: { color: "#2F7D32" },

  lead: {
    marginTop: 10,
    fontSize: "clamp(14px, 2.3vw, 16px)",
    lineHeight: 1.65,
    color: "rgba(15,17,20,.68)",
  },

  // ✅ GRID: da 4 fisse → auto-fit
  postsGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
  },

  cardLink: { textDecoration: "none", color: "inherit" },

  // ✅ CARD: niente height fisso
  articleCard: {
    minHeight: 340,
    display: "flex",
    flexDirection: "column",
    borderRadius: 18,
    border: "1px solid rgba(15,17,20,.08)",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,.06)",
    overflow: "hidden",
    transition: "transform .15s ease, box-shadow .15s ease",
  },

  // ✅ IMG: altezza elastica
  articleMedia: {
    height: "clamp(140px, 26vw, 180px)",
    position: "relative",
    overflow: "hidden",
    borderBottom: "1px solid rgba(15,17,20,.08)",
  },

  articleImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  mediaBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,.85)",
    border: "1px solid rgba(15,17,20,.10)",
    fontWeight: 900,
    fontSize: 12,
    color: "rgba(15,17,20,.72)",
    backdropFilter: "blur(6px)",
  },

  articleBody: {
    padding: 14,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    flex: 1,
  },

  articleTitle: {
    fontWeight: 1000,
    fontSize: 15.5,
    letterSpacing: "-0.3px",
    lineHeight: 1.25,
    color: "#0F1114",
  },

  articleExcerpt: {
    fontSize: 13.5,
    lineHeight: 1.55,
    color: "rgba(15,17,20,.70)",
    flex: 1,
  },

  articleMeta: {
    fontSize: 12,
    color: "rgba(15,17,20,.55)",
    fontWeight: 800,
  },

  ctaRow: {
    marginTop: 18,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
};
