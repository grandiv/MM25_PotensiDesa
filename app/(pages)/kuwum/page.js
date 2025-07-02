"use client";

import Hero from "@/components/pages/kuwum/Hero/Hero";
import Description from "@/components/pages/kuwum/Description/Description";
import First_Place from "@/components/pages/kuwum/First_Place/First_Place";
import Second_Place from "@/components/pages/kuwum/Second_Place/Second_Place";
import Third_Place from "@/components/pages/kuwum/Third_Place/Third_Place";
import Next_Prev from "@/components/pages/kuwum/Next_Prev/Next_Prev";

export default function Kuwum() {
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
