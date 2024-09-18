const Footer = () => {
    return (
        <footer id="footer" className="h-[7vh] w-[95%] fixed grid grid-cols-[repeat(3,33%)] justify-center justify-items-center items-center box-border border-t-[solid] border-t-[white] left-[2.5%] bottom-0">
            <a href="/terms.html" className="terms text-sm font-semibold leading-6 text-gray-900 no-underline px-[1vw] py-0 border-r-[solid] hover:underline">Terminos y Condiciones</a>
            <p className="copy text-sm font-semibold leading-6 text-gray-900">&copy; 2024 E.E.S.T N°5</p>
            <div className="socialMedias max-h-[5vh] w-[70%] grid grid-cols-[repeat(4,auto)] items-center justify-items-center">
                <a href=""><img src="/src/assets/images/facebook.png" alt="Facebook" className="sMedia w-[6vh] h-[5vh] justify-self-center transition-[0.5s] px-[1vh] py-[0.5vh] rounded-[1vh] hover:bg-[#666666] hover:transition-[0.5s]" /></a>
                <a href=""><img src="/src/assets/images/instagram.png" alt="Instagram" className="sMedia w-[6vh] h-[5vh] justify-self-center transition-[0.5s] px-[1vh] py-[0.5vh] rounded-[1vh] hover:bg-[#666666] hover:transition-[0.5s]" /></a>
                <a href=""><img src="/src/assets/images/gmail.png" alt="Gmail" className="sMedia w-[6vh] h-[5vh] justify-self-center transition-[0.5s] px-[1vh] py-[0.5vh] rounded-[1vh] hover:bg-[#666666] hover:transition-[0.5s]" /></a>
                <a href=""><img src="/src/assets/images/youtube.png" alt="YouTube" className="sMedia w-6vh] h-[5vh] justify-self-center transition-[0.5s] px-[1vh] py-[0.5vh] rounded-[1vh] hover:bg-[#666666] hover:transition-[0.5s]" /></a>
            </div>
        </footer>
    );
};

export default Footer;