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
            <form onSubmit={handleSubmit(onSubmit)} className='form pt-4 pb-4 w-[50vw] bg-stone-800 flex flex-col place-items-center rounded-md'>
                {error && <Error>{error}</Error>}
                <div className="inContainer w-[80%] mt-2 mb-2">
                    <label className="label text-sm font-semibold leading-6 block mb-2 text-stone-50" htmlFor="email">Correo Electrónico</label>
                    <input
                        className='input border-2 rounded w-full px-2'
                        type="email"
                        {...register('email')}
                        placeholder='Correo Electrónico'
                        required
                    />
                </div>
                <div className="inContainer w-[80%] mt-2 mb-2">
                    <label className="label text-sm font-semibold leading-6 block mb-2 text-stone-50" htmlFor="password">Contraseña</label>
                    <input
                        className='input border-2 rounded w-full px-2'
                        type="password"
                        {...register('password')}
                        placeholder='Contraseña'
                        required
                    />
                </div>
                <div className="inContainer w-[80%] mt-2 mb-2">
                    <label className="label text-sm font-semibold leading-6 block mb-2 text-stone-50" htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input
                        className='input border-2 rounded w-full px-2'
                        type="password"
                        {...register('confirmPassword')}
                        placeholder='Confirmar Contraseña'
                        required
                    />
                </div>
                    <button type="submit" disabled={loading} className='btn w-[25%] border-2 mt-2 mb-2 rounded text-stone-50'>
                        {loading ? <Spinner/> : 'Registrarse'}
                    </button>
            </form>
        </div>
    )
}

export default Register;