import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HomeBlog = () => {
  const router = useRouter();

  return (
    <div className="pt-16 pb-10">
      <h2 className="mb-12 text-center font-extrabold text-4xl text-secondary">Eldeem News</h2>
      <div className="container mx-auto px-6 sm:flex sm:flex-wrap sm:justify-evenly gap-2">
        <div className="card sm:w-64 md:w-80 lg:w-74 bg-base-100 shadow-lg mb-10 sm:mb-6 cursor-pointer hover:bg-slate-50" onClick={() => router.push("/blog/ketikapaaja")}>
          <figure><Image src="https://source.unsplash.com/600x425?news" alt="Shoes" width={600} height={425} /></figure>
          <div className="card-body p-6 text-slate-700">
            <h2 className="card-title font-bold">Ini Berita Penting</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn btn-secondary w-full text-primary" onClick={() => router.push("/blog/ketikapaaja")}>Read More</button>
            </div>
          </div>
        </div>
        <div className="card sm:w-64 md:w-80 lg:w-74 bg-base-100 shadow-lg mb-10 sm:mb-6 cursor-pointer hover:bg-slate-50" onClick={() => router.push("/blog/ketikapaaja")}>
          <figure><Image src="https://source.unsplash.com/600x425?news" alt="Shoes" width={600} height={425} /></figure>
          <div className="card-body p-6 text-slate-700">
            <h2 className="card-title font-bold">Ini Berita Penting</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn btn-secondary w-full text-primary" onClick={() => router.push("/blog/ketikapaaja")}>Read More</button>
            </div>
          </div>
        </div>
        <div className="card sm:w-64 md:w-80 lg:w-74 bg-base-100 shadow-lg mb-10 sm:mb-6 cursor-pointer hover:bg-slate-50" onClick={() => router.push("/blog/ketikapaaja")}>
          <figure><Image src="https://source.unsplash.com/600x425?news" alt="Shoes" width={600} height={425} /></figure>
          <div className="card-body p-6 text-slate-700">
            <h2 className="card-title font-bold">Ini Berita Penting</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn btn-secondary w-full text-primary" onClick={() => router.push("/blog/ketikapaaja")}>Read More</button>
            </div>
          </div>
        </div>
        <div className="card sm:w-64 md:w-80 lg:w-74 bg-base-100 shadow-lg mb-10 sm:mb-6 cursor-pointer hover:bg-slate-50" onClick={() => router.push("/blog/ketikapaaja")}>
          <figure><Image src="https://source.unsplash.com/600x425?news" alt="Shoes" width={600} height={425} /></figure>
          <div className="card-body p-6 text-slate-700">
            <h2 className="card-title font-bold">Ini Berita Penting</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn btn-secondary w-full text-primary" onClick={() => router.push("/blog/ketikapaaja")}>Read More</button>
            </div>
          </div>
        </div>
        <div className="card sm:w-64 md:w-80 lg:w-74 bg-base-100 shadow-lg mb-10 sm:mb-6 cursor-pointer hover:bg-slate-50" onClick={() => router.push("/blog/ketikapaaja")}>
          <figure><Image src="https://source.unsplash.com/600x425?news" alt="Shoes" width={600} height={425} /></figure>
          <div className="card-body p-6 text-slate-700">
            <h2 className="card-title font-bold">Ini Berita Penting</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn btn-secondary w-full text-primary" onClick={() => router.push("/blog/ketikapaaja")}>Read More</button>
            </div>
          </div>
        </div>
        <div className="card sm:w-64 md:w-80 lg:w-74 bg-base-100 shadow-lg mb-10 sm:mb-6 cursor-pointer hover:bg-slate-50" onClick={() => router.push("/blog/ketikapaaja")}>
          <figure><Image src="https://source.unsplash.com/600x425?news" alt="Shoes" width={600} height={425} /></figure>
          <div className="card-body p-6 text-slate-700">
            <h2 className="card-title font-bold">Ini Berita Penting</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn btn-secondary w-full text-primary" onClick={() => router.push("/blog/ketikapaaja")}>Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center md:mt-12">
      
        <Link href="/blog"><a className="btn btn-secondary normal-case text-primary">Kabar Selengkapnya <svg className="ml-2 mt-2" width="26" height="26" viewBox="0 0 26 26"><path fill="#F0E7D6" d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
          l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
          c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
          c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
          S1.293,9.212,1.729,9.212z"></path></svg></a></Link>
      </div>
    </div>
  )
}

export default HomeBlog;