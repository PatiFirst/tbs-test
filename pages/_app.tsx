import React,{useEffect} from 'react';
import App from 'next/app';
import Cookie from 'js-cookie';
import { DefaultSeo } from 'next-seo';
import { seo } from '../components/seo/defaultseo';
import {useRouter} from 'next/router'
import Proloader from '../components/Proloader';
import '../public/assets/css/globals.css'
import '../public/assets/css/owl.carousel.css'
// import '../public/assets/css/bootstrap.min.css'



function MyApp({ Component, pageProps }: any) {
  let lang = Cookie.get('LANG');
  const router = useRouter();

  useEffect(() => {
    
    if (lang === undefined) {
        router.locale = 'th'
        Cookie.set('LANG','TH');
    } else {
        router.locale = `${lang.toLowerCase()}`;
        Cookie.set('LANG',router.locale.toLocaleUpperCase());
    }
  },[lang]);

  return (
    <>
        <DefaultSeo {...seo}/>
        {/* <Proloader/> */}
        <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
}

// export default appWithTranslation(MyApp);
export default MyApp;
