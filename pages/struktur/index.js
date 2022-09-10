import Image from "next/image";
import Layout from "../../components/Layout";
import chartLDM from '../../public/chartLDM.jpg';

const Struktur = () => {
   return (
      <Layout pageTitle="Tentang">
         <div className="mt-16 min-h-screen">
            <div className="container mx-auto py-16 md:px-12">
               <h2 className="mb-12 font-extrabold text-center text-4xl text-slate-700">Struktur Organisasi</h2>
                  <Image src={chartLDM} width={1788} height={601} />
            </div>
         </div>
      </Layout>
   )
}

export default Struktur;
