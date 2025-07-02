"use client";

import Hero from "@/components/pages/yogyakarta/Hero/Hero";
import Description from "@/components/pages/yogyakarta/Description/Description";
import First_Place from "@/components/pages/yogyakarta/First_Place/First_Place";
import Second_Place from "@/components/pages/yogyakarta/Second_Place/Second_Place";
import Third_Place from "@/components/pages/yogyakarta/Third_Place/Third_Place";
import Next_Prev from "@/components/pages/yogyakarta/Next_Prev/Next_Prev";

export default function Yogyakarta() {
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
