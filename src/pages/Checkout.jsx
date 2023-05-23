import { Navbar } from "../components"
import { NasiCampur, EsTeh } from "../assets"
import { useState } from "react"
import { RiArrowDownSLine } from 'react-icons/ri'
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const navigate = useNavigate();
    const [payment, setPayment] = useState(0);
    const [open, setOpen] = useState();
    const [alamat, setAlamat] = useState(sessionStorage.getItem('alamat') || '')
    const [value, setValue] = useState('Gosend');
    
    const paymentOption = ["Gopay", "Shopeepay" , "OVO"];
    const deliveryOption = ["Gosend", "GrabExpress"];

    function handleSubmit(e){
        e.preventDefault();
        navigate('/delivery')
    }

    return (
        <div className="bg-beige">
            <Navbar />
            <form method="GET" onSubmit={(e) => handleSubmit(e)} className="pt-32 mx-24 flex flex-row gap-9">
                <div className="flex flex-col gap-9 w-[70%] min-h-[50vh]">
                    <div className="p-5 bg-primary2 w-full min-h-[65vh] rounded-md">
                        <h5 className="text-white text-3xl">Pesanan Anda</h5>
                        <div className="my-4 flex flex-row gap-4">
                            <div className="w-20 h-20 rounded-full bg-cover bg-center hover:opacity-80"
                                style={{ backgroundImage: `url(${NasiCampur})` }}>
                            </div>
                            <div className="flex flex-row bg-white h-20 rounded-lg flex-1 text-primary2 justify-between items-center px-4 text-lg">
                                <div className='text-start min-w-[30%]'>
                                    Nasi Campur Lengkap
                                    <p>15.000</p>
                                </div>
                                <span>x2</span>
                                <p className="min-w-[15%] text-end">30.000</p>
                            </div>
                        </div>
                        <div className="my-4 flex flex-row gap-4">
                            <div className="w-20 h-20 rounded-full bg-cover bg-center hover:opacity-80"
                                style={{ backgroundImage: `url(${EsTeh})` }}>
                            </div>
                            <div className="flex flex-row bg-white h-20 rounded-lg flex-1 text-primary2 justify-between items-center px-4 text-lg">
                                <div className='text-start min-w-[30%]'>
                                    Es teh Manis
                                    <p>3.000</p>
                                </div>
                                <span>x1</span>
                                <p className="min-w-[15%] text-end">3.000</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row w-full justify-between items-center px-5 font-bold text-xl bg-primary2 py-3 rounded-md text-white">
                        Jasa Pengiriman
                        <div className="relative">
                            <button type="button" onClick={() => setOpen(!open)} className={`bg-white font-normal text-primary2 flex items-center w-56 px-4 py-2 justify-between ${open ? 'rounded-t-md': 'rounded-md'}`}>
                                {value}
                            <RiArrowDownSLine className={`text-3xl ${open && 'rotate-180'}`}/>
                            </button>
                            <div name="delivery" className={`${open ? 'block' : 'hidden'} option-container absolute bg-white w-full`}>
                                {deliveryOption.map((option) => (
                                    <option
                                        key={option}
                                        onClick={(e) => {
                                            setValue(e.currentTarget.value)
                                            setOpen(false)}} 
                                        className="option bg-primary2"
                                        >{option}
                                    </option>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-primary2 p-4 rounded-md text-white">
                        <label htmlFor="Alamat" className="font-bold my-2">Alamat</label>
                        <input
                            placeholder="Jl. Keputih 112, Surabaya"
                            type="text"
                            value={alamat}
                            onChange={(e) => setAlamat(e.target.value)}
                            required
                            className="border-2 p-2 text-black"/>
                        <label htmlFor="Keterangan" className="font-bold my-2 text-white">Keterangan</label>
                        <textarea 
                            placeholder="Tambahkan keterangan alamat" 
                            name="Keterangan" 
                            cols="30" rows="3" 
                            className="resize-none border-2 p-2 text-black"></textarea>
                    </div>
                </div>

                <div className="bg-white flex-1 p-4 text-lg mb-4 flex flex-col justify-center rounded-md">
                    <div className="min-h-[100vh]">
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
                        <div className='w-full bg-orange-600 h-[1px] my-3'></div>
                        <div className='flex justify-between text-black font-bold'>
                            Subtotal
                            <span>36.000</span>
                        </div>
                        <div className='flex justify-between text-primary2 font-bold mt-2'>
                            Bonus Poin
                            <span>36</span>
                        </div>
                        <div className="font-bold mt-5 text-center">
                            <div className="text-start">Masukan Kode Promo</div>
                            <input type="text" maxLength={6} className="w-2/3 border-2 rounded-md p-1 my-2 border-gray-300 text-center"/>
                        </div>
                        <div className="w-full my-4">
                            <div className="bg-primary2 w-full py-2 pl-2 text-white rounded-t-md">Pilih Pembayaran</div>
                            <div className="option-container">
                                {paymentOption.map((item, index) => (
                                    <div key={item} onClick={()=> setPayment(index)} className={`option w-full text-start ${payment === index ? 'bg-[#F2F2F2] choose font-bold' : 'bg-[#F5F5F5]'}`}>{item}</div>
                                ))}
                            </div>
                        </div>
                        <div className="font-bold">
                            <label htmlFor="no telp">No Telepon Pembayaran</label>
                            <div className="border-2 border-gray-300 font-normal flex">
                                <span className="border-r-2 border-gray-300 py-3 px-2">+62</span>
                                <input type="tel" name="no telp" placeholder="XXX-XXXX-XXXX" maxLength={11} className="py-2 px-2 flex-1" required/>
                            </div>
                        </div>
                    </div>

                    <button className='orange-button hover:underline item-scale'>CHECKOUT</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout