import { Navbar } from "../components"
import { Map, Driver, bike, chatBubble } from "../assets"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaCopy } from "react-icons/fa"

const ChatSvg = () => (
    <svg width="60" height="60" viewBox="0 0 119 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M91.9028 79.0931C98.3795 73.4252 102.047 65.8703 102.047 58.0304C102.047 49.6985 98.0745 41.9064 90.8615 36.088C83.8414 30.4271 74.5493 27.3091 64.6957 27.3091C54.8421 27.3091 45.55 30.4271 38.531 36.0884C31.318 41.9064 27.3457 49.6985 27.3457 58.0304C27.3457 66.3623 31.318 74.1545 38.531 79.9729C45.55 85.6342 54.8421 88.752 64.6957 88.752C66.0087 88.752 67.3297 88.6951 68.6397 88.582L70.8778 90.4868C78.5879 97.0472 88.4481 100.659 98.6502 100.659H102.046V93.5623L101.051 92.586C97.1283 88.7225 94.0195 84.1375 91.9028 79.0931ZM75.3254 85.4473L70.8347 81.6254L69.3373 81.8056C67.7973 81.9906 66.2472 82.0833 64.6957 82.0834C47.8458 82.0834 34.1366 71.2932 34.1366 58.0304C34.1366 44.7676 47.8458 33.9773 64.6957 33.9773C81.5456 33.9773 95.2548 44.7674 95.2548 58.0304C95.2548 64.6382 91.8975 70.8071 85.8014 75.4006L83.8459 76.8741L84.7482 79.382C86.5974 84.5039 89.3154 89.2818 92.7874 93.5137C86.3217 92.4539 80.2792 89.6627 75.3254 85.4473Z" fill="#EC9F05" />
        <path d="M9.5584 63.458C12.7368 59.5074 15.2323 55.0707 16.9452 50.3252L17.8408 47.8299L15.8869 46.3574C10.1384 42.0261 6.97255 36.2126 6.97255 29.9881C6.97255 17.4803 19.9196 7.30441 35.8339 7.30441C47.5414 7.30441 57.6427 12.8119 62.165 20.7033C63.0048 20.6633 63.8481 20.6408 64.6953 20.6408C66.3968 20.6408 68.0828 20.7218 69.7532 20.884C68.0056 16.4382 64.9705 12.3797 60.7977 9.01438C54.0998 3.6117 45.2351 0.63623 35.8339 0.63623C26.4327 0.63623 17.5681 3.6117 10.8697 9.01438C3.97733 14.5738 0.181641 22.0223 0.181641 29.9881C0.181641 37.4481 3.6518 44.6362 9.78441 50.0433C7.78309 54.7725 4.85878 59.0715 1.1763 62.698L0.181641 63.6745V70.6521H3.5771C9.85595 70.6514 16.0484 69.2156 21.6645 66.4585C21.0486 64.1666 20.6878 61.8158 20.5883 59.4475C17.1797 61.4092 13.4461 62.7667 9.5584 63.458Z" fill="#EC9F05" />
        <ellipse cx="96.6118" cy="64.6507" rx="21.7309" ry="21.3382" fill="#EB0000" />
        <path d="M95.9531 71.3135V57.1935H99.0731V71.3135H95.9531ZM93.2331 59.8535V57.1935H98.8731V59.8535H93.2331Z" fill="white" />
    </svg>

)

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
                    <div className={`${bottom ? "absolute" : "fixed"} bottom-10 h-60 w-[50%] bg-primary2 rounded-xl py-5 px-11 flex gap-7`}>
                        <div className="text-white font-semibold flex flex-col w-36 text-center justify-between">
                            <div className="w-full h-36 rounded-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${Driver})` }}></div>
                            <p className="text-2xl">N 3451 MK</p>
                        </div>
                        <div className="flex-1 text-end flex flex-col gap-5">
                            <Link to={'#'} className="underline text-white">Rincian Pesanan</Link>
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
                    <ChatSvg />
                </button>

            </div>
        </div>
    )
}

export default Delivery