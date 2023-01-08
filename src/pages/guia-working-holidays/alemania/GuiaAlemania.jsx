import React from 'react';
import styles from './alemania.module.css';
import iconoArgentina from '../../../img/icono-argentina.png';
import iconoAlemania from '../../../img/icono-alemania.png';
import { GiPlainCircle } from "react-icons/gi";
import TablaInfo from '../../../components/Tabla/TablaInfo';
import AcordeonAlemania from '../../../components/AcordeonAlemania/AcordeonAlemania';

const GuiaAlemania = () => {
  return (
    <article>
      <h1 className={`text-center fw-bold`}><span className={`fs-1`}>Working Holiday</span><br />
        <span className={`${styles.tamañoLetraAlemania}`}>Alemania</span><br />
        <span className={`fs-4`}>La guia maestra</span>
      </h1>
      <div className={`container `}>
        <div className={`row justify-content-center ${styles.contenedor}`}>
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
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center me-0 mt-5">
          <div className={`col-3`}><p className='d-inline'>¡Tu viaje comienza aquí!</p></div>
          <div className={`col-3 d-flex justify-content-end align-items-center`}><GiPlainCircle /> <p className='m-0 ps-2 d-inline'>ACTUALIZADO AL 2023</p> </div>
          <div className='col-9 d-flex justify-content-center'>
            <TablaInfo />
          </div>
        </div>
      </div>
      <section>
        <h2 className='text-center my-5'>¡Empezá a armar tu viaje!</h2>
        <div className="container-fluid">
          <div className="row">
            <AcordeonAlemania />
          </div>
        </div>
      </section>
    </article>
  )
}

export default GuiaAlemania