/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thunder: ["thunder"],
        thunderbold: ["thunder-bold"],
        thunderlight: ["thunder-light"],
        thundermedium: ["thunder-medium"],
        thunderboldLC: ["thunder-boldLC"],
        ariata: ["ariata"],
      },
    },
  },
};
