import React from 'react';
import styles from './DestinosCard.module.css';

const DestinosCards = ({destino}) => {
    return (
            <div className={`${styles.cardDestinos} col-7 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                <img className={`${styles.imagen} img-fluid`} src={destino.portada}  alt="Berlin" />
                <p className='text-center pt-3 fs-4 fw-bold'>{destino.pais}</p>
            </div>
    )
}

export default DestinosCards