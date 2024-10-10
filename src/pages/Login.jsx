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
        <form onSubmit={handleSubmit(onSubmit)} className="form pt-4 pb-4 w-[50vw] bg-stone-800 flex flex-col place-items-center rounded-md">
            {error && <Error message={error} />}
            <div className="inContainer w-[80%] mt-2 mb-2">
                <h3 className="label text-sm text-stone-50 font-semibold leading-6 mb-2">Correo Electrónico</h3>
                <input
                    className="input border-2 rounded w-full px-2"
                    type="email"
                    placeholder="Correo Electrónico"
                    {...register('email')}
                    required
                />
            </div>
            <div className="inContainer w-[80%] mt-2 mb-2">
                <h3 className="label text-sm text-stone-50 font-semibold leading-6 mb-2">Contraseña</h3>
                <input
                    className="input border-2 rounded w-full px-2"
                    type="password"
                    placeholder="Contraseña"
                    {...register('password')}
                    required
                />
            </div>
            <button type="submit" disabled={loading} className="btn text-stone-50 w-[25%] border-2 mt-2 mb-2 rounded">
                {loading ? <Spinner /> : 'Iniciar sesión'}
            </button>
        </form>
    )
}

export default LoginForm