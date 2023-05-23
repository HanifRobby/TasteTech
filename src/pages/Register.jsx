import background from '../assets/RegisBg.png'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div
            className='bg-body w-full h-screen bg-cover bg-no-repeat flex items-center justify-center'
            style={{ backgroundImage: `url(${background})` }}>
            <div className='bg-primary2 min-w-[600px] h-[90%] rounded-[49px] box-shadow text-white relative'>
                <h2 className='font-bold text-5xl text-center m-10 text-shadow'>Register</h2>
                <form action="" className='flex flex-col w-[80%] mx-auto mt-14 gap-5'>
                    <div className='flex flex-col'>
                        <label htmlFor="FullName" className='label'>Full Name</label>
                        <input
                            type="text"
                            value={''}
                            placeholder="Masukan nama panjang"
                            onChange={''}
                            autoComplete="off"
                            required
                            className='input' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='label'>Email</label>
                        <input
                            type="email"
                            value={''}
                            placeholder="Masukan email"
                            onChange={''}
                            autoComplete="off"
                            required
                            className='input' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="password" className='label'>Password</label>
                        <input
                            type="password"
                            value={''}
                            placeholder="Masukan password"
                            onChange={''}
                            autoComplete="off"
                            className='input' />
                    </div>

                    <div className='flex flex-col'>
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
                    </div>

                    <div className='flex my-4 gap-4'>
                        <input type="checkbox" className='w-4' />
                        <label htmlFor="syarat dan ketentuan" className='ml-2 text-shadow text-xl max-w-[300px]'>Saya sudah membaca syarat dan ketentuan</label>
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