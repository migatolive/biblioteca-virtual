import { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authActions.jsx";
import Error from '../components/Error.jsx'
import Spinner from "../components/Spinner.jsx";

const LoginForm = () => {
    const { loading, userInfo, error } = useSelector(
        (state) => state.user
    )
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) navigate('/')
    }, [navigate, userInfo])

    const onSubmit = (data) => {
        dispatch(loginUser(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && <Error message={error} />}
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Email</h3>
                <input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                    required
                />
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Contraseña</h3>
                <input
                    type="password"
                    placeholder="Contraseña"
                    {...register('password')}
                    required
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? <Spinner /> : 'Iniciar sesión'}
            </button>
        </form>
    )
}

export default LoginForm