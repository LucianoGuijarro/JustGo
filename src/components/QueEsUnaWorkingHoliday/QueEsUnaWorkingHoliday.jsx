import React from 'react';
import styles from './QueEsUnaWorkingHoliday.module.css';
import imagen1 from '../../img/que es una working holiday.png';
import imagen2 from '../../img/Rango de edad.jpg';
import imagen3 from '../../img/pasaporte icono.png';
import imagen4 from '../../img/calendario.png';
import imagen5 from '../../img/permite trabajar.png';
import imagen6 from '../../img/La gestionas vos.png';
import imagen7 from '../../img/Una por destino.png';

const QueEsUnaWorkingHoliday = () => {
    return (
        <>
            <div className={`contaienr-fluid bg-white ${styles.colorBanner}`}>
                <h1 className={`${styles.colorLetra} text-center py-5`}>¿Qué es una Visa Working Holiday? </h1>
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-5 d-flex justify-content-center flex-column p-0">
                            <h2 className={`fw-bold ${styles.colorLetra} ${styles.tamañoLetra}`}>Animate a viajar, vivir y trabajar en el exterior</h2>
                            <p className='my-5'>Las visas Working Holiday son un tipo de visas las cuales te permiten viajar a un determinado pais con
                                el objetivo de trabajar durante un cierto tiempo y conocer, recorrer y sumergirte en su cultura
                                durante 1 año entero. Vas a poder viajar, recorrer lugares hermosos, conocer mucha gente, aprender
                                idiomas, sobre mmuchas culturas y tambien vas a poder ahorrar mucho dinero
                            </p>
                        </div>
                        <div className="col-5 d-flex justify-content-center align-items-center p-0">
                            <img src={imagen1} alt="Imagen 1" className={`${styles.imagen}`} />
                        </div>
                    </div>
                </section>
                <section className='container'>
                    <h2 className={`text-center fs-1 py-5 ${styles.colorLetra}`}>¿Que debes tener en cuenta para aplicar?</h2>
                    <div className="row justify-content-around">
                        <div className="col-3 d-flex flex-column align-items-center">
                            <img src={imagen2} alt="Rango de edad" className={`${styles.imagenIcono}`} />
                            <p className={`fs-3 fw-bold m-0 text-center mt-2 ${styles.colorLetra}`}>Rango de edad</p>
                            <p className='text-center mt-2'>Debes tener entre 18 y 35 años. Esto cambia segun el destino</p>
                        </div>
                        <div className={`col-3 d-flex flex-column align-items-center ${styles.columnasDerechas}`}>
                            <img src={imagen3} alt="Pasaporte" className={`${styles.imagenIcono}`} />
                            <p className={`fs-3 fw-bold m-0 text-center mt-2 ${styles.colorLetra}`}>El pasaporte es lo mas importante</p>
                            <p className='text-center mt-2'>Lo importante a la hora de obtener la visa es que pasaporte tenes, no en que pais vivis</p>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-3 d-flex flex-column align-items-center ms-5">
                            <img src={imagen4} alt="Calendario" className={`${styles.imagenIcono}`} />
                            <p className={`fs-3 fw-bold m-0 text-center mt-2 ${styles.colorLetra}`} >Duracion de la Visa</p>
                            <p className='text-center mt-2'>La duracion de la visa es de un año como maximo, pero si quieres puede ser de menos tiempo</p>
                        </div>
                        <div className={`col-3 d-flex flex-column align-items-center me-5 ${styles.columnasDerechas}`}>
                            <img src={imagen5} alt="Permite trabajar" className={`${styles.imagenIcono}`} />
                            <p className={`fs-3 fw-bold m-0 text-center mt-2 ${styles.colorLetra}`}>¿Que trabajo puedo hacer durante mi visa?</p>
                            <p className='text-center mt-2'>Puedes realizar el trabajo que tu quieras desde un trabajo como profesional hasta un mesero en un bar</p>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-3 d-flex flex-column align-items-center ms-5">
                            <img src={imagen6} alt="La gestionas vos mismo" className={`${styles.imagenIcono}`} />
                            <p className={`fs-3 fw-bold m-0 text-center mt-2 ${styles.colorLetra}`}>¡Vos mismo la gestionas!</p>
                            <p className='text-center mt-2'>Los tramites que requiere la visa lo puede hacer uno mismo, si necesita ayuda pueden fijarse en las guias que tenemos para ustedes</p>
                        </div>
                        <div className={`col-3 d-flex flex-column align-items-center me-5 ${styles.columnasDerechas}`}>
                            <img src={imagen7} alt="Una por destino" className={`${styles.imagenIcono}`} />
                            <p className={`fs-3 fw-bold m-0 text-center mt-2 ${styles.colorLetra}`}>Solo una ves por destino</p>
                            <p className='text-center mt-2'>Esta visa solo se puede hacer una ves por destino, es decir no podes repetir el mismo pais</p>
                        </div>
                    </div>
                </section>
                <section className='container'>
                    <h2 className={`text-center fw-bold ${styles.tamañoLetra} ${styles.colorLetra} py-5`}>Beneficios</h2>
                </section>
            </div>
        </>
    )
}

export default QueEsUnaWorkingHoliday