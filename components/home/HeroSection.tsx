import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router'
import th from '../../locales/th/Home.json';
import en from '../../locales/en/Home.json';
import styles from '../../public/assets/css/hero.module.css'
// import cta_style from '../../public/assets/css/cta.module.css'
// import header from '../../public/assets/css/header.module.css'


const HeroSectionV2 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;
    return(
        <div className={`${styles.hero_section} ${styles.v2}`}>
        <div className="container">
            <div className={`row align-item-center ${styles.hero_top_one}`}>
                <div className={`col-lg-6 col-md-6 col-12 order-lg-1 order-2 ${styles.hero_text_one}`}>
                    {/* <div className={styles.hero_text_one}> */}
                        <h1 dangerouslySetInnerHTML={{
                                __html:
                                t.HeroSection['Meeting every one of your SMS sending needs.']
                            }}>
                        </h1>
                        <p>
                            {t.HeroSection['SMS sending service capable of quick sending with reliable stability. Consultation is available at every step.']}
                        </p>
                        <ul className={styles.hero_btn}>
                            <li>
                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register`}> 
                                {/* <a className="btn btn-primary"> */}
                                <a className={`${styles.btn} ${styles.v3}`}>
                                    {t.HeroSection['Try SMS sending for free']}
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing">
                                    {/* <a className="btn btn-primary"> */}
                                    <a className={`${styles.btn} ${styles.v5}`}>
                                        {t.HeroSection['View package prices']}

                                    </a>
                                </Link>
                            </li>
                        </ul>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </div>
    )  
}

HeroSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// HeroSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };

export default HeroSectionV2;