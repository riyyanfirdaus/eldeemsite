import Image from 'next/image';
import Layout from '../../components/Layout';
import { getBlocks, getDatabaseNews, getPage } from '../../lib/notion';
import { dateFormat } from '../../lib/date';
import { renderBlock } from '../../utils/blocks';
import profilePic from '../../public/profilePic.png';

const BlogDetail = ({dataBlogDetail, blocks}) => {

   return (
      <Layout pageTitle={dataBlogDetail.properties.Title.title[0].plain_text}>
         <div className="hero lg:min-h-screen sm:min-h-[30vh] bg-primary mt-16">
            <div className="hero-content md:pr-12 md:pl-16 sm:flex-row flex-col-reverse">
               <div className="md:text-left md:mr-8 text-center sm:mb-6 mb-6 sm:max-w-xl">
                  <p className="badge badge-secondary text-primary mb-3 sm:text-lg text-md">{dataBlogDetail.properties.Category.multi_select[0].name}</p>
                  <h1 className="lg:text-3xl text-xl font-bold text-slate-800">{dataBlogDetail.properties.Title.title[0].plain_text}</h1>
                  <div className="sm:pt-10 pt-6 flex items-center justify-center sm:justify-start">
                     <div className="mr-3">
                        <Image src={dataBlogDetail.properties.Author.people[0].avatar_url || profilePic} className="rounded-full object-cover" width={50} height={50} />
                     </div>
                     <div className="text-left">
                        <p className="sm:text-lg text-md font-semibold text-slate-800">by {dataBlogDetail.properties.Author.people[0].name}</p>
                        <p className="sm:text-lg text-md font-semibold text-slate-600">{dateFormat(dataBlogDetail.properties.Published_Date.date.start)}</p>
                     </div>
                  </div>
               </div>
               <div className="drop-shadow-xl">
                  <figure>
                     {
                        dataBlogDetail.properties.Image.files[0]?.hasOwnProperty('file') ?
                        <Image src={dataBlogDetail.properties.Image.files[0]?.file.url} className="max-w-xl rounded-lg" alt={dataBlogDetail.properties.Title.title[0]?.plain_text} width={645} height={409} /> : dataBlogDetail.properties.Image.files[0]?.hasOwnProperty('external') ? <Image src={dataBlogDetail.properties.Image.files[0]?.external.url} className="max-w-xl rounded-lg" alt={dataBlogDetail.properties.Title.title[0]?.plain_text} width={645} height={409} /> : <Image src="https://source.unsplash.com/600x325?islamic" className="max-w-xl rounded-lg" alt={dataBlogDetail.properties.Title.title[0]?.plain_text} width={645} height={409} />
                     }
                  </figure>
               </div>
            </div>
         </div>

         <div className="container mx-auto">
            <div className="md:max-w-4xl mx-auto py-10 flex text-slate-700 sm:flex-row flex-col px-6 sm:px-0">
               <div className="mr-12">
                  <a className="btn hover:bg-slate-50 hover:border-slate-50 border-slate-50 shadow-md sm:mb-3 mr-3 sm:mr-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#334155"><path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37"/></svg>
                  </a>
                  <a className="btn hover:bg-slate-50 hover:border-slate-50 border-slate-50 shadow-md sm:mb-3 mr-3 sm:mr-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#334155"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>
                  </a>
                  <a className="btn hover:bg-slate-50 hover:border-slate-50 border-slate-50 shadow-md">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#334155"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg>
                  </a>
               </div>
               <div className="sm:mt-0 mt-6">
                  {
                     blocks.map(block => {
                        return <div key={block.id}>{renderBlock(block)}</div>
                     })
                  }
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default BlogDetail;

export const getStaticPaths = async () => {
   const dataPage = await getDatabaseNews()
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

   const allPage = (await getDatabaseNews()).find(result => {
      return (result.properties.Title.title[0].plain_text).toLowerCase() === remSlugSpace(params.slug)
   })

   const blocks = await getBlocks(allPage.id)
   const dataBlogDetail = await getPage(remSlug(allPage.id))
   return {
      props: {
         dataBlogDetail,
         blocks,
      }
   }
}
