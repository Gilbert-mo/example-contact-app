import Phone from "../nameContact/Phone";
import FullName from "../nameContact/FullName";
import Profile from "../Profile";
import Message from "../buttons/Message";
import CallContactButton from "../buttons/CallContactButton";
import VideoCall from "../buttons/VideoCall";
import History from "../buttons/History";
import { useState } from "react";

function ContactFound({ name, lastName, phone, path, onClickInfo, contact }) {
  let [active, setActive] = useState(false);

  // onClick={() => onClickInfo(contact, true)}

  return (
    <section
      className={`hover:bg-gray-700 mx-auto flex w-full flex-col rounded-3xl ${
        active && "bg-gray-700"
      }`}
    >
      <div className="flex justify-between items-center">
        <div
          onClick={() =>
            active === false ? setActive(true) : setActive(false)
          }
          className="flex py-4 px-8 pl-3 justify-between hover:cursor-pointer"
        >
          <div onClick={() => onClickInfo(contact, true)}>
            <Profile path={path} name={name} w={12} mr={5} />
          </div>
          <div className="flex flex-col">
            <div>
              <FullName name={name} lastName={lastName} />
            </div>
            <Phone phone={phone} whatsApp={false} />
          </div>
        </div>
        <div className="text-2xl flex justify-center items-center mr-5 md:mr-7 hover:bg-gray-500 w-10 h-10 rounded-full cursor-pointer ">
          <CallContactButton />
        </div>
      </div>
      {active ? (
        <div
          onClick={() => setActive(true)}
          className="py-3 px-8 border-t flex items-center  overflow-scroll container-btns-found"
        >
          <VideoCall video={true} />
          <Message message={true} texto={"Enviar mensaje"} />
          <History />
        </div>
      ) : null}
    </section>
  );
}

export default ContactFound;
