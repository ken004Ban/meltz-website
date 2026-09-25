import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ME LongTeng Grinding Media (Zambia) Ltd",
    short_name: "MELTZ",
    description:
      "High-performance grinding media manufacturing for the mining industry from Kalumbila, Zambia.",
    start_url: "/",
    display: "standalone",
    background_color: "#003B70",
    theme_color: "#003B70",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}