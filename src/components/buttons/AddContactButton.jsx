import {useContext} from 'react'
import {ContactContext} from '../../contexts/ContactContext'
import {FaUserPlus} from 'react-icons/fa'

function AddContactButton() {

    const {setAddFormActive, setUpdateFormActive} = useContext(ContactContext)

  return (
    <div className='text-blue-400 font-medium hover:text-blue-300 container '>
      <button onClick={() => {
        setAddFormActive(true)
        setUpdateFormActive(false)
      }} className='flex justify-center items-center ml-5 md:ml-6 my-5'> < FaUserPlus className='mr-5 text-2xl' />Crear nuevo contacto</button>
    </div>
  )
}

export default AddContactButton
