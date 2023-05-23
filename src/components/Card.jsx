import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Card = ({ menu }) => {
  return (
    <Link to="/rm-pak-aziz" className='w-64 py-8 bg-primary2 text-center flex flex-col items-center text-beige rounded-2xl hover:opacity-90 hover:scale-105'>
      <div className="w-52 h-52 rounded-full my-2 bg-cover bg-center" style={{ backgroundImage: `url(${menu.image})` }}></div>
      <h4 className='font-bold text-lg'>{menu.name}</h4>
      <p className='text-base'>{menu.resto}</p>
      <span className='inline-flex items-center mt-2 text-xl'>
        {menu.rating}
        <AiFillStar />
      </span>
    </Link>
  )
}

export default Card