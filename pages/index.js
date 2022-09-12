import Image from 'next/image';
import Link from 'next/link';
import HomeActivities from '../components/HomeActivities';
import HomeBlog from '../components/HomeBlog';
import Layout from '../components/Layout';
import { getDatabaseAct, getDatabaseNews } from '../lib/notion';

export default function Home({dataAct, dataBlog}) {

  return (
    <Layout pageTitle="Home">

      <div className="hero lg:min-h-screen sm:min-h-[30vh] bg-primary mt-16">
        <div className="hero-content flex-col sm:flex-row-reverse md:px-12">
          <div className="hidden md:flex drop-shadow-xl">
            <Image src="https://res.cloudinary.com/devrbr7ot/image/upload/v1662140086/Eldeem/char_1_ykv8yr.png" className="max-w-sm rounded-lg" width={260} height={400} />
          </div>
          <div className="text-secondary lg:mr-12 md:text-left text-center sm:mb-6 mb-10">
            <h1 className="lg:text-5xl text-4xl font-bold">Arungi Kebaikan, <br/>Luaskan Kebermanfaatan</h1>
            <p className="py-6">LDM sebagai fasilitator pembentuk karakter anggota yang berdaya serta progresif dalam syi'ar Islam di internal dan eksternal kampus</p>
            <Link href="/activities"><a className="btn btn-secondary text-primary">Kunjungi Lebih Lanjut</a></Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 md:px-12">
        <div className="flex sm:items-center">
          <div className="hidden sm:flex">
            <Image src="https://res.cloudinary.com/devrbr7ot/image/upload/v1662140087/Eldeem/char_2_v6o0rk.png" className="max-w-sm rounded-lg" width={460} height={600} />
          </div>
          <div className="sm:ml-20 sm:px-0 px-6 sm:text-left text-center">
            <h2 className="sm:text-4xl text-3xl text-secondary sm:mb-10 mb-12 font-extrabold">3 Program Unggulan</h2>
            <div className="mb-8 sm:mb-6 mt-6 sm:mt-2">
              <div className="flex items-center mb-4 sm:justify-start justify-center">
                <div className="sm:w-12 sm:h-12 w-10 h-10 bg-secondary rounded-full flex mr-4"><span className="sm:text-3xl text-2xl text-primary m-auto font-semibold">1</span></div>
                <h3 className="sm:text-3xl text-2xl font-semibold text-secondary">Pembinaan</h3>
              </div>
              <p className="text-slate-600 sm:text-lg text-md">Terbinanya anggota LDM dengan memiliki wawasan keislaman yang luas, berakhlakul karimah, dan memiliki pengetahuan dalam berdakwah.</p>
            </div>
            <div className="mb-8 sm:mb-6">
              <div className="flex items-center mb-4 sm:justify-start justify-center">
                <div className="sm:w-12 sm:h-12 w-10 h-10 bg-secondary rounded-full flex mr-4"><span className="sm:text-3xl text-2xl text-primary m-auto font-semibold">2</span></div>
                <h3 className="sm:text-3xl text-2xl font-semibold text-secondary">Pengabdian</h3>
              </div>
              <p className="text-slate-600 sm:text-lg text-md">Adanya program pengabdian terhadap masjid, masyarakat kampus, dan masyarakat luas, sehingga dapat memberikan dampak kebaikan disegala lini.</p>
            </div>
            <div className="mb-4 sm:mb-2">
              <div className="flex items-center mb-4 sm:justify-start justify-center">
                <div className="sm:w-12 sm:h-12 w-10 h-10 bg-secondary rounded-full flex mr-4"><span className="sm:text-3xl text-2xl text-primary m-auto font-semibold">3</span></div>
                <h3 className="sm:text-3xl text-2xl font-semibold text-secondary">Pemberdayaan</h3>
              </div>
              <p className="text-slate-600 sm:text-lg text-md">Memberikan ruang bagi anggota untuk mengeksplor wawasan, kemampuan, dan potensi yang dimiliki.</p>
            </div>
          </div>
        </div>
      </div>

      <HomeActivities dataAct={dataAct} />
      
      <HomeBlog dataBlog={dataBlog} />      
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const dataActivities = await getDatabaseAct()
  const dataAct = dataActivities.slice(0, 4)
  
  const dataBlogNews = await getDatabaseNews()
  const dataBlog = dataBlogNews.slice(0, 6)

  return {
     props: {
      dataAct,
      dataBlog,
     }
  }
}
