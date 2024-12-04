import { useGetBooksQuery } from '../services/bookService';
import { NavLink } from "react-router-dom";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Pagination from "../components/Pagination";
import { useState } from "react";

const Home = () => {
    const { data: books = [], error, isLoading } = useGetBooksQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    return (
        <div
            className="cardsContainer overflow-y-scroll no-scrollbar h-full w-full transition ease-in-out py-[2vw] px-[5vw] grid sm:grid-cols-3 lg:grid-cols-4 gap-9">
            {isLoading && <Spinner/>}
            {error && <Error message={error.message}/>}
            {currentBooks.map((book) => (
                <NavLink to={'/product?prod=' + book.id} key={book.id} className="card hover:cursor-pointer hover:scale-110 duration-300 bg-black grid grid-rows-2 justify-items-center rounded-md p-2 overflow-hidden h-[30rem] sm:h-[18rem] xl:h-[50vh]">
                    <img src={book.coverImageUrl} alt={book.title} className="tape w-full bg-white h-full rounded-md"/>
                    <div className="text-stone-50 h-[100%] w-10/12 mt-2 flex flex-col justify-between">
                        <h1 className="text-center text-xl font-bold">{book.title}</h1>
                        <p className="overflow-hidden my-1">
                            {book.author}
                        </p>
                        <p className="overflow-hidden my-1">
                            {book.categories.join(', ')}
                        </p>
                        <p className='text-sm mb-1 block text-center font-semibold button mt-2'>
                            Ver Mas...
                        </p>
                    </div>
                </NavLink>
            ))}
            <Pagination
                postsPerPage={booksPerPage}
                totalPosts={books.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Home;