import React from "react";
import Layout from '../../components/Layout';
import Head from 'next/head';
import FaqSection from '../../components/pricing/FaqSection';
import { useRouter } from 'next/router'
import th from '../../locales/th/Home.json';
import en from '../../locales/en/Home.json';

const Pricing = () => {
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'th' ? th : en;

    return(
        <Layout>
            <Head>
                <meta name="keywords" content={t.meta.keywords} />
                <meta name="author" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="canonical"
                    href="https://www.thaibulksms.com/pricing/"
                />
            </Head>
            <div className="page_wrapper">
                <FaqSection/>
            </div>
        </Layout>
        
    )
}

// export const getStaticProps = async ({locale}:any) => ({
//     props: {
//       ...await serverSideTranslations(locale,['Pricing']),
//     },
      
// })

export default Pricing;