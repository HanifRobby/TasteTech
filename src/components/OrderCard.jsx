import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const OrderCard = ({ name, price, image, setTotalItem, totalItem }) => {
  const [total, setTotal] = useState(0);

  return (
    <div className=' w-64 py-6 bg-primary2 text-center text-beige rounded-2xl flex flex-col items-center'>
      <div className="w-52 h-52 rounded-full my-2 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      <h4 className='font-bold text-xl'>{name}</h4>
      <p className='text-lg'>{price}</p>
      <div className='flex flex-row justify-evenly text-primary2 text-2xl mt-2 w-full'>
        <button onClick={() => {
          total > 0 && setTotal(total - 1)
          total > 0 && setTotalItem(totalItem - 1)
        }
        }
          className='bg-beige px-1 rounded-lg mx-2 hover:opacity-90'>
          <AiOutlineMinus />
        </button>
        <span className={`${total > 0 && 'font-bold'} bg-white text-black text-sm w-1/3 py-1 rounded-lg`}>{total}</span>
        <button onClick={() => {
          setTotal(total + 1)
          setTotalItem(totalItem + 1)}} className='bg-beige px-1 rounded-lg mx-2 hover:opacity-90'>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  )
}

export default OrderCard