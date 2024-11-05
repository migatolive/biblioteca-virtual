import { SocialMedias } from "../components/SocialMedias.jsx";

const Contact = () => {
    return (
        <div className="w-full flex flex-col justify-between items-center h-full">
            <h1 className="issueLabel text-xl mt-10 bg-black text-white p-2 rounded-md">Cuál es su mensaje para nosotros?</h1>
            <textarea name="issue" id="issue" placeholder="Escriba acá su mensaje..." className="issue p-2 mt-auto text-base h-24 min-h-11 max-h-60 w-11/12 lg:w-6/12 border-2 border-black"></textarea>
            <button className="sendBtn mt-auto hover:bg-gray-500 duration-300 p-2 rounded-md">Enviar</button>
            <div className="socialMedias mt-auto w-[70vw] md:w-[50vw] lg:w-[70%] grid grid-cols-[repeat(4,auto)] items-center justify-items-center">
                <SocialMedias />
            </div>
        </div>
    );
}

export default Contact;