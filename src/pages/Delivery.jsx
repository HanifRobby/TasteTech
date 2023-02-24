import { Navbar } from "../components"
import { Map, Driver, bike, chatBubble } from "../assets"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaCopy } from "react-icons/fa"

const Delivery = () => {
    const [bottom, setBottom] = useState(false);
    const [copy, setCopy] = useState(false)

    function handleScroll() {
        if (window.scrollY > 160) {
            setBottom(true)
        } else {
            setBottom(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCopy(false)
        }, 1900);
        
        return () => clearInterval(slideInterval);
    }, [copy])

    return (
        <div className="bg-beige">
            <Navbar />
            <div className="pt-24 h-[120vh] flex flex-col relative tes">
                <div className="h-[90vh] w-[80%] m-auto">
                    {/* should be real map soon */}
                    <img src={Map} alt="Map" className="w-full h-full rounded-lg" />
                </div>

                <div className="flex justify-center">
                    <div className={`${bottom ? "absolute" : "fixed"} bottom-10 h-60 w-[50%] driver-info-container py-5 px-11 flex gap-7`}>
                        <div className="text-white font-semibold flex flex-col w-36 text-center justify-between">
                            <div className="w-full h-36 rounded-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${Driver})` }}></div>
                            <p className="text-2xl">N 3451 MK</p>
                        </div>
                        <div className="flex-1 text-end flex flex-col gap-5">
                            <Link to={'#'} className="underline text-beige">Rincian Pesanan</Link>
                            <div className="flex items-center gap-2">
                                <img src={bike} alt="bike icon" />
                                <div className="text-center font-bold text-3xl text-white">
                                    Makanan Udah Jadi!
                                    <p className="font-normal text-lg">Kurir segera ke lokasi kamu</p>
                                </div>
                            </div>
                            <div className="w-full bg-beige h-1"></div>

                            <div className="flex justify-between text-white text-2xl font-semibold">
                                <p>Ahmad Wijaya</p>
                                <div className="flex gap-2">
                                    <div id="driver-phone-number" className="items-center">+62-823-7583-8928</div>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(document.getElementById("driver-phone-number").innerText);
                                            setCopy(true)
                                        }} className="">
                                        <FaCopy />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div
                        className={`${bottom ? "absolute" : "fixed"} ${copy ? 'opacity-100 animate-slowfade' : 'opacity-0'}
                     transition-all bottom-10 bg-black text-white px-4 py-2 rounded-lg cursor-default`}>Berhasil dicopy</div>
                </div>

                <button className={`${bottom ? "absolute" : "fixed"} bottom-4 right-16 w-24 h-24 bg-white 
                rounded-full chatBubble-shadow flex items-center justify-center hover:opacity-90`}>
                    <img src={chatBubble} alt="chat-icon" className="w-12 h-12" />
                </button>

            </div>
        </div>
    )
}

export default Delivery