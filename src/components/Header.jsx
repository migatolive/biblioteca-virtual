import { useEffect, useState } from 'react';
import useBorders from '../hooks/useBorders';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useBorders();

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
        <header id="header" className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img id="logo" src="/src/assets/images/logo.png" alt="Logo" className="h-8 w-auto"/>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <img src="/src/assets/images/menu.png" alt="Menu" className="h-6 w-6"/>
                    </button>
                </div>
                <div className={`ops ${menuOpen ? '' : 'hidden'} lg:flex lg:gap-x-12`}>
                    <a href="?pag=home" className="text-sm font-semibold leading-6 text-gray-900">Inicio</a>
                    <a href="?pag=contactUs" className="text-sm font-semibold leading-6 text-gray-900">Contactanos</a>
                    <a href="?pag=portfolio" className="text-sm font-semibold leading-6 text-gray-900">Portafolio</a>
                    <a href="?pag=aboutUs" className="text-sm font-semibold leading-6 text-gray-900">Sobre Nosotros</a>
                    <a href="?pag=books" className="text-sm font-semibold leading-6 text-gray-900">Books</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="userOp flex items-center">
                        <img id="userImg" src="/src/assets/images/user.png" alt="User"
                             className="h-8 w-8 rounded-full border border-black"/>
                        <div id="userTxt" className="ml-3">
                            <p className="userName font-bold">Nombre de usuario</p>
                            <p className="userRange">Administrador</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;