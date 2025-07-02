import { React, useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { aosDuration, getDelay } from "../../../allPage/configs/aosConfig";

export default function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative w-full items-center justify-center aspect-[360/790] flex flex-col md:aspect-[768/1024] lg:aspect-[1920/1080] bg-[url('https://utfs.io/f/780dcdd7-a7a4-4bff-9045-8c0f59b29768-1t1cn.svg')] md:bg-[url('/https://utfs.io/f/fc6d75f3-af55-4b6d-88b8-ba27804ec29e-1t1co.svg')] bg-cover lg:bg-cover lg:bg-[url('https://utfs.io/f/46b389fa-5129-4472-9ec6-55a4576bbf0e-1t1cp.svg')] bg-bottom max-2xl:h-screen"
      data-aos="fade-up"
      data-aos-duration={aosDuration}
      data-aos-delay={getDelay({ turn: 0 })}>
      <div className="absolute bottom-0 z-[2000] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[6vw]"></div>
      <h1
        className="font-thunderbold text-[24.444vw] md:text-[21.875vw] lg:text-[15.104vw] text-[#D27F99] z-[1000] leading-none"
        data-aos="fade-up"
        data-aos-duration={aosDuration}
        data-aos-delay={getDelay({ turn: 0 })}>
        BANTUL
      </h1>
      <div className="max-xl:mt-[20vw] xl:mt-[2vw] z-[3000] flex flex-col items-center justify-center">
        <div className="relative">
          <h1
            className=" 
          font-thunder text-[5.706vw] md:text-[3.125vw] lg:text-[1.563vw] text-[#F5F5F5] z-[3000]"
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({ turn: 1 })}>
            GULIR KE BAWAH
          </h1>
          <button onClick={() => handleClick()}>
            <Image
              src={
                "https://utfs.io/f/785543f3-f595-4273-a449-fb739b825b78-6ko81y.svg"
              }
              width={1}
              height={1}
              alt="Picture of the author"
              className="w-[6.5vw] left-[10.5vw] md:w-[3.5vw] md:left-[6vw] lg:w-[2vw] lg:left-[2.9vw] absolute"
              data-aos="fade-up"
              data-aos-duration={aosDuration}
              data-aos-delay={getDelay({ turn: 0 })}></Image>
          </button>
        </div>
      </div>
    </div>
  );
}
