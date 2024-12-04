import { Link, NavLink, useSearchParams } from "react-router-dom";
import { BsDownload } from "react-icons/bs";

const Product = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("prod");

    return (
        <>
            <div className="container1 w-[55vw] mx-[1.5vh] py-[1.5vh] flex flex-col h-full">
                <NavLink className="w-11/12 h-3/5 border-2 border-black rounded-md  hover:scale-y-105 duration-300" to={pdf} target="_blank" download>
                    <img src={front} alt="" className="frontPage object-contain w-full h-full rounded-md" />
                    <BsDownload className="relative float-right right-[2%] top-[-10%]" />
                </NavLink>
                <button className="m-4 self-start">Añadir a favoritos</button>
                <div className="comments">

                </div>
            </div>
            <div className="bookText w-[42vw] py-[1.5vh] mx-[1.5vh] flex flex-col h-full">
                <h1 className="title text-5xl text-center my-5">{element[0]}</h1>
                <p className="resume text-justify overflow-scroll no-scrollbar h-">
                    {element[1]}
                </p>
            </div>
        </>
    );
};

export default Product;