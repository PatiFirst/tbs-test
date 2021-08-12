import React from 'react';
import Head from 'next/head'
import { NextSeo } from 'next-seo';
import { seo } from '../components/seo/home';
import { useRouter } from 'next/router'
import th from '../locales/th/Home.json';
import en from '../locales/en/Home.json';
//dynamic load
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/Layout'))
const HeroSection = dynamic(() => import('../components/home/HeroSection'))
const PartnerSection = dynamic(() => import('../components/home/PartnerSection'))
const FeatureSection = dynamic(() => import('../components/home/FeatureSection'))
const ServiceSection = dynamic(()=> import('../components/home/ServiceSection'))
const SimpleSliderSection = dynamic(() => import('../components/home/SimpleSliderSection'))
const GlobeSection = dynamic(() => import('../components/home/GlobeSection'))
const SmsSection = dynamic(() => import('../components/home/SmsSection'))
const TestimonialSection = dynamic(() => import('../components/home/TestimonialSection'))
const EduSection = dynamic(() => import('../components/home/EduSection'))
const CtaSection = dynamic(() => import('../components/home/CtaSection'))
const BacktoTop = dynamic(() => import('../components/BacktoTop'))

const Homepage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'th' ? th : en;

  return(
    <React.Fragment>
      <Layout>
        <Head>
          <meta name="keywords" content={t.meta.keywords} />
          <meta name="author" content="" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <NextSeo
                openGraph={seo.openGraph}
                title={t.meta.title}
                description={t.meta.description}
            />
        <div className="page_wrapper">
          <HeroSection/>
          {/* <PartnerSection/> */}
          {/* <FeatureSection/> */}
          <ServiceSection/>
          {/* <SimpleSliderSection/>
          <GlobeSection/>
          <SmsSection/>
          <TestimonialSection/>
          <EduSection/>
          <CtaSection/> */}
        </div>
        {/* <BacktoTop/> */}
      </Layout>
    </React.Fragment>
  )
}

export const getStaticProps = async () => {
  return {
      props: {
          namespacesRequired: ['Home'],
      },
  };
};
export default Homepage;
