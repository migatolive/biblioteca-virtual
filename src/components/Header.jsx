import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
import { getUserDetails } from "../features/auth/authActions.jsx";
import { logout } from "../features/auth/authSlice";
import useBorders from '../hooks/useBorders';

const Header = () => {
    const { userToken, userInfo } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);

    useBorders();

    useEffect(() => {
        // Si hay un token, se obtiene la información del usuario
        if (userToken) {
            dispatch(getUserDetails());
        }
    }, [userToken, dispatch]);

    useEffect(() => {
        const userImg = document.getElementById('userImg');
        const logo = document.getElementById('logo');

        if (userImg) {
            userImg.style.width = `${userImg.clientHeight}px`;
        }

        if (logo) {
            logo.style.width = `${logo.clientHeight}px`;
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='h-[14vh] w-full place-content-center'>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center h-full justify-between px-6 py-1 lg:px-8">
                <Logo />
                <NavBar menuOpen={menuOpen} toggleMenu={toggleMenu} userInfo={userInfo} />
                <User userInfo={userInfo} />
            </nav>
        </header>
    );
};

function Logo() {
    return (
        <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img id="logo" src="/src/assets/logo.png" alt="Logo" className="h-32 w-32" />
            </NavLink>
        </div>
    );
}

function NavBar({ menuOpen, toggleMenu, userInfo }) {
    return (
        <>
            <div className="flex absolute right-8 lg:hidden">
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="burger inline-flex items-center justify-center rounded-md text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                    <img src="/src/assets/images/menu.png" alt="Menu" className={`burger ${menuOpen ? 'bg-stone-400 duration-500' : 'bg-none duration-500'} rounded-md md:h-8 md:w-8 h-12 w-12`} />
                </button>
            </div>
            <div className={`ops ${menuOpen ? 'open' : 'hidden'} gap-x-2 lg:flex`}>
                <NavLink to="/home" className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/home" ? "bg-stone-900 text-stone-50 " : "text-stone-900"} hover:bg-[#666666] hover:transition-[0.5s] transition-[0.5s] px-2 rounded-md`}>Inicio</NavLink>
                <NavLink to="/contact" className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/contact" ? "bg-stone-900 text-stone-50 " : "text-stone-900"} hover:bg-[#666666] hover:transition-[0.5s] transition-[0.5s] px-2 rounded-md`}>Contactanos</NavLink>
                <NavLink to="/aboutUs" className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/aboutUs/developers" || useLocation().pathname == "/aboutUs/project" ? "bg-stone-900 text-stone-50 " : "text-stone-900"} hover:bg-[#666666] hover:transition-[0.5s] transition-[0.5s] px-2 rounded-md`}>Sobre Nosotros</NavLink>
                <NavLink to="/user-profile" className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/user-profile" ? "bg-stone-900 text-stone-50 " : "text-stone-900"} hover:bg-[#666666] hover:transition-[0.5s] transition-[0.5s] px-2 rounded-md`}>Perfil</NavLink>
                {userInfo ? (
                    //{userInfo.email == "joaquinreynoso627@gmail.com" ? (
                        <NavLink to="/books" className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/books" ? "bg-stone-900 text-stone-50 " : "text-stone-900"} hover:bg-[#666666] hover:transition-[0.5s] transition-[0.5s] px-2 rounded-md`}>Libros</NavLink>
                    //) : (
                    //    <></>
                    //)
                    //}
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

function User({ userInfo }) {
    return (
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="userOp flex items-center">
                <div id="userTxt" className="ml-3">
                    {userInfo ? (
                        <>
                            <img id="userImg" src="/src/assets/images/user.png" alt="User" className="h-8 w-8 rounded-full border border-black" />
                            <p className="userName font-bold">{userInfo.email}</p>
                            <p className="userRange">{userInfo.email}</p>
                            <button className='button' onClick={() => dispatch(logout())}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <div className='flex flex-row gap-5'>
                            <NavLink className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/login" ? "bg-stone-900 text-stone-50 " : "text-stone-900"} hover:bg-[#666666] hover:transition-[0.5s] transition-[0.5s] px-2 rounded-md`} to='/login'>
                                Iniciar Sesión
                            </NavLink>
                            <NavLink className={`text-sm font-semibold leading-6  ${useLocation().pathname == "/register" ? "bg-stone-900 text-stone-50 " : "text-stone-900"} hover:bg-[#666666] hover:transition-[0.5s] transition-[0.5s] px-2 rounded-md`} to='/register'>
                                Registrarse
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;