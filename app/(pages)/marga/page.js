"use client";

import Hero from "@/components/pages/marga/Hero/Hero";
import Description from "@/components/pages/marga/Description/Description";
import First_Place from "@/components/pages/marga/First_Place/First_Place";
import Second_Place from "@/components/pages/marga/Second_Place/Second_Place";
import Third_Place from "@/components/pages/marga/Third_Place/Third_Place";
import Next_Prev from "@/components/pages/marga/Next_Prev/Next_Prev";

export default function Marga() {
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
