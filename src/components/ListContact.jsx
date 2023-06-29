import Contact from "./Contact";
import { useContext, useState } from "react";
import { ContactContext } from "../contexts/ContactContext";

function ListContact({ onClickInfo }) {
  let [enable, setEnable] = useState(false);

  const { contacts } = useContext(ContactContext);
  // ordenar lista
  contacts.sort((a, b) => a.name.localeCompare(b.name));

  function sortOutContacts(list) {
    return list.reduce((group, element) => {
      const init = element.name.charAt(0).toUpperCase();
      return { ...group, [init]: [...(group[init] || []), element] };
    }, {});
  }

  const arragementIni = Object.entries(sortOutContacts(contacts));

  if (contacts.length === 0)
    return (
      <div className="void w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-100">Lista de Contactos</h1>
        <h4>No hay contactos aún</h4>
      </div>
    );

  return (
    <>
      {arragementIni.map(([init, arrElements]) => {
        return (
          <section key={init} className="flex items-stretch relative">
            <div className="w-5 mr-6 md:w-10 pl-6 shrink-0 h-full py-4 mt-2 sticky top-0 font-bold text-blue-400">
              {init}
            </div>
            <div className="flex flex-col grow">
              {arrElements.map((element) => (
                <Contact
                  contact={element}
                  key={element.id}
                  onClickInfo={onClickInfo}
                  enable={enable}
                  setEnable={setEnable}
                />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}

export default ListContact;

{
  /* <section>
        {contacts.map((contact, i) => {
          return <Contact key={i} contact={contact} />;
        })}
      </section> */
}
