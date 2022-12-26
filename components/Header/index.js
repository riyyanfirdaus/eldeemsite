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
                           <li className="uppercase py-2 cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/activities"><a>Kegiatan</a></Link></li>
                           <li className="uppercase pt-2 cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/blog"><a>Kabar</a></Link></li>
                           <li className="collapse uppercase cursor-pointer font-semibold">
                              <input type="checkbox" className="peer" /> 
                              <a className="collapse-title bg-primary text-secondary peer-checked:bg-secondary peer-checked:text-primary pl-14">
                                 Tentang
                                 <svg className="fill-current inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                              </a>
                              <ul className="collapse-content bg-primary text-secondary peer-checked:bg-secondary peer-checked:text-primary">
                                 <li className="uppercase py-2 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg font-semibold"><Link href="/about"><a>visi, Misi, & Tujuan</a></Link></li>
                                 <li className="uppercase py-2 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg font-semibold"><Link href="/struktur"><a>Struktur Organisasi</a></Link></li>
                              </ul>
                           </li>
                           <li className="mt-4">
                              <a className="btn btn-wide btn-secondary text-primary">Daftar</a>
                           </li>
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
                     <li className="uppercase cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/activities"><a>Kegiatan</a></Link></li>
                     <li className="uppercase cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold"><Link href="/blog"><a>Kabar</a></Link></li>
                     <li className="uppercase cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold" tabIndex="0">
                        <a>
                           Tentang
                           <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-base-100 shadow-md">
                           <li className="uppercase cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold text-secondary"><Link href="/about"><a>Tentang Kami</a></Link></li>
                           <li className="uppercase cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-lg font-semibold text-secondary"><Link href="/struktur"><a>Struktur Organisasi</a></Link></li>
                        </ul>
                     </li>
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