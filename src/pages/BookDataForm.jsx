import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../features/book/bookActions.jsx"; // Asume que este action existe
import Error from "../components/Error.jsx";

const BookDataForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publisher: '',
        categories: '',
        description: '',
        pdf: null,
        coverImage: null,
    });

    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset error state before attempting to submit
        setError('');

        // Convert formData to FormData object for file uploads
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            // Dispatch action to create a book
            await dispatch(createBook(data)).unwrap();
            // Handle successful submission (e.g., redirect, show a success message, etc.)
        } catch (err) {
            // Handle errors
            if (err.message) {
                setError(err.message);
            } else {
                setError('An unknown error occurred.');
            }
        }
    };

    return (
        <form className="form overflow-y-scroll justify-between no-scrollbar h-full pt-4 pb-4 w-[80vw] lg:w-[50vw] bg-stone-800 flex flex-col place-items-center rounded-md" onSubmit={handleSubmit}>
            {error && <Error message={error} />}
            <div className="inContainer w-[80%] mt-2 mb-2">
                <h3 className="label text-sm text-stone-50 font-semibold leading-6 mb-2">Autor</h3>
                <input
                    type="text"
                    className="input border-2 rounded w-full"
                    name="author"
                    placeholder="Autor"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="inContainer w-[80%] mt-2 mb-2">
                <h3 className="label text-sm text-stone-50 font-semibold leading-6 mb-2">Titulo</h3>
                <input
                    type="text"
                    className="input border-2 rounded w-full"
                    name="title"
                    placeholder="Titulo"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="inContainer w-[80%] mt-2 mb-2">
                <h3 className="label text-sm text-stone-50 font-semibold leading-6 mb-2">Genero</h3>
                <input
                    list="categories"
                    className="input border-2 rounded w-full"
                    name="categories"
                    placeholder="Genero"
                    value={formData.categories}
                    onChange={handleChange}
                    required
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
            </div>
            <div className="inContainer w-[80%] mt-2 mb-2">
                <h3 className="label text-sm text-stone-50 font-semibold leading-6 mb-2">Editorial</h3>
                <input
                    type="text"
                    className="input border-2 rounded w-full"
                    name="publisher"
                    placeholder="Editorial"
                    value={formData.publisher}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="inContainer w-[80%] mt-2 mb-2">
                <h3 className="label text-sm text-stone-50 font-semibold leading-6 mb-2">Descripción</h3>
                <textarea
                    className="input border-2 rounded max-h-[15vh] w-full"
                    name="description"
                    placeholder="Descripción"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="inContainer w-[80%] text-stone-50 mt-2 mb-2">
                <h3 className="label text-sm font-semibold leading-6 mb-2">Imagen de Portada</h3>
                <input
                    type="file"
                    className="input border-2 rounded w-full"
                    name="coverImage"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="inContainer w-[80%] text-stone-50 mt-2 mb-2">
                <h3 className="label text-sm font-semibold leading-6 mb-2">Contenido del libro</h3>
                <input
                    type="file"
                    className="input border-2 rounded w-full"
                    name="pdf"
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn justify-self-end bottom-[2vh] lg:static w-[25%] text-stone-50 border-2 mt-2 mb-2 rounded">Enviar</button>
        </form>
    );
};

export default BookDataForm;