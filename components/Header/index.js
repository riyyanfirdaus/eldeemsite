import Link from "next/link";

const Header = () => {
   return (
      <>
         <div className="relative">
            <div className="navbar bg-primary fixed top-0 z-10">
               <div className="container mx-auto md:px-12">
                  <div className="navbar-start">
                  <div className="dropdown text-secondary">
                     <label htmlFor="my-modal-3" className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                     </label>
                     <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                     <label htmlFor="my-modal-3" className="modal cursor-pointer">
                        <label className="modal-box absolute top-5 bg-primary" htmlFor="">
                        <div className="flex justify-between items-center border-b-2 border-secondary pb-3">
                           <Link href="/"><a className="sm:hidden text-secondary normal-case text-xl font-bold">LDM</a></Link>
                           <label htmlFor="my-modal-3" className="btn btn-sm btn-circle hover:btn-secondary text-secondary hover:text-primary">✕</label>
                        </div>
                        <ul className="mt-4 text-center">
                           <li className="uppercase py-2 cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/"><a>Home</a></Link></li>
                           <li className="uppercase py-2 cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/proker"><a>Program Kerja</a></Link></li>
                           <li className="uppercase py-2 cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/blog"><a>Artikel</a></Link></li>
                           <li className="uppercase py-2 cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-l font-semibold"><Link href="/about"><a>Tentang</a></Link></li>
                        </ul>
                        </label>
                     </label>
                     <Link href="/"><a className="btn btn-ghost hidden sm:flex text-secondary normal-case text-xl font-bold">LDM</a></Link>
                  </div>
                  </div>
                  <Link href="/"><a className="btn btn-ghost sm:hidden navbar-end text-secondary normal-case text-xl font-bold">LDM</a></Link>
                  <div className="navbar-center hidden sm:flex text-secondary">
                  <ul className="menu menu-horizontal p-0">
                     <li className="uppercase cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/"><a>Home</a></Link></li>
                     <li className="uppercase cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/proker"><a>Program Kerja</a></Link></li>
                     <li className="uppercase cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/blog"><a>Artikel</a></Link></li>
                     <li className="uppercase cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/about"><a>Tentang</a></Link></li>
                  </ul>
                  </div>
                  <div className="navbar-end hidden lg:flex">
                  <a className="btn btn-secondary text-primary">Daftar</a>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Header;