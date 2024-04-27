import Image from "next/image";
import fr from "../../../public/images/fr_flag.png";
import eng from "../../../public/images/eng_flag.png";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between z-20 px-10">
      <div className="flex gap-2 items-center">
        <div className=" flex border border-yellow-600 rounded-xl">
          <Image src={fr} width={25} height={20} alt="Picture of the author" />
          <Image src={eng} width={25} height={20} alt="Picture of the author" />
        </div>
        <h3>Fr</h3>
      </div>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
      <div className="md:flex gap-3 sm:hidden">
        <a href="#">Véhicules</a>
        <div>
          <label>Presentations</label>
          <select className="bg-transparent ">
            {/* <option>Yes</option>
          <option>No</option>
          <option>Maybe</option> */}
          </select>
        </div>
        <a href="#">Qui sommes nous ?</a>
        <button className="bg-yellow-600 rounded-xl text-black text-sm px-3 py-1 hover:bg-yellow-500">
            Se connecter
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
