import SearchableContactList from "./SearchableContactList";
import { ContactContext } from "../../contexts/ContactContext";
import { useContext, useState } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import MessageVoice from "./MessajeVoice";

function Header({onClickInfoFound}) {
  const { contacts } = useContext(ContactContext);
  let [inputClick, setInputClick] = useState(false);
  let [text, setText] = useState("");
  let [active, setActive] = useState(false);
  //const estilosContainer = 'bg-gray-700 flex justify-center items-center text-gray-200 rounded-full px-2 py-0'
  //const estilosHijos = 'w-10 h-10 p-3 hover:bg-slate-600 rounded-ful flex justify-center items-center rounded-full'
  const handleRecognition = () => {
    const recognition = new window.webkitSpeechRecognition(); // Crear instancia del reconocimiento de voz

    recognition.lang = "es-ES"; // Establecer el idioma de reconocimiento

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.onend = () => {
      recognition.stop();
      setActive(false);
    };

    recognition.start(); // Iniciar el reconocimiento de voz
  };

  // establecer estilos segun el focus de la barra de busqueda
  const setStyles = (x) => {
    if (x === false) {
      return [
        "bg-gray-700 flex justify-center items-center text-gray-200 rounded-full px-2 py-0",
        "w-8 h-8 p-3 hover:bg-slate-600 rounded-ful flex justify-center items-center rounded-full",
      ];
    } else {
      return ["", "hidden"];
    }
  };

  const stylesFalse = setStyles(inputClick);

  return (
    <>
      <header className="header bg-slate-800">
        <div className="header-container flex justify-center items-center mx-auto">
          <div className="w-10 h-10 shrink-0 text-gray-100 items-center justify-center hover:bg-slate-700 rounded-full active">
            <button className="text-xl"><AiOutlineMenu /></button>
          </div>
          <div className="logo mr-2 text-white w-28 shrink-0 cursor-pointer text-2xl font-light items-center justify-center ml-1 active">
            <h1>Contactos</h1>
          </div>
          <section
            className={
              inputClick
                ? " w-full bg-gray-700 flex justify-center items-center px-1 transition ease delay-100 grow search-active"
                : " w-full bg-gray-800 flex justify-center items-center py-2 px-2 transition ease delay-200 grow"
            }
          >
            <div className="container mx-auto w-full">
              <div className={`${stylesFalse[0]} transition ease delay-200`}>
                <div className={`${stylesFalse[1]} cursor-pointer`}>
                  <button className="sm:text-xl">
                    <AiOutlineSearch />
                  </button>
                </div>
                <SearchableContactList
                  contacts={contacts}
                  onClick={(v) => setInputClick(v)}
                  text={text}
                  setText={setText}
                  onClickInfoFound={onClickInfoFound}
                />
                <div
                  className={`${stylesFalse[1]} cursor-pointer ${
                    active && "text-gray-500"
                  }`}
                >
                  <button
                    className="sm:text-xl"
                    disabled={active}
                    onClick={() => {
                      handleRecognition();
                      setActive(true);
                    }}
                  >
                    <BiMicrophone />
                  </button>
                </div>
                <div className={`${stylesFalse[1]} cursor-pointer`}>
                  <FaEllipsisV />
                </div>
              </div>
            </div>
            {active && <MessageVoice />}
          </section>
          <div className="w-10 h-10 grow items-center justify-center mr-2 active">
            <button className="text-gray-100 hover:text-gray-200 text-xl"><AiOutlineSetting /></button>
          </div>
          <div className="w-10 h-10 cursor-pointer profile shrink-0 rounded-full mr-3 active">
            <img src="img/profile-acount.jpg" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
