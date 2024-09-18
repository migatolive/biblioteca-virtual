import { useForm } from 'react-hook-form';

const CreateBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Autor</h3>
                <input
                    type="text"
                    className="input"
                    name="author"
                    placeholder="Autor"
                    {...register('author', { required: true })}
                />
                {errors.author && <span>Este campo es requerido</span>}
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Titulo</h3>
                <input
                    type="text"
                    className="input"
                    name="title"
                    placeholder="Titulo"
                    {...register('title', { required: true })}
                />
                {errors.title && <span>Este campo es requerido</span>}
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Genero</h3>
                <input
                    list="categories"
                    className="input"
                    name="categories"
                    placeholder="Genero"
                    {...register('categories', { required: true })}
                />
                <datalist id="categories">
                    <option value="fiction" />
                    <option value="non-fiction" />
                    <option value="fantasy" />
                    <option value="mystery" />
                    <option value="thriller" />
                    <option value="romance" />
                    <option value="horror" />
                    <option value="scienceFiction" />
                    <option value="historicalFiction" />
                    <option value="biography" />
                    <option value="autobiography" />
                </datalist>
                {errors.categories && <span>Este campo es requerido</span>}
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Editorial</h3>
                <input
                    type="text"
                    className="input"
                    name="publisher"
                    placeholder="Editorial"
                    {...register('publisher', { required: true })}
                />
                {errors.publisher && <span>Este campo es requerido</span>}
            </div>
            <div className="inContainer">
                <h3 className="label">Descripción</h3>
                <textarea
                    className="input"
                    name="description"
                    placeholder="Descripción"
                    {...register('description', { required: true })}
                />
                {errors.description && <span>Este campo es requerido</span>}
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Imagen de Portada</h3>
                <input
                    type="file"
                    className="input"
                    name="coverImage"
                    {...register('coverImage', { required: true })}
                />
                {errors.coverImage && <span>Este campo es requerido</span>}
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">PDF</h3>
                <input
                    type="file"
                    className="input"
                    name="pdf"
                    {...register('pdf', { required: true })}
                />
                {errors.pdf && <span>Este campo es requerido</span>}
            </div>
            <button type="submit" className="btn">Enviar</button>
        </form>
    );
};

export default CreateBook;