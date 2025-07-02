"use client";

import BudayaAlam from "@/components/pages/marga/BudayaAlam/BudayaAlam";
import Hero from "@/components/pages/marga/Hero/Hero";
import Deskripsi from "@/components/pages/marga/BudayaAlam/Deskripsi";
import KotaKabupaten from "@/components/pages/marga/KotaKabupaten/KotaKabupaten";

export default function Home() {
  return (
    <div className="bg-[#1d1d21]">
      <Hero />
      <Deskripsi />
      <BudayaAlam />
      <KotaKabupaten />
    </div>
  );
}
