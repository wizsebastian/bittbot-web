import React from 'react';
import "./styles.scss";

const BannerWhatsapp = (props) => {
    const {title, text} = props.data
    return <div className='banner-whatsapp'>
        <div className="title-container">
        <h4>{title}</h4>
        </div>
        <div className="text-container">
        <p>{text}</p>
        </div>
        <button>¡COMIENZA TU PRUEBA AHORA!</button>
    </div>;
}

export default BannerWhatsapp;