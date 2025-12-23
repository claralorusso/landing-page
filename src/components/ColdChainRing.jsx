import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * ColdChainRing
 * - 6 segments (ring)
 * - Hover: highlight + center text update (rotazione lasciata)
 * - Click: active + progress up to active
 * - Progress line (no arrow) that "draws" on reveal
 * - Auto-advance demo on first view: 0→1→2→3→4→5 slowly, stops on interaction
 *
 * NOTE: On-ring labels removed (icons only).
 * Center panel keeps title + description.
 */
export default function ColdChainRing({
  size = 520,
  items,
  onSelect,
  demo = true,
}) {
  const data = useMemo(() => {
    return (
      items || [
        {
          key: "produzione",
          title: "Produzione",
          desc: "Raccontiamo il tuo prodotto e lo rendiamo trovabile.",
          icon: IconFactory,
        },
        {
          key: "trasporto",
          title: "Trasporto",
          desc: "Processi più chiari, contatti più veloci, meno attriti.",
          icon: IconTruck,
        },
        {
          key: "stock",
          title: "Stock & Celle frigo",
          desc: "Ottimizziamo capacità e valorizziamo spazi.",
          icon: IconCold,
        },
        {
          key: "distribuzione",
          title: "Distribuzione",
          desc: "Dati e insight per scegliere mercati e timing giusti.",
          icon: IconBoxes,
        },
        {
          key: "puntivendita",
          title: "Punti vendita",
          desc: "Visibilità e campagne per generare richieste reali.",
          icon: IconStore,
        },
        {
          key: "mercato",
          title: "Mercato",
          desc: "Misuriamo, automatizziamo e miglioriamo per crescere.",
          icon: IconMarket,
        },
      ]
    );
  }, [items]);

  const hostRef = useRef(null);
  const demoTimerRef = useRef(null);

  const [active, setActive] = useState(2);
  const [hovered, setHovered] = useState(null);

  const [inView, setInView] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const currentIndex = hovered ?? active;
  const current = data[currentIndex];

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-advance demo: 0→1→2→3→4→5 slowly, then stop
  useEffect(() => {
    if (!demo) return;
    if (!inView) return;
    if (userInteracted) return;

    const sequence = [0, 1, 2, 3, 4, 5];
    let idx = 0;

    const tick = () => {
      if (userInteracted) return;
      setActive(sequence[idx]);
      idx += 1;
      if (idx >= sequence.length) return;
      demoTimerRef.current = window.setTimeout(tick, 1100);
    };

    demoTimerRef.current = window.setTimeout(tick, 600);

    return () => {
      if (demoTimerRef.current) window.clearTimeout(demoTimerRef.current);
    };
  }, [demo, inView, userInteracted]);

  function stopDemoForever() {
    if (!userInteracted) setUserInteracted(true);
    if (demoTimerRef.current) window.clearTimeout(demoTimerRef.current);
  }

  // Geometry
  const cx = size / 2;
  const cy = size / 2;

  const outerR = size * 0.42;
  const innerR = size * 0.28;

  const ringStroke = Math.max(6, Math.round(size * 0.014));
  const progressR = outerR + ringStroke * 0.9;

  const n = 6;
  const segDeg = 360 / n;
  const gapDeg = 4.5;
  const startOffsetDeg = -90;

  // progress line (follows active)
  const progressAngle = (active + 1) * segDeg;
  const progressStart = startOffsetDeg + gapDeg * 0.5;
  const progressEnd = startOffsetDeg + progressAngle - gapDeg * 0.5;
  const progressPath = describeArc(cx, cy, progressR, progressStart, progressEnd);

  // dash length approx
  const circ = 2 * Math.PI * progressR;
  const progLen = (circ * Math.max(0, progressEnd - progressStart)) / 360;

  return (
    <div
      ref={hostRef}
      className={`ccrWrap ${inView ? "reveal" : ""}`}
      style={{ width: size, maxWidth: "100%" }}
      onMouseDown={stopDemoForever}
      onTouchStart={stopDemoForever}
    >
      <svg
        className="ccrSvg"
        width="100%"
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label="Catena del freddo: seleziona un anello per scoprire come Marvincla ti supporta"
      >
        <defs>
          <filter id="ccrGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.75 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="ccrCitrus" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--lime)" />
            <stop offset="45%" stopColor="var(--lemon)" />
            <stop offset="75%" stopColor="var(--orange)" />
            <stop offset="100%" stopColor="var(--grapefruit)" />
          </linearGradient>
        </defs>

        {/* Outer faint ring (IMPORTANT: pointerEvents none to avoid flicker) */}
        <circle
          cx={cx}
          cy={cy}
          r={progressR}
          fill="none"
          stroke="rgba(255,255,255,.10)"
          strokeWidth={ringStroke}
          pointerEvents="none"
        />

        {/* Progress line (NO ARROW) */}
        <path
          className="ccrProgress"
          d={progressPath}
          fill="none"
          stroke="url(#ccrCitrus)"
          strokeWidth={ringStroke + 2}
          strokeLinecap="round"
          filter="url(#ccrGlow)"
          opacity="0.98"
          pointerEvents="none"
          style={{
            strokeDasharray: `${progLen} ${circ}`,
            strokeDashoffset: inView ? 0 : progLen,
          }}
        />

        {/* Segments */}
        {Array.from({ length: n }).map((_, i) => {
          const a0 = startOffsetDeg + i * segDeg + gapDeg / 2;
          const a1 = startOffsetDeg + (i + 1) * segDeg - gapDeg / 2;

          const isHover = hovered === i;
          const isActive = active === i;
          const isDone = i <= active;

          const path = donutSegmentPath(cx, cy, innerR, outerR, a0, a1);

          const baseFill = "rgba(255,255,255,.06)";
          const doneFill = "rgba(255,255,255,.10)";
          const fill = isDone ? doneFill : baseFill;

          // Keep rotation as requested
          const rotateDeg = isHover ? 8 : 0;
          const transform = rotateDeg ? `rotate(${rotateDeg} ${cx} ${cy})` : undefined;

          // icon placement: center of the segment
          const midA = (a0 + a1) / 2;
          const midR = (innerR + outerR) / 2;
          const mid = polarToCartesian(cx, cy, midR, midA);

          const Icon = data[i]?.icon;

          return (
            <g
              key={data[i]?.key || i}
              className={`ccrSeg ${isActive ? "active" : ""} ${isDone ? "done" : ""} ${
                isHover ? "hover" : ""
              }`}
              transform={transform}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
              onMouseEnter={() => {
                stopDemoForever();
                setHovered(i);
              }}
              onMouseLeave={() => setHovered(null)}
              onClick={() => {
                stopDemoForever();
                setActive(i);
                onSelect?.(i);
              }}
              role="button"
              tabIndex={0}
              onFocus={stopDemoForever}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  stopDemoForever();
                  setActive(i);
                  onSelect?.(i);
                }
              }}
              aria-label={`${data[i].title}. ${data[i].desc}`}
            >
              <path
                d={path}
                fill={fill}
                stroke={
                  isActive || isHover ? "rgba(255,255,255,.22)" : "rgba(255,255,255,.10)"
                }
                strokeWidth={1.2}
                filter={isActive || isHover ? "url(#ccrGlow)" : undefined}
              />

              {/* icon ONLY (no label on ring) */}
              <g transform={`translate(${mid.x - 14}, ${mid.y - 14})`} pointerEvents="none">
                <Icon
                  size={28}
                  color={
                    isActive || isHover
                      ? "var(--lemon)"
                      : isDone
                      ? "rgba(255,255,255,.86)"
                      : "rgba(255,255,255,.62)"
                  }
                />
              </g>
            </g>
          );
        })}

        {/* Center panel */}
        <g pointerEvents="none">
          <circle
            cx={cx}
            cy={cy}
            r={innerR - size * 0.035}
            fill="rgba(11,11,12,.70)"
            stroke="rgba(255,255,255,.10)"
            strokeWidth="1"
          />

          <text
            x={cx}
            y={cy - 26}
            textAnchor="middle"
            fontSize={Math.max(14, Math.round(size * 0.05))}
            fontWeight="950"
            fill="rgba(255,255,255,.92)"
            style={{ letterSpacing: "-0.8px" }}
          >
            {current.title}
          </text>

          {wrapText(current.desc, 40).map((line, idx) => (
            <text
              key={idx}
              x={cx}
              y={cy + 6 + idx * 18}
              textAnchor="middle"
              fontSize={Math.max(11, Math.round(size * 0.026))}
              fill="rgba(255,255,255,.72)"
              style={{ letterSpacing: "-0.2px" }}
            >
              {line}
            </text>
          ))}

          <text
            x={cx}
            y={cy + 62}
            textAnchor="middle"
            fontSize={Math.max(10, Math.round(size * 0.022))}
            fill="rgba(255,255,255,.55)"
          >
            Passa il mouse • Clicca per avanzare
          </text>
        </g>
      </svg>
    </div>
  );
}

/* Helpers */

function wrapText(text, maxLen) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > maxLen) {
      lines.push(line.trim());
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line.trim()) lines.push(line.trim());
  return lines.slice(0, 2);
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return ["M", start.x, start.y, "A", r, r, 0, largeArcFlag, 0, end.x, end.y].join(
    " "
  );
}

function donutSegmentPath(cx, cy, rInner, rOuter, startAngle, endAngle) {
  const p1 = polarToCartesian(cx, cy, rOuter, endAngle);
  const p2 = polarToCartesian(cx, cy, rOuter, startAngle);
  const p3 = polarToCartesian(cx, cy, rInner, startAngle);
  const p4 = polarToCartesian(cx, cy, rInner, endAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    p1.x,
    p1.y,
    "A",
    rOuter,
    rOuter,
    0,
    largeArcFlag,
    0,
    p2.x,
    p2.y,
    "L",
    p3.x,
    p3.y,
    "A",
    rInner,
    rInner,
    0,
    largeArcFlag,
    1,
    p4.x,
    p4.y,
    "Z",
  ].join(" ");
}

/* Icons (inline SVG) */

function IconFactory({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 21V10l6 3V10l6 3V8l6 3v10H3Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 21v-4m4 4v-6m4 6v-3"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTruck({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 7h11v10H3V7Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 10h4l3 3v4h-7v-7Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 19a1.5 1.5 0 1 0 0.01 0M18 19a1.5 1.5 0 1 0 0.01 0"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCold({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M6 8l6-3 6 3-6 3-6-3Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 8v8l6 3 6-3V8"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 11v10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M12 2v6M9.5 4.5l5 3M14.5 4.5l-5 3"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBoxes({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 8l9-4 9 4-9 4-9-4Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M3 8v8l9 4 9-4V8"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 12v8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconStore({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 9l2-5h12l2 5H4Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5 9v11h14V9"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 20v-6h6v6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMarket({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M20 7l-8-4-8 4 8 4 8-4Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 7v10l8 4 8-4V7"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 11v10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.5 14.2h7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
