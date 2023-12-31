import { useEffect, useState, useContext } from "react";
import { ContactContext } from "../contexts/ContactContext";
import { IoMdClose } from "react-icons/io";
import { BiImageAdd } from "react-icons/bi";
import { FaEllipsisV, FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdOutlineCall } from "react-icons/md";

function FormContactUpdate({ contact }) {
  const { setUpdateFormActive, update } = useContext(ContactContext);

  const [profilePicture, setProfilePicture] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setProfilePicture(contact.profilePicture);
    setName(contact.name);
    setPhone(contact.phone);
    setLastName(contact.lastName);
    setEmail(contact.email);
  }, [contact]);

  // metodo que se ejecuta cuando el formulario es enviado
  const handlSubmit = (e) => {
    e.preventDefault();

    // reseteando campos del formulario
    setName("");
    setPhone("");

    update({
      profilePicture,
      id: contact.id,
      name,
      lastName,
      phone,
      email,
    });
  };

  useEffect(() => {
    const handleKeyup = (e) => {
      if (e.key === "Escape") {
        setUpdateFormActive(false);
      }

      if (e.key === 'Enter'){
        alert('Clic en Guardar')
      }
    };

    document.addEventListener("keyup", handleKeyup);

    return () => {
      document.removeEventListener("keyup", handleKeyup);
    };
  }, []);


  return (
    <>
      <div className="dark-overlay"></div>
      <section className="bg-gray-800 fixed form-container top-1/2 left-1/2 overflow-hidden ">
        <form onSubmit={handlSubmit}>
          <header className="bg-gray-700 text-gray-200 flex items-center p-2 px-3">
            <div className="w-10 h-10 shrink-0 flex justify-center items-center text-2xl rounded-full hover:bg-gray-500">
              <button onClick={() => setUpdateFormActive(false)}>
                <IoMdClose />
              </button>
            </div>
            <div className="grow flex justify-start items-center text-xl ml-2 font-medium">
              <h3>Editar contacto</h3>
            </div>
            <div className="shrink-0 flex justify-center text-black cursor-pointer items-center sm:mr-3 py-2 px-5 mr-2 bg-blue-300 rounded-full hover:bg-blue-400 hover:text-gray-100">
              <button className="">Guardar</button>
            </div>
            <div className="w-10 h-10 shrink-0 flex justify-center items-center cursor-pointer pr-0 rounded-full hover:bg-gray-500 text-xl">
              <FaEllipsisV />
            </div>
          </header>
          <div className="py-6 flex flex-col justify-center items-center">
            <div className="bg-blue-800 text-gray-300 w-32 h-32 flex flex-col justify-center items-center rounded-full text-5xl cursor-pointer">
              <BiImageAdd />
            </div>
            <div className="mt-2 py-1 px-4 hover:bg-gray-700 rounded-full text-blue-300">
              <button type="button">Agregar imagen</button>
            </div>
          </div>
          <section className="h-full px-3 pl-1 sm:pl-3 inputs-container">
            <div className="input-contaiber-box input-contaiber-box-name">
              <div className="flex">
                <div className="w-10  shrink-0 flex items-center justify-center text-gray-200 ">
                  <label htmlFor="inputName" className="cursor-pointer text-xl">
                    <FaRegUser />
                  </label>
                </div>
                <div className="input-box group">
                  <input
                    id="inputName"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name || ""}
                    autoComplete="off"
                    maxLength={25}
                    required
                  />
                  <span>Nombre</span>
                </div>
              </div>
            </div>
            <div className="input-contaiber-box">
              <div className="flex">
                <div className="w-10  shrink-0 flex items-center justify-center text-gray-200 ">
                  <label htmlFor="inputLast" className="cursor-pointer"></label>
                </div>
                <div className="input-box group">
                  <input
                    id="inputLast"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName || ""}
                    required
                    autoComplete="off"
                    maxLength={25}
                  />
                  <span>Apellido</span>
                </div>
              </div>
            </div>
            <div className="input-contaiber-box">
              <div className="flex">
                <div className="w-10  shrink-0 flex items-center justify-center text-gray-200 ">
                  <label
                    htmlFor="inputEmail"
                    className="cursor-pointer text-xl"
                  >
                    <FiMail />
                  </label>
                </div>
                <div className="input-box group">
                  <input
                    id="inputEmail"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email || ""}
                    required
                    autoComplete="off"
                    maxLength={50}
                  />
                  <span>Correo electrónico</span>
                </div>
              </div>
            </div>
            <div className="input-contaiber-box">
              <div className="flex">
                <div className="w-10 shrink-0 flex items-center justify-center text-gray-200 ">
                  <label
                    htmlFor="inputPhone"
                    className="cursor-pointer text-2xl"
                  >
                    <MdOutlineCall />
                  </label>
                </div>
                <div className="input-box group">
                  <input
                    id="inputPhone"
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone || ""}
                    autoComplete="off"
                    required
                  />
                  <span>Teléfono</span>
                </div>
              </div>
            </div>
          </section>
        </form>
      </section>
    </>
  );
}

export default FormContactUpdate;

/*
<div>
      <h3>Editar contacto</h3>
      <div>
        <form onSubmit={handlSubmit}>
          <div>
            <div>
              <BiImageAdd />
            </div>
            <button type="button">Agregar imagen</button>
          </div>
          <div>
            <input
              type="text"
              placeholder="nombre"
              autoFocus
              onChange={(e) => setName(e.target.value)}
              value={name || ""}
              required
              maxLength={25}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="apellido"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName || ""}
              maxLength={25}
            />
          </div>
          <div>
            <input
              type="email"
              value={email || ""}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              maxLength={50}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="numero"
              autoFocus
              onChange={(e) => setPhone(e.target.value)}
              value={phone || ""}
            />
          </div>
          <div>
            <button>Save</button>
            <button onClick={() => setUpdateFormActive(false)}>
              <IoMdClose />
            </button>
          </div>
        </form>
      </div>
    </div>
*/
