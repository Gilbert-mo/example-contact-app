import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {useState} from 'react'

function Favorite({hover}) {
  let [active, setActive] = useState(false)
  const efectt = hover && 'hover:text-gray-50'
  return (
    <button onClick={() => active === false ? setActive(true) : setActive(false)} className={`${efectt} text-xl`}>
      {active ? <AiFillStar className="text-blue-400" /> : <AiOutlineStar className={`${efectt}`} />}
    </button>
  );
}

export default Favorite;
