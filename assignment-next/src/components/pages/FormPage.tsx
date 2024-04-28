"use client";
import Image from "next/image";
import image from "@/assets/images/image.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { FormEvent, useRef, useState } from "react";

const FormPage = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [prestation, setPrestations] = useState("");
  const [nbPassagers, setNbPassager] = useState(1);
  const [address, setAddress] = useState("");
  const [destionation, setDestination] = useState("");
  const [datePriseEnCharge, setDatePriseEnCharge] = useState("");
  const [dateRestitution, setDateRestitution] = useState("");
  const [enfant, setEnfant] = useState(false);
  const [message, setMessage] = useState("");
  const ref = useRef(1);

  const addNbPassager = (): void => {
    if (ref.current >= 4) {
      alert("you can not add anymore places!");
    } else {
      setNbPassager(nbPassagers + 1);
      ref.current = ref.current + 1;
    }
  };
  const detractNbPassager = (): void => {
    if (ref.current <= 0) {
      alert("you can not detract anymore places!");
    } else {
      setNbPassager(nbPassagers - 1);
      ref.current = ref.current - 1;
    }
  };

  const sendDataHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    console.log(datePriseEnCharge);
    console.log(nbPassagers);
  };

  return (
    <div className=" flex pr-10 w-full justify-center">
      <div className="flex flex-row border rounded-3xl w-fit gap-10 pr-10 border-yellow-600 items-center">
        <div>
          <Image height={565} src={image} alt="image" />
        </div>
        <form
          onSubmit={(e) => sendDataHandler(e)}
          action=""
          className="py-5 flex flex-col gap-3"
        >
          <span className="flex flex-row justify-between gap-3">
            <div className="flex flex-col gap-2">
              <label>Nom</label>
              <input
                type="text"
                className="rounded-2xl border border-yellow-600 bg-transparent py-1 px-2"
                onChange={(e) => {
                  setNom(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Prenom</label>
              <input
                type="text"
                className="rounded-2xl border border-yellow-600 bg-transparent py-1 px-2"
                onChange={(e) => {
                  setPrenom(e.target.value);
                }}
              />
            </div>
          </span>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="email"
              className="rounded-2xl border border-yellow-600 bg-transparent py-1 px-2"
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
          </div>
          <span className="flex flex-row gap-3">
            <div className="flex flex-col gap-2">
              <label>Type de Prestation</label>
              <span className="flex flex-row gap-1 justify-end rounded-2xl border border-yellow-600 bg-transparent py-2 w-60 px-2">
                <IoIosArrowDown className="" />
              </span>
            </div>
            <div className="flex flex-col justify-between">
              <label>Nbr Passagers</label>
              <span className="flex flex-row items-center gap-5">
                <IoAddCircle
                  color="#C9A951"
                  className="text-2xl hover:cursor-pointer hover:fill-yellow-500"
                  onClick={addNbPassager}
                />
                <input
                  type="text"
                  //   disabled
                  value={nbPassagers}
                  className="rounded-full border border-yellow-600 bg-transparent p-1 w-10 text-center"
                />
                <FaCircleMinus
                  color="#C9A951"
                  className="text-xl hover:cursor-pointer hover:fill-yellow-500"
                  onClick={detractNbPassager}
                />
              </span>
            </div>
          </span>
          <span className="flex flex-row justify-between gap-3">
            <div className="flex flex-col gap-2">
              <label>Adresse de prise en charge</label>
              <input
                type="text"
                className="rounded-2xl border border-yellow-600 bg-transparent py-1 px-2"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Destination</label>
              <input
                type="text"
                className="rounded-2xl border border-yellow-600 bg-transparent py-1 px-2"
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              />
            </div>
          </span>
          <span className="flex flex-row justify-between gap-3">
            <div className="flex flex-col gap-2">
              <label>Date Prise en charge</label>
              <input
                type="date"
                className="rounded-2xl border border-yellow-600 bg-transparent py-1 px-2"
                onChange={(e) => {
                  setDatePriseEnCharge(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label> Date Restitution</label>
              <input
                type="date"
                className="rounded-2xl border border-yellow-600 bg-transparent py-1 px-2"
                onChange={(e) => {
                  setDateRestitution(e.target.value);
                }}
              />
            </div>
          </span>
          <div className="flex flex-row gap-2">
            <input type="radio" className="bg-transparent py-1 px-2" />
            <label> Siége enfant </label>
          </div>
          <div className="flex flex-col gap-2">
            <label>Message</label>
            <input
              type="text"
              className="rounded-2xl border border-yellow-600 bg-transparent py-1 px-2"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border border-yellow-600 transition-all px-3 py-1 w-fit rounded-2xl hover:bg-yellow-500"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
