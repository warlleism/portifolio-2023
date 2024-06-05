import { SlMouse } from "react-icons/sl";
import './style.scss'

const ArrowDown = () => {

    return (
        <a
            href="#about"
            className="absolute bottom-7 left-1/2 transform -translate-x-1/2 cursor-pointer animation">
            <div>
                <SlMouse size={40} color="#fff" className="pointer-events-none" />
            </div>
        </a>
    )
}

export default ArrowDown;