"use client";

import Hero from "@/components/pages/mdp/Hero/Hero";
import Description from "@/components/pages/mdp/Description/Description";
import PotensiDesa from "@/components/pages/mdp/PotensiDesa/PotensiDesa";
import ProfilDesa from "@/components/pages/mdp/ProfilDesa/ProfilDesa";
import PemandanganAlam from "@/components/pages/mdp/Margarana/Margarana";
import Margarana from "@/components/pages/mdp/Margarana/Margarana";
import Next_Prev from "@/components/pages/mdp/Next_Prev/Next_Prev";

export default function Yogyakarta() {
  return (
    <>
      <Hero />
      <Description />
      <ProfilDesa />
      <PotensiDesa/>
      <PemandanganAlam />
      <Margarana />
      <Next_Prev />
    </>
  );
}
