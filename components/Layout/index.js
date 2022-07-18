import Header from '../Header';
import Footer from '../Footer';
import Head from 'next/head';

const Layout = ({children, pageTitle}) => {
   return (
      <>
         <Head>
            <title>{pageTitle} - LDM UIN Bandung </title>
            <meta name="description" content="LDM UIN Bandung" />
         </Head>
         <Header />
            <div>{children}</div>
         <Footer />
      </>
   )
}

export default Layout;