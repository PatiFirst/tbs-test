import React from "react";
import { useRouter } from 'next/router'
import th from '../../locales/th/Pricing.json';
import en from '../../locales/en/Pricing.json';

const FaqSection = () => {
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'th' ? th : en;
    React.useEffect(() => {}, []);
    return(
        <div 
            className="faq_section lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_3.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section_title">
                            {t.FaqSection["Frequently Asked Questions"]}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

FaqSection.getInitialProps = async () => ({
    namespacesRequired: ['Pricing'],
});

export default FaqSection;