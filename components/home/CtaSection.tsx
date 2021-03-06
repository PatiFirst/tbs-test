import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import th from '../../locales/th/Home.json';
import en from '../../locales/en/Home.json';
import styles from '../../public/assets/css/cta.module.css'


const CtaSection = () =>{
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className={styles.cta_section}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-xl-6">
                    <div className={styles.cta_text}>
                        <h3 dangerouslySetInnerHTML={{
                                __html: t.CtaSection["Improve the effectiveness of<br/>your business With SMS from ThaiBulkSMS"],
                            }}>
                        </h3>
                    </div>
                </div>
                <div className="col-12 col-xl-6">
                    <ul className={`${styles.cta_btn} ${styles.before_footer}`}>
                        <li>
                            <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                <a className={`btn v3 ${styles.cta_btn_v3}`}>
                                    {t.CtaSection["Try SMS sending for free"]}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing">
                                <a className={`btn v5 ${styles.cta_btn_v5}`}>
                                    {t.CtaSection["View package prices"]}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

CtaSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// CtaSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default CtaSection;