import { React, useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { aosDuration, getDelay } from "../../../allPage/configs/aosConfig";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const banjarData = [
  {
    id: 1,
    name: "ANCAK",
    kepalaWilayah: "I Wayan Arsana",
    description:
      "Banjar strategis sebagai pusat administrasi desa dengan fasilitas umum terlengkap dan akses terbaik.",
    population: "±946 KK",
    image: "/kuwum/kantorperbekelkuwum.png", // Rice terraces
    specialty: "Pusat Administrasi",
  },
  {
    id: 2,
    name: "ANCAK BIJA",
    kepalaWilayah: "I Made Sumada",
    description:
      "Pusat kerajinan kayu tradisional dengan pengrajin berpengalaman turun temurun menghasilkan ukiran berkualitas.",
    population: "±336 KK",
    image: "/kuwum/pengrajinkayu/ukirankayucard.jpg", // Wood crafting
    specialty: "Kerajinan Kayu",
  },
  {
    id: 3,
    name: "ANYAR",
    kepalaWilayah: "I Wayan Dedy Arthana",
    description:
      "Kawasan dengan potensi peternakan babi serta pengembangan wisata agro yang menjanjikan.",
    population: "±340 KK",
    image: "/kuwum/peternakan/peternakbabicard.png", // Livestock farming
    specialty: "Peternakan",
  },
  {
    id: 4,
    name: "MAMBAL",
    kepalaWilayah: "I Made Warna",
    description:
      "Banjar dengan tradisi pertanian yang kuat dan sistem subak yang masih aktif di area persawahan.",
    population: "±602 KK",
    image: "/kuwum/pertanian/pertanian.jpg", // Village center
    specialty: "Pertanian Padi",
  },
  {
    id: 5,
    name: "TEGALLINGGAH",
    kepalaWilayah: "I Nyoman Ranayasa",
    description:
      "Sentra kerajinan batu paras dan batu alam dengan kualitas terbaik di kawasan Kecamatan Marga.",
    population: "±818 KK",
    image: "/kuwum/pengrajinbatu/ukiranbatucard.jpg", // Stone crafting
    specialty: "Kerajinan Batu",
  },
];

export default function Banjar() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="relative w-full bg-[#1d1d21] py-[12vw] md:py-[8vw] lg:py-[6vw]">
      {/* Section Title */}
      <div className="text-center mb-[8vw] md:mb-[6vw] lg:mb-[4vw]">
        <h2
          className="font-thunderbold text-[12vw] md:text-[8vw] lg:text-[6vw] text-[#0A5C36] leading-none mb-[4vw] md:mb-[3vw] lg:mb-[2vw]"
          data-aos="fade-up"
          data-aos-duration={aosDuration}
          data-aos-delay={getDelay({ turn: 0 })}
        >
          BANJAR DESA KUWUM
        </h2>
        <p
          className="font-thunder text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] text-white mx-[8vw] lg:mx-[15vw]"
          data-aos="fade-up"
          data-aos-duration={aosDuration}
          data-aos-delay={getDelay({ turn: 1 })}
        >
          Lima banjar yang membentuk Desa Kuwum, masing-masing dengan keunikan
          dan potensi yang berbeda
        </p>
      </div>

      {/* Cards Container */}
      <div className="px-[6vw] lg:px-[8vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[6vw] md:gap-[4vw] lg:gap-[2vw]">
          {banjarData.map((banjar, index) => (
            <Card
              key={banjar.id}
              className="bg-white/95 backdrop-blur-sm border-white/20 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group overflow-hidden"
              data-aos="fade-up"
              data-aos-duration={aosDuration}
              data-aos-delay={getDelay({ turn: index + 2 })}
            >
              {/* Image Container */}
              <div className="relative h-[40vw] md:h-[25vw] lg:h-[12vw] w-full overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                <Image
                  src={banjar.image}
                  alt={`Banjar ${banjar.name}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                {/* Specialty Badge */}
                {/* <div className="absolute top-[2vw] right-[2vw] bg-[#0A5C36] text-white px-[2vw] py-[1vw] md:px-[1.5vw] md:py-[0.5vw] lg:px-[0.8vw] lg:py-[0.3vw] rounded-full z-20">
                  <span className="font-thundermedium text-[2.5vw] md:text-[1.5vw] lg:text-[0.8vw]">
                    {banjar.specialty}
                  </span>
                </div> */}
              </div>

              <CardHeader className="pb-[2vw] md:pb-[1.5vw] lg:pb-[1vw]">
                <CardTitle className="text-[5vw] font-thunder-light md:text-[3vw] lg:text-[1.5vw] text-[#0A5C36] text-center">
                  {banjar.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-[3vw] md:space-y-[2vw] lg:space-y-[1vw]">
                {/* Kepala Wilayah */}
                <div className="text-center">
                  <p className="font-thundermedium text-[3vw] md:text-[2vw] lg:text-[0.9vw] text-gray-600 mb-[1vw] md:mb-[0.5vw] lg:mb-[0.3vw]">
                    Kepala Wilayah
                  </p>
                  <p className="font-thunder text-[3.5vw] md:text-[2.2vw] lg:text-[1vw] text-black font-semibold">
                    {banjar.kepalaWilayah}
                  </p>
                </div>

                {/* Population */}
                <div className="text-center">
                  <p className="font-thundermedium text-[3vw] md:text-[2vw] lg:text-[0.9vw] text-gray-600 mb-[1vw] md:mb-[0.5vw] lg:mb-[0.3vw]">
                    Jumlah KK
                  </p>
                  <p className="font-thunder text-[3.5vw] md:text-[2.2vw] lg:text-[1vw] text-[#0A5C36] font-semibold">
                    {banjar.population}
                  </p>
                </div>

                {/* Description */}
                <CardDescription className="font-thunder text-[3vw] md:text-[1.8vw] lg:text-[0.85vw] text-gray-700 text-center leading-relaxed">
                  {banjar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[10vw] left-[5vw] w-[8vw] h-[8vw] bg-[#0A5C36]/10 rounded-full blur-xl" />
      <div className="absolute bottom-[10vw] right-[5vw] w-[12vw] h-[12vw] bg-[#0A5C36]/10 rounded-full blur-xl" />
    </div>
  );
}
