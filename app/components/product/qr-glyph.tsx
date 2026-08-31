import { cn } from "@/app/lib/cn";

/**
 * A decorative QR-style glyph. Not a scannable code — it renders finder
 * patterns and a deterministic module field so product mocks read as "a pass
 * with a QR" without implying a real, working code.
 */
interface QrGlyphProps {
  seed?: number;
  className?: string;
  title?: string;
}

const SIZE = 21; // QR version 1 grid

function isFinderRegion(row: number, col: number): boolean {
  const inBox = (r0: number, c0: number) =>
    row >= r0 && row < r0 + 7 && col >= c0 && col < c0 + 7;
  return inBox(0, 0) || inBox(0, SIZE - 7) || inBox(SIZE - 7, 0);
}

function finderFilled(row: number, col: number): boolean {
  // Which corner
  const r = row < 7 ? row : row - (SIZE - 7);
  const c = col < 7 ? col : col - (SIZE - 7);
  const ring = r === 0 || r === 6 || c === 0 || c === 6;
  const core = r >= 2 && r <= 4 && c >= 2 && c <= 4;
  return ring || core;
}

export function QrGlyph({ seed = 7, className, title = "Visitor pass QR code" }: QrGlyphProps) {
  // Small deterministic PRNG so the field is stable between renders.
  let state = seed * 9301 + 49297;
  const next = () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };

  const cells: { x: number; y: number }[] = [];
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const finder = isFinderRegion(row, col);
      const filled = finder ? finderFilled(row, col) : next() > 0.55;
      if (filled) cells.push({ x: col, y: row });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={cn("h-full w-full", className)}
      role="img"
      aria-label={title}
      shapeRendering="crispEdges"
    >
      <rect width={SIZE} height={SIZE} fill="transparent" />
      {cells.map((cell, i) => (
        <rect key={i} x={cell.x} y={cell.y} width={1} height={1} fill="currentColor" />
      ))}
    </svg>
  );
}
