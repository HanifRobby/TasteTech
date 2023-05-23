import { landingPageImg } from '../assets'
import { NavLink, Link } from 'react-router-dom'
import { Card, Navbar } from '../components'
import { FavMenu } from '../assets/DummyData/FavMenu'

const DisplayCard = () => (
    <div className='flex flex-row gap-32 mt-5 flex-wrap'>
        {FavMenu.map((menu, index) => (
            <Card key={'FavMenu-' + index} menu={menu} />
        ))}
    </div>
)

const LandingPage = () => {
    return (
        <div className='w-full bg-body'>
            <Navbar />
            <section className='pt-32 flex px-10 items-center gap-32'>
                <div className='px-4 py-8 bg-primary2 rounded-xl'>
                    <img src={landingPageImg} className='h-96' />
                    <p className='text-white font-bold text-2xl text-center max-w-[400px]'>“Good food is not just about filling your belly, it's about feeding your soul.”</p>
                </div>
                <div className='text-white flex-1 flex flex-col items-center justify-center'>
                    <h3 className='font-bold text-7xl text-justify'>TasteTech</h3>
                    <p className='max-w-[100%] whitespace-pre-wrap text-center text-2xl mt-10'>
                        {
                            `Pada tahun 2021 , UMKM Indonesia telah berhasil berkontribusi sebesar 61.1% terhadap Perokonomian Nasional (PDB) dengan jumlah 64.2 juta unit yang tersebar pada berbagai sektor, termasuk dagang makanan. 

                            TaseTech percaya  UMKM dapat menjadi kunci dalam bangkitnya perokonomian Indonesia yang lebih baik dan lebih kuat.`
                        }
                    </p>
                </div>
            </section>
            <section className='flex flex-col text-white mx-32 pb-24'>
                <div className='m-auto flex flex-col justify-center items-center'>
                    <h2 className='text-7xl text-white font-bold mt-20'>BEST SELLER</h2>
                    <div className='flex flex-row justify-between w-full'>
                        <p className='text-xl mt-5 font-bold'>Lowokwaru, Malang</p>
                        <Link to={'/login'} className='text-xl mt-5 underline text-white bg-primary2 px-5 rounded-md font-bold hover:opacity-90'>Lihat Menu Lain</Link>
                    </div>
                    <DisplayCard />
                </div>
            </section>
        </div>
    )
}

export default LandingPage