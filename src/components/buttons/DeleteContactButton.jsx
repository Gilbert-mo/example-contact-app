import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { FaTrash } from "react-icons/fa";

function DeleteContactButton({ contact, onClickInfo, hover, enable, setEnable }) {
  const { deleteContact } = useContext(ContactContext);
  const efectt = hover && "hover:text-gray-50";

  const styles = enable && 'text-gray-500 cursor-pointer'

  // boton enable

  const handleClick = () => {
    deleteContact(contact.id);
    onClickInfo({}, false);
    setEnable(true);
    setTimeout(() => {
      setEnable(false)
    }, 3000)
  };

  return (
    <div>
      <button onClick={() => handleClick()} disabled={enable}
      className={`${styles}`}
      >
        <FaTrash className={`${efectt} ${enable && 'hover:text-gray-500' }`} />
      </button>
    </div>
  );
}

export default DeleteContactButton;
