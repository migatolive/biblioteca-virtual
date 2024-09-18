import { useState } from "react";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos a tu API
        console.log(formData);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Autor</h3>
                <input
                    type="text"
                    className="input"
                    name="author"
                    placeholder="Autor"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Titulo</h3>
                <input
                    type="text"
                    className="input"
                    name="title"
                    placeholder="Titulo"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Genero</h3>
                <input
                    list="categories"
                    className="input"
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
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Editorial</h3>
                <input
                    type="text"
                    className="input"
                    name="publisher"
                    placeholder="Editorial"
                    value={formData.publisher}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="inContainer">
                <h3 className="label">Descripción</h3>
                <textarea
                    className="input"
                    name="description"
                    placeholder="Descripción"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">Imagen de Portada</h3>
                <input
                    type="file"
                    className="input"
                    name="coverImage"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="inContainer">
                <h3 className="label text-sm font-semibold leading-6 text-gray-900">PDF</h3>
                <input
                    type="file"
                    className="input"
                    name="pdf"
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn">Enviar</button>
        </form>
    );
};

export default BookDataForm;