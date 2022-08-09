import Image from 'next/image';
import Layout from '../../components/Layout';
import { dateFormat } from '../../lib/date';
import { getBlocks, getDatabaseAct, getPage } from '../../lib/notion';
import { renderBlock } from '../../utils/blocks';

const ActivityDetail = ({dataActDetail, blocks}) => {

    return (
        <Layout pageTitle={dataActDetail.properties.Title.title[0].plain_text}>
            <div className="lg:min-h-screen sm:min-h-[30vh] mt-16">
                <div className="w-full bg-primary pt-12 md:pt-20 pb-10">
                    <div className="w-full max-w-6xl mx-auto ">
                       <h1 className="md:text-5xl text-2xl font-bold text-secondary mb-16 w-5/6 mx-auto md:w-full text-center">{dataActDetail.properties.Title.title[0].plain_text}</h1>
                    </div>
                </div>
                <div className="md:w-96 w-80 rounded-lg shadow-lg p-6 mx-auto transform -translate-y-16 bg-white px-6 py-10 relative">
                    <figure>
                        {
                            dataActDetail.properties.Image.files[0]?.hasOwnProperty('file') ?
                            <Image src={dataActDetail.properties.Image.files[0]?.file.url} className="max-w-4xl rounded-lg object-cover object-center" alt={dataActDetail.properties.Title.title[0]?.plain_text} width={1080} height={1350} /> : dataActDetail.properties.Image.files[0]?.hasOwnProperty('external') ? <Image src={dataActDetail.properties.Image.files[0]?.external.url} className="max-w-4xl rounded-lg object-cover object-center" alt={dataActDetail.properties.Title.title[0]?.plain_text} width={1080} height={1350} /> : <Image src="https://source.unsplash.com/1080x1350?islamic" className="max-w-4xl rounded-lg object-cover object-center" alt={dataActDetail.properties.Title.title[0]?.plain_text} width={1080} height={1350} />
                        }
                    </figure>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-accent rounded-t-lg w-36 h-10 flex"><span className="text-xl m-auto text-secondary font-bold">{
                        new Date() < new Date(dataActDetail.properties.Register_Date.date.start) ? "Open" : "Closed"
                    }</span></div>
                </div>
                <div className="flex justify-center gap-14 mb-10">
                    <div className="flex flex-col text-center gap-1">
                        <p className="text-slate-400">Kategori</p>
                        <h3 className="text-2xl text-secondary font-bold">{dataActDetail.properties.Category.select.name}</h3>
                    </div>
                    <div className="flex flex-col text-center gap-1">
                        <p className="text-slate-400">Tutup Pendaftaran</p>
                        <h3 className="text-2xl text-secondary font-bold">{dateFormat(dataActDetail.properties.Register_Date.date.start)}</h3>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="md:max-w-4xl mx-auto py-10 flex text-slate-700 sm:flex-row flex-col md:flex-row-reverse px-6 sm:px-0">
                        <div className="mr-12 md:mb-0 mb-6">
                            <div className="md:w-72 bg-white shadow-lg rounded-lg sm:mb-3 text-center p-5">
                                <h3 className="text-lg font-bold mb-4">Yuk jangan sampai lewatkan kegiatan seru dari LDM</h3>
                                <p className="text-lg mb-6">Klik tombol di bawah ini sekarang juga!</p>
                                <a className="btn btn-accent font-bold capitalize text-lg text-secondary" href={dataActDetail.properties.Link.url} target="_blank">Daftar Kegiatan</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-3">Deskripsi Kegiatan</h3>
                            <div className="sm:mt-0 mt-6 text-sm">
                                {
                                    blocks.map(block => {
                                        return <div key={block.id}>{renderBlock(block, 'act')}</div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default ActivityDetail;

export const getStaticPaths = async () => {
    const dataPage = await getDatabaseAct()
    const slug = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    const paths = dataPage.map(data => {
       return {
          params: {
             slug: slug(data.properties.Title.title[0].plain_text),
          }
       }
    })
 
    return {
       paths,
       fallback: false,
    }
 }
 
 export const getStaticProps = async ({params}) => {
    const remSlug = str => str.replaceAll('-', '')
    const remSlugSpace = str => str.replaceAll('-', ' ')
 
    const allPage = (await getDatabaseAct()).find(result => {
       return (result.properties.Title.title[0].plain_text).toLowerCase() === remSlugSpace(params.slug)
    })
 
    const blocks = await getBlocks(allPage.id)
    const dataActDetail = await getPage(remSlug(allPage.id))
    return {
       props: {
          dataActDetail,
          blocks,
       }
    }
 }