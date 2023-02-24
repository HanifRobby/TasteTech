import { Navbar, RestoCard } from "../components"
import { Header } from "../assets"
import { FaSortAmountDownAlt, FaFilter } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md";
import { AllResto } from "../assets/DummyData/AllResto";

const DisplayCard = () => (
    <div className="flex flex-row flex-wrap gap-5">
        {AllResto.map((resto) => (
            <RestoCard resto={resto}/>
        ))}
    </div>
)

const FindResto = () => {
    return (
        <section className="mt-24 bg-beige">
            <Navbar />
            <div style={{ backgroundImage: `url(${Header})` }} className="h-96 relative bg-cover">
                <h3 className="font-bold text-white text-8xl absolute bottom-0 mb-3 ml-40">Telusuri Resto</h3>
            </div>

            <div className="bg-dark-green h-2"></div>

            <div className="mt-10 mx-40 pb-10">
                <div className="flex justify-between">
                    <div className="w-1/4">
                        <div className="flex flex-row gap-10">
                            <button className="item-filter">
                                Urut Sesuai
                                <FaSortAmountDownAlt />
                            </button>
                            <button className="item-filter">
                                Filter
                                <FaFilter />
                            </button>
                        </div>
                        <hr className="h-1 w-full bg-dark-green my-4" />
                    </div>

                    <div className="flex items-center text-2xl font-bold">
                        <MdLocationOn className="text-dark-green" />
                        Lowokwaru, Malang</div>
                </div>
                <DisplayCard />
            </div>
        </section>
    )
}

export default FindResto