import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { restoList } from '../assets'
import { FaCheck } from 'react-icons/fa'

const RestoCard = ({ resto }) => {
    return (
        <Link to="/rm-pak-aziz" className='relative h-96 w-64 bg-dark-green text-center text-beige rounded-2xl hover:opacity-90 item-scale pt-5'>
            {resto.special &&
                <div className='absolute right-0 top-0 orange-gradient w-8 h-8 rounded-full flex items-center justify-center m-3'>
                    <FaCheck className='text-lg text-white' />
                </div>
            }
            <div className="w-64 h-64 rounded-full my-2 bg-center" style={{ backgroundImage: `url(${resto.image})` }}></div>
            <h4 className='font-bold text-xl'>{resto.name}</h4>
            <span className='inline-flex items-center text-lg'>
                {resto.rating}
                <AiFillStar />
            </span>
            <p className='text-sm'>{resto.distance} KM</p>
            <div className='bg-beige h-10 w-10 absolute bottom-0 right-0 m-3 rounded-lg flex items-center justify-center'>
                <img src={restoList} alt="" className='h-6 w-6' />
            </div>
        </Link>
    )
}

export default RestoCard