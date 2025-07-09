import { React, useEffect, useState } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { aosDuration, getDelay } from "../../../allPage/configs/aosConfig";
import { Button } from "@/components/ui/button";

export default function Pertanian() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="relative w-full bg-[#1d1d21] md:aspect-[1252/557] aspect-[360/1000] lg:aspect-[1920/1044]">
      <div
        className="relative h-[120vw] md:h-[50vw] lg:h-[47.948vw] w-full rounded-t-[8.889vw] md:rounded-t-[4.167vw] lg:rounded-t-[3.75vw] overflow-hidden flex justify-center md:justify-end"
        data-aos="fade-up"
        data-aos-duration={aosDuration}
        data-aos-delay={getDelay({ turn: 0 })}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/kuwum/pertanian/pertaniansectionheader.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 z-[1] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[5vw]"></div>
        <h1 className="relative z-[2] font-thunderboldLC text-[13.889vw] md:text-[6.51vw] text-[#0A5C36] leading-none mt-[10vw] md:mt-[5vw] md:mr-[5vw] lg:mt-[3vw] lg:mr-[3vw] drop-shadow-lg bg-black/30 backdrop-blur-sm px-[2vw] py-[1vw] rounded-[1vw] border border-white/20">
          PERTANIAN
        </h1>
      </div>
      <div className="relative w-full flex flex-col md:flex-row md:justify-center">
        <div className=" -translate-y-[16vw] flex flex-row justify-center items-center h-[50vw] md:h-[22.5vw] lg: z-[10000] lg:-translate-y-[24vw]">
          <Image
            src={
              "https://utfs.io/f/af88a118-1d71-42bf-b61a-d6684f1df37c-e9nral.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-start"
          />
          <Image
            src={
              "https://utfs.io/f/50509a9f-7d10-4d41-bd09-fa3bf1176a74-e9nrak.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-center"
          />
          <Image
            src={
              "https://utfs.io/f/cf491a74-cb15-4085-b57f-cd59df0dc2b5-e9nraj.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-end"
          />
        </div>
        <div className="border-white border-[0.278vw] border-opacity-20 rounded-[6.667vw] flex flex-col justify-center items-center py-[9.722vw] md:p-[3.646vw] px-[6.667vw] m-[6.667vw] md:m-0 -mt-[13vw] md:-mt-[17 vw] bg-white bg-opacity-[1px] md:py-0 md:h-[23vw] md:w-[45vw] md:rounded-[2.083vw] md:ml-[1.9vw] md:backdrop-blur-lg md:-translate-y-[15vw] md:border-[0.13vw] lg:w-[40vw] lg:h-[12.396vw] lg:flex-row">
          <p className=" font-thunder text-[5vw] text-center md:text-[2.344vw] lg:text-[1.458vw] lg:mr-[3vw] text-white">
            Tugu Jogja menjadi simbol dan lambang Daerah Istimewa Yogyakarta.
            Tugu Putih ini merupakan salah satu destinasi wajib bagi siapapun
            yang mengunjungi Kota Yogyakarta
          </p>
          <Button
            variant="kuwum"
            size="kuwum"
            onClick={() => setShowModal(true)}
          >
            <div className="flex items-center">
              <h2 className="text-black font-thundermedium md:font-thunder text-[4.2vw] sm:text-[4.919vw] md:text-[2.306vw] lg:text-[1.427vw] leading-none mr-[2.5vw] sm:mr-[3vw] md:mr-[1.5vw] lg:mr-[0.8vw]">
                LIHAT LEBIH
              </h2>
              <Image
                src={
                  "https://utfs.io/f/b6d6a3df-b70d-44e0-b4c2-c3a2e535e51a-1jf9c9.svg"
                }
                width={1}
                height={1}
                alt="Picture of the author"
                className="w-[3vw] sm:w-[3.5vw] md:w-[1.8vw] lg:w-[1.2vw] h-auto flex-shrink-0"
              />
            </div>
          </Button>
        </div>
      </div>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999999999999999] outline-none focus:outline-none backdrop-blur-sm">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparant outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 rounded-t">
                    <button
                      type="button"
                      class="text-grey-400 bg-transparent bg-red-600 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                      onClick={() => setShowModal(false)}
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/*body*/}
                  <Image
                    src={
                      "https://utfs.io/f/6aa5a564-236a-41fa-8bfc-da95a4d01f9c-co6ln7.svg"
                    }
                    width={1}
                    height={1}
                    alt="Picture of the author"
                    className="w-[80vw] md:hidden"
                  />
                  <Image
                    src={
                      "https://utfs.io/f/34f1196d-f436-4e6c-996c-ebdd7fc0b140-co6ln8.svg"
                    }
                    width={1}
                    height={1}
                    alt="Picture of the author"
                    className="md:w-[90vw] w-[80vw] hidden md:block"
                  />
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
}
