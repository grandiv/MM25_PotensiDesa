import { React, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  // const background1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const background2Y = useTransform(scrollYProgress, [0, 1], ["0%", "65%"]);
  // const background3Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div className="w-full relative h-screen overflow-hidden grid place-items-center">
      <motion.h1
        style={{ y: textY }}
        className=" 
      font-thunderbold text-[76px] lg:text-[15.104vw] text-[#EDD761] z-[8] absolute lg:top-[10vw] top-52 scroll-smooth"
      >
        MARGA
      </motion.h1>

      <div className="absolute bottom-[10vw] z-[1] flex flex-col items-center justify-center scroll-smooth">
        <div className="flex flex-col justify-center items-center">
          <h1
            className=" 
          font-thunder text-2xl lg:text-[2.5vw] text-[#EDD761] -z-[1]"
          >
            GULIR KE BAWAH
          </h1>
          <Image
            src={
              "https://utfs.io/f/daa63991-735f-4a24-98d5-b5586a57518b-acys0n.svg"
            }
            width={3}
            height={3}
            alt="Picture of the author"
            className="flex justify-center w-8 lg:w-[3vw]"
          ></Image>
        </div>
      </div>

      <motion.div
        className="absolute z-0 bg-cover lg:w-[99.1vw] inset-0"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/6a4008ed-ce6c-4c62-aa2f-99f616cac23b-1h.svg)",
          backgroundPosition: "bottom",
          y: backgroundY,
        }}
      />
      {/* <motion.div
        className="absolute z-[16]  hidden lg:block"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/9db6ef63-7b41-485b-846b-c2389ba8ef82-1g.svg)",
          backgroundSize: "100vw",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          y: background1Y,
        }}
      />
      <motion.div
        className="absolute z-[17]  bottom-0 hidden lg:block"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/804d987d-b28a-4be4-9764-aeaa1069cd7b-1f.svg)",
          backgroundSize: "100vw",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          y: background2Y,
        }}
      />
      <motion.div
        className="absolute z-[18]  bottom-0 hidden lg:block"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/f5d67b22-600c-4d18-bc86-dbf9999c7c56-1e.svg)",
          backgroundSize: "100vw",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          y: background3Y,
        }}
      /> */}
      <div
        className="absolute z-[19]  bottom-0 bg-gradient-to-b from-transparent to-[#1d1d21] hidden lg:block"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/56012633-070e-430a-be9a-161b6995bd53-1d.svg)",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw",
        }}
      ></div>
      <div className="absolute bottom-0 z-[20] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[5vw]"></div>
    </div>
  );
}

export default Hero;
