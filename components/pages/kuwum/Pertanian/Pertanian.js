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

        <h1 className="absolute top-[10vw] right-[5vw] md:top-[5vw] md:right-[5vw] lg:top-[3vw] lg:right-[3vw] z-[2] font-thunderboldLC text-[13.889vw] md:text-[6.51vw] text-[#B6F500] leading-none drop-shadow-lg bg-white bg-opacity-[1px] backdrop-blur-sm px-[2vw] py-[1vw] pt-2 md:pt-4 lg:pt-8 rounded-[1vw] border border-white/20 flex items-center justify-center">
          PERTANIAN
        </h1>
      </div>
      <div className="relative w-full flex flex-col md:flex-row md:justify-center">
        <div className="-translate-y-[16vw] flex flex-row justify-center items-center h-[50vw] md:h-[22.5vw] lg:z-[10000] lg:-translate-y-[24vw] px-[4vw] md:px-0">
          <Image
            src="/kuwum/pertanian/pertanian.jpg"
            width={856}
            height={1024}
            alt="Picture of the author"
            className="w-[32vw] h-[38vw] mx-2 md:mx-4 md:w-[14vw] md:h-[16.8vw] lg:w-[14vw] lg:h-[16.8vw] object-cover rounded-[2vw] md:rounded-[1vw] lg:rounded-[0.5vw] shadow-2xl drop-shadow-xl self-start"
          />
          <Image
            src="/kuwum/pertanian/pertanian3.jpg"
            width={856}
            height={1024}
            alt="Picture of the author"
            className="w-[32vw] h-[38vw] md:w-[14vw] md:h-[16.8vw] lg:w-[14vw] lg:h-[16.8vw] object-cover rounded-[2vw] md:rounded-[1vw] lg:rounded-[0.5vw] shadow-2xl drop-shadow-xl self-center"
          />
          <Image
            src="/kuwum/pertanian/pertanian4.jpg"
            width={856}
            height={1024}
            alt="Picture of the author"
            className="w-[32vw] h-[38vw] mx-2 md:mx-4 md:w-[14vw] md:h-[16.8vw] lg:w-[14vw] lg:h-[16.8vw] object-cover rounded-[2vw] md:rounded-[1vw] lg:rounded-[0.5vw] shadow-2xl drop-shadow-xl self-end"
          />
        </div>
        <div className="border-white border-[0.278vw] border-opacity-20 rounded-[6.667vw] flex flex-col justify-center items-center py-[9.722vw] md:p-[3.646vw] px-[6.667vw] m-[6.667vw] md:m-0 -mt-[13vw] md:-mt-[17 vw] bg-white bg-opacity-[1px] md:py-0 md:h-[23vw] md:w-[45vw] md:rounded-[2.083vw] md:ml-[1.9vw] md:backdrop-blur-lg md:-translate-y-[15vw] md:border-[0.13vw] lg:w-[40vw] lg:h-[12.396vw] lg:flex-row">
          <p className=" font-thunder text-[5vw] text-center md:text-[2.344vw] lg:text-[1.458vw] lg:mr-[3vw] text-white">
            Masyarakat setempat mengembangkan sistem irigasi subak yang
            berkelanjutan yang menghasilkan gabah dan padi organik berkualitas
            tinggi dan sayuran segar untuk memenuhi kebutuhan lokal maupun
            ekspor.
          </p>
          <Button
            variant="kuwum"
            size="kuwum"
            onClick={() => setShowModal(true)}
          >
            <div className="flex items-center">
              <h2 className="text-black font-thundermedium md:font-thunder text-[4.2vw] sm:text-[4.919vw] md:text-[2.306vw] lg:text-[1.427vw] leading-none mr-[2.5vw] sm:mr-[3vw] md:mr-[1.5vw] lg:mr-[0.8vw]">
                DATA SUBAK
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
                  <div className="px-6 pb-6 max-h-[70vh] overflow-y-auto">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-white">
                          <thead className="bg-[#B6F500]/20 sticky top-0">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-thundermedium text-[#B6F500] uppercase tracking-wider">
                                No
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-thundermedium text-[#B6F500] uppercase tracking-wider">
                                Nama Kelompok
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-thundermedium text-[#B6F500] uppercase tracking-wider">
                                Ketua
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-thundermedium text-[#B6F500] uppercase tracking-wider">
                                Alamat
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-thundermedium text-[#B6F500] uppercase tracking-wider">
                                Anggota
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-thundermedium text-[#B6F500] uppercase tracking-wider">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            {/* <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                1
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Bantas Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Wayan Masih
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec.Marga, Kab. Marga
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                34
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr> */}
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                1
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Bija Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Nyoman Nitya
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec. Marga, Kab. Tabanan
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                39
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                2
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Dajan Tunon Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Wayan Wibawa
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec Marga, Kab. Tabanan
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                24
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                3
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Gunung Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Ketut Letra
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec.Marga, Kab. Tabanan
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                14
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                4
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Jemanik Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Wayan Jirna
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec.Marga, Kec.Marga
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                66
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                5
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Kelompok Tani Werdhi Rahayu
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Ketut Mertaya
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Br. Dinas Kuwum Ancak Bija
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                61
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                6
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Kelompok Ternak - Kembang Sedana
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Wayan Wiyasa
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Br. Dinas Kuwum Mambal
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                42
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                7
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Kelompok Ternak Lembu Sari
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Ketut Sura
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Br Dinas Kuwum Mambal
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                11
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            {/* <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                8
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Kembang Sedana
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Wayan Wiyasa
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kecamatan Marga
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                25
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr> */}
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                8
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Poktan Banjar Kuwum Anyar
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Wayan Wirawan
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Br. Dinas Kuwum Anyar
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                80
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                9
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Sari Merta
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desak Made Yuliasmin
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Br.Dinas Kuwum Mambal
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                43
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                10
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Satwa Sari
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Nyoman Kupling
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Banjar Kuwum Mambal, Desa Kuwum, Kec. Marga,
                                Kab. Tabanan
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                48
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                11
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Satya Prananda
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Nyoman Silik
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Banjar Tegallinggah, Desa Kuwum
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                13
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                12
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Sungga Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Made Ngaya
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec. Marga, Kab Tabanan
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                22
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                13
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Tegal Jimbar Sari
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Wayan Panggil
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Banjar Tegallinggah, Desa Kuwum
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                -
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                14
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Ternak Babi Fauna Sari
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Ayu Devi Mahayanti
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Br.Dinas Kuwum Mambal
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                44
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                15
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Ternak Babi Pengangon Sari
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Putu Adnyana
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Br. Dinas Kuwum Tegallinggah
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                45
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                16
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Uma Anyar Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Ketut Siana
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec. Marga, Kab. Tabanan
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                52
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                17
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Uma Lode Beduwuran Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Made Madri
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec. Marga, Kab. Tabanan
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                45
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                18
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Uma Lode Betenan Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Gede Ketut Darma
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec. Marga, Kab. Tabanan
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                59
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                19
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Umadiwang Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Ketut Bakta
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec. Marga, Kab. Marga
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                24
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                20
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Umawani Subak Apit Jaring
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                I Wayan Punia
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Desa Kuwum, Kec. Marga, Kab. Tabanan
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                98
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-thunder">
                                21
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Wana Karya Sari
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Ketut Darmadi
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                Banjar Kuwum Mambal, Desa Kuwum
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                -
                              </td>
                              <td className="px-4 py-3 text-sm font-thunder">
                                <span className="text-green-400">Aktif</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>{" "}
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
