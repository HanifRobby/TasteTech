import { Navbar, Card, OrderCard } from "../components"
import { MdOutlineDone } from "react-icons/md"
import { GoStar } from "react-icons/go"
import { FaSearch } from "react-icons/fa"
import { PakAziz, locationRange, food, ProfileShadow } from "../assets"
import { Food } from "../assets/DummyData/Food"
import { Drink } from "../assets/DummyData/Drink"
import { useState } from "react"

const MenuResto = () => {
    const [totalItem, setTotalItem] = useState(0);

    return (
        <div className="bg-beige pt-20">
            <Navbar totalItem = {totalItem}/>
            <div className="mt-20 mx-20 py-5">
                <div className="flex flex-row justify-between">
                    <div className="w-[60vw] flex flex-col justify-evenly">
                        <div className="orange-gradient w-48 h-10 flex text-white font-bold justify-center items-center gap-2 rounded-lg">
                            <MdOutlineDone className="text-2xl" />
                            Power Resto
                        </div>
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
                                <hr className="h-full w-1 bg-black" />
                                <div className="flex flex-col justify-center items-center font-bold mx-8">
                                    <img src={locationRange} alt="" className="w-16" />
                                    <p>1.79 KM</p>
                                    <span className="font-normal">Estimasi Waktu 20 menit</span>
                                </div>
                                <hr className="h-full w-1 bg-black" />
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
                        <img src={ProfileShadow} alt="" className="absolute bottom-5 left-12 z-0" />
                    </div>
                </div>
                
                <hr className="bg-dark-green h-2 w-full rounded-lg" />
                <form className="bg-white my-10 w-1/3 rounded-2xl flex flex-row items-center mx-auto">
                    <div className="flex flex-row items-center">
                        <FaSearch className="text-2xl mx-4" />
                        <hr className="bg-black h-10 w-[3px] rounded-3xl" />
                    </div>
                    <input type="search" className="px-2 pl-4 w-full bg-transparent text-2xl" />
                </form>
                <hr className="bg-dark-green h-2 w-full rounded-lg" />

                <h5 className="font-bold text-3xl my-4">Makanan</h5>
                <div className="flex flex-row flex-wrap gap-10">
                    {Food.map((food) => (
                        <OrderCard 
                            key={food.id}
                            id={food.id}
                            name={food.name} 
                            price={food.price} 
                            image={food.image} 
                            setTotalItem = {(totalItem) => setTotalItem(totalItem)}
                            totalItem = {totalItem}/>
                    ))}
                </div>

                <hr className="bg-dark-green h-2 w-full rounded-lg mt-8" />

                <h5 className="font-bold text-3xl my-4">Minuman</h5>
                <div className="flex flex-row flex-wrap gap-10">
                    {Drink.map((drink, index) => (
                        <OrderCard 
                            key={drink.id}
                            id={drink.id}
                            name={drink.name} 
                            price={drink.price} 
                            image={drink.image} 
                            setTotalItem = {(totalItem) => setTotalItem(totalItem)}
                            totalItem = {totalItem}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuResto