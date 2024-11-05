import { NavLink, useLocation } from "react-router-dom";

export function AboutUsHeader() {
    return (
        <div className="w-fit place-self-center h-[10%]">
            <NavLink to="/aboutUs/developers" className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/aboutUs/developers" ? "border-b-black" : "border-b-gray-300"} border-b-2 hover:border-b-blue-400 hover:transition-[0.5s] transition-[0.5s] px-2`}>Desarrolladores</NavLink>
            <NavLink to="/aboutUs/project" className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/aboutUs/project" ? "border-b-black" : "border-b-gray-300"} border-b-2 hover:border-b-blue-400 hover:transition-[0.5s] transition-[0.5s] px-2`}>Proyecto</NavLink>
        </div>
    );
}