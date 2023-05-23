import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { UserProfile, shopCart, tasteTech, pp } from '../assets';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const OrderList = () => (
    <>
        <p className='text-2xl font-semibold text-dark-green mt-4'>Pesanan Anda</p>
        <div className='min-h-[45vh]'>
            <div className='w-full h-16 bg-dark-green text-white my-5 rounded-lg flex justify-between px-5 items-center'>
                <div className='text-start w-40'>
                    Nasi Campur Lengkap
                    <p>15.000</p>
                </div>
                <span>x2</span>
                <p>30.000</p>
            </div>
            <div className='w-full h-16 bg-dark-green text-white my-5 rounded-lg flex justify-between px-5 items-center'>
                <div className='text-start w-40'>
                    Es Teh Manis
                    <p>3.000</p>
                </div>
                <span>x1</span>
                <p>3.000</p>
            </div>
        </div>
        <div className='w-full bg-orange-600 h-[1px] my-3'></div>
        <div className='flex flex-row text-black justify-between font-semibold'>
            <div className='text-start'>
                <p>Total</p>
                <p>Ongkir</p>
                <p>Diskon</p>
            </div>
            <div className='text-end'>
                <p>33.000</p>
                <p>3000</p>
                <p>0</p>
            </div>
        </div>
        <div className='w-full bg-orange-600 h-[2px] my-3'></div>
        <div className='flex justify-between text-black font-bold'>
            Subtotal
            <span>36.000</span>
        </div>
        <Link to={'/checkout'} className='orange-button hover:underline item-scale'>CHECKOUT</Link>
    </>
)


const Navbar = ({ totalItem }) => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [cartOpen, setCartOpen] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/search?q=${inputValue}`)
    }

    return (
        <nav className='bg-primary1 flex flex-row py-0 items-center justify-between fixed w-full top-0 z-40'>
            <NavLink to="/dashboard" className='inline-item text-xl gap-3 mx-3'>
                <img src={tasteTech} alt="logo" className='h-28' />
            </NavLink>

            <form onSubmit={(e) => handleSubmit(e)} className='bg-white opacity-70 inline-item h-10 rounded-lg w-5/12 ml-10'>
                <FiSearch className='mx-3 text-xl' />
                <input
                    type="search"
                    name='q'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Mau makan apa hari ini?"
                    autoComplete='off'
                    className='text-xl placeholder:text-lg flex-1' />
            </form>

            {localStorage.token ?
                <div className='relative inline-flex items-center text-white'>
                    <button onClick={() => setCartOpen(!cartOpen)} className="inline-item hover:opacity-80 relative">
                        Pesanan Anda
                        <img src={shopCart} alt="shop-cart" className='relative' />
                        {totalItem > 0 &&
                            <div className={`bg-yellow-600 w-5 h-5 rounded-full absolute right-0 top-0 text-white font-bold flex items-center justify-center`}>{totalItem}</div>}
                    </button>
                    <NavLink
                        to="/profile"
                        className="w-16 h-16 rounded-full bg-cover bg-center ml-5 hover:opacity-80 mx-3"
                        style={{ backgroundImage: `url(${pp})` }}>

                    </NavLink>

                    {cartOpen &&
                        <div className='absolute w-[24.5rem] bg-glass right-0 top-[92px] px-4 flex flex-col '>
                            {totalItem > 0 ?
                                <OrderList />
                                : <div className='flex items-center justify-center h-[70vh]'>
                                    <p className='text-black text-2xl opacity-80'>Tidak ada barang di keranjang. . .</p>
                                </div>}
                        </div>
                    }
                </div>
                :
                <div className='mx-12 flex flex-row gap-8 text-white'>
                    <button onClick={() => navigate('/login')} className='bg-primary2 px-6 py-2 rounded-2xl text-2xl font-bold'>Login</button>
                    <button onClick={() => navigate('/register')} className='bg-primary2 px-6 py-2 rounded-2xl text-2xl font-bold'>Signup</button>
                </div>
            }
        </nav>
    )
}

export default Navbar