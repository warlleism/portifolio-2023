import { useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ArrowUp = () => {

    useEffect(() => {
        const arrow = document.getElementById('arrow')

        window.addEventListener('scroll', () => {
            let scroll = Math.round(window.scrollY)
            const style = arrow.style
            if (scroll >= 954) {
                style.opacity = 1
                style.pointerEvents= 'all'
            } else {
                style.opacity = 0
                style.pointerEvents = 'none'
            }
        })


    }, [])

    const arrowClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div
            onClick={() => arrowClick()}
            id="arrow"
            className="
            transition-all
            fixed opacity-0 bottom-10 right-10 pointer-events-none bg-[#6004a8] p-3 rounded-full cursor-pointer">
            <FaLongArrowAltUp size={30} color="#fff" className="pointer-events-none" />
        </div>
    )
}

export default ArrowUp;