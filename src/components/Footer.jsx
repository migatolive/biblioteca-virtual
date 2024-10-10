import { SocialMedias } from "./SocialMedias";

const Footer = () => {
    return (
        <footer id="footer" className="h-[14vh] lg:h-[7vh] bg-transparent w-[95%] fixed grid grid-cols-[repeat(3,33%)] justify-center justify-items-center items-center box-border border-t-[1px] border-t-black left-[2.5%] bottom-0">
            <a href="/terms.html" className="terms text-sm font-semibold leading-6 text-gray-900 no-underline px-[1vw] py-0 border-r-[solid] hover:underline">Términos y Condiciones</a>
            <p className="copy text-sm font-semibold leading-6 text-gray-900">&copy; 2024 E.E.S.T N°5</p>
            <SocialMedias />
        </footer>
    );
};

export default Footer;