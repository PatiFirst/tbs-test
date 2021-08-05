import React, { useState, useEffect } from "react";
import Cookie from "js-cookie";
import appConfig from "../appConfig";
import Link from "next/dist/client/link";

function BannerCookie() {
  let domain = "localhost";
  const cookieName = "acceptCookie";

  const makeBannerLink = (path: string): string => {
    const url = ''
    return url+"/" + path + (path ? "/" : "");
  };

  const [isLoading, setIsLoading] = useState(
    Cookie.get(cookieName) === "true" ? true : false
  );

  const acceptCookie = () => {
    setIsLoading((current) => !current);
  };

  useEffect(() => {
    console.log(isLoading);
    if (appConfig.APP_ENV === appConfig.production) domain = ".thaibulksms.com";
    else if (appConfig.APP_ENV === appConfig.internalTest)
      domain = ".1mobyline.com";
    Cookie.set(cookieName, String(isLoading), {
      domain,
      expires: 7,
    });
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="banner_cookie_container">
      <div className="banner_cookie_box">
        <div className="banner_cookie_text">
          <span className="banner_cookie_text_emphasize">ThaiBulkSMS</span>
          ใช้คุกกี้เพื่อให้ท่านได้รับประสบการณ์การใช้งานที่ดียิ่งขึ้น
          <br />
          <Link href={makeBannerLink("policy")}>
            <a>
                อ่านนโยบายคุ้มครองข้อมูลส่วนบุคคล (Privacy Policy)
            </a>
          </Link>
          &nbsp;และ&nbsp;
          <Link href={makeBannerLink("cookie-policy")}>
            <a>
                นโยบายคุกกี้ (Cookie Policy)
            </a>
          </Link>
        </div>
        <div className="banner_cookie_accept">
            {/* <Link href=""> */}
                <a onClick={acceptCookie}>ยอมรับ</a>
            {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default BannerCookie;
