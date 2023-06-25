import { useState } from "react";
import SearchInupu from "./SearchInput";
import ContactList from "./ContactList";

function SearchableContactList({ contacts, onClick, text, setText, onClickInfo}) {
  const [searchContact, setSearchContact] = useState("");
  // detectar cuando el input está seleccionado
  let [inputFocusSed, setInputFocusSed] = useState(false);
  //console.log(searchContact)

  // metodod para filtras los contactos que coincidan con la busqueda
  function filterContacts(contacts, searchContact) {
    return contacts.filter((contact) => {
      return searchContact.every((search) => {
        return `${contact.name} ${contact.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase());
      });
    });
  }

  // se crea una nueva lista solo con contactos filtrados
  const foundContact = filterContacts(contacts, searchContact.split(" "));

  return (
    <>
      <div className="grow p-3">
        <SearchInupu
          value={searchContact}
          onChangeSearchInupu={(newContact) => {
            return setSearchContact(newContact);
          }}
          onFocus={(value) => {
            setInputFocusSed(value);
            onClick(value);
          }}
          onBlur={(value) => {
            setInputFocusSed(value);
            onClick(value);
          }}
          inputFocusSed={inputFocusSed}
          text={text}
          setText={setText}
        />
      </div>
      {inputFocusSed && (
        <ContactList
          contacts={foundContact}
          emptyHeading={`No se encuentra "${searchContact}"`}
          onClickInfo={onClickInfo}
        />
      )}
    </>
  );
}

export default SearchableContactList;
