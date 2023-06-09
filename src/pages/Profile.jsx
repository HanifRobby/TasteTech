import { Navbar, ProfileButton } from "../components"
import { UserProfile, ProfileMap, pp, promoCard } from "../assets"
import { FaCamera, FaUserAlt, FaKey, FaLock, FaEye, FaEyeSlash, FaCoins } from 'react-icons/fa'
import { IoNotifications, IoLocationSharp } from 'react-icons/io5'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { RiArrowDownSLine } from 'react-icons/ri'
import { getAuth } from "firebase/auth"
import { ImTrophy } from "react-icons/im"

const NavItem = [
    {
        name: "Akun",
        icon: FaUserAlt,
        url: 'akun'
    },
    {
        name: "Notifikasi",
        icon: IoNotifications,
        url: 'notifikasi'
    },
    {
        name: "Password",
        icon: FaKey,
        url: 'password'
    },
    {
        name: "Bonus Poin",
        icon: FaCoins,
        url: 'bonus'
    },
]

function handleSubmit(e) {
    e.preventDefault()
    sessionStorage.setItem()
}

const Account = () => {

    const [Fname, setFname] = useState(sessionStorage.getItem('fname') || '');
    const [Lname, setLname] = useState(sessionStorage.getItem('lname') || '');
    const [phoneNumber, setPhoneNumber] = useState('085882450727');
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState(sessionStorage.getItem('alamat') || '')

    function handleSubmit(e) {
        e.preventDefault()
        sessionStorage.setItem('fname', Fname)
        sessionStorage.setItem('lname', Lname)
        sessionStorage.setItem('alamat', alamat)
    }

    return (
        <form id="0" onSubmit={(e) => handleSubmit(e)} className="h-full">
            <h3 className="text-5xl font-bold pt-14">Pengaturan Akun</h3>
            <div className="grid-container mt-9">
                <div className="flex flex-col input1">
                    <label className="font-bold" htmlFor="nama depan">Nama depan</label>
                    <input
                        type="text"
                        value={Fname}
                        onChange={(e) => setFname(e.target.value)}
                        className="border-2 border-gray-400 p-2"
                        placeholder="Masukan nama depan" />
                </div>
                <div className="flex flex-col input2">
                    <label htmlFor="nama belakang">Nama Belakang</label>
                    <input
                        type="text"
                        value={Lname}
                        onChange={(e) => setLname(e.target.value)}
                        className="border-2 border-gray-400 p-2"
                        placeholder="Masukan nama belakang" />
                </div>
                <div className="flex flex-col input3">
                    <label htmlFor="no telp">No. Handphone</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        maxLength={12}
                        className="border-2 border-gray-400 p-2"
                        placeholder="Masukan nomor telpon" />
                </div>
                <div className="flex flex-col input4">
                    <label htmlFor="email">Alamat Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-400 p-2"
                        placeholder="Masukan email" />
                </div>
                <div className="flex flex-col input5">
                    <label htmlFor="Alamat" className="font-bold">Alamat</label>
                    <textarea
                        placeholder="Jl. Keputih 112, Surabaya"
                        name="Alamat"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        cols="30" rows="3"
                        className="resize-none border-2 p-2 border-gray-400"></textarea>
                </div>
                <div className="map">
                    <img src={ProfileMap} alt="" className="w-full" />
                    <Link to={'#'} className="text-white underline flex items-center py-2 text-lg hover:opacity-80 font-light">
                        Tunjukan titik pada peta
                        <IoLocationSharp />
                    </Link>
                </div>
            </div>
            <ProfileButton />
        </form>
    )
}

