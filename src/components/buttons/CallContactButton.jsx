import { MdOutlineCall } from "react-icons/md";
import {useEffect} from 'react'

function CallContactButton({ call, info }) {
  if (call) {
    return (
      <button className={`flex justify-center items-center flex-col hover:text-blue-500 single-line
      ${info && 'hover:bg-gray-700'} py-2 px-3 font-bold
      `}>
        <MdOutlineCall className="text-2xl" />
        <p className='mt-1'>Llamar</p>
      </button>
    );
  }

  return (
    <button className="cursor-auto">
      <MdOutlineCall />
    </button>
  );
}

export default CallContactButton;
