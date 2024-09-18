import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Email</h3>
                <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email"
                    {...register('email', { required: true })}
                />
                {errors.email && <span>Este campo es requerido</span>}
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Contraseña</h3>
                <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Contraseña"
                    {...register('password', { required: true })}
                />
                {errors.password && <span>Este campo es requerido</span>}
            </div>
            <button className="btn" type="submit">Iniciar sesión</button>
        </form>
    );
}

export default LoginForm;