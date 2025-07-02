import { Navbar } from "@/components/layout/Navbar/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