const Notification = () => {
    function handleSubmit(e) {
        e.preventDefault()
    }


    const [emailOpen, setEmailOpen] = useState(false);
    const [browserOpen, setBrowserOpen] = useState(false);
    const [promosiOpen, setPromosiOpen] = useState(false);
    const [browser, setBrowser] = useState('Ya');
    const [email, setEmail] = useState('Ya');
    const [promosi, setPromosi] = useState('Ya');

    const choose = ["Ya", "Tidak"];

    return (
        <form id="1" onSubmit={(e) => handleSubmit(e)} className="h-full">
            <h3 className="text-5xl font-bold pt-14">Notifikasi</h3>
            <div className="flex justify-between items-center mt-14">
                <div className="font-bold text-lg">
                    Notifikasi Browser
                    <p className="font-normal">Anda akan menerima notifikasi ketika status pesanan anda berubah.</p>
                </div>
                <div className="relative">
                    <button type="button" onClick={() => setBrowserOpen(!browserOpen)} className={`dropdown ${browserOpen ? 'rounded-t-md' : 'rounded-md'} !text-primary2`}>
                        {browser}
                        <RiArrowDownSLine className={`${browserOpen && 'rotate-180'}`} />
                    </button>
                    <div name="notif-option" className={`${browserOpen ? 'block' : 'hidden'} border-2 text-primary2 cursor-pointer absolute bg-white w-full`}>
                        {choose.map((option) => (
                            <option
                                key={option}
                                onClick={(e) => {
                                    setBrowser(e.currentTarget.value)
                                    setBrowserOpen(false)
                                }}
                                className="px-2 py-2 bg-[#F5F5F5]"
                            >{option}
                            </option>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-14">
                <div className="font-bold text-lg">
                    Notifikasi Email
                    <p className="font-normal">Anda akan menerima notifikasi yang berkaitan dengan pesanan anda yang telah selesai.</p>
                </div>
                <div className="relative">
                    <button type="button" onClick={() => setEmailOpen(!emailOpen)} className={`dropdown ${emailOpen ? 'rounded-t-md' : 'rounded-md'}`}>
                        {email}
                        <RiArrowDownSLine className={`${emailOpen && 'rotate-180'}`} />
                    </button>
                    <div name="notif-option" className={`${emailOpen ? 'block' : 'hidden'} border-2 text-primary2 cursor-pointer absolute bg-white w-full`}>
                        {choose.map((option) => (
                            <option
                                key={option}
                                onClick={(e) => {
                                    setEmail(e.currentTarget.value)
                                    setEmailOpen(false)
                                }}
                                className="px-2 py-2 bg-[#F5F5F5]"
                            >{option}
                            </option>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-14 gap-10">
                <div className="font-bold text-lg">
                    Prefrensi email promosi
                    <p className="font-normal">Anda akan menerima notifikasi  akan promosi, dan penawaran menarik lainnya yang berkaitan dengan produk KulinerKita.</p>
                </div>
                <div className="relative">
                    <button type="button" onClick={() => setPromosiOpen(!promosiOpen)} className={`dropdown ${promosiOpen ? 'rounded-t-md' : 'rounded-md'}`}>
                        {promosi}
                        <RiArrowDownSLine className={`${promosiOpen && 'rotate-180'}`} />
                    </button>
                    <div name="notif-option" className={`${promosiOpen ? 'block' : 'hidden'} border-2 text-primary2 cursor-pointer absolute bg-white w-full`}>
                        {choose.map((option) => (
                            <option
                                key={option}
                                onClick={(e) => {
                                    setPromosi(e.currentTarget.value)
                                    setPromosiOpen(false)
                                }}
                                className="px-2 py-2 bg-[#F5F5F5]"
                            >{option}
                            </option>
                        ))}
                    </div>
                </div>
            </div>
            <ProfileButton />
        </form>
    )
}

const Password = () => {
    const [view, setView] = useState(false);
    const [viewConfirm, setViewConfirm] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        setPassword('');
        setConfirmPassword('');
    }

    return (
        <form id="2" onSubmit={(e) => handleSubmit(e)} className="h-full">
            <h3 className="text-5xl font-bold pt-14">Ganti Password</h3>
            <div className="flex flex-col mt-12 gap-2">
                <label htmlFor="new-password" className="font-bold">Password Baru</label>
                <div className={`flex items-center bg-white px-2 w-72 gap-4 border-2 h-12 text-black ${password.length > 0 ? "text-3xl" : "text-xl"}`}>
                    <FaLock className="text-lg" />
                    <input
                        type={view ? "text" : "password"}
                        className={`bg-transparent ${view && "text-xl"} w-full`}
                        maxLength={16}
                        minLength={8}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukan Password" />
                    <button type="button" onClick={() => setView(!view)} className="text-xl">
                        {view ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
            </div>

            <div className="flex flex-col mt-6 gap-2">
                <label htmlFor="confirm-new-password" className="font-bold">Konfirmasi Password Baru</label>
                <div className={`flex items-center bg-white px-2 w-72 gap-4 border-2 h-12 text-black ${confirmPassword.length > 0 ? "text-3xl" : "text-xl"}`}>
                    <FaLock className="text-lg" />
                    <input
                        type={viewConfirm ? "text" : "password"}
                        className={`bg-transparent ${viewConfirm && "text-xl"} w-full`}
                        maxLength={16}
                        minLength={8}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Masukan Password" />
                    <button type="button" onClick={() => setViewConfirm(!viewConfirm)} className="text-xl">
                        {viewConfirm ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
            </div>

            {password !== confirmPassword && <span className="text-red-500">Password Tidak Cocok!</span>}
            <ProfileButton />
        </form>
    )
}

const Bonus = () => {
    return (
        <div className="w-full mt-16">
            <h3 className="text-white font-bold text-4xl">Bonus Poin</h3>
            <div className="bg-white rounded-xl w-3/5 py-4 px-4 flex items-center gap-5 mt-5">
                <div className="bg-primary2 h-24 w-24 rounded-full flex items-center justify-center">
                    <ImTrophy className="w-16 h-16" />
                </div>
                <p className="text-black font-bold text-2xl"><span className="text-primary2 mr-4">50</span> Bonus Poin</p>
            </div>
            <p className="text-white text-lg mt-10">Tukar poin anda untuk mendapatkan voucher diskon yang menarik</p>

            <div className="flex flex-wrap gap-12 mt-10">
                {[1, 2, 3, 4].map( data => (
                    <div key={data} className="bg-white flex items-center w-[45%] rounded-lg relative py-2">
                        <div className="w-28 h-28 relative">
                            <img src={promoCard} alt="" className="w-28 h-28 absolute left-[-20px]" />
                        </div>
                        <div className="flex flex-col items-center text-primary2 text-2xl">
                            <p className="font-bold">Diskon</p>
                            <p className="font-bold">35%</p>
                            <p className="font-bold">Kode: O2E74H</p>
                            <p>Minimal Pembelian</p>
                            <p>40ribu</p>
                        </div>
                        <p className="font-bold text-black text-lg absolute right-2 top-2">100 Poin</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


const Profile = () => {
    const Page = [{ name: Account }, { name: Notification }, { name: Password }, { name: Bonus }]
    const [active, setActive] = useState(0);
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem("token")
        sessionStorage.removeItem("token")
        navigate('/')
    }
    return (
        <div className="bg-body">
            <Navbar />
            <div className="pt-36 pb-14">
                <div className="flex flex-row w-[80vw] h-screen mx-auto">
                    <div className="h-full w-1/4 bg-primary2 flex flex-col justify-between ">
                        <div>
                            <Link to="#">
                                <div
                                    className="w-32 h-32 rounded-full bg-cover bg-center mx-auto my-5 group"
                                    style={{ backgroundImage: `url(${pp})` }}>
                                    <div
                                        className="group-hover:flex hidden flex-col w-full h-full rounded-full justify-center
                                        items-center text-white bg-black-glass">
                                        <FaCamera className="text-2xl" />
                                        ubah foto profile</div>
                                </div>
                            </Link>
                            <nav>
                                {NavItem.map((item, index) => (
                                    <Link
                                        to={`/profile/${item.url}`}
                                        onClick={() => setActive(index)}
                                        className={`${index === active ? 'bg-white text-primary2' : 'bg-transparent text-white'} px-4 py-5 flex items-center gap-4 text-xl font-light`}>
                                        <item.icon />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="w-full flex items-center justify-center my-10">
                            <button onClick={() => handleLogout()} className="bg-white px-4 py-2 rounded-md text-primary2 font-bold text-lg text-center">Logout</button>
                            </div>
                    </div>

                    <div className="flex-1 overflow-hidden bg-primary2/80 h-full px-20 relative">
                        {Page.map((page, index) => (
                            <div key={"page-" + index} className={`${active === index ? 'block' : 'hidden'} h-full text-white`}><page.name /></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile