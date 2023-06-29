import Phone from "../nameContact/Phone";
import { FaWhatsappSquare } from "react-icons/fa";

function InfoWhatsApp({ text, phone }) {
  return (
    <div className="flex py-3 items-center hover:bg-gray-600 container-ws cursor-pointer w-full">
      <div className="w-10 h-10 shrink-0 text-2xl flex justify-center items-center ml-2 mr-2">
        <span className="span">
          {/* <FaWhatsappSquare /> */}
          <img src="/ws.png" alt="logo-whatsApp" className="object-cover"/>
        </span>
      </div>
      <div className="flex flex-col phone">
        <p className="mr-2">{`${text} `}</p>
        <Phone phone={phone} whatsApp={true} />
      </div>
    </div>
  );
}

export default InfoWhatsApp;
