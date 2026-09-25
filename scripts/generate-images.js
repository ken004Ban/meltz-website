/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(dir, { recursive: true });

// Each image: filename, label, base hue, dark overlay
const images = [
  ["hero-mining", "Mining Operations", "#0a2a4a"],
  ["about-hero", "Industrial Manufacturing", "#0a2a4a"],
  ["about-story", "Manufacturing Facility", "#0a2a4a"],
  ["about-factory", "Factory Interior", "#0a2a4a"],
  ["about-people", "Our Team", "#0a2a4a"],
  ["products-hero", "Grinding Media Products", "#0a2a4a"],
  ["product-grinding-balls", "Grinding Balls", "#0a2a4a"],
  ["product-high-performance", "High-Performance Media", "#0a2a4a"],
  ["product-milling", "Milling Solutions", "#0a2a4a"],
  ["manufacturing", "Manufacturing", "#0a2a4a"],
  ["operations-hero", "Our Operations", "#0a2a4a"],
  ["operations-1", "Manufacturing", "#0a2a4a"],
  ["operations-2", "Quality Control", "#0a2a4a"],
  ["operations-3", "Technical Capability", "#0a2a4a"],
  ["operations-4", "Supply & Logistics", "#0a2a4a"],
  ["operations-5", "Regional Mining Support", "#0a2a4a"],
  ["quality-hero", "Quality & Technology", "#0a2a4a"],
  ["quality-lab", "Metallurgical Laboratory", "#0a2a4a"],
  ["sustainability-hero", "Sustainability", "#0a2a4a"],
  ["sustainability-community", "Community & Environment", "#0a2a4a"],
  ["careers-hero", "Build Your Career", "#0a2a4a"],
  ["news-hero", "News & Updates", "#0a2a4a"],
  ["news-factory", "Company", "#0a2a4a"],
  ["news-quality", "Technology", "#0a2a4a"],
  ["news-safety", "Safety", "#0a2a4a"],
  ["news-community", "Community", "#0a2a4a"],
  ["news-partnership", "Industry", "#0a2a4a"],
  ["news-sustainability", "Sustainability", "#0a2a4a"],
  ["contact-hero", "Contact Us", "#0a2a4a"],
  ["contact-bg", "Let's Talk", "#0a2a4a"],
];

function createIndustrialSVG(label, bg) {
  // deterministic pseudo-random gen
  const rand = (n) => Math.floor(Math.sin(n) * 10000) % 1000;
  let circles = "";
  for (let i = 0; i < 40; i++) {
    const x = rand(i + 1) % 800;
    const y = rand(i + 57) % 600;
    const r = 2 + ((rand(i + 23) % 8));
    const o = 0.03 + ((rand(i + 91) % 20) / 100);
    circles += `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" opacity="${o.toFixed(2)}"/>`;
  }
  let bars = "";
  for (let i = 0; i < 14; i++) {
    const h = 20 + ((rand(i + 200) % 120));
    const x = 60 + i * 55;
    bars += `<rect x="${x}" y="${600 - h - 40}" width="26" height="${h}" fill="#0072BC" opacity="0.25"/>`;
  }
  return `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg}"/>
      <stop offset="1" stop-color="#001a30"/>
    </linearGradient>
    <pattern id="p" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M0 0h80M0 40h80M0 80h80M0 0v80M40 0v80M80 0v80" stroke="#ffffff" stroke-opacity="0.03"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <rect width="800" height="600" fill="url(#p)"/>
  ${circles}
  ${bars}
  <circle cx="400" cy="260" r="70" fill="none" stroke="#D4A843" stroke-opacity="0.4" stroke-width="3"/>
  <circle cx="400" cy="260" r="46" fill="#0072BC" fill-opacity="0.6"/>
  <text x="400" y="272" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" fill-opacity="0.85">${label}</text>
  <text x="400" y="420" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#ffffff" fill-opacity="0.5">Demo image — replace with company photo</text>
  <text x="400" y="442" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11" fill="#ffffff" fill-opacity="0.35">ME LONGTENG GRINDING MEDIA</text>
</svg>`;
}

images.forEach(([name, label, bg]) => {
  const svg = createIndustrialSVG(label, bg);
  fs.writeFileSync(path.join(dir, `${name}.svg`), svg);
  console.log("Generated", name + ".svg");
  // also write .jpg extension variant for compatibility
  fs.writeFileSync(path.join(dir, `${name}.jpg`), svg);
});

console.log("Done. Generated", images.length, "placeholder images.");
