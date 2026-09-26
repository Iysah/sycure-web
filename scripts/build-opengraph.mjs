import sharp from "sharp";

const [backgroundPath, outputPath = "app/opengraph-image.png"] = process.argv.slice(2);

if (!backgroundPath) {
  throw new Error("Usage: node scripts/build-opengraph.mjs <background> [output]");
}

const width = 1200;
const height = 630;

const overlay = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#0B0F14" stop-opacity="0.96"/>
        <stop offset="0.43" stop-color="#0B0F14" stop-opacity="0.82"/>
        <stop offset="0.68" stop-color="#0B0F14" stop-opacity="0.16"/>
        <stop offset="1" stop-color="#0B0F14" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="bottomShade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0.6" stop-color="#0B0F14" stop-opacity="0"/>
        <stop offset="1" stop-color="#0B0F14" stop-opacity="0.48"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#shade)"/>
    <rect width="1200" height="630" fill="url(#bottomShade)"/>

    <rect x="70" y="162" width="220" height="36" rx="18" fill="#12BCE8" fill-opacity="0.12" stroke="#12BCE8" stroke-opacity="0.6"/>
    <circle cx="89" cy="180" r="4" fill="#12BCE8"/>
    <text x="103" y="185" fill="#B9E9F5" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" letter-spacing="1.8">ESTATE ACCESS CONTROL</text>

    <text x="70" y="270" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="57" font-weight="700" letter-spacing="-2">
      <tspan x="70" dy="0">Know who enters.</tspan>
      <tspan x="70" dy="67">Stay in control.</tspan>
    </text>

    <text x="72" y="397" fill="#C8D1D8" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="400">
      <tspan x="72" dy="0">Visitor passes. Gate verification.</tspan>
      <tspan x="72" dy="31">One trusted record.</tspan>
    </text>

    <line x1="70" y1="531" x2="487" y2="531" stroke="#FFFFFF" stroke-opacity="0.17"/>
    <text x="70" y="565" fill="#AEB9C2" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="600" letter-spacing="0.6">sycureestate.com</text>
  </svg>
`);

const logo = await sharp("public/sycureLogoWhite.svg")
  .resize({ width: 205 })
  .png()
  .toBuffer();

await sharp(backgroundPath)
  .resize(width, height, { fit: "cover", position: "center" })
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: 64, left: 70 },
  ])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

console.log(`Created ${outputPath} (${width}x${height})`);
