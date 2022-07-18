import Image from 'next/image';
import Layout from '../../components/Layout';

const ActivityDetail = () => {

    return (
        <Layout pageTitle="Kegiatan">
            <div className="lg:min-h-screen sm:min-h-[30vh] mt-16">
                <div className="w-full bg-primary pt-12 md:pt-20 pb-10">
                    <div className="w-full max-w-6xl mx-auto ">
                       <h1 className="md:text-5xl text-2xl font-bold text-secondary mb-16 w-5/6 mx-auto md:w-full text-center">Eldeem Media Class 2022</h1>
                    </div>
                </div>
                <div className="md:w-96 w-80 rounded-lg shadow-lg p-6 mx-auto transform -translate-y-16 bg-white px-6 py-10 relative">
                    <Image src="https://source.unsplash.com/1080x1350?building" className="max-w-4xl rounded-lg object-cover object-center" width={1080} height={1350} />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-accent rounded-t-lg w-36 h-10 flex"><span className="text-xl m-auto text-secondary font-bold">Open</span></div>
                </div>
                <div className="flex justify-center gap-14 mb-10">
                    <div className="flex flex-col text-center gap-1">
                        <p className="text-slate-400">Kategori</p>
                        <h3 className="text-2xl text-secondary font-bold">Umum</h3>
                    </div>
                    <div className="flex flex-col text-center gap-1">
                        <p className="text-slate-400">Tutup Pendaftaran</p>
                        <h3 className="text-2xl text-secondary font-bold">July 25, 2022</h3>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="md:max-w-4xl mx-auto py-10 flex text-slate-700 sm:flex-row flex-col md:flex-row-reverse px-6 sm:px-0">
                        <div className="mr-12 md:mb-0 mb-6">
                            <div className="md:w-72 bg-white shadow-lg rounded-lg sm:mb-3 text-center p-5">
                                <h3 className="text-lg font-bold mb-4">Yuk jangan sampai lewatkan kegiatan seru dari LDM</h3>
                                <p className="text-lg mb-6">Klik tombol di bawah ini sekarang juga!</p>
                                <button className="btn btn-accent font-bold capitalize text-lg text-secondary">Daftar Kegiatan</button>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-3">Deskripsi Kegiatan</h3>
                            <p className="sm:mt-0 mt-6 text-sm">Hallo Bro & Sis 😁👋🏼
    Yukk lebih produktif dengan ikut Eldeem media class (EMC) 2022, belajar Video Editing untuk menjadi Content Creator Moslem langsung dengan ahlinya.
    <br/><br/>
    Free & Terbuka untuk umum !
    <br/><br/>
    📆 Tanggal : 11-17 Juni 2022
    <br/>
    💻 Tempat/via : Zoom Meeting
    <br/>
    📝 bit.ly/DaftarEMC2022
    <br/><br/>
    Catat waktu dan jamnya,
    Jangan lupa ajak teman kamu juga yahhh!
    <br/><br/>
    Yuk pake twibbon kecenya !
    <br/>
    http://twb.nz/emc2022
    <br/><br/>
    📦 Info Infaq :
    <br/>
    Ovo, Dana, Shopee 0813-1749-8967
    <br/>
    a.n Muhammad Riyyan Firdaus
    <br/><br/>
    👥 Contact Person :
    <br/>
    0857-2224-7338 (bro)
    <br/>
    0896-3559-1397 (sis)
    <br/><br/>
    __
    <br/>
    #EMC2022
    <br/>
    #Eldeem2022
    <br/>
    #EldeemMediaClass
    <br/>
    #EditingVideo
    <br/>
    #KabinetBahteraAsa
    <br/>
    #MenggenggamIndonesia
    <br/>
    #mobilecinematography</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default ActivityDetail;