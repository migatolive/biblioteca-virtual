import { AboutUsHeader } from "../components/AboutUsHeader";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="flex flex-col h-full">
            <AboutUsHeader />
            <Developers />
            <Project />
        </div>
    );
};

function Developers() {
    return (
        <div className={`${useLocation().pathname == "/aboutUs/developers" ? "grid" : "hidden"} gap-y-16 overflow-scroll no-scrollbar h-[90%]`}>
            <div className="w-[75vw] h-[50vh] border-black border-2">
                
            </div>
            <div className="w-[75vw] h-[50vh] border-black border-2">
                
            </div>
            <div className="w-[75vw] h-[50vh] border-black border-2">
                
            </div>
        </div>
    );
}

function Project() {
    return (
        <div className={`${useLocation().pathname == "/aboutUs/project" ? "grid" : "hidden"} h-[90%]`}>
            
        </div>
    );
}

export default AboutUs;