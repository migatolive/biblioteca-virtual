import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Error from '../components/Error.jsx';
import Spinner from '../components/Spinner';
import { registerUser } from '../features/auth/authActions.jsx';

const Register = () => {
    const { loading, userInfo, error, success } = useSelector(
        (state) => state.user
    )
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        if (success) navigate('/login')
        if (userInfo) navigate('/user-profile')
    }, [navigate, userInfo, success])

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
            return
        }

        data.email = data.email.toLowerCase()
        dispatch(registerUser(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {error && <Error>{error}</Error>}
                <div className="inContainer">
                    <label className="label text-sm font-semibold leading-6 text-gray-900" htmlFor="email">Correo Electronico</label>
                    <input
                        type="email"
                        {...register('email')}
                        required
                    />
                </div>
                <div className="inContainer">
                    <label className="label text-sm font-semibold leading-6 text-gray-900" htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        {...register('password')}
                        required
                    />
                </div>
                <div className="inContainer">
                    <label className="label text-sm font-semibold leading-6 text-gray-900" htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input
                        type="password"
                        {...register('confirmPassword')}
                        required
                    />
                </div>
                    <button type="submit" disabled={loading}>
                        {loading ? <Spinner/> : 'Registrarse'}
                    </button>
            </form>
        </div>
    )
}

export default Register;