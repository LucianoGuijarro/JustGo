import React from 'react';
import styles from './Suscribete.module.css';

const Suscribete = () => {
  return (
    <section className='container-fluid py-5 bg-success'>
        <div className="container">
            <h2 className='text-center'>Recibi las ultimas novedades</h2>
            <p className='text-center'>Arma tu propio viaje Wroking Holiday</p>
            <form className="row justify-content-center">
                <input placeholder='Nombre*' name='nombre' id='nombre' type='text' required className={`col-2 fw-bold me-2 ${styles.inputSuscripcion}`}></input>
                <input placeholder='Email*' type='email' name='email' id='email' required className={`col-2 fw-bold me-2 ${styles.inputSuscripcion}`}></input>
                <select name='paisDeOrigen' id='paisDeOrigen' required className={`col-2 fw-bold me-2 ${styles.inputSuscripcion}`}>
                    <option value disabled selected>Pais de origen*</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Peru">Peru</option>
                </select>
                <button className={`col-2 me-2 fw-bold ${styles.inputSuscripcion}`}>Suscribirme!</button>
            </form>
        </div>
    </section>
  )
}

export default Suscribete