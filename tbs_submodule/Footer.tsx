import React, { useEffect } from "react";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import BacktoTop from '../components/BacktoTop';
import { useRouter } from 'next/router'
import th from '../locales/th/Footer.json';
import en from '../locales/en/Footer.json';

const myLoader = ({ src }: any) => {
  return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`;
};

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'th' ? th : en;

  const makeHomePageLink = (path: string): string => {
    const url = "";
    return url + "/" + path + (path ? "/" : "");
  };

  useEffect(() => {}, []);

  return (
    <div className="footer_section">
      <div className="container" id="footer">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <Link href={makeHomePageLink("product")}>
                <a>
                  <h4>{t.footer.Services}</h4>
                </a>
              </Link>
              <ul>
                <li>
                  <Link href={makeHomePageLink("product/smart-sms-console")}>
                    <a>Smart SMS Console</a>
                  </Link>
                </li>
                <li>
                  <Link href={makeHomePageLink("product/sms-api")}>
                    <a>SMS API</a>
                  </Link>
                </li>
                <li>
                  <Link href={makeHomePageLink("product/otp")}>
                    <a>OTP Service</a>
                  </Link>
                </li>
                <li>
                  <Link href={makeHomePageLink("product/sms-tracking")}>
                    <a>SMS Tracking</a>
                  </Link>
                </li>
                <li>
                  <Link href={makeHomePageLink("product/global-sms")}>
                    <a>Global SMS</a>
                  </Link>
                </li>
                <li>
                  <Link href={makeHomePageLink("product/location-based-sms")}>
                    <a>Location Based SMS</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <h4>{t.footer.Support}</h4>
              <ul>
                <li>
                  <Link href={makeHomePageLink("support/how-to-order")}>
                    <a>{t.footer["Ordering Methods"]}</a>
                  </Link>
                </li>
                <li>
                  <Link href={makeHomePageLink("support/faq")}>
                    <a>{t.footer["Frequently Asked Questions"]}</a>
                  </Link>
                </li>
                <li>
                  <Link href={makeHomePageLink("developer")}>
                    <a>{t.footer["For Developers"]}</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://developer.thaibulksms.com">
                    <a target="_blank" rel="noopener">
                      API References
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <h4>{t.footer["Use Cases"]}</h4>
              <ul>
                <li>
                  <Link href={makeHomePageLink("sms-marketing")}>
                    <a>{t.footer["SMS Marketing"]}</a>
                  </Link>
                </li>
                <li>
                  <Link href={makeHomePageLink("sms-alert")}>
                    <a>{t.footer["SMS Alert"]}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <h4>{t.footer["About Us"]}</h4>
              <ul>
                <li>
                  <Link href={makeHomePageLink("why-thaibulksms")}>
                    <a>{t.footer["Why use ThaiBulkSMS?"]}</a>
                  </Link>
                </li>
                <li>
                  <Link href={makeHomePageLink("reseller")}>
                    <a>SMS Reseller</a>
                  </Link>
                </li>
                <li>
                  <Link href={makeHomePageLink("contact")}>
                    <a>{t.footer["Contact us"]}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 md-none">
            <div className="footer_contact">
              <Link href="tel:027986000">
                <a>
                  <div className="lazyload">
                    <Image loader={myLoader} src="phone.png" alt="phone" width={30} height={30}/>
                  </div>
                  02-798-6000
                </a>
              </Link>
              <Link href="mailto:contact@thaibulksms.com">
                <a>
                  <div className="lazyload">
                    <Image loader={myLoader} src="mail.png" alt="mail" width={30} height={30}/>
                  </div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        "<!--email_off-->contact@thaibulksms.com<!--/email_off-->",
                    }}
                  ></span>
                </a>
              </Link>
              <Link href="https://www.facebook.com/ThaiBulkSMS">
                <a target="_blank" rel="noopener">
                  <div className="lazyload">
                    <Image loader={myLoader} src="fb.png" alt="fb" width={30} height={30}/>
                  </div>
                  Follow Us
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="footer_bottom">
              <div className="row align-items-end">
                <div className="col-xl-6 col-lg-5 col-md-5">
                  <div className="footer_logo">
                    <div className="lazyload">
                      <Image loader={myLoader} src="logo_2.png" alt="logo2" width={253} height={34}/>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-7 xs-none">
                  <div className="footer_contact">
                    <Link href="tel:027986000">
                      <a>
                        <div className="lazyload">
                          <Image loader={myLoader} src="phone.png" alt="phone" width={30} height={30}/>
                        </div>
                        02-798-6000
                      </a>
                    </Link>
                    <Link href="mailto:contact@thaibulksms.com">
                      <a>
                        <div className="lazyload">
                          <Image loader={myLoader} src="mail.png" alt="mail" width={30} height={30}/>
                        </div>
                        <span
                          dangerouslySetInnerHTML={{
                            __html:
                              "<!--email_off-->contact@thaibulksms.com<!--/email_off-->",
                          }}
                        ></span>
                      </a>
                    </Link>
                    <Link href="https://www.facebook.com/ThaiBulkSMS">
                      <a target="_blank" rel="noopener">
                        <div className="lazyload">
                          <Image loader={myLoader} src="fb.png" alt="fb" width={30} height={30}/>
                        </div>
                        Follow Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="footer_copyright">
              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <ul className="footer_menu">
                    <li>
                      <Link href={makeHomePageLink("condition")}>
                        <a>Terms and Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={makeHomePageLink("policy")}>
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <p className="copyright">
                    Copyright © 2020 ThaiBulkSMS.com All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.getInitialProps = async () => ({
  namespacesRequired: ["Footer"],
});

export default Footer;
