import React from "react";
import Image from "next/dist/client/image";
import { useRouter } from 'next/router'
import th from '../../locales/th/Home.json';
import en from '../../locales/en/Home.json';
import styles from '../../public/assets/css/feature.module.css'

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const FeatureSection = () =>{
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'th' ? th : en;
    return(
        <div className={styles.feature_section}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section_title"
                    dangerouslySetInnerHTML={{
                        __html: t.FeatureSection["Why ThaiBulk SMS"],
                    }}>
                    </h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className={`col-12 col-sm-6 col-md-3 ${styles.whyTBS}`}>
                    <div className={styles.single_feature_item}>
                        <div className="lazyload size-img">
                            <Image loader={myLoader} src="icon_1.png" alt="icon1" width={100} height={100}/>
                        </div>
                        <div className={styles.single_feature_text}>
                            <h3>
                                {t.FeatureSection["No.1 SMS Platform"]}
                            </h3>
                            <p dangerouslySetInnerHTML={{
                                    __html: t.FeatureSection["Thailand’s no. 1 SMS service provider"],
                                }}>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`col-12 col-sm-6 col-md-3 ${styles.whyTBS}`}>
                    <div className={styles.single_feature_item}>
                        <div className="lazyload size-img">
                            <Image loader={myLoader} src="icon_2.png" alt="icon2" width={100} height={100}/>
                        </div>
                        <div className={styles.single_feature_text}>
                            <h3>
                                {t.FeatureSection["Fast & Reliable"]}
                            </h3>
                            <p dangerouslySetInnerHTML={{
                                    __html: t.FeatureSection["The fastest channel for sending is chosen automatically, resulting in fast sending and reliable stability."],
                                }}>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`col-12 col-sm-6 col-md-3 ${styles.whyTBS}`}>
                    <div className={styles.single_feature_item}>
                        <div className="lazyload size-img">
                            <Image loader={myLoader} src="icon_3.png" alt="icon3" width={100} height={100}/>
                        </div>
                        <div className={styles.single_feature_text}>
                            <h3>{t.FeatureSection["Smart Console"]}</h3>
                            <p dangerouslySetInnerHTML={{
                                    __html: t.FeatureSection["The results of sending can be measured easily with smart reports."],
                                }}>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`col-12 col-sm-6 col-md-3 ${styles.whyTBS}`}>
                    <div className={styles.single_feature_item}>
                        <div className="lazyload size-img">
                            <Image loader={myLoader} src="icon_4.png" alt="icon4" width={100} height={100}/>
                        </div>
                        <div className={styles.single_feature_text}>
                            <h3>
                                {t.FeatureSection["Easily Integrated API"]}
                            </h3>
                            <p dangerouslySetInnerHTML={{
                                    __html: t.FeatureSection["Easy to connect and support multiple languages."],
                                }}>       
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

FeatureSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});
export default FeatureSection;