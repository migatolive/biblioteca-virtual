import { PortfolioHeader } from "../components/PortfolioHeader";
import { useLocation } from "react-router-dom";
import { Cards } from "../components/Cards";

const Porfolio = () => {
    return (
        <div className="flex flex-col h-full">
            <PortfolioHeader />
            <Reading />
            <Favorites />
            <Comments />
        </div>
    );
};

function Reading() {
    return (
        <div className={`${useLocation().pathname == "/portfolio/reading" ? "grid" : "hidden"} h-[90%]`}>
            <Cards />
        </div>
    );
}

function Favorites() {
    return (
        <div className={`${useLocation().pathname == "/portfolio/favorites" ? "grid" : "hidden"} h-[90%]`}>
            <Cards />
        </div>
    );
}

function Comments() {
    return (
        <div className={`${useLocation().pathname == "/portfolio/comments" ? "grid" : "hidden"} h-[90%]`}>
            
        </div>
    );
}

export default Porfolio;