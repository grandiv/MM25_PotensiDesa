import React from "react";
import Image from "next/image";

function BudayaAlam() {
  return (
    <div className="relative aspect-[360/1000] md:aspect-[360/800] lg:aspect-[1280/2000]">
      <div className="absolute top-0 z-[20] bg-gradient-to-b from-[#1d1d21] to-transparent w-full h-[5vw]"></div>
      <div className="relative h-full flex items-start flex-col overflow-hidden">
        {/* Budaya */}
        <div className="absolute max-h-[190vw] md:-translate-x-[30vw] w-[400vw] flex flex-col lg:-translate-x-[11vw] bg-[#1d1d21] pt-32">
          {/* Bg Platform */}
          <Image
            src={
              "https://utfs.io/f/f2999344-d24e-4ace-898c-d433a0d6a06e-fapm9x.svg"
            }
            alt="Background Budaya"
            width={100}
            height={100}
            className="z-10 mt-[20vw] w-[200vw] -translate-y-[35vw] -translate-x-[80vw] md:-translate-x-[30vw] md:w-[150vw] lg:-translate-y-[15vw] lg:w-[120vw] md:-translate-y-[20vw]"
          />
          {/* Tulisan Budaya */}
          <Image
            src={
              "https://utfs.io/f/ae42543b-ec22-43f9-bfa6-57bf68f88009-msj8bs.svg"
            }
            alt="Tulisan Budaya"
            width={100}
            height={100}
            className="z-20 w-[60vw] md:translate-x-[30vw] md:w-[40vw] md:-translate-y-[135vw] lg:-translate-y-[107vw] lg:w-[30vw] -translate-y-[195vw] lg:translate-x-[20vw]"
          />
          {/* Gambar-gambar Budaya */}
          <Image
            src={
              "https://utfs.io/f/0013a19a-2204-4c4f-a2b7-f69c8078ee2a-mwlfwq.svg"
            }
            alt="Foto Budaya"
            width={100}
            height={100}
            className="rotate-2 z-20 w-[90vw] md:w-[70vw] translate-x-[15vw] md:rotate-2 md:translate-x-[35vw] md:-translate-y-[157vw] -translate-y-[225vw] lg:w-[60vw] lg:-translate-y-[124vw] lg:translate-x-[20vw] lg:rotate-2"
          />
          {/* Deskripsi */}
          <p className="font-thundermedium tracking-widest md:tracking-wide text-[1.9vw] translate-x-[50vw] -translate-y-[296vw] text-center skew-y-[30deg] z-30 w-[50vw] md:-translate-y-[212vw] md:translate-x-[70vw] lg:-translate-y-[169vw] lg:translate-x-[45vw] lg:text-[1.8vw] pb-10">
            Temukan kekayaan warisan budaya yang memikat di Daerah Istimewa
            Yogyakarta. Nikmati keindahan dan kearifan lokal yang tak ternilai
            dalam setiap langkah Anda di kota ini.
          </p>
          {/* Efek Cahaya */}
          {/* <Image
            src={
              "https://utfs.io/f/84c2bbb7-f23a-4c18-be1d-ceb5f8b3ed09-gb3n52.svg"
            }
            alt="Efek Cahaya"
            width={100}
            height={100}
            className="z-1 w-[50vw] md:w-[120vw] md:-translate-y-[285vw] md:-translate-x-[20vw] -translate-y-[300vw] lg:-translate-y-[250vw]"
          />
          <Image
            src={
              "https://utfs.io/f/84c2bbb7-f23a-4c18-be1d-ceb5f8b3ed09-gb3n52.svg"
            }
            alt="Efek Cahaya"
            width={100}
            height={100}
            className="z-1 w-[50vw] md:-translate-y-[420vw] md:translate-x-[60vw] md:w-[75vw] -translate-x-[20vw] -translate-y-[360vw] lg:-translate-y-[380vw] lg:translate-x-[50vw]"
          />
          <Image
            src={
              "https://utfs.io/f/84c2bbb7-f23a-4c18-be1d-ceb5f8b3ed09-gb3n52.svg"
            }
            alt="Efek Cahaya"
            width={100}
            height={100}
            className="z-1 w-[50vw] md:-translate-y-[540vw] md:translate-x-[60vw] md:w-[100vw] lg:-translate-y-[530vw] lg:-translate-x-[15vw] translate-x-[20vw] -translate-y-[455vw]"
          />
          <Image
            src={
              "https://utfs.io/f/84c2bbb7-f23a-4c18-be1d-ceb5f8b3ed09-gb3n52.svg"
            }
            alt="Efek Cahaya"
            width={100}
            height={100}
            className="z-1 w-[50vw] lg:-translate-y-[400vw] lg:w-[200vw] md:hidden translate-x-[65vw] -translate-y-[505vw]"
          />
          <Image
            src={
              "https://utfs.io/f/84c2bbb7-f23a-4c18-be1d-ceb5f8b3ed09-gb3n52.svg"
            }
            alt="Efek Cahaya"
            width={100}
            height={100}
            className="z-1 w-[50vw] md:hidden translate-x-[45vw] -translate-y-[590vw]"
          /> */}
        </div>
        {/* Alam */}
        <div className="absolute max-h-[190vw] md:-translate-x-[30vw] w-[400vw] flex flex-col lg:-translate-x-[20vw]">
          {/* Bg Platform */}
          <Image
            src={
              "https://utfs.io/f/f2999344-d24e-4ace-898c-d433a0d6a06e-fapm9x.svg"
            }
            alt="Background Alam"
            width={100}
            height={100}
            className="z-10 mt-[30vw] w-[200vw] md:translate-y-[62vw] translate-y-[85vw] -translate-x-[90vw] md:w-[150vw] md:-translate-x-[23vw] lg:w-[120vw] lg:translate-y-[42vw]"
          />
          {/* Tulisan Alam */}
          <Image
            src={
              "https://utfs.io/f/54ece152-4a0a-4b58-8669-b19d59b32c06-1s87r.svg"
            }
            alt="Tulisan Budaya"
            width={100}
            height={100}
            className="z-20 -translate-y-[72vw] md:-translate-y-[55vw] md:translate-x-[67vw] md:w-[40vw] lg:w-[30vw] lg:translate-x-[52vw] lg:-translate-y-[50vw] w-[60vw] translate-x-[30vw]"
          />
          {/* Gambar-gambar Alam */}
          <Image
            src={
              "https://utfs.io/f/6e714b60-c60f-4648-8fae-c85046bb19e7-lghq6h.svg"
            }
            alt="Foto Alam"
            width={100}
            height={100}
            className="z-20 w-[90vw] md:rotate-2 md:w-[70vw] md:translate-x-[25vw] md:-translate-y-[77vw] -translate-y-[105vw] rotate-2 -translate-x-[20vw] lg:w-[60vw] lg:-translate-y-[69vw] lg:translate-x-[15vw]"
          />
          {/* Deskripsi */}
          <p className="font-thundermedium tracking-widest md:tracking-wide text-[1.9vw] translate-x-[50vw] -translate-y-[179vw] text-center skew-y-[30deg] z-30 w-[50vw] md:translate-x-[77vw] md:-translate-y-[132vw] lg:-translate-y-[112vw] lg:translate-x-[58vw] lg:text-[1.8vw] pb-10">
            Telusuri kecantikan alam yang memukau, dari pantai berpasir putih
            hingga lereng gunung yang hijau. Rasakan kedamaian alam dan kagumi
            keindahan alam yang menakjubkan yang menjadi ciri khas Yogyakarta.
          </p>
          {/* Efek Cahaya */}
          <Image
            src={
              "https://utfs.io/f/84c2bbb7-f23a-4c18-be1d-ceb5f8b3ed09-gb3n52.svg"
            }
            alt="Efek Cahaya"
            width={100}
            height={100}
            className="z-1 md:w-[100vw] md:-translate-y-[200vw] md:translate-x-[70vw] lg:-translate-y-[160vw] lg:translate-x-[50vw] w-[50vw] translate-x-[69vw] -translate-y-[210vw]"
          />
          <Image
            src={
              "https://utfs.io/f/84c2bbb7-f23a-4c18-be1d-ceb5f8b3ed09-gb3n52.svg"
            }
            alt="Efek Cahaya"
            width={100}
            height={100}
            className="z-1 md:w-[100vw] md:-translate-y-[350vw] w-[50vw] translate-x-[69vw] lg:-translate-y-[310vw] -translate-y-[270vw]"
          />
          <Image
            src="https://utfs.io/f/84c2bbb7-f23a-4c18-be1d-ceb5f8b3ed09-gb3n52.svg"
            alt="Efek Cahaya"
            width={100}
            height={100}
            className="z-1 w-[50vw] md:hidden translate-x-[50vw] -translate-y-[350vw]"
          />
          <Image
            src="https://utfs.io/f/84c2bbb7-f23a-4c18-be1d-ceb5f8b3ed09-gb3n52.svg"
            alt="Efek Cahaya"
            width={100}
            height={100}
            className="z-1 w-[50vw] md:hidden translate-x-[40vw] -translate-y-[430vw]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-[0] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[15vw]"></div>
    </div>
  );
}

export default BudayaAlam;
