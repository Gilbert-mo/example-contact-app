import UpdateContactButton from "../components/buttons/UpdateContactButton";
import DeleteContactButton from "../components/buttons/DeleteContactButton";
import Profile from "../components/Profile";
import { useState } from "react";
import NameContact from "../components/nameContact/NameContact";
import Name from "../components/nameContact/Name";
import LastName from "../components/nameContact/LastName";
import Favorite from '../components/buttons/Favorite'

function Contact({ contact, onClickInfo, enable, setEnable }) {
  // propiedad hover
  let [hover, setHover] = useState(false);
  // manejador de evento de mause para mostrar las componentes botones
  const handleMouseEnter = () => {
    setHover(true);
  };
  // manejador de evento de mause para mostrar las componentes botones
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className="py-2 px-8 pl-3 hover:bg-gray-600 flex justify-between "
      
    >
      <div 
      className="flex hover:cursor-pointer" onClick={() => onClickInfo(contact, true)}>
        <Profile path={contact.profilePicture} name={contact.name} mr={5} />
        <NameContact>
          <Name name={contact.name} />
          <LastName lastName={contact.lastName} />
        </NameContact>
      </div>
      <div className="container-btns-contact justify-around items-center w-24 text-gray-300">
        {hover && <Favorite className="from-stone-950" hover={true} />}
        {hover && <UpdateContactButton contact={contact} hover={true} />}
        {hover && <DeleteContactButton contact={contact} hover={true} onClickInfo={onClickInfo} enable={enable} setEnable={setEnable} />}
        
      </div>
    </div>
  );
}

export default Contact;
