import React from 'react';
import styles from './InformacionWH.module.css';
import imagenCard from '../../img/infoWH.jpg';

const InformacionWH = () => {
  return (
    <div className={`container-fluid ${styles.colorFondo}`}>
        <div className="container">
            <div className={`row justify-content-center py-5 ${styles.column}`}>
                <div className={`col-5 d-flex flex-column align-items-center justify-content-center ${styles.cardRow} ${styles.cardTexto}`}>
                    <h2 className='w-75 py-4'>¿Que es una Visa Working Holiday?</h2>
                    <p className='w-75 pb-4 mt-2 fs-5'>Informate de todo lo que debes saber de estas visas que te permiten viajar y trabajar por el mundo!</p>
                    <div>
                        <button className={`mb-5 mt-3 p-2 fw-bold fs-5 ${styles.boton}`}>Quiero aprender mas!</button>
                    </div>
                </div>
                <div className={`col-5 p-0 ${styles.cardRow}`}>
                    <img className={`${styles.imagen}`} src={imagenCard} alt="imagen Informacion" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default InformacionWH