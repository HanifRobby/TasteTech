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
            localStorage.setItem("token", "ABCEFEASDAD12312321ASDAD")
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
            <div className='bg-primary2 min-w-[600px] h-[80%] rounded-[49px] box-shadow text-white relative'>
                <h2 className='font-bold text-4xl text-center m-10 text-shadow'>Masuk</h2>
                <form onSubmit={handleSubmit} className='flex flex-col w-[80%] mx-auto mt-14 gap-2'>
                    {error && <p className='text-red-900 font-bold text-lg'>Email atau password yang dimasukan salah</p>}
                    <label htmlFor="email" className='label'>Email</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="admin@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        required
                        className='input' />

                    <label htmlFor="password" className='label'>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="admin"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                        className={`input ${password.length > 0 && 'font-bold text-2xl'}`} />

                    <button type='button' onClick={() => handleLoginWithGoogle()} className='flex flex-row gap-8 bg-white text-gray-500 px-5 py-6 m-auto w-full items-center text-end text-lg font-semibold mt-4'>
                        <FcGoogle className='text-3xl' />
                        Masuk Dengan Google
                    </button>

                    <div className='flex items-center pt-4 gap-3'>
                        <input type="checkbox" className='w-5 h-5 cursor-pointer'/>
                        ingat saya
                    </div>

                    <div className='absolute bottom-10 right-10 text-end'>
                        <p>Belum memiliki akun? <button type='button' onClick={() => navigate('/register')} className='underline hover:opacity-90'>Buat Akun</button></p>
                        <button type='submit' className='regis-button my-2'>Masuk</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login