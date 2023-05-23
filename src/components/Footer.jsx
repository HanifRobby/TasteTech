
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GooglePlay, AppStore, tasteTech } from '../assets'

const Footer = () => {
    return (
        <footer className='bg-primary1 w-full flex flex-row justify-around py-4 text-white absolute'>
            <div>
                <p className='font-bold ml-2'>Juga tersedia di</p>
                <div className='inline-flex items-center'>
                    <img src={GooglePlay} className="h-14" />
                    <img src={AppStore} className="h-10" />
                </div>
            </div>

            <div className='center'>
            <img src={tasteTech} alt="logo" className='h-36' />
            </div>

            <div className='text-right'>
                <p className='text-xl mb-3'>Social Media</p>
                <div className='inline-flex gap-2 text-3xl'>
                    <a className='hover:opacity-80 hover:scale-105' href={'https://www.instagram.com/nauvalfhrza'}>
                        <FaFacebookF />
                    </a>
                    <a className='hover:opacity-80 hover:scale-105' href={'https://www.instagram.com/nauvalfhrza'}>
                        <FaTwitter />
                    </a>

                    <a className='hover:opacity-80 hover:scale-105' href={'https://www.instagram.com/nauvalfhrza'}>
                        <FaInstagram />
                    </a>
                </div>
                <div className='flex flex-row gap-4 mt-2'>
                    <Link to={'#'} className="underline text-sm hover:opacity-90">
                        Kebijakan Privasi
                    </Link>
                    <Link to={'#'} className="underline text-sm hover:opacity-90">
                        Syarat dan Ketentuan
                    </Link>
                    <Link to={'#'} className="underline text-sm hover:opacity-90">
                        Atribusi Data
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer