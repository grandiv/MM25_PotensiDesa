import "./globals.css";

export const metadata = {
  title: "MM25_PotensiDesa",
  description: "Potensi Desa Kuwum dan Marga Dauh Puri, Bali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
