"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

const navbarItems = [
  {
    title: "Kota Yogyakarta",
    link: "/yogyakarta",
  },
  {
    title: "Bantul",
    link: "/bantul",
  },
  {
    title: "Gunung Kidul",
    link: "/gunungkidul",
  },
  {
    title: "Kulon Progo",
    link: "/kulonprogo",
  },
  {
    title: "Sleman",
    link: "/sleman",
  },
];

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex sticky top-0 items-center justify-between py-8 z-[99999999999999999]">
      <Link href="/">
        <Image
          src={
            "https://utfs.io/f/90d416f5-f6a9-4e80-b30b-62edc48f653d-nea2yo.svg"
          }
          alt="logo"
          width={100}
          height={100}
          className="ml-[2vw] z-9999999 logo w-[40vw] md:w-[20vw] lg:w-[10vw]"
        />
      </Link>
      <nav>
        <section className="flex inset-0">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <FaBars className="mr-[2vw] z-[999999999999999999] text-[#EDD761] text-[6vw] md:text-[4vw] lg:text-[2vw] hover:cursor-pointer" />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 hover:cursor-pointer hover:bg-white rounded-full"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col lg:flex-bar text-[white] gap-y-1 z-[9999999999999999] h-[500vh]">
              <div
                className="text-center tracking-wide mt-[15vw] md:mt-[5vw] text-[32px] lg:text-[64px] font-thunderbold border-gray-400 uppercase hover:text-[#EDD761]"
                onClick={() => {
                  setTimeout(() => {
                    setIsNavOpen((prev) => !prev);
                  }, 300);
                }}
              >
                <Link href="/">Beranda</Link>
              </div>
              <div className="border-gray-400 space-y-[2vw] lg:space-y-0 uppercase flex flex-col items-center">
                <div className="text-[32px] tracking-wide lg:text-[64px] font-thunderbold border-gray-400 mt-8 uppercase">
                  Kabupaten
                </div>
                {navbarItems.map((item, index) => (
                  <Link
                    className="font-thunder text-[24px] lg:text-[32px] text-[#EDD761] hover:text-[#F5F5F5]"
                    href={item.link}
                    key={index}
                  >
                    <span
                      onClick={() => {
                        setTimeout(() => {
                          setIsNavOpen((prev) => !prev);
                        }, 300);
                      }}
                    >
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
