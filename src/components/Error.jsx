import {useState, useEffect} from "react";
import PropTypes from "prop-types";

const Error = ({ message, duration = 5000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return (
        visible && (
            <div className="bg-red-100 text-red-700 border border-red-400 rounded p-3 mb-4 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="mr-2">⚠️</span>
                    {message}
                </div>
                <button onClick={() => setVisible(false)} className="text-red-700 font-bold">
                    &times;
                </button>
            </div>
        )
    );
}

Error.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Error;