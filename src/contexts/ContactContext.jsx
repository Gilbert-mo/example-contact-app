import { createContext, useState, useEffect } from "react";
import { contacts as data } from "../data/contacts";
import {useMessajeStore} from '../store/messajeStore'

export const ContactContext = createContext();

export function ContactContextProvider({ children }) {
  let [addFormActive, setAddFormActive] = useState(false);
  let [updateFormActive, setUpdateFormActive] = useState(false);
  const [contactSelected, setContactSelected] = useState({});

  // store messaje
  const {addMessaje, onClickShow} = useMessajeStore()

  // declarando la lista de contactos de ejemplo
  let [contacts, setContacts] = useState([]);
  // inicializando la lista
  useEffect(() => {
    setContacts(data);
  }, []);

  // agregar nuevo contacto
  const addContact = (contact) => {
    setContacts([
      ...contacts,
      {
        profilePicture: contact.profilePicture,
        id: contacts.length + 1,
        name: contact.name,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      },
    ]);
    setAddFormActive(false);
    addMessaje(`Se ha agregado un nuevo contacto, ${contact.name}`)
    onClickShow()    
  };

  // eliminar contacto
  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
    addMessaje(`Se ha eliminado un contacto, ${contacts.find(contact => contact.id === contactId).name}`)
    onClickShow()
  };

  // actualizar contactos
  const updateContact = (contact) => {
    setContactSelected(contact);
  };

  // actuarlizar
  const update = (contact) => {
    const listUpdated = [...contacts];
    const object = contacts.find((obj) => obj.id === contact.id);

    if (object) {
      object.name = contact.name;
      object.phone = contact.phone;
      object.email = contact.email;
      object.lastName = contact.lastName;
      object.profilePicture = contact.profilePicture;
    }

    setContacts(listUpdated);
    setUpdateFormActive(false);
    addMessaje(`Se ha actualizado un contacto, ${contact.name}`)
    onClickShow() 
  };

  return (
    <>
      <ContactContext.Provider
        value={{
          contacts,
          addContact,
          deleteContact,
          addFormActive,
          setAddFormActive,
          updateFormActive,
          setUpdateFormActive,
          updateContact,
          updateContact,
          contactSelected,
          update
        }}
      >
        {children}
      </ContactContext.Provider>
    </>
  );
}
