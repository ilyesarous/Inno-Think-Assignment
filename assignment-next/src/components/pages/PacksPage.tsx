import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

type Pack = {
  title: string;
  icon?: string;
  children?: Pack[];
};
const PacksPage = () => {
  const packs = [
    {
      title: "Pack First",
      Children: [
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoIosCheckmarkCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoIosCheckmarkCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoCloseCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoCloseCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoCloseCircleOutline color="#C9A951"/>,
        },
      ],
    },
    {
      title: "Pack Premium",
      Children: [
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoIosCheckmarkCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoIosCheckmarkCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoIosCheckmarkCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoIosCheckmarkCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoIosCheckmarkCircleOutline color="#C9A951"/>,
        },
      ],
    },
    {
      title: "Pack Standard",
      Children: [
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoIosCheckmarkCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoIosCheckmarkCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoIosCheckmarkCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoCloseCircleOutline color="#C9A951"/>,
        },
        {
          title: "Lorem ipsum dolor sit",
          icon: <IoCloseCircleOutline color="#C9A951"/>,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-10 md:px-36 gap-20">
      <p className=" text-justify md:text-center ">
        Les packs de location de voitures regroupent divers services en un seul
        forfait, tels que le Pack Confort, le Pack Aventure ou le Pack Famille.
        Ils incluent des avantages comme l'assurance tout risque, le kilométrage
        illimité et des équipements spécifiques, offrant une réservation
        simplifiée et personnalisable pour les clients.
      </p>
      <div className=" flex flex-row gap-5">
        {packs.map((pack, i) => {
          return (
            <div key={i} className={"flex flex-col justify-center w-64 border border-yellow-600 rounded-lg"}>
              <div className="bg-yellow-600 rounded-t-sm py-2">
                <p className="text-3xl text-center text-black font-extrabold">{pack.title}</p>
              </div>
              <div className=" flex flex-col items-center  py-10 gap-4">
                {pack.Children.map((child,i) => {
                    return(
                        <span key={i} className="flex items-center gap-3">
                            {child.icon}
                            <p className="font-thin">{child.title}</p>
                        </span>
                    )
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PacksPage;
