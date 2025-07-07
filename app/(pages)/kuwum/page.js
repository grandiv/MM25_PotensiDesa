"use client";

import Hero from "@/components/pages/kuwum/Hero/Hero";
import Description from "@/components/pages/kuwum/Description/Description";
import Banjar from "@/components/pages/kuwum/Banjar/Banjar";
import Pertanian from "@/components/pages/kuwum/Pertanian/Pertanian";
import Peternakan from "@/components/pages/kuwum/Peternakan/Peternakan";
import PengrajinKayu from "@/components/pages/kuwum/PengrajinKayu/PengrajinKayu";
import PengrajinBatu from "@/components/pages/kuwum/PengrajinBatu/PengrajinBatu";
import Next_Prev from "@/components/pages/kuwum/Next_Prev/Next_Prev";

export default function Kuwum() {
  return (
    <>
      <Hero />
      <Description />
      <Banjar />
      <Pertanian />
      <Peternakan />
      <PengrajinKayu />
      <PengrajinBatu />
      {/* <Next_Prev /> */}
    </>
  );
}
