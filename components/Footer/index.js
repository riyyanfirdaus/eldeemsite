import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
         <footer className="footer sm:p-10 px-6 py-10 bg-secondary">
            <div className="text-primary">
               <Image src="https://res.cloudinary.com/devrbr7ot/image/upload/v1662131180/Eldeem/ldm_leywgx.png" width={50} height={40} />
               <p className="mt-2">Memfasilitasi dan membina mahasiswa UIN Bandung<br/> dalam mengembangkan keterampilan berdakwah,<br/> baik secara langsung maupun lewat media sosial,<br/> dan juga mengupgrade wawasan Islamiyah</p>
            </div> 
            <div className="text-primary">
               <span className="footer-title opacity-100">Learn More</span> 
               <Link href="/activities"><a className="link link-hover opacity-60">Kegiatan</a></Link> 
               <Link href="/blog"><a className="link link-hover opacity-60">Kabar Terbaru</a></Link> 
               <Link href="/about"><a className="link link-hover opacity-60">Tentang</a></Link> 
               <Link href="/"><a className="link link-hover opacity-60">Pendaftaran</a></Link>
            </div> 
            <div className="text-primary">
               <span className="footer-title opacity-100">Media Sosial</span> 
               <a className="link link-hover flex gap-2 opacity-60 items-center" href="https://www.instagram.com/ldmuinbdg" target="_blank"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="fill-current"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg> Instagram</a> 
               <a className="link link-hover flex gap-2 opacity-60 items-center" href="https://www.youtube.com/c/LDKLDMUINBDG" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg> YouTube</a> 
               <a className="link link-hover flex gap-2 opacity-60 items-center" href="https://www.tiktok.com/@ldmuinbdg" target="_blank"><svg width="24" height="24p" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current"><path d="M19.321 5.562a5.122 5.122 0 0 1 -0.443 -0.258 6.228 6.228 0 0 1 -1.138 -0.967c-0.848 -0.971 -1.165 -1.956 -1.282 -2.645h0.005C16.366 1.12 16.406 0.75 16.412 0.75H12.548V15.693c0 0.201 0 0.399 -0.008 0.595 0 0.024 -0.002 0.047 -0.004 0.073 0 0.011 0 0.022 -0.002 0.033 0 0.003 0 0.006 0 0.008a3.281 3.281 0 0 1 -1.651 2.604 3.225 3.225 0 0 1 -1.599 0.422c-1.8 0 -3.26 -1.468 -3.26 -3.281s1.459 -3.281 3.26 -3.281a3.23 3.23 0 0 1 1.004 0.159l0.005 -3.935a7.178 7.178 0 0 0 -5.531 1.618 7.584 7.584 0 0 0 -1.655 2.04c-0.163 0.281 -0.779 1.411 -0.853 3.246 -0.047 1.041 0.266 2.12 0.415 2.565v0.009c0.094 0.262 0.457 1.158 1.049 1.913A7.853 7.853 0 0 0 5.391 22.062v-0.009l0.009 0.009C7.271 23.333 9.345 23.25 9.345 23.25c0.359 -0.015 1.562 0 2.928 -0.647 1.515 -0.718 2.377 -1.787 2.377 -1.787a7.428 7.428 0 0 0 1.296 -2.153c0.35 -0.919 0.466 -2.022 0.466 -2.462V8.273c0.047 0.028 0.671 0.441 0.671 0.441s0.9 0.577 2.303 0.952c1.007 0.267 2.363 0.323 2.363 0.323V6.153C21.275 6.205 20.31 6.055 19.321 5.562Z"/></svg> TikTok</a>
            </div> 
            <div className="text-primary">
               <span className="footer-title opacity-100">Alamat</span>
               <p className="opacity-60">Sekretariat LDM <br/> Jl. A.H Nasution No. 105, Cipadung, Cibru - 40614 <br/> email: ldkldmuinbandung@gmail.com</p> 
            </div>
         </footer> 
         <footer className="footer footer-center sm:px-10 px-6 py-4 bg-secondary text-primary">
            <div className="items-center grid-flow-col">
               <p>Copyright © by LDM UIN Sunan Gunung Djati Bandung</p>
            </div> 
         </footer> 
        </>
    )
}

export default Footer;