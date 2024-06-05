import { SlMouse } from "react-icons/sl";
import './style.scss'

const ArrowDown = () => {

    return (
        <div
            href="#about"
            className="
            w-[100%]
            absolute 
            left-0
            bottom-7 
            flex
            justify-center
            items-center
            cursor-pointer 
            animation"
        >
            <a href="#about">
                <SlMouse size={40} color="#fff" className="pointer-events-none" />
            </a>
        </div>
    )
}

export default ArrowDown;