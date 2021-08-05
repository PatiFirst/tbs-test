import React from "react";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
import th from '../../locales/th/Home.json';
import en from '../../locales/en/Home.json';

const OwlCarousel = dynamic(import('react-owl-carousel'), {
    ssr: false,
});

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const TestimonialSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="testimonial_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section_title" 
                        dangerouslySetInnerHTML={{
                            __html: t.TestimonialSection["Customers who trust ThaiBulk SMS"],
                        }}>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <OwlCarousel
                        className="testimonial_slider"
                        items={1}
                        nav={true}
                        dots={false}
                        loop={true}
                        navText={[
                            '<i class="ion-ios-arrow-back"></i>',
                            '<i class="ion-ios-arrow-forward"></i>',
                        ]}
                        margin={30}
                        center
                        smartSpeed={2000}
                        responsiveClass={true}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            768: {
                                items: 1,
                            },
                            1000: {
                                items: 1,
                            },
                        }}
                    >
                        <div className="item">
                            <div className="testimonial_item">
                                <p className="client_quote">
                                    {t.TestimonialSection["ThaiBulkSMS is an SMS-sending service provider which makes sure that sending text messages to customers is very easy and convenient because the service allows us to send the messages by ourselves without having to go through an intermediary. Plus, reports on message sending are provided, enabling more accurate assessment of the results."]}
                                </p>
                                <div className="client_info">
                                    <div className="client_name">
                                        <h6>
                                            {t.TestimonialSection["Syn Mun Kong Insurance PLC"]}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial_item">
                                <p className="client_quote">
                                    {t.TestimonialSection["The prices represent an excellent value considering the quality of the service. The service meets all our expectations including measurement of results, viewing of reports and controlling budgets which are adjustable in each month or until the credits run out."]}
                                </p>
                                <div className="client_info">
                                    <div className="client_name">
                                        <h6>
                                            {t.TestimonialSection["Smart One Logistics Co., Ltd."]}
                                        </h6>
                                        {/* <p>{t('p2')}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial_item">
                                <p className="client_quote">
                                    {t.TestimonialSection["The service ensures that marketing by SMS can be executed easily and speedily. The staff are also available to provide helpful advice and rapid solutions to various problems."]}
                                </p>
                                <div className="client_info">
                                    <div className="client_name">
                                        <h6>
                                            {t.TestimonialSection["National Housing Authority of Thailand"]}
                                        </h6>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    {/* <Link href="/SuccessStoriesListing">
            <a className="btn v6">{t('TestimonialSection::storyBtn')}</a>
          </Link> */}
                </div>
            </div>
        </div>
    </div>
    )
}

TestimonialSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

export default TestimonialSection;