import background from '../assets/RegisBg.png'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div
            className='bg-body w-full h-screen bg-cover bg-no-repeat flex items-center justify-center'
            style={{ backgroundImage: `url(${background})` }}>
            <div className='bg-primary2 w-[60%] h-[80%] rounded-[49px] box-shadow text-white relative'>
                <h2 className='font-bold text-4xl text-center m-10 text-shadow'>Register</h2>
                <form action="" className='flex flex-col w-[60%] mx-auto mt-14 gap-2'>
                    <label htmlFor="email" className='label'>Email</label>
                    <input
                        type="email"
                        value={''}
                        placeholder="Masukan email"
                        onChange={''}
                        autoComplete="off"
                        required
                        className='input' />

                    <label htmlFor="password" className='label'>Password</label>
                    <input
                        type="password"
                        value={''}
                        placeholder="Masukan password"
                        onChange={''}
                        autoComplete="off"
                        className='input' />

                    <label htmlFor="telephone" className='label'>Nomor Telepon</label>
                    <input
                        type="tel"
                        name="telphone"
                        placeholder="08XX XXXX XXXX"
                        pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                        maxlength="12"
                        title="Ten digits code"
                        required
                        className='input' />

                    <div className='flex my-4'>
                        <input type="checkbox" className='w-4' />
                        <label htmlFor="syarat dan ketentuan" className='ml-2 text-shadow'>Saya sudah membaca syarat dan ketentuan</label>
                    </div>

                    <div className='flex'>
                        <input type="checkbox" className='w-6' />
                        <label htmlFor='pengiriman email terkait produk' className='ml-2 text-shadow'>Saya ingin menerima email promosi dan berita yang berkaitan dengan (NAMA PRODUK)</label>
                    </div>

                    <div className='absolute bottom-10 right-10 text-end'>
                        <p>Sudah memiliki akun? <Link to={'/login'} className='underline hover:opacity-90'>Masuk</Link></p>
                        <button className='regis-button my-2'>Registrasi</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register