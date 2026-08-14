import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { SiHtml5,SiCss3,SiJavascript,SiTypescript,SiReact,SiNodedotjs,SiExpress,SiMongodb,SiGithub,SiFigma } from "react-icons/si";



const DEFAULTS = {
  padding: "50px",
  columns: 7,
  rows: 4,
  gap: 0,
  rounded: 8,
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


export default function InteractiveGrid(props: Partial<InteractiveGridProps>) {
  const {
    padding = DEFAULTS.padding,
    columns = DEFAULTS.columns,
    rows = DEFAULTS.rows,
    gap = DEFAULTS.gap,
    rounded = DEFAULTS.rounded,
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