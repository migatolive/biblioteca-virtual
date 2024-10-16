import { useSearchParams } from "react-router-dom";
import Home from "./Home.jsx";

const Product = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("prod");

    const element = ['Book Title 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus architecto nostrum voluptatum illum qui obcaecati labore. Consectetur, voluptatibus soluta ducimus repudiandae quam obcaecati facilis. Vitae labore sunt consectetur fuga dolor?', '1248177874835'];

    return (
        <>
            <div className="container1 w-[55vw] mx-[1.5vh] py-[1.5vh] flex justify-center h-full">
                <img src="" alt="" className="frontPage rounded-md w-11/12 h-3/5 bg-black" />
                <div className="comments">

                </div>
            </div>
            <div className="bookText w-[42vw] py-[1.5vh] mx-[1.5vh] flex flex-col justify-center h-full">
                <h1 className="title text-5xl text-center my-5">{element[0]}</h1>
                <p className="resume text-justify overflow-scroll no-scrollbar h-">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas aperiam cum rerum impedit dicta, officiis mollitia culpa facere nobis quos assumenda voluptatem beatae, quibusdam iste temporibus deleniti voluptates qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima voluptatem deleniti deserunt consequatur doloremque quis accusantium, vitae eaque ipsam ad! Quam eligendi eius corrupti fuga aspernatur repellendus amet tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. At temporibus, nobis accusantium deleniti ullam fuga inventore illum cupiditate ex, corporis ad, quibusdam beatae? Reiciendis omnis ratione, suscipit nulla dolorum dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ducimus quo rerum aspernatur earum dolores ullam. Praesentium esse dolorum deserunt culpa odit, aliquam sunt doloribus maiores veniam est tempore. Aspernatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi culpa blanditiis, ullam molestiae veritatis enim sunt libero iste sapiente sed laborum iusto, quisquam, possimus ratione quas ipsum! Eius, fugiat nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea quaerat modi explicabo at officia possimus ullam alias tenetur fugiat omnis, nisi odio quia ipsum quidem deserunt eveniet provident unde! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis aliquid aut omnis eligendi voluptatibus dolor, nisi adipisci repudiandae maxime perspiciatis? Consectetur voluptates fugit veritatis nobis voluptatum molestias. Reiciendis, quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quis, illo nisi distinctio consequuntur, cum, quasi consequatur enim nihil a perspiciatis quia? Perferendis in rem ex ipsam reprehenderit sapiente illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut deleniti, laudantium accusantium numquam sint doloribus vitae dolores atque reiciendis itaque voluptate illo maxime ducimus dolorem temporibus corrupti cumque expedita eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis commodi corrupti necessitatibus sunt maxime fugiat vero architecto dolores quis nostrum! Quasi itaque beatae dolorum, voluptas impedit recusandae odio pariatur asperiores!
                </p>
            </div>
        </>
    );
};

export default Product;