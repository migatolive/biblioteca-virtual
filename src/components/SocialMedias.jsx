export function SocialMedias() {
    return (
        <div className="socialMedias max-h-[5vh] w-[70vw] md:w-[50vw] lg:w-[70%] grid grid-cols-[repeat(4,auto)] items-center justify-items-center">
            <a href=""><img src="/src/assets/images/facebook.png" alt="Facebook" className="sMedia w-[6vh] h-[5vh] justify-self-center transition-[0.5s] px-[1vh] py-[0.5vh] rounded-[1vh] hover:bg-[#666666] hover:transition-[0.5s]" /></a>
            <a href=""><img src="/src/assets/images/instagram.png" alt="Instagram" className="sMedia w-[6vh] h-[5vh] justify-self-center transition-[0.5s] px-[1vh] py-[0.5vh] rounded-[1vh] hover:bg-[#666666] hover:transition-[0.5s]" /></a>
            <a href=""><img src="/src/assets/images/gmail.png" alt="Gmail" className="sMedia w-[6vh] h-[5vh] justify-self-center transition-[0.5s] px-[1vh] py-[0.5vh] rounded-[1vh] hover:bg-[#666666] hover:transition-[0.5s]" /></a>
            <a href=""><img src="/src/assets/images/youtube.png" alt="YouTube" className="sMedia w-6vh] h-[5vh] justify-self-center transition-[0.5s] px-[1vh] py-[0.5vh] rounded-[1vh] hover:bg-[#666666] hover:transition-[0.5s]" /></a>
        </div>
    );
}