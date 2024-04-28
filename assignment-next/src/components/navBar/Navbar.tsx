"use client";
import Image from "next/image";
import fr from "@/assets/images/fr_flag.png";
import eng from "@/assets/images/eng_flag.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  id: number;
  label: string;
  link: string;
};

const navItems: NavItem[] = [
  { id: 1, label: "Véhicules", link: "#" },
  { id: 2, label: "Prestations", link: "#" },
  { id: 3, label: "Qui somme nous?", link: "#" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useAutoAnimate();

  function toggleHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mx-auto flex w-full px-10 justify-between">
      {/* left */}
      <section className="flex gap-2 items-center">
        <div className=" flex border border-yellow-600 rounded-xl">
          <Image src={fr} width={25} height={20} alt="Picture of the author" />
          <Image src={eng} width={25} height={20} alt="Picture of the author" />
        </div>
        <h3>Fr</h3>
      </section>
      {/* right */}

      {/* mobile navbar */}
      <IoMenu
        color="#C9A951"
        className="text-4xl md:hidden"
        onClick={toggleHandler}
      />
      {isOpen && (
        <div 
          ref={animation}
          className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/70 md:hidden">
          <div className="h-full w-[65%] bg-black/50 px-4 py-4">
            <section className="flex justify-end">
              <AiOutlineClose
                color="#C9A951"
                className="text-4xl"
                onClick={toggleHandler}
              />
            </section>
            <div className="flex flex-col items-center gap-4 transition-all">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="group px-2 py-3 transition-all"
                  >
                    <p className="flex gap-1 items-center text-white hover:cursor-pointer">
                      <span>{item.label}</span>
                      {item.label === "Prestations" && (
                        <IoIosArrowDown />
                      )}
                    </p>
                  </Link>
                );
              })}
              <button className="bg-yellow-600 rounded-xl text-black font-semibold h-fit px-3 transition-all hover:bg-yellow-500">
                Se connecter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* web navbar */}
      <section className="hidden md:flex gap-2 items-center">
        {/* nav items */}
        {navItems.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.link}
              className="group px-2 py-3 transition-all"
            >
              <p className="flex gap-1 items-center text-white hover:cursor-pointer">
                <span>{item.label}</span>
                {item.label === "Presentation" && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>
            </Link>
          );
        })}
        {/* nav button */}
        <button className="bg-yellow-600 rounded-xl text-black font-semibold h-fit px-3 transition-all hover:bg-yellow-500">
          Se connecter
        </button>
      </section>
    </div>
  );
};

export default Navbar;
