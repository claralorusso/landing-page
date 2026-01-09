import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ stessa lista: in futuro la sposti su un file shared (es. /data/blog.js)
const POSTS = [
  {
    slug: "come-farsi-trovare-agroalimentare-google",
    tag: "SEO",
    title: "Come farsi trovare dalle aziende agroalimentari su Google",
    meta: "5 min • Strategia",
    content: `
Qui va il contenuto dell’articolo.

Puoi scrivere in paragrafi, liste, ecc.
`,
  },
  {
    slug: "b2b-food-quando-conviene-ecommerce",
    tag: "E-commerce B2B",
    title: "B2B nel food: quando conviene un e-commerce e quando no",
    meta: "6 min • Vendita",
    content: `Contenuto articolo...`,
  },
  {
    slug: "digitalizzare-senza-caos-roadmap",
    tag: "Processi",
    title: "Digitalizzare senza caos: roadmap in 3 fasi",
    meta: "4 min • Metodo",
    content: `Contenuto articolo...`,
  },
  {
    slug: "ai-applicata-alimentare-uso-pratico",
    tag: "AI applicata",
    title: "AI applicata nel food: 7 usi pratici (senza buzzword)",
    meta: "7 min • Operativo",
    content: `Contenuto articolo...`,
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const idx = POSTS.findIndex((p) => p.slug === slug);
  const post = POSTS[idx] || null;

  const nextPost = idx >= 0 ? POSTS[(idx + 1) % POSTS.length] : POSTS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = post ? `${post.title} | Marvincla` : "Articolo | Marvincla";
  }, [post]);

  if (!post) {
    return (
      <div className="page">
        <Navbar />
        <main style={{ background: "#fff" }}>
          <section style={{ padding: "72px 0" }}>
            <div className="container">
              <div style={styles.frame}>
                <h1 style={styles.h1}>Articolo non trovato</h1>
                <p style={styles.p}>Torna al blog e scegli un articolo disponibile.</p>
                <Link className="btn btnPrimary" to="/blog">
                  Torna al Blog
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Navbar />

      <main style={{ background: "#fff" }}>
        <section style={{ padding: "56px 0" }}>
          <div className="container">
            <div style={styles.frame}>
              <Link to="/blog" style={styles.back}>
                ← Torna al blog
              </Link>

              <div style={styles.tag}>{post.tag}</div>
              <h1 style={styles.h1}>{post.title}</h1>
              <div style={styles.meta}>{post.meta}</div>

              <div style={styles.content}>
                {post.content
                  .trim()
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i} style={styles.p}>
                      {para}
                    </p>
                  ))}
              </div>

              {/* ✅ CTA: prossimo articolo + Contattaci */}
              <div style={styles.nextCta}>
                <div>
                  <div style={styles.kicker}>PROSSIMO ARTICOLO</div>
                  <div style={styles.nextTitle}>{nextPost.title}</div>
                </div>

                <div style={styles.nextBtns}>
                  <Link className="btn btnGhost" to={`/blog/${nextPost.slug}`}>
                    Leggi il prossimo
                  </Link>
                  <a className="btn btnPrimary" href="/#contatti">
                    Contattaci
                  </a>
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
    width: "fit-content",
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
  content: {
    marginTop: 18,
    maxWidth: 860,
  },
  p: {
    marginTop: 0,
    marginBottom: 12,
    fontSize: 16,
    lineHeight: 1.75,
    color: "rgba(15,17,20,.74)",
  },

  nextCta: {
    marginTop: 22,
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
