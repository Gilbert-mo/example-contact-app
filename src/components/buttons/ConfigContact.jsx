import { VscDeviceCameraVideo } from "react-icons/vsc";

function ConfigContact({info}) {
  return (
    <button className={`flex justify-center items-center flex-col hover:text-blue-500 single-line
    ${info && 'hover:bg-gray-700'} py-2 px-3 font-bold
    `}>
      <VscDeviceCameraVideo className="text-2xl" />
      <p className='mt-1'>Configurar</p>
    </button>
  );
}

export default ConfigContact;
