import { NavLink } from "react-router-dom";

const Home = () => {
    const prods = [
        ['Book Title 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus architecto nostrum voluptatum illum qui obcaecati labore. Consectetur, voluptatibus soluta ducimus repudiandae quam obcaecati facilis. Vitae labore sunt consectetur fuga dolor?', '1248177874835'],
        ['Book Title 2', 'Book Resume 2', '1389247837582'],
        ['Book Title 3', 'Book Resume 3', '2365452612634'],
        ['Book Title 4', 'Book Resume 4', '1352352353535'],
        ['Book Title 5', 'Book Resume 5', '1231245236534'],
        ['Book Title 6', 'Book Resume 6', '1235899234515'],
        ['Book Title 7', 'Book Resume 7', '9586943787213'],
        ['Book Title 8', 'Book Resume 8', '3859115636543'],
        ['Book Title 9', 'Book Resume 9', '3587918245363']
    ]

    return (
       <div className="cardsContainer overflow-y-scroll no-scrollbar h-full w-full transition ease-in-out py-[2vw] px-[5vw] grid sm:grid-cols-3 lg:grid-cols-4 gap-9">
            {prods.map((element) => (
                <NavLink to={'/product?prod=' + element[2]} key={element[2]} className="card hover:cursor-pointer hover:scale-110 duration-300 bg-black grid grid-rows-2 justify-items-center rounded-md p-2 overflow-hidden h-[30rem] sm:h-[18rem] xl:h-[50vh]">
                    <img src="" alt="Book" className="tape w-full bg-white h-full rounded-md" />
                    <div className="text-stone-50 h-[100%] w-10/12 mt-2 flex flex-col justify-between">
                        <h1 className="text-center text-xl font-bold">{element[0]}</h1>
                        <p className="overflow-hidden my-1">
                            {element[1]}
                        </p>
                        <p className='text-sm mb-1 block text-center font-semibold button mt-2' >
                            Ver Mas...
                        </p>
                    </div>
                </NavLink>
            ))}
       </div>
    );
};

export default Home;