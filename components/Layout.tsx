import Header from './Header';
import Footer from '../tbs_submodule/Footer';
import BannerCookie from '../tbs_submodule/BannerCookie';

const Layout = (props:any) => {
    return(
        <div>
            {/* <Header/> */}
            {props.children}
            {/* <Footer/> */}
            {/* <BannerCookie/> */}
            <div
                className="fb-customerchat"
                data-attribution="setup_tool"
                data-page_id={process.env.NEXT_PUBLIC_FB_PAGEID}
            ></div>
        </div>
    )
}

export default Layout;