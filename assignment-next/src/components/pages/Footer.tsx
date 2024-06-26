import Image from "next/image";
import logo from "@/assets/images/logo.png";
import map from "@/assets/images/map.png";
import { FaInstagram, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const contactInfo = [
    { text: "06 12 14 91 65", icon: <FaPhoneVolume color="#C9A951" /> },
    { text: "contact@carsservices.fr", icon: <IoIosMail color="#C9A951" /> },
  ];
  const contactInfo1 = [
    { text: "Cars-moto", icon: <FaInstagram color="#C9A951" /> },
    {
      text: "38 Chem. de Gerocourt, 95650 Boissy-l'Aillerie",
      icon: <FaLocationDot color="#C9A951" />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-10 px-10 md:px-20">
      <Image className="hidden md:block w-52" src={logo} alt="car show" />
      {/* <div className=""> */}
      <Image
        className="block md:hidden w-full md:w-52"
        src={map}
        alt="car show"
      />
      <Image className="block md:hidden w-52" src={logo} alt="car show" />
      <div className="flex flex-row gap-5 w-full border-t-2 justify-between items-center pt-10 mt-10 md:mt-0 border-yellow-600">
        {/* <div className="flex flex-col md:flex-row  gap-5"> */}
        <div className="flex flex-col gap-10">
          <p className="text-lg font-semibold text-yellow-600">
            Reach us
          </p>
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              {contactInfo.map((info, i) => {
                return (
                  <span className="flex flex-row gap-5 items-center">
                    {info.icon}
                    {info.text}
                  </span>
                );
              })}
            </div>
            <div>
              {contactInfo1.map((info, i) => {
                return (
                  <span className="flex flex-row gap-5 items-center">
                    {info.icon}
                    {info.text}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <Image
          className="hidden md:block w-full md:w-52"
          src={map}
          alt="car show"
        />
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
