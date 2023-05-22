import background from '../assets/RegisBg.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from 'react'
import loginWithGoogle from '../firebase/googleAuth'
import { getAuth } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'

const account = {
    token: "id",
    email: 'admin@gmail.com',
    password: 'admin',
}


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [remember, setRemember] = useState(false)

    const navigate = useNavigate('');

    function handleSubmit(e) {
        e.preventDefault();

        if (email.toLowerCase() === account.email && password === account.password) {
            navigate('/dashboard');
        } else {
            setError(true)
        }
    }

    function handleLoginWithGoogle() {
        loginWithGoogle(() => navigate('/dashboard'), console.log("fail"));
    }

    return (
        <div
            className='bg-primary1 w-full h-screen bg-cover bg-no-repeat flex items-center justify-center'
            style={{ backgroundImage: `url(${background})` }}>
            <div className='bg-primary2 w-[60%] h-[80%] rounded-[49px] box-shadow text-white relative'>
                <h2 className='font-bold text-4xl text-center m-10 text-shadow'>Masuk</h2>
                <form onSubmit={handleSubmit} className='flex flex-col w-[90%] mx-auto mt-14 gap-2'>
                    {error && <p className='text-red-900 font-bold text-lg'>Email atau password yang dimasukan salah</p>}
                    <label htmlFor="email" className='label'>Email</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Masukan email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        required
                        className='input' />

                    <label htmlFor="password" className='label'>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Masukan password"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                        className={`input ${password.length > 0 && 'font-bold text-2xl'}`} />

                    <div className='flex mb-4'>
                        <input onChange={(e) => e.target.checked ? setRemember(true) : setRemember(false)} type="checkbox" className='w-4' />
                        <label htmlFor="syarat dan ketentuan" className='ml-2 text-shadow'>Ingat Saya</label>
                    </div>

                    <button type='button' onClick={() => handleLoginWithGoogle()} className='flex flex-row gap-10 bg-white text-gray-500 px-5 py-4 m-auto w-full items-center text-end text-lg font-semibold'>
                        <FcGoogle className='text-3xl' />
                        Masuk Dengan Google
                    </button>

                    <div className='absolute bottom-10 right-10 text-end'>
                        <p>Belum memiliki akun? <button type='button' onClick={() => navigate('register')} className='underline hover:opacity-90'>Buat Akun</button></p>
                        <button type='submit' className='regis-button my-2'>Masuk</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login