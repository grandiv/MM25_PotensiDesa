"use client";

import Hero from "@/components/pages/mdp/Hero/Hero";
import Description from "@/components/pages/mdp/Description/Description";
import First_Place from "@/components/pages/mdp/First_Place/First_Place";
import Second_Place from "@/components/pages/mdp/Second_Place/Second_Place";
import Third_Place from "@/components/pages/mdp/Third_Place/Third_Place";
import Next_Prev from "@/components/pages/mdp/Next_Prev/Next_Prev";

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
