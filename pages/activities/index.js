import Image from 'next/image';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getDatabaseAct, notion } from '../../lib/notion';
import { dateFormat } from '../../lib/date';

const Activities = ({dataActivities}) => {
   const router = useRouter();
   const slug = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

   useEffect(() => {
      dataActivities.map(data => {
         console.log(data.properties)
      })
   },[])

   return (
      <Layout pageTitle="Kegiatan">
         <div className="mt-16 min-h-screen">
            <div className="container mx-auto py-16 md:px-12">
               <h2 className="mb-12 font-extrabold text-center text-4xl text-slate-700">ELDEEM ACTIVITIES</h2>
               <div className="grid md:grid-cols-3 grid-cols-1 gap-y-16 justify-items-center">
                  {
                     dataActivities && dataActivities.map(activity => (
                        <div className="md:w-[86] w-80 cursor-pointer bg-white border-2 border-slate-500 rounded-lg hover:shadow-lg p-5" onClick={() => router.push(`/activities/${slug(activity.properties.Title.title[0].plain_text)}`)} key={activity.id}>
                           <Image src="https://source.unsplash.com/1080x1350?building" className="max-w-4xl rounded-lg object-cover object-center" width={600} height={435} />
                           <div className="mt-4">
                              <h2 className="text-xl text-slate-700 font-bold">{activity.properties.Title.title[0].plain_text}</h2>
                              <p className="badge badge-accent text-secondary mt-1">{activity.properties.Category.select.name}</p>
                              <div className="mt-10">
                                 <p className="text-slate-300 text-sm">Tutup Pendaftaran</p>
                                 <h3 className="text-lg text-slate-500 font-bold">{dateFormat(activity.properties.Register_Date.date.start)}</h3>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Activities;

export async function getServerSideProps() {
   const dataActivities = await getDatabaseAct()

   return {
      props: {
         dataActivities,
      }
   }
}
