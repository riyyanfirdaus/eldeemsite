import Image from 'next/image';
import Humas from '../../public/humas.png';
import Muslimah from '../../public/muslimah.png';
import PSDI from '../../public/psdi.png';
import Syiar from '../../public/syiar.png';
import Media from '../../public/media.png';
import PPM from '../../public/ppm.png';
import Ekraf from '../../public/Ekraf.png';

const HomeBidang = () => {
    return (
        <div className="pt-16 pb-20 bg-primary">
            <h2 className="mb-12 text-center font-extrabold text-4xl text-secondary">Bidang LDM</h2>
            <div className="container mx-auto px-24">
                <div className="grid md:grid-cols-4 md:gap-4 gap-6 justify-items-center place-content-center">
                    <div className="md:w-48 w-80 h-64 bg-white text-center py-6 md:px-5 px-7 rounded-lg shadow-md">
                        <Image src={Humas} width={48} height={48} />
                        <h3 className="text-2xl text-slate-700 font-bold mt-2">Humas</h3>
                        <p className="text-xs text-slate-700 font-bold">(Humas Masyarakat)</p>
                        <p className="text-xs text-slate-500 mt-2">Menjalin dan memperkuat komunikasi dengan pihak birokrasi kampus, alumni, pembina, lembaga dan pihak lainnya baik internal maupun eksternal</p>
                    </div>
                    <div className="md:w-48 w-80 h-64 bg-white text-center py-6 md:px-5 px-7 rounded-lg shadow-md">
                        <Image src={PSDI} width={48} height={48} />
                        <h3 className="text-2xl text-slate-700 font-bold mt-2">PSDI</h3>
                        <p className="text-xs text-slate-700 font-bold">(Pengembangan Sumber Daya Insani)</p>
                        <p className="text-xs text-slate-500 mt-2">Pengembangan dan pembinaan anggota pada aspek spiritual, intelektual, dan jasmani</p>
                    </div>
                    <div className="md:w-48 w-80 h-64 bg-white text-center py-6 md:px-5 px-7 rounded-lg shadow-md">
                        <Image src={Muslimah} width={48} height={48} />
                        <h3 className="text-2xl text-slate-700 font-bold mt-2">Muslimah</h3>
                        <p className="text-xs text-slate-500 mt-2">Pembinaan terhadap kapasitas Muslimah LDM dan membangun hubungan baik dengan lembaga-lembaga Kemuslimahan internal maupun eksternal LDM</p>
                    </div>
                    <div className="md:w-48 w-80 h-64 bg-white text-center py-6 md:px-5 px-7 rounded-lg shadow-md">
                        <Image src={Syiar} width={48} height={48} />
                        <h3 className="text-2xl text-slate-700 font-bold mt-2">Syi'ar</h3>
                        <p className="text-xs text-slate-500 mt-2">Supervisor kegiatan syi'ar tabligh di Universitas dan Fakultas, serta mewadahi minat dan bakat anggota LDM</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 md:gap-0 justify-items-center place-content-center mt-6">
                    <div className="md:w-48 w-80 h-64 bg-white text-center py-6 md:px-5 px-7 rounded-lg shadow-md">
                        <Image src={Media} width={48} height={48} />
                        <h3 className="text-2xl text-slate-700 font-bold mt-2">Media</h3>
                        <p className="text-xs text-slate-500 mt-2">Melakukan Syi'ar Islam, kajian isu keumatan, dan penyebaran info kegiatan melalui media sosial dan media digital lainnya</p>
                    </div>
                    <div className="md:w-48 w-80 h-64 bg-white text-center py-6 md:px-5 px-7 rounded-lg shadow-md">
                        <Image src={PPM} width={48} height={48} />
                        <h3 className="text-2xl text-slate-700 font-bold mt-2">PPM</h3>
                        <p className="text-xs text-slate-700 font-bold">(Pengabdian dan Pembinaan Masyarakat)</p>
                        <p className="text-xs text-slate-500 mt-2">Penyelenggara kegiatan pengabdian dakwah di masyarakat dan memakmurkan masjid kampus</p>
                    </div>
                    <div className="md:w-48 w-80 h-64 bg-white text-center py-6 md:px-5 px-7 rounded-lg shadow-md">
                        <Image src={Ekraf} width={48} height={48} />
                        <h3 className="text-2xl text-slate-700 font-bold mt-2">Ekraf</h3>
                        <p className="text-xs text-slate-700 font-bold">(Ekonomi Kreatif)</p>
                        <p className="text-xs text-slate-500 mt-2">Melakukan kegiatan usaha kreatif dan peningkatan kemampuan manajerial usaha kreatif anggota</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBidang;