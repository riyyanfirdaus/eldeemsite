import Layout from "../../components/Layout";

const About = () => {
   return (
      <Layout pageTitle="Tentang">
         <div className="mt-16 min-h-screen">
            <div className="container mx-auto py-16 md:px-12">
               <h2 className="mb-12 font-extrabold text-center text-4xl text-slate-700">LDM PROFILE</h2>
               <div className="">
                  <div className="mt-6">
                     <h3 className="font-bold text-slate-700">VISI</h3>
                     <p className="text-slate-600">Menjadi unsur perubah menuju terciptanya masyarakat kampus dan sekitarnya yang berpegang teguh pada nilai-nilai Al-Qur'an dan As-Sunnah</p>
                  </div>
                  <div className="mt-6">
                     <h3 className="font-bold text-slate-700">MISI</h3>
                     <ol className="list-decimal md:ml-4 text-slate-600">
                        <li>Membentuk anggota-anggota saleh yang produktif.</li>
                        <li>Membentuk jaringan dakwah strategis di setiap elemen intra dan ekstra kampus.</li>
                        <li>Memberikan kontribusi positif bagi perkembangan dakwah di lingkungan kampus dan masyarakat luar.</li>
                        <li>Memberikan kontribusi positif bagi kemajuan moralitas, intelektualitas, dan kredibilitas kampus.</li>
                     </ol>
                  </div>
                  <div className="mt-6">
                     <h3 className="font-bold text-slate-700">TUJUAN</h3>
                     <ol className="list-decimal md:ml-4 text-slate-600">
                        <li>Terbina dan terbentuknya pemahaman mahasiswa Muslim kearah kepribadian Islami yang mampu membawa dan menjalankan aturan Islam dalam kehidupan sehari-hari.</li>
                        <li>Terbinanya pemahaman Islam untuk membentuk generasi yang paham agama yang berlandaskan Al-Qur'an dan As-Sunnah.</li>
                        <li>Menyiarkan Islam yang santun dan moderat dengan berlandaskan Islam yang Rahmatan lil 'alamin.</li>
                     </ol>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default About;