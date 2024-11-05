import { SocialMedias } from "./SocialMedias";

const Footer = () => {
    return (
        <footer id="footer" className="h-[14vh] lg:h-[7vh] bg-transparent w-[95%] fixed grid lg:grid-cols-[repeat(3,33%)] justify-center justify-items-center items-center box-border border-t-[1px] border-t-black left-[2.5%] bottom-0">
            <a href="/terms.html" className="terms text-sm font-semibold leading-6 text-gray-900 no-underline px-[1vw] py-0 border-r-[solid] hover:underline hidden lg:inline">Términos y Condiciones</a>
            <p className="copy text-sm md:text-lg lg:text-sm font-semibold text-gray-900">&copy; 2024 E.E.S.T N°5</p>
            <div className="socialMedias w-[70vw] md:w-[50vw] lg:w-[70%] grid grid-cols-[repeat(4,auto)] items-center justify-items-center">
                <SocialMedias />
            </div>
        </footer>
    );
};

export default Footer;