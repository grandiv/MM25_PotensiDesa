"use client";

import Hero from "@/components/pages/kulonprogo/Hero/Hero";
import Description from "@/components/pages/kulonprogo/Description/Description";
import First_Place from "@/components/pages/kulonprogo/First_Place/First_Place";
import Second_Place from "@/components/pages/kulonprogo/Second_Place/Second_Place";
import Third_Place from "@/components/pages/kulonprogo/Third_Place/Third_Place";
import Next_Prev from "@/components/pages/kulonprogo/Next_Prev/Next_Prev";

export default function Kulonprogo() {
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
