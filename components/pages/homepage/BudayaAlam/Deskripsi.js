import React from "react";
import Image from "next/image";

export default function Deskripsi() {
  return (
    <div className="relative w-full items-center justify-center flex flex-col bg-[#1d1d21] md:aspect-[768/643] aspect-[360/590] md:py-0 lg:px-[11.979vw] lg:aspect-[1920/600] ">
      <div>
        <Image
          src={
            "https://utfs.io/f/73863254-4564-4b5b-9114-923a5f664820-qnmyzz.svg"
          }
          width={1}
          height={1}
          alt="Picture of the author"
          className="lg:w-[44.105vw] mb-[2vw]"></Image>
      </div>
      <div className="relative items-center justify-center flex flex-col lg:flex-row">
        <div>
          <Image
            src={
              "https://utfs.io/f/255699a0-4ec1-4c95-80bf-3cfbf823d27d-l13fdx.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[17.944vw] md:w-[11.328vw] lg:w-[30vw] rotate-90 lg:rotate-0"></Image>
        </div>
        <div className="m-[6.944vw] md:my-[3.125vw] md:mx-[10.547vw]  rounded-[6.667vw] lg:m-0 lg:rounded-[1.354vw] md:rounded-[3.646vw] border-white border-opacity-20 border-[0.278vw] lg:border-[0.052vw] bg-white bg-opacity-[0.01] flex justify-center items-center text-center ">
          <p className="font-thunder text-[5vw] m-[6.3vw] md:m-[3.385vw] my-[12vw] lg:mx-[4.427vw] lg:my-[1.979vw] md:text-[2.344vw] lg:text-[1.458vw]">
            Daerah Istimewa Yogyakarta atau DIY adalah daerah istimewa setingkat
            provinsi di Indonesia yang merupakan peleburan dari Negara
            Kesultanan Yogyakarta dan Negara Kadipaten Paku Alaman. DIY memiliki
            luas 3.185,80 km persegi yang terdiri atas satu kota dan empat
            kabupaten. Daerah Istimewa ini memiliki ragam wisata, mulai dari
            budaya yang utamanya terletak pada Kota Yogyakarta hingga alam yang
            tersebar pada empat kabupaten lainnya.
          </p>
        </div>
        <div>
          <Image
            src={
              "https://utfs.io/f/255699a0-4ec1-4c95-80bf-3cfbf823d27d-l13fdx.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[17.944vw]  md:w-[11.328vw] lg:w-[30vw] -rotate-90 lg:-rotate-180"></Image>
        </div>
      </div>
    </div>
  );
}
