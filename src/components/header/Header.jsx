import SearchableContactList from "./SearchableContactList";
import { ContactContext } from "../../contexts/ContactContext";
import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import MessageVoice from "./MessajeVoice";

function Header() {
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
    <header
      className={
        inputClick
          ? "header w-full bg-gray-700 flex justify-center items-center px-1 transition ease delay-100 fixed top-0 z-10"
          : "header w-full bg-gray-800 flex justify-center items-center py-2 px-3 transition ease delay-200 fixed top-0 z-10"
      }
    >
      <div className="container mx-auto w-full">
        <div className="logo">
          <h1>Contactos</h1>
        </div>
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
          />
          <div className={`${stylesFalse[1]} cursor-pointer ${active && 'text-gray-500'}`}>
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
    </header>
  );
}

export default Header;
