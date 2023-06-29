import {FiMail} from 'react-icons/fi'

function MailButton({mail, info}) {
  if (mail){
    return ( 
      <button className={`flex justify-center items-center flex-col hover:bg-gray-700 single-line
       py-2 px-3 
      `} >
         <FiMail className='text-xl' />
         <p className='mt-1'>Correo electrónico</p>
      </button>
    )
  }

  return ( 
    <button className='cursor-auto'>
       <FiMail />
    </button>
  )
}

export default MailButton


