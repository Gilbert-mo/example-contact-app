import { BiMessageAltDetail } from "react-icons/bi";

function Message({message, texto, info}) {
  if (message){
    return (
      <button className={`flex justify-center items-center flex-col hover:text-blue-400 single-line
      ${info && 'hover:bg-gray-700'} py-2 px-4
      `}>
        <BiMessageAltDetail className="text-2xl" />
        <p className='mt-1'>{texto}</p>
      </button>
    );
  }

  return (
    <button>
      <BiMessageAltDetail />
    </button>
  );
}

export default Message;
