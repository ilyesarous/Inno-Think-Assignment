import Link from "next/link";
import carShow from "@/assets/images/carShow.png";
import Image from "next/image";

type ListItem = {
  title: string;
  text: string;
  link: string;
};
const ThirdPage = () => {
  const listItems: ListItem[] = [
    {
      title: "Mercedes-Benz Classe E",
      text: "La Mercedes Classe E a été revue pour répondre aux normes les plus élevées, bénéficiant d'un nouveau design, d'une toute nouvelle génération de moteurs, et offrant une sécurité de pointe qui devrait servir de référence.",
      link: "#",
    },
    {
      title: "Mercedes-Benz Classe V",
      text: "C'est un véritable chef-d'œuvre d'habitabilité, parfait pour la famille et les affaires. Son design fascinant et ses équipements de confort et de sécurité en font un choix séduisant, avec une gamme complète d'options de série",
      link: "#",
    },
    {
      title: "Mercedes-Benz Classe S",
      text: "La Mercedes-Benz Classe S incarne l'essence même de la limousine de luxe, représentant le fleuron de Mercedes-Benz, désormais une division de Daimler.",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-20 justify-center items-center px-10 md:px-0">
        <p className="text-yellow-600 text-2xl text-center">
          Emeraude Location offre un service
          <span className="text-white">haut de gamme</span> de location de
          voiture 
        </p>
        <p className="text-yellow-600 text-3xl font-extrabold text-center">
          Nos modèles de voitures en location avec chauffeur
        </p>

        <div>
          <div className="flex flex-col md:flex-row justify-center gap-10 px-10 md:px-20">
            {listItems.map((item, i) => {
              return (
                <div key={i} className="flex flex-col gap-5 md:w-[30%]">
                  <p className="text-yellow-600 text-xl font-semibold">
                    {item.title}
                  </p>
                  <div className="bg-gray-800/55 rounded-3xl min-h-52 p-4 flex flex-col justify-between items-end ">
                    <p className="font-light">{item.text}</p>
                    <Link className="text-white/60 underline" href={item.link}>
                      Plus d'information
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <Image className="w-full" src={carShow} alt="car show" />
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
