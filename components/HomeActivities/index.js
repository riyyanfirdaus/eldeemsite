import Image from 'next/image';
import Link from 'next/link';
import { dateFormat, dateFormatDay } from '../../lib/date';

const HomeActivities = ({dataAct}) => {
  const slug = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

  return (
    <div className="pt-16 pb-10 bg-secondary">
      <h2 className="mb-12 text-center font-extrabold text-4xl text-primary">Eldeem Activities</h2>
      <div className="container mx-auto md:px-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-6 ml-4 mr-2">
          {
            dataAct && dataAct.map(act => (    
              <div className="flex" key={act.id}>
                <div className="mr-3">
                  <figure>
                    {
                        act.properties.Image.files[0]?.hasOwnProperty('file') ?
                        <Image src={act.properties.Image.files[0]?.file.url} className="rounded-lg object-cover" alt={act.properties.Title.title[0]?.plain_text} width={140} height={105} /> : act.properties.Image.files[0]?.hasOwnProperty('external') ? <Image src={act.properties.Image.files[0]?.external.url} className="rounded-lg object-cover" alt={act.properties.Title.title[0]?.plain_text} width={140} height={105} /> : <Image src="https://source.unsplash.com/1080x1350?islamic" className="rounded-lg object-cover" alt={act.properties.Title.title[0]?.plain_text} width={140} height={105} />
                    }
                  </figure>
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">{act.properties.Title.title[0].plain_text}</h3>
                  <p className="badge badge-primary text-secondary">{act.properties.Category.select.name}</p>
                  <div className="mt-6">
                    <p className="text-primary text-sm">Periode Pendaftaran</p>
                    <h3 className="text-lg md:text-sm text-primary font-bold">{`${dateFormatDay(act.properties.Register_Date.date.start)} - ${dateFormat(act.properties.Register_Date.date.end)}`}</h3>
                    <Link href={`/activities/${slug(act.properties.Title.title[0].plain_text)}`}><a className="flex btn btn-outline btn-primary btn-sm  text-primary w-44 mt-1 items-center"><span className="mr-2">Detail Kegiatan</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg></a></Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeActivities;