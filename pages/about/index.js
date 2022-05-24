import Layout from "../../components/Layout";

const About = () => {
   return (
      <Layout pageTitle="Tentang">
         <div className="mt-16 min-h-screen">
            <div className="container mx-auto py-16 md:px-12 text-center">
               <h2 className="mb-12 text-center font-extrabold text-4xl text-secondary">Ini Halaman Tentang</h2>
            </div>
         </div>
      </Layout>
   )
}

export default About;