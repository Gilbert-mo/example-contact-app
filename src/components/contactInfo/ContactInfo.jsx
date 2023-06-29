import DeleteContactButton from "../buttons/DeleteContactButton";
import UpdateContactButton from "../buttons/UpdateContactButton";
import CallContactButton from "../buttons/CallContactButton";
import FullName from "../nameContact/FullName";
import Profile from "../Profile";
import Message from "../buttons/Message";
import ConfigContact from "../buttons/ConfigContact";
import Favorite from "../buttons/Favorite";
import Phone from "../nameContact/Phone";
import MailButton from "../buttons/MailButton";
import InfoWhatsApp from "./InfoWhatsApp";
import { BiArrowBack } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import { useEffect, useState } from "react";

function ContactInfo({ contact, onClickInfo }) {
  let [scroll, setScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      // Aquí puedes realizar las acciones que deseas cuando ocurre el desplazamiento en el div
      // Por ejemplo:
      const divElement = document.getElementById("container-main");
      if (divElement.scrollTop > 200) {
        setScroll(true)
        // alert('se alcanzo 200px')
        // Realiza aquí las acciones que deseas realizar al alcanzar los 200 píxeles de desplazamiento dentro del div
      }

      if (divElement.scrollTop < 200){
        setScroll(false)
        // alert('menos de 200px')
      }
    };

    const divElement = document.getElementById('container-main');
    divElement.addEventListener('scroll', handleScroll);

    // espace close
    const handleKeyup = (e) => {
      if (e.key === "Escape") {
        onClickInfo({}, false)
      }
    };

    document.addEventListener("keyup", handleKeyup);

    return () => {
      divElement.removeEventListener('scroll', handleScroll);
      divElement.removeEventListener('keyup', handleKeyup);
    };
  }, []);

  return (
    <>
      <div className="dark-overlay-info"></div>
      <section className="bg-gray-800 fixed overflow-hidden form-container-info top-1/2 left-1/2 ">
        <header className="flex justify-between text-gray-300 px-1 sm:px-3 py-3 sticky top-0 w-full items-center">
          <div className="w-9 h-9 shrink-0 flex justify-center items-center cursor-pointer pr-0 rounded-full hover:bg-gray-700 text-2xl ml-2">
            <button onClick={() => onClickInfo({}, false)} className="">
              <BiArrowBack />
            </button>
          </div>
          <div className="grow items-center flex ml-1 text-xl truncate text-gray-300 font-medium">
            <p className="">{scroll && contact.name}</p>
          </div>
          <div className="flex">
            <div className="w-9 h-9 flex justify-center items-center hover:bg-gray-700 rounded-full mr-1">
              <UpdateContactButton contact={contact} />
            </div>
            <div className="w-9 h-9 shrink-0 flex justify-center rounded-full items-center cursor-pointer pr-0  hover:bg-gray-700 mr-1">
              <Favorite />
            </div>
            <div className="w-9 h-9 flex justify-center items-center hover:bg-gray-700 rounded-full mr-1">
              <DeleteContactButton
                contact={contact}
                onClickInfo={onClickInfo}
              />
            </div>
            <div className="w-9 h-9 shrink-0 flex justify-center rounded-full items-center cursor-pointer pr-0  hover:bg-gray-700">
              <FaEllipsisV />
            </div>
          </div>
        </header>
        <section
          className="overflow-y-scroll overflow-hidden w-full h-full container-main"
          id="container-main"
        >
          <div className="py-6 flex flex-col justify-center items-center mt-6">
            {" "}
            {/*informacion de perfil*/}
            <div className="flex justify-center w-full">
              <Profile
                path={contact.profilePicture}
                name={contact.name}
                mr={0}
              />
            </div>
            <div className="text-gray-200 font-medium text-3xl mt-8 w-full flex justify-center">
              <FullName name={contact.name} lastName={contact.lastName} />
            </div>
          </div>
          <div className="cont-btns text-sm text-blue-300 w-full">
            <div className="container-btns">
              {" "}
              {/*botones similares*/}
              <CallContactButton call={true} info={true} />
              <Message message={true} texto={"Mensaje de texto"} info={true} />
              <ConfigContact info={true} />
              {contact.email !== "" ? <MailButton mail={true} /> : null}
            </div>
          </div>
          <article className="py-4 px-3 mb-60 text-gray-300">
            <div className="bg-gray-700 overflow-hidden rounded-xl pt-2">
              {/* INFOR DE CONTACTO*/}
              <h3 className="py-1 font-bold ml-4 tracking-wide mt-1 mb-2">Información de contacto</h3>
              <section>
                <div className="flex justify-between cursor-pointer py-3 items-center hover:bg-gray-600">
                  {" "}
                  {/* INFRO MOVIL */}
                  <div className="flex items-center justify-center ml-1">
                    <div className="w-10 h-10 shrink-0 text-2xl flex justify-center items-center ml-1 mr-2">
                      <CallContactButton />
                    </div>
                    <Phone phone={contact.phone} whatsApp={false} info={true} />
                  </div>
                  <div className="w-10 h-10 shrink-0 hover:text-gray-300 text-2xl flex justify-center items-center mr-2">
                    <Message />
                  </div>
                </div>
                {/* INFRO MOVIL END */}
                {/* INFRO EMAIL */}
                {contact.email === "" ? (
                  <div></div>
                ) : (
                  <div className="flex py-3 items-center hover:bg-gray-600 cursor-pointer ml-1">
                    <div className="w-10 h-10 shrink-0 text-xl flex justify-center items-center ml-1 mr-2 truncate-text">
                      <MailButton />
                    </div>
                    <div>
                      <p>{contact.email}</p>
                      <p className="text-sm md:text-base">Casa</p>
                    </div>
                  </div>
                )}
                {/* INFRO EMAIL END */}
                {/* INFRO WHATSAPP */}
                <InfoWhatsApp phone={contact.phone} text={"Llamar a "} />
                <InfoWhatsApp
                  phone={contact.phone}
                  text={"Enviar mensaje a "}
                />
                <InfoWhatsApp phone={contact.phone} text={"Videollamar a "} />
              </section>
            </div>
            {/* INFRO WHATSAPP END */}
            <div className="w-full flex flex-col text-center text-sm mt-4">
              <p>Se agregó el: 12 de mayo de 2022</p>
              <p>(gilbertmatosortiz@gmail.com)</p>
            </div>
          </article>
        </section>
      </section>
    </>
  );
}

export default ContactInfo;

/*
<div className="w-8 h-8 shrink-0 flex justify-center rounded-full items-center cursor-pointer hover:bg-gray-500">
              <DeleteContactButton
                contact={contact}
                onClickInfo={onClickInfo}
              />
            </div>
            <div className="w-8 h-8 shrink-0 flex justify-center rounded-full items-center cursor-pointer pr-0  hover:bg-gray-500">
              <UpdateContactButton contact={contact} />
            </div>
*/
