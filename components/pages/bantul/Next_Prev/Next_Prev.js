import { React, useState, useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { aosDuration, getDelay } from "../../../allPage/configs/aosConfig";

export default function Next_Prev() {
  const handleClick = () => {
    // Navigate to the "/sleman" route
    window.location.href = "/yogyakarta";
  };
  const handleClick2 = () => {
    // Navigate to the "/sleman" route
    window.location.href = "/gunungkidul";
  };
  useEffect(() => {
    Aos.init();
  }, []);
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="relative w-full items-center justify-end flex aspect-[360/320] md:aspect-[1252/557] bg-[#1d1d21] overflow-hidden flex-col z-[999]">
      <button
        className="absolute -left-[10vw] md:-left-[7vw] lg:-left-[3vw] -bottom-[18vw] md:-bottom-[18vw] lg:-bottom-[20vw] w-[90vw] md:w-[50vw] lg:w-[60.677vw] transition-transform duration-300 ease-in-out transform hover:-translate-y-[8vw] z-[99]"
        onMouseEnter={() => setHoveredButton("prev")}
        onMouseLeave={() => setHoveredButton(null)}
        aria-label="Previous"
        onClick={handleClick}>
        <Image
          src={
            "https://utfs.io/f/9e97a35a-f4ff-49b6-a51e-60625ea412b6-59fwcf.svg"
          }
          width={1}
          height={1}
          alt="Picture of the author"
          className="w-[90vw] md:w-[50vw] lg:w-[60.677vw] transition-transform duration-300 ease-in-out z-[9999999999]"
        />
      </button>
      <button
        className="absolute -right-[10vw] md:-right-[7vw] lg:-right-[3vw] -bottom-[18vw] md:-bottom-[18vw] lg:-bottom-[20vw] w-[90vw] md:w-[50vw] lg:w-[60.677vw] z-[1] transition-transform duration-300 ease-in-out transform hover:-translate-y-[8vw]"
        onMouseEnter={() => setHoveredButton("next")}
        onMouseLeave={() => setHoveredButton(null)}
        aria-label="Next"
        onClick={handleClick2}>
        <Image
          src={
            "https://utfs.io/f/32d5c270-dbe2-4400-aa9d-a28c8328e45d-bf6mdj.svg"
          }
          width={1}
          height={1}
          alt="Picture of the author"
          className="w-[90vw] md:w-[50vw] lg:w-[60.677vw] transition-transform duration-300 ease-in-out"
        />
      </button>
      <div
        className="flex flex-row justify-center items-start mb-[2vw] z-[99999]"
        data-aos="fade-up"
        data-aos-duration={aosDuration}
        data-aos-delay={getDelay({ turn: 0 })}>
        <div>
          <Image
            src={
              "https://utfs.io/f/93478748-9dc5-4830-8035-4709009a5218-21xkj.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className={`w-[3.2vw] md:w-[1.5vw] lg:w-[1.677vw] transition-transform duration-300 ease-in-out z-[999999] ${
              hoveredButton === "next" ? "invisible" : ""
            }`}
          />
        </div>
        <div className=" font-thundermedium text-[5vw] md:text-[2.344vw] lg:text-[2.778vw] md:mr-[0.5vw] md:ml-[0.5vw] mr-[3vw] ml-[3vw] leading-none bg-gradient-to-b from-white to-[#1D1D21] inline-block text-transparent bg-clip-text w-[30vw] md:w-[16vw] lg:w-[18vw] text-center">
          {hoveredButton === "prev"
            ? "DIY"
            : hoveredButton === "next"
              ? "GUNKID"
              : "TERUS MENJELAJAH"}
        </div>
        <div>
          <Image
            src={
              "https://utfs.io/f/2865e5c2-4d25-42b3-85f5-3815914d7d02-20eer.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className={`w-[3.2vw] md:w-[1.5vw] lg:w-[1.677vw] transition-transform duration-300 ease-in-out ${
              hoveredButton === "prev" ? "invisible" : ""
            }`}
          />
        </div>
      </div>
      <div>
        <Image
          src={
            "https://utfs.io/f/73863254-4564-4b5b-9114-923a5f664820-qnmyzz.svg"
          }
          width={1}
          height={1}
          alt="Picture of the author"
          className="w-[50vw] md:w-[20vw] lg:w-[28.677vw] transition-transform duration-300 ease-in-out mb-[4vw]"
          data-aos="fade-up"
          data-aos-duration={aosDuration}
          data-aos-delay={getDelay({ turn: 0 })}
        />
      </div>
    </div>
  );
}
