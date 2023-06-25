import { ContactContext } from "../../contexts/ContactContext";
import { useContext } from "react";
import {FiEdit3} from 'react-icons/fi'

function UpdateContactButton({contact , hover}) {
  const { setUpdateFormActive, setAddFormActive, updateContact } = useContext(ContactContext);
  const efectt = hover && 'hover:text-gray-50'

  return (
    <>
      <button
        onClick={() => {
          setUpdateFormActive(true);
          setAddFormActive(false);
          updateContact(contact)
        }}
      className="text-xl">
        <FiEdit3 className={`${efectt}`} />
      </button>
    </>
  );
}

export default UpdateContactButton;
