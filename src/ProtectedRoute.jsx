import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { userInfo } = useSelector((state) => state.user)

    if (!userInfo) {
        return (
            <div>
                <h1>Unauthorized :</h1>
                <p>Inicia sesión para ganar acceso</p>
                <NavLink to="/login">Iniciar sesión</NavLink>
            </div>
        )
    }

    return <Outlet />
}

export default ProtectedRoute