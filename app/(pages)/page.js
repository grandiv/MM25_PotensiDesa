"use client";

import BudayaAlam from "@/components/pages/homepage/BudayaAlam/BudayaAlam";
import Hero from "@/components/pages/homepage/Hero/Hero";
import Deskripsi from "@/components/pages/homepage/BudayaAlam/Deskripsi";
import KotaKabupaten from "@/components/pages/homepage/KotaKabupaten/KotaKabupaten";

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
