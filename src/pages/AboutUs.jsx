import { AboutUsHeader } from "../components/AboutUsHeader";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="flex flex-col h-full">
            <AboutUsHeader />
            <Developers />
            <Project />
        </div>
    );
};

function Developers() {
    return (
        <div className={`${useLocation().pathname == "/aboutUs/developers" ? "grid" : "hidden"} gap-y-16 overflow-scroll no-scrollbar h-[90%]`}>
            <div className="w-[75vw] h-[50vh] border-black border-2 grid grid-cols-2 place-items-center">
                <img className="bg-black w-96 h-96 rounded-full" src="" alt="" />
                <p className="text-center px-8 overflow-scroll no-scrollbar h-5/6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! 
                </p>
            </div>
            <div className="w-[75vw] h-[50vh] border-black border-2 grid grid-cols-2 place-items-center">
                <img className="bg-black w-96 h-96 rounded-full" src="" alt="" />
                <p className="text-center px-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae!
                </p>
            </div>
            <div className="w-[75vw] h-[50vh] border-black border-2 grid grid-cols-2 place-items-center">
                <img className="bg-black w-96 h-96 rounded-full" src="" alt="" />
                <p className="text-center px-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae!
                </p>
            </div>
        </div>
    );
}

function Project() {
    return (
        <div className={`${useLocation().pathname == "/aboutUs/project" ? "grid" : "hidden"} h-[90%] w-9/12 place-self-center overflow-scroll no-scrollbar text-center text-2xl`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio possimus nostrum quo natus voluptas molestiae maxime cum excepturi minima, repellat explicabo architecto numquam, sapiente sequi, labore eum necessitatibus? Molestiae!
        </div>
    );
}

export default AboutUs;