import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { SiHtml5,SiCss3,SiJavascript,SiTypescript,SiReact,SiNodedotjs,SiExpress,SiMongodb,SiGithub,SiFigma } from "react-icons/si";


const DEFAULT_LOGO = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='70.02'%20height='32'%20viewBox='0%200%20256%20117'%3e%3cpath%20fill='%23FBAD41'%20d='M205.52%2050.813c-.858%200-1.705.03-2.551.058c-.137.007-.272.04-.398.094a1.424%201.424%200%200%200-.92.994l-3.628%2012.672c-1.565%205.449-.983%2010.48%201.646%2014.174c2.41%203.416%206.42%205.421%2011.289%205.655l19.679%201.194c.585.03%201.092.312%201.4.776a1.92%201.92%200%200%201%20.2%201.692a2.496%202.496%200%200%201-2.134%201.662l-20.448%201.193c-11.11.515-23.062%209.58-27.255%2020.633l-1.474%203.9a1.092%201.092%200%200%200%20.967%201.49h70.425a1.872%201.872%200%200%200%201.81-1.365A51.172%2051.172%200%200%200%20256%20101.828c0-28.16-22.582-50.984-50.449-50.984'/%3e%3cpath%20fill='%23F6821F'%20d='m174.782%20115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.822%201.822%200%200%201-1.459-.776a1.919%201.919%200%200%201-.203-1.693a2.496%202.496%200%200%201%202.154-1.662l93.173-1.193c11.063-.511%2023.015-9.58%2027.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126%2020.51%20166.91%200%20137.96%200C111.269%200%2088.626%2017.403%2080.5%2041.596a26.996%2026.996%200%200%200-19.156-5.359C48.549%2037.524%2038.25%2047.946%2036.979%2060.88a27.905%2027.905%200%200%200%20.702%209.642C16.773%2071.145%200%2088.454%200%20109.726c0%201.923.137%203.818.413%205.667c.115.897.879%201.57%201.783%201.568h170.48a2.223%202.223%200%200%200%202.106-1.63'/%3e%3c/svg%3e`;

const DEFAULTS = {
  padding: "50px",
  columns: 7,
  rows: 4,
  gap: 0,
  rounded: 8,
  logoScale: 3,
  cardFill: "#000000",
  cardBorder: "#292929",
  shadow: false,
  cardShadow: "rgba(217, 251, 232, 0.5)",
  glow: false,
  glowStart: "rgba(56, 239, 125, 0.5)",
  glowEnd: "#38EF7D",
  glowIntensity: 50,
  perspective: 1600,
  rotateX: 0,
  rotateY: 0,
};

const DEFAULT_IMAGES = [
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/96893eb2-f5ca-4aa1-e59e-474847bb4e00/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/2bda84c8-1c36-4cac-cf2f-a12218d3ff00/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/242516d3-ee0f-414a-8482-3bd38a4b6100/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/80b1db5f-878b-4752-f8e0-159d308fb800/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/b17683f8-25ff-4259-614c-343bb8793a00/w=800" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/64475cf9-5072-4a75-c391-3e0627794c00/w=800" },
];

const toolsList = [
        { name: 'React',        logo: <SiReact className="logo" color="#61DAFB" size={55} style={{  margin: "0 auto"}}/> },
        { name: 'HTML5',        logo: <SiHtml5 className="logo" color="#E34F26" size={55} style={{  margin: "0 auto"}}/> },
        { name: 'CSS3',         logo: <SiCss3 className="logo" color="#1572B6" size={55} style={{  margin: "0 auto"}}/> },
        { name: 'JavaScript',   logo: <SiJavascript className="logo" color="#F7DF1E" size={55} style={{  margin: "0 auto"}}/> },
        { name: 'Figma',        logo: <SiFigma className="logo" color="#F24E1E" size={55} style={{  margin: "0 auto"}}/> },
        { name: 'Tools',        logo: <span style={{  margin: "0 auto", fontFamily: "Arial, sans-serif",fontSize: "2.2em" }}> Tools </span> },
        { name: 'Node.js',      logo: <SiNodedotjs className="logo" color="#339933" size={55} style={{  margin: "0 auto"}}/> },
        { name: 'Express.js',   logo: <SiExpress className="logo" color="#000000" size={55} style={{  margin: "0 auto"}}/> },
        { name: 'MongoDB',      logo: <SiMongodb className="logo" color="#47A248" size={55} style={{  margin: "0 auto"}}/> },
        { name: 'TypeScript',   logo: <SiTypescript className="logo" color="#3178C6" size={55} style={{  margin: "0 auto"}}/> },
        { name: 'Git & GitHub', logo: <SiGithub className="logo" color="#F05032" size={55} style={{  margin: "0 auto"}}/> },
    ];

const MAX_GLOW_BLUR = 16;
const DURATION = 200;
const LEAVE_DELAY = 200;

const NS = "framer-animate-grid";

const CSS = `
.${NS}-card {
  transition: all ${DURATION}ms;
}
.${NS}-shadow {
  box-shadow:
    2px 2px 5px var(--ag-shadow),
    3px 3px 10px var(--ag-shadow),
    6px 6px 20px var(--ag-shadow);
}
.${NS}-card img {
  opacity: 0.7;
  transition: all ${DURATION}ms;
  shape-rendering: geometricPrecision;
}
.${NS}-card:hover img { opacity: 1; }

.${NS}-small {
  transform: scale(1.05) translate(-5px) translateY(-5px) translateZ(0);
}
.${NS}-big {
  transform: scale(1.15) translate(-20px) translateY(-20px) translateZ(15px);
}

.${NS}-glow-big {
  animation: ${NS}-glow 1.5s ease-in-out infinite alternate;
}
.${NS}-glow-small {
  animation: ${NS}-glow-small 1.5s ease-in-out infinite alternate;
}
@keyframes ${NS}-glow {
  0%  { filter: drop-shadow(0 0 2px var(--ag-glow-start)); }
  to  { filter: drop-shadow(0 1px var(--ag-glow-blur) var(--ag-glow-end)); }
}
@keyframes ${NS}-glow-small {
  0%  { filter: drop-shadow(0 0 2px var(--ag-glow-start)); }
  to  { filter: drop-shadow(0 1px var(--ag-glow-blur-small) var(--ag-glow-start)); }
}
`;

interface ImageItem {
  src: string;
}

interface InteractiveGridProps {
  images: (ImageItem | string)[];
  padding: string;
  columns: number;
  rows: number;
  gap: number;
  rounded: number;
  logoScale: number;
  cardFill: string;
  cardBorder: string;
  shadow: boolean;
  cardShadow: string;
  glow: boolean;
  glowStart: string;
  glowEnd: string;
  glowIntensity: number;
  perspective: number;
  rotateX: number;
  rotateY: number;
  style?: CSSProperties;
}

const srcOf = (image: ImageItem | string): string =>
  typeof image === "string" ? image : (image?.src ?? "");

export default function InteractiveGrid(props: Partial<InteractiveGridProps>) {
  const {
    images = DEFAULT_IMAGES,
    padding = DEFAULTS.padding,
    columns = DEFAULTS.columns,
    rows = DEFAULTS.rows,
    gap = DEFAULTS.gap,
    rounded = DEFAULTS.rounded,
    logoScale = DEFAULTS.logoScale,
    cardFill = DEFAULTS.cardFill,
    cardBorder = DEFAULTS.cardBorder,
    shadow = DEFAULTS.shadow,
    cardShadow = DEFAULTS.cardShadow,
    glow = DEFAULTS.glow,
    glowStart = DEFAULTS.glowStart,
    glowEnd = DEFAULTS.glowEnd,
    glowIntensity = DEFAULTS.glowIntensity,
    perspective = DEFAULTS.perspective,
    rotateX = DEFAULTS.rotateX,
    rotateY = DEFAULTS.rotateY,
    style,
  } = props;

  const urls = useMemo(() => {
    const list = (images ?? []).map(srcOf).filter(Boolean);
    return list.length ? list : [DEFAULT_LOGO];
  }, [images]);

  const cols = Math.max(1, Math.round(columns));
  const rowCount = Math.max(1, Math.round(rows));
  const count = cols * rowCount;

  const [hovered, setHovered] = useState<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  const neighbours = useMemo(() => {
    if (hovered === null) return [];
    const out: number[] = [];
    if (hovered % cols !== 0) out.push(hovered - 1);
    if (hovered % cols !== cols - 1) out.push(hovered + 1);
    out.push(hovered - cols);
    out.push(hovered + cols);
    return out.filter((n) => n >= 0 && n < count);
  }, [hovered, cols, count]);

  const onEnter = (i: number) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setHovered(i);
  };
  const onLeave = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setHovered(null), LEAVE_DELAY);
  };

  const glowBlur =
    (Math.min(100, Math.max(0, glowIntensity)) / 100) * MAX_GLOW_BLUR;


  return (
    <div
      style={
        {
          ...style,
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding,
          boxSizing: "border-box",
          "--ag-shadow": cardShadow,
          "--ag-glow-start": glowStart,
          "--ag-glow-end": glowEnd,
          "--ag-glow-blur": `${glowBlur.toFixed(1)}px`,
          "--ag-glow-blur-small": `${(glowBlur / 2).toFixed(1)}px`,
        } as CSSProperties
      }
    >
      <style>{CSS}</style>
      <div
        onPointerLeave={onLeave}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))`,
          gap,
          width: "100%",
          height: "100%",
          transform: `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {Array.from({ length: count }).map((_, i) => {
          const isBig = hovered === i;
          const isSmall = !isBig && neighbours.includes(i);
          return (
            <div
              key={i}
              onPointerEnter={() => onEnter(i)}
              className={[
                `${NS}-card`,
                shadow && `${NS}-shadow`,
                isBig && `${NS}-big`,
                isSmall && `${NS}-small`,
                glow && isBig && `${NS}-glow-big`,
                glow && isSmall && `${NS}-glow-small`,
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 12px", background: cardFill, border: `1px solid ${cardBorder}`, borderRadius: rounded, boxSizing: "border-box", minWidth: 0, minHeight: 0, overflow: "visible", zIndex: isBig ? count + 1 : i + 1,
              }}
            >
               {toolsList[i % toolsList.length].logo}
            </div>
          );
        })}
      </div>
    </div>
  );
}