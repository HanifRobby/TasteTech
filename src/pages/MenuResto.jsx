import { Navbar, Card, OrderCard } from "../components"
import { MdOutlineDone } from "react-icons/md"
import { GoStar } from "react-icons/go"
import { FaSearch } from "react-icons/fa"
import { PakAziz, locationRange, food, ProfileShadow } from "../assets"
import { Food } from "../assets/DummyData/Food"
import { Drink } from "../assets/DummyData/Drink"
import { useState } from "react"

const ShadowSvg = () => (
    <svg className="absolute bottom-5 left-12 z-0" width="400" height="400" viewBox="0 0 437 469" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M402 268C402 379.009 312.009 469 201 469C89.9908 469 0 379.009 0 268C0 156.991 89.9908 67 201 67C312.009 67 402 156.991 402 268Z" fill="#BF3100" />
        <path d="M437 104.5C437 162.214 390.214 209 332.5 209C274.786 209 228 162.214 228 104.5C228 46.7862 274.786 0 332.5 0C390.214 0 437 46.7862 437 104.5Z" fill="#BF3100" />
        <rect x="85" width="134" height="21" rx="10.5" fill="#BF3100" />
    </svg>
)

const MenuResto = () => {
    const [totalItem, setTotalItem] = useState(0);

    return (
        <div className="bg-body pt-20">
            <Navbar totalItem={totalItem} />
            <div className="mt-20 mx-20 py-5 text-white">
                <div className="flex flex-row justify-between">
                    <div className="w-[60vw] flex flex-col justify-evenly">
                        <h4 className="font-bold text-7xl my-5">RM Pak Aziz</h4>

                        <div className="w-full h-40 info-container">
                            <div className="mx-5 py-2 flex flex-row h-full">
                                <div className="flex flex-col justify-center items-center font-bold mx-8">
                                    <div className="flex items-center text-4xl">
                                        4.7
                                        <GoStar />
                                    </div>
                                    <p>50 + Penilaian</p>
                                    <span className="underline font-normal hover:opacity-80">Lihat Penilaian</span>
                                </div>
                                <div className="h-full w-1 bg-white" />
                                <div className="flex flex-col justify-center items-center font-bold mx-8">
                                    <img src={locationRange} alt="" className="w-16" />
                                    <p>1.79 KM</p>
                                    <span className="font-normal">Estimasi Waktu 20 menit</span>
                                </div>
                                <div className="h-full w-1 bg-white" />
                                <div className="flex flex-col justify-center items-center font-bold mx-8">
                                    <img src={food} alt="" className="w-16" />
                                    <p>Aneka Nasi</p>
                                    <span className="font-normal">15-25k</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="relative">
                        <div className="w-96 h-96 rounded-full my-2 bg-cover bg-center z-30 relative" style={{ backgroundImage: `url(${PakAziz})` }}></div>
                        <ShadowSvg />
                    </div>
                </div>

                {/* <div className="bg-white h-2 w-full rounded-lg" />
                <form className="bg-white my-10 w-1/3 rounded-2xl flex flex-row items-center mx-auto">
                    <div className="flex flex-row items-center">
                        <FaSearch className="text-2xl mx-4" />
                        <div className="bg-white h-10 w-[3px] rounded-3xl" />
                    </div>
                    <input type="search" className="px-2 pl-4 w-full bg-transparent text-2xl" />
                </form>
                <div className="bg-white h-2 w-full rounded-lg" /> */}

                <h5 className="font-bold text-3xl my-4">Makanan</h5>
                <div className="flex flex-row flex-wrap gap-10">
                    {Food.map((food) => (
                        <OrderCard
                            key={food.id}
                            id={food.id}
                            name={food.name}
                            price={food.price}
                            image={food.image}
                            setTotalItem={(totalItem) => setTotalItem(totalItem)}
                            totalItem={totalItem} />
                    ))}
                </div>

                <div className="bg-white h-2 w-full rounded-lg mt-8" />

                <h5 className="font-bold text-3xl my-4">Minuman</h5>
                <div className="flex flex-row flex-wrap gap-10">
                    {Drink.map((drink, index) => (
                        <OrderCard
                            key={drink.id}
                            id={drink.id}
                            name={drink.name}
                            price={drink.price}
                            image={drink.image}
                            setTotalItem={(totalItem) => setTotalItem(totalItem)}
                            totalItem={totalItem} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuResto