import Image from 'next/image';
import Link from 'next/link';

const HomeActivities = () => {
  return (
    <div className="pt-16 pb-10 bg-secondary">
      <h2 className="mb-12 text-center font-extrabold text-4xl text-primary">Eldeem Activities</h2>
      <div className="container mx-auto md:px-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-6 pl-8">
          <div className="flex">
            <div className="mr-3">
              <Image src="https://source.unsplash.com/1080x1350?islamic" alt="kegiatan LDM" width={140} height={105} className="rounded-lg object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg">Eldeem Media Class 2022</h3>
              <p className="badge badge-primary text-secondary">Umum</p>
              <div className="mt-6">
                <p className="text-primary text-sm">Tutup Pendaftaran</p>
                <h3 className="text-lg text-primary font-bold">July 25, 2022</h3>
                <Link href="/activities"><a className="flex btn btn-outline btn-primary btn-sm  text-primary w-44 mt-1 items-center"><span className="mr-2">Detail Kegiatan</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg></a></Link>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-3">
              <Image src="https://source.unsplash.com/1080x1350?islamic" alt="kegiatan LDM" width={140} height={105} className="rounded-lg object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg">Eldeem Media Class 2022</h3>
              <p className="badge badge-primary text-secondary">Umum</p>
              <div className="mt-6">
                <p className="text-primary text-sm">Tutup Pendaftaran</p>
                <h3 className="text-lg text-primary font-bold">July 25, 2022</h3>
                <Link href="/activities"><a className="flex btn btn-outline btn-primary btn-sm  text-primary w-44 mt-1 items-center"><span className="mr-2">Detail Kegiatan</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg></a></Link>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-3">
              <Image src="https://source.unsplash.com/1080x1350?islamic" alt="kegiatan LDM" width={140} height={105} className="rounded-lg object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg">Solidarity of Muslimah 2022</h3>
              <p className="badge badge-primary text-secondary">Umum</p>
              <div className="mt-6">
                <p className="text-primary text-sm">Tutup Pendaftaran</p>
                <h3 className="text-lg text-primary font-bold">July 25, 2022</h3>
                <Link href="/activities"><a className="flex btn btn-outline btn-primary btn-sm  text-primary w-44 mt-1 items-center"><span className="mr-2">Detail Kegiatan</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg></a></Link>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-3">
              <Image src="https://source.unsplash.com/1080x1350?islamic" alt="kegiatan LDM" width={140} height={105} className="rounded-lg object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg">Solidarity of Muslimah 2022</h3>
              <p className="badge badge-primary text-secondary">Umum</p>
              <div className="mt-6">
                <p className="text-primary text-sm">Tutup Pendaftaran</p>
                <h3 className="text-lg text-primary font-bold">July 25, 2022</h3>
                <Link href="/activities"><a className="flex btn btn-outline btn-primary btn-sm  text-primary w-44 mt-1 items-center"><span className="mr-2">Detail Kegiatan</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg></a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeActivities;