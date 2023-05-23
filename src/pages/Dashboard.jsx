import { Navbar, Card } from "../components"
import { FavMenu } from "../assets/DummyData/FavMenu";
import { Category  } from "../assets/DummyData/Category";
import { Fitur } from "../assets/DummyData/fitur";
import { NavLink, Navigate } from "react-router-dom";
import { promo, allMenu, location, RotiBakar } from "../assets";
import { Promo } from "../assets/DummyData/Promo";

const DisplayCard = () => (
    <div className='flex flex-row gap-6 mt-1 justify-center flex-wrap mb-10'>
        {FavMenu.map((menu, index) => (
            <Card key={'dMenu-' + index} menu={menu} />
        ))}
    </div>
)

const DisplayCategory = () => (
    <div className='flex flex-row gap-20 mt-1 flex-wrap justify-center'>
        {Category.map((menu, index) => (
            <div className="flex flex-col mb-10" key={"category-" + index}>
                <NavLink
                    to="#"
                    className="w-16 h-16 rounded-full my-2 bg-cover bg-center hover:opacity-80 hover:scale-105"
                    style={{ backgroundImage: `url(${menu.image})` }}>
                </NavLink>
                <h5>{menu.name}</h5>
            </div>
        ))}
    </div>
)

const DisplayPromo = () => (
    <div className="flex flex-row justify-center gap-20 text-white">
        {Promo.map((promo) => (
            <div key={promo.code} className="flex flex-row relative left-5 text-right">
                <div
                    className="absolute left-[-70px] w-32 h-32 rounded-full my-2 bg-cover bg-center "
                    style={{ backgroundImage: `url(${RotiBakar})` }}>
                </div>
                <div className="font-bold flex flex-col bg-primary2 rounded-2xl w-72 text-4xl items-end justify-between">
                    <div className="w-1/2 text-center flex flex-col mr-5 mt-2">
                        DISKON <br />
                        {promo.disscount}%
                        <span className="font-semibold text-lg">Kode: {promo.code}</span>
                    </div>
                    <span className="font-normal text-sm opacity-70 self-start ml-10 mb-3">*{promo.condition}</span>
                </div>
            </div>
        ))}
    </div>
)


const Dashboard = () => {

    return (
        <div className=" bg-body center pb-10">
            <Navbar />
            <div className="w-2/3 pt-20">
                <div className="flex flex-row bg-primary2 h-32 mt-12 w-4/5 rounded-2xl justify-evenly">
                    {Fitur.map((data, index) => (
                    <div className=" rounded-md hover:opacity-90 hover:scale-105 flex flex-col text-white cursor-pointer font-bold">
                        <img src={data.img} alt="" className="my-2 h-[4.5rem] w-[4.5rem]" />
                        {data.name}
                    </div>
                    ))}
                </div>
                <h3 className="text-3xl font-bold text-white my-10">REKOMENDASI</h3>
                <DisplayCard />

                <h3 className="text-white font-bold text-2xl text-start ml-3">KATEGORI PILIHAN</h3>
                <DisplayCategory />

                <h3 className="text-2xl font-bold text-white my-4 text-start ml-3">DEKAT ANDA</h3>
                <DisplayCard />

                <h3 className="text-2xl font-bold text-white my-4 text-start ml-3">PROMO</h3>
                <DisplayPromo />

            </div>
        </div>
    )
}


export default Dashboard