import Image from "next/image";
import fImg from "../../../public/images/firstPageImg.png";
import fImg1 from "../../../public/images/firstPageImg1.png";
const FirstPage = () => {
  return (
    <div className="h-screen flex flex-col px-20 gap-20 items-center justify-center">
      <div className="relative flex justify-center items-center">
        <Image className="absolute z-10" src={fImg1} alt="first pic" />
        <Image className="z-0" src={fImg} alt="first pic" />
      </div>
      <p className="text-center z-10 px-15 font-medium text-wrap">
        Basée en région Île-de-France, Emeraude Location se distingue par son
        expertise dans la location de véhicules avec chauffeur pour divers
        événements, mettant l'accent sur des prestations prestigieuses et haut
        de gamme. Spécialisée dans les moments inoubliables comme les mariages
        ou les transferts depuis les aéroports/gares, ses services s'adressent
        principalement aux particuliers
      </p>
      <button className="flex gap-3 px-3 py-1 z-10 items-center border rounded-2xl border-yellow-600 hover:bg-yellow-500">
        <p>Decouvrir</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-down-circle-fill fill-yellow-600"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
        </svg>
      </button>
    </div>
  );
};

export default FirstPage;
