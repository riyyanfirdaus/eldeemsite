import Image from 'next/image';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { getDatabaseNews } from '../../lib/notion';
import { dateFormat } from '../../lib/date';

const Blog = ({dataBlog}) => {
   const router = useRouter();
   const slug = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

   return (
      <Layout pageTitle="Blog">
         <div className="mt-16 min-h-screen">
            <div className="container mx-auto py-16 md:px-12">
               <h2 className="mb-12 font-extrabold text-center text-4xl text-slate-700">ELDEEM NEWS</h2>
               <div className="grid md:grid-cols-2 grid-cols-1 gap-y-16 justify-items-center">
                  {
                     dataBlog && dataBlog.map(blog => (
                        <div className="md:w-96 w-80 cursor-pointer rounded-lg hover:shadow-lg p-6" onClick={() => router.push(`/blog/${slug(blog.properties.Title.title[0].plain_text)}`)} key={blog.id}>
                           <figure>
                              {
                                 blog.properties.Image.files[0]?.hasOwnProperty('file') ?
                                 <Image src={blog.properties.Image.files[0]?.file.url} className="max-w-4xl rounded-lg" alt={blog.properties.Title.title[0]?.plain_text} width={600} height={325} /> : blog.properties.Image.files[0]?.hasOwnProperty('external') ? <Image src={blog.properties.Image.files[0]?.external.url} className="max-w-4xl rounded-lg" alt={blog.properties.Title.title[0]?.plain_text} width={600} height={325} /> : <Image src="https://source.unsplash.com/600x325?islamic" className="max-w-4xl rounded-lg" alt={blog.properties.Title.title[0]?.plain_text} width={600} height={325} />
                              }
                           </figure>
                           <p className="text-sm text-slate-500 mb-2">{dateFormat(blog.properties.Published_Date.date.start)}</p>
                           <p className="badge badge-secondary text-primary text-sm mb-2">{blog.properties.Category.select.name}</p>
                           <h2 className="text-lg text-slate-700 font-bold">{blog.properties.Title.title[0].plain_text}</h2>
                           <button className="btn btn-secondary btn-outline w-full text-primary mt-6" onClick={() => router.push(`/blog/${slug(blog.properties.Title.title[0].plain_text)}`)}>Read More</button>
                        </div>
                     ))
                  }
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Blog;

export const getServerSideProps = async () => {
   const dataBlog = await getDatabaseNews()

   return {
      props: {
         dataBlog,
      }
   }
}
