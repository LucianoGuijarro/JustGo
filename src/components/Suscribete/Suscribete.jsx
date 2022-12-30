import React from 'react';
import styles from './Suscribete.module.css';

const Suscribete = () => {
  return (
    <section className='container-fluid py-5 bg-success'>
      <div className="container">
        <h2 className='text-center'>Recibi las ultimas novedades</h2>
        <p className='text-center'>Arma tu propio viaje Wroking Holiday</p>
        <form className={`row justify-content-center ${styles.form}`}>
          <div className={`col-2  fw-bold ${styles.inputs}`}>
            <input placeholder='Nombre*' name='nombre' id='nombre' type='text' required className={`${styles.inputs}`}></input>
          </div>
          <div className={`col-2 fw-bold  ${styles.inputs}`}>
            <input placeholder='Email*' type='email' name='email' id='email' required className={`${styles.inputs}`} ></input>
          </div>
          <button className={`col-2 fw-bold ${styles.inputs} ${styles.boton}`}>Suscribirme!</button>
        </form>
      </div>
    </section>
  )
}

export default Suscribete