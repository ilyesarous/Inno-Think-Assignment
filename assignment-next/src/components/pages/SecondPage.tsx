import mercede from "@/assets/images/mercedes.png";
import range from "@/assets/images/range.png";
import Image from "next/image";

const SecondPage = () => {
  const listItem = [
    {
      id: 1,
      title: "Transferts aéroport, gare...",
      text: "Optez pour notre service de transfert personnalisé depuis n'importe quel aéroport ou gare. Un chauffeur vous attendra avec un panneau à votre nom pour une arrivée tranquille. Évitez les attentes aux taxis et confiez votre transfert à Emeraude Locations Paris pour une expérience sereine.",
      img: mercede,
    },
    {
      id: 2,
      title: "Événementiel mariage",
      text: "Le jour de votre mariage incarne bien plus qu'un simple événement ; il marque l'apogée d'un moment extraordinaire, nourri de longues attentes et de rêves, destiné à demeurer à jamais gravé dans les méandres de votre mémoire. La sélection soigneuse de votre véhicule et de votre chauffeur revêt une importance capitale pour garantir la pleine réussite de cette célébration inoubliable.",
      img: range,
    },
  ];

  return (
    <div className="flex flex-col gap-20">
      {listItem.map((item) => {
        return (
          <div
            key={item.id}
            className={item.id === 2 ? "flex flex-col md:flex-row items-center gap-20 px-10 md:px-20" : "flex flex-col md:flex-row-reverse items-center gap-20 px-20"}
          >
              <Image
                className="w-full h-full md:w-[50%]"
                src={item.img}
                alt="first pic"
              />
            <div className="flex flex-col items-center gap-10 md:items-start">
              <h1 className="text-yellow-600 text-2xl font-extrabold">
                {item.title}
              </h1>
              <p>{item.text}</p>
              <button className="border border-yellow-600 transition-all px-3 py-1 w-fit h-fit rounded-md hover:bg-yellow-500">
                Decouvrir plus
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SecondPage;
