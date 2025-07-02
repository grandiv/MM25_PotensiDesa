"use client";

import Hero from "@/components/pages/gunungkidul/Hero/Hero";
import Description from "@/components/pages/gunungkidul/Description/Description";
import First_Place from "@/components/pages/gunungkidul/First_Place/First_Place";
import Second_Place from "@/components/pages/gunungkidul/Second_Place/Second_Place";
import Third_Place from "@/components/pages/gunungkidul/Third_Place/Third_Place";
import Next_Prev from "@/components/pages/gunungkidul/Next_Prev/Next_Prev";

export default function Gunungkidul() {
  return (
    <>
      <Hero />
      <Description />
      <First_Place />
      <Second_Place />
      <Third_Place />
      <Next_Prev />
    </>
  );
}
