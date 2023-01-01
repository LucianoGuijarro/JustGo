import React from 'react';
import styles from './alemania.module.css';
import iconoArgentina from '../../../img/icono-argentina.png';
import iconoAlemania from '../../../img/icono-alemania.png';

const GuiaAlemania = () => {
  return (
    <article>
      <header className='my-5'>
        <h1 className={`text-center fw-bold`}><span className={`fs-1`}>Working Holiday</span><br />
          <span className={`${styles.tamañoLetraAlemania}`}>Alemania</span><br />
          <span className={`fs-4`}>La guia maestra</span>
        </h1>
        <div className={`container row justify-content-center ${styles.contenedor}`}>
          <div className="col-3 p-1 d-flex flex-column align-items-end">
            <img src={iconoArgentina} alt="Bandera Argentina" className={`${styles.imagenIconoArgentina}`} />
            <p className={`me-3`}>Argentina</p>
          </div>
          <div className={`col-4 d-flex align-items-center p-0 ${styles.divLinea}`}>
              <div className={`${styles.circulo}`}></div>
              <div className={`${styles.linea}`}></div>
              <div className={`${styles.circulo}`}></div>
          </div>
          <div className={`col-3 p-1 d-flex flex-column align-items-start`}>
            <img src={iconoAlemania} alt="Bandera Alemania" className={`${styles.imagenIconoAlemania}`} />
            <p className={`ms-3`}>Alemania</p>
          </div>
        </div>
      </header>
    </article>
  )
}

export default GuiaAlemania