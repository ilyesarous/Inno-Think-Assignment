import Image from "next/image";
import fImg from "@/assets/images/firstPageImg.png";
const FirstPage = () => {
  return (
    <div className="h-screen flex flex-col gap-20">
      <div className="relative">
        <Image
          className="md:w-full h-full object-cover md:px-20 md:h-auto"
          src={fImg}
          alt="first pic"
        />
      </div>
      <div className="flex flex-col px-10 md:px-20 gap-14 justify-center items-center">
        <p className="text-center px-15 font-medium">
          Basée en région Île-de-France, Emeraude Location se distingue par son
          expertise dans la location de véhicules avec chauffeur pour divers
          événements, mettant l'accent sur des prestations prestigieuses et haut
          de gamme. Spécialisée dans les moments inoubliables comme les mariages
          ou les transferts depuis les aéroports/gares, ses services s'adressent
          principalement aux particuliers
        </p>
        <button className="flex gap-3 px-3 py-1 items-center border rounded-2xl border-yellow-600 transition-all hover:bg-yellow-500">
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
    </div>
  );
};

export default FirstPage;
