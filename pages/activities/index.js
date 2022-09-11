import Image from 'next/image';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { getDatabaseAct } from '../../lib/notion';
import { dateFormat, dateFormatDay } from '../../lib/date';

const Activities = ({dataActivities}) => {
   const router = useRouter();
   const slug = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

   return (
      <Layout pageTitle="Kegiatan">
         <div className="mt-16 min-h-screen">
            <div className="container mx-auto py-16 md:px-12">
               <h2 className="mb-12 font-extrabold text-center text-4xl text-slate-700">ELDEEM ACTIVITIES</h2>
               <div className="grid md:grid-cols-3 grid-cols-1 gap-y-16 md:gap-x-20 justify-items-center">
                  {
                     dataActivities.map(activity => (
                        <div className="md:w-[86] w-80 cursor-pointer bg-white border-2 border-slate-500 rounded-lg hover:shadow-lg p-5" onClick={() => router.push(`/activities/${slug(activity.properties.Title.title[0].plain_text)}`)} key={activity.id}>
                           <figure>
                              {
                                 activity.properties.Image.files[0]?.hasOwnProperty('file') ?
                                 <Image src={activity.properties.Image.files[0]?.file.url} className="max-w-4xl rounded-lg object-cover object-center" alt={activity.properties.Title.title[0]?.plain_text} width={600} height={435} /> : activity.properties.Image.files[0]?.hasOwnProperty('external') ? <Image src={activity.properties.Image.files[0]?.external.url} className="max-w-4xl rounded-lg object-cover object-center" alt={activity.properties.Title.title[0]?.plain_text} width={600} height={435} /> : <Image src="https://source.unsplash.com/600x435?islamic" className="max-w-4xl rounded-lg object-cover object-center" alt={activity.properties.Title.title[0]?.plain_text} width={600} height={435} />
                              }
                           </figure>
                           <div className="mt-4">
                              <h2 className="text-xl text-slate-700 font-bold">{activity.properties.Title.title[0].plain_text}</h2>
                              <p className="badge badge-accent text-secondary mt-1">{activity.properties.Category.select.name}</p>
                              <div className="mt-10">
                                 <p className="text-slate-300 text-sm">Tutup Pendaftaran</p>
                                 <h3 className="text-lg md:text-sm text-slate-500 font-bold">{`${dateFormatDay(activity.properties.Register_Date.date.start)} - ${dateFormat(activity.properties.Register_Date.date.end)}`}</h3>
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
