import background from '../assets/LandPageBg.jpg'
import { NavLink, Link } from 'react-router-dom'
import { Card } from '../components'
import { FavMenu } from '../assets/DummyData/FavMenu'

const DisplayCard = () => (
    <div className='flex flex-row gap-6 mt-1'>
        {FavMenu.map((menu, index) => (
            <Card key={'FavMenu-' + index} menu={menu} />
        ))}
    </div>
)

const LandingPage = () => {
    return (
        <div className='w-full'>
            <section style={{ backgroundImage: `url(${background})` }} className="h-screen bg-cover flex flex-col justify-between">
                <div className='bg-primary1 opacity-60 h-[10%] z-20'></div>
                <div className='absolute h-screen bg-black w-full opacity-40'></div>
                <div className='text-center text-white w-[65%] self-center z-20'>
                    <h1 className='font-bold text-7xl'>BERSAMA DUKUNG UMKM</h1>
                    <p className='text-3xl mt-10 text-center'>
                        Pada tahun 2021, UMKM Indonesia telah berhasil berkontribusi sebesar 61.1% terhadap Perokonomian Nasional (PDB) dengan jumlah 64.2 juta unit yang tersebar pada berbagai sektor, termasuk dagang makanan.
                    </p>
                    <p className='text-3xl mt-10 text-center'>
                        KulinerKita percaya  UMKM dapat menjadi kunci dalam bangkitnya perokonomian Indonesia yang lebih baik dan lebih kuat.
                    </p>

                    <div className='mt-20'>
                        <NavLink to={`/register`} className="mr-3 bg-light-green px-24 py-2 rounded-3xl text-3xl hover:opacity-90">
                            Daftar
                        </NavLink>
                        <NavLink to={'/login'} className="ml-3 bg-transparent px-[5.75rem] py-1 rounded-3xl text-3xl border-solid border-4 border-light-green hover:opacity-90 hover:bg-light-green">
                            Masuk
                        </NavLink>
                    </div>
                </div>
                <div className='bg-primary1 opacity-60 h-[10%] z-20'></div>
            </section>

            <section className='h-screen bg-body flex flex-col'>
                <div className='m-auto'>
                    <h2 className='text-4xl font-bold'>Menu Favorit Minggu ini</h2>
                    <div className='flex flex-row justify-between'>
                        <p className='text-xl mt-5 font-bold'>Lowokwaru, Malang</p>
                        <Link to={'/login'} className='text-xl mt-5 underline text-dark-green font-bold hover:opacity-90'>Lihat Menu Lain</Link>
                    </div>
                    <DisplayCard />
                </div>
            </section>
        </div>
    )
}

export default LandingPage