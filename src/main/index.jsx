import './style.scss'
import React from "react";
import Content from "../data/content";

const Main = () => {

    const hiddenContent = (event) => {
        let a = event.parentNode
        let content = a.querySelector('.block')
        content.style.width = '0%'
        content.style.fontSize = '0rem'
    }
    const showHiddenContent = (event) => {
        let a = event.parentNode
        let content = a.querySelector('.block')
        content.style.width = '50%'
        content.style.fontSize = '3rem'

    }

    return (
        <div className='main-container'>

            {
                Content.map((e) => {
                    return (
                        <div className={`father-container-content ${e.class}`} >
                            <div className="child-desc-content">
                                <div>{e.titulo}</div>
                                <div>
                                    <p>{e.desc}</p>
                                </div>
                                <div>
                                    <a href={e.url} target="_blank">Saiba mais</a>
                                </div>
                            </div>
                            <div className="child-img-content" onMouseEnter={(e) => hiddenContent(e.target)} onMouseLeave={(e) => showHiddenContent(e.target)}>
                                <img src={e.img} alt="" />
                                <div className='block'>Ver</div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Main;