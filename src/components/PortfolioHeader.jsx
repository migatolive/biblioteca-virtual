import { NavLink, useLocation } from "react-router-dom";

export function PortfolioHeader() {
    return (
        <div className="w-fit place-self-center h-[10%]">
            <NavLink to="/portfolio/reading" className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/portfolio/reading" ? "border-b-black" : "border-b-gray-300"} border-b-2 hover:border-b-blue-400 hover:transition-[0.5s] transition-[0.5s] px-2`}>Leyendo</NavLink>
            <NavLink to="/portfolio/favorites" className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/portfolio/favorites" ? "border-b-black" : "border-b-gray-300"} border-b-2 hover:border-b-blue-400 hover:transition-[0.5s] transition-[0.5s] px-2`}>Favoritos</NavLink>
            <NavLink to="/portfolio/comments" className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/portfolio/comments" ? "border-b-black" : "border-b-gray-300"} border-b-2 hover:border-b-blue-400 hover:transition-[0.5s] transition-[0.5s] px-2`}>Comentarios</NavLink>
        </div>
    );
}