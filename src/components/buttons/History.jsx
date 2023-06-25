import {AiOutlineHistory} from 'react-icons/ai'

function History() {
  return (
    <button className="flex justify-center items-center flex-col py-2 px-4 hover:text-blue-500">
      <AiOutlineHistory className='text-2xl' />
      <p className='mt-1'>Historial</p>
    </button>
  )
}

export default History
