import mercede from "../../../public/images/mercedes.png";
import bgMercede from "../../../public/images/bgMercedes.png";
import Image from "next/image";

const SecondPage = () => {
  const listItem = [
    {
      id: 1,
      title: "Transferts aéroport, gare...",
      text: "Optez pour notre service de transfert personnalisé depuis n'importe quel aéroport ou gare. Un chauffeur vous attendra avec un panneau à votre nom pour une arrivée tranquille. Évitez les attentes aux taxis et confiez votre transfert à Emeraude Locations Paris pour une expérience sereine.",
      img1: mercede,
      img2: bgMercede,
    },
    {
      id: 2,
      title: "Événementiel mariage",
      text: "Le jour de votre mariage incarne bien plus qu'un simple événement ; il marque l'apogée d'un moment extraordinaire, nourri de longues attentes et de rêves, destiné à demeurer à jamais gravé dans les méandres de votre mémoire. La sélection soigneuse de votre véhicule et de votre chauffeur revêt une importance capitale pour garantir la pleine réussite de cette célébration inoubliable.",
      img1: "",
      img2: "",
    },
  ];

  return (
    <div>
      {listItem.map((item) => {
        return (
          <div className="flex items-center px-20">
            <div className="flex-col">
              <h1 className="text-yellow-600 text-2xl font-extrabold">
                {item.title}
              </h1>
              <p>{item.text}</p>
            </div>
            {/* <div className="flex justify-start items-center">
              <Image
                className=" "
                width={900}
                src={item.img1}
                alt="first pic"
              />
              <Image className="" width={900} src={item.img2} alt="first pic" /> */}
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default SecondPage;
