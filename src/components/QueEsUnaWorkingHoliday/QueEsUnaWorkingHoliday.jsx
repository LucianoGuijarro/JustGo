import React from 'react';
import styles from './QueEsUnaWorkingHoliday.module.css';
import imagen1 from '../../img/que es una working holiday.png';
import imagen2 from '../../img/Rango de edad.jpg';
import imagen3 from '../../img/pasaporte icono.png';
import imagen4 from '../../img/calendario.png';
import imagen5 from '../../img/permite trabajar.png';
import imagen6 from '../../img/La gestionas vos.png';
import imagen7 from '../../img/Una por destino.png';
import { MdCheckCircleOutline } from "react-icons/md";
import imagen8 from '../../img/WorkStudy&WorkingHoliday.png';
import imagen9 from '../../img/signo infinito.png';
import imagen10 from '../../img/imagen reloj.png';

const QueEsUnaWorkingHoliday = () => {
    return (
        <>
            <div className={`contaienr-fluid bg-white ${styles.colorBanner}`}>
                <h1 className={`${styles.colorLetra} text-center py-5`}>¿Qué es una Visa Working Holiday? </h1>
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-5 d-flex justify-content-center flex-column p-0">
                            <h2 className={`fw-bold ${styles.colorLetra} ${styles.tamañoLetra}`}>Animate a viajar, vivir y trabajar en el exterior</h2>
                            <p className='my-5 fs-5'>Las visas Working Holiday son un tipo de visas las cuales te permiten viajar a un determinado pais con
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
                    <div className="row d-flex justify-content-center">
                        <div className="col-5">
                            <div className='d-flex align-items-center mb-4'>
                                <MdCheckCircleOutline size={70} />
                                <p className={`p-0 my-0 ms-3 fs-5 ${styles.colorLetra}`}>No hay agencias de por medio</p>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <MdCheckCircleOutline size={70} />
                                <p className={`p-0 my-0 ms-3 fs-5 ${styles.colorLetra}`}>Las visas son faciles de conseguir</p>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <MdCheckCircleOutline size={70} />
                                <p className={`p-0 my-0 ms-3 fs-5 ${styles.colorLetra}`}>Destinos con excelente calidad de vida</p>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <MdCheckCircleOutline size={70} />
                                <p className={`p-0 my-0 ms-3 fs-5 ${styles.colorLetra}`}>Aprender idiomas y conocer gente</p>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className='d-flex align-items-center mb-4'>
                                <MdCheckCircleOutline size={70} />
                                <p className={`p-0 my-0 ms-3 fs-5 ${styles.colorLetra}`}>Ahorras en USD tanto como te sea posible</p>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <MdCheckCircleOutline size={70} />
                                <p className={`p-0 my-0 ms-3 fs-5 ${styles.colorLetra}`}> Algunos paises permiten extender la visa</p>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <MdCheckCircleOutline size={70} />
                                <p className={`p-0 my-0 ms-3 fs-5 ${styles.colorLetra}`}>Tenes la posibilidad de trabajar de tu profesion</p>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <MdCheckCircleOutline size={70} />
                                <p className={`p-0 my-0 ms-3 fs-5 ${styles.colorLetra}`}>Buenas para empezar sin queres vivir en otro pais</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container py-5'>
                    <article className="row justify-content-center">
                        <div className="col-6">
                            <h2 className={`${styles.tamañoLetra} ${styles.colorLetra} fw-bold`}>¿Hay diferencia con las visas "Work and Travel"?</h2>
                            <p className='mt-5 fs-5'>Aunque parezcan parecidas, no es lo mismo. Ya que las visas "Work and Travel" son visas en las
                                cuales ya todo esta predeterminado de ante mano como por ej: El destino al que iras, el trabajo que harás,
                                donde te quedarás y en fecha volverás
                            </p>
                        </div>
                        <div className="col-5 d-flex justify-content-center">
                            <img src={imagen8} alt="WorkAndTravelWorkingHoliday" className={`${styles.imagen8}`} />
                        </div>
                    </article>
                    <article className='my-5'>
                        <div className="row d-flex justify-content-around">
                            <div className={`col-4 ${styles.margenSection}`}>
                                <h2 className={`${styles.colorLetra} fs-1 fw-bold`}>Mas trabajos</h2>
                                <p>Es verdad que al trabajo lo tenes que buscar vos, pero podes cambiar cuantas veces quieras
                                    de trabajo. Incluso podes trabajar de lo que vos estudiaste
                                </p>
                            </div>
                            <div className={`col-4 ${styles.margenSection}`}>
                                <h2 className={`fs-1 fw-bold`}>Mas trabajos</h2>
                                <p className={`${styles.colorLetra}`}>Es verdad que al trabajo lo tenes que buscar vos, pero podes cambiar cuantas veces quieras
                                    de trabajo. Incluso podes trabajar de lo que vos estudiaste
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className='my-5'>
                        <div className="row d-flex justify-content-around">
                            <div className={`col-4 ${styles.margenSection}`}>
                                <p className={`fs-1 fw-bold`}>Mas trabajos</p>
                                <p className={`${styles.colorLetra}`}>Es verdad que al trabajo lo tenes que buscar vos, pero podes cambiar cuantas veces quieras
                                    de trabajo. Incluso podes trabajar de lo que vos estudiaste
                                </p>
                            </div>
                            <div className={`col-4 ${styles.margenSection}`}>
                                <p className={`${styles.colorLetra} fs-1 fw-bold`}>Mas trabajos</p>
                                <p>Es verdad que al trabajo lo tenes que buscar vos, pero podes cambiar cuantas veces quieras
                                    de trabajo. Incluso podes trabajar de lo que vos estudiaste
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
                <section className='container py-5'>
                    <h2 className={`text-center fw-bold ${styles.tamañoLetra} ${styles.colorLetra} py-3`}>¿Cuando puedo solicitar estas visas?</h2>
                    <p className={`${styles.colorLetra} fs-5 text-center m-0`}>Va a depender del destino que elijas, ya que algunos tienen visas limitadas y otros tienen cantidad ilimitada por año.</p>
                    <div className="row mt-5 d-flex justify-content-around">
                        <div className="col-3">
                            <img src={imagen9} alt="Signo infinito" className={`${styles.imagen9} m-0 p-0 pb-4`} />
                            <p className={`${styles.colorLetra} fw-bold fs-2 m-0 mt-4 p-0`}>Destinos con</p>
                            <p className={`fw-bold fs-3 m-0`}>Cupos ilimitados</p>
                            <p className='fs-5'><span className={`${styles.colorLetra} fw-bold`}>En cualquier fecha</span><br />Estos destinos al tener Visas Working Holidays ilimitadas estan disponibles en cualquier momento del año.<br /> Quiere decir que estan disponibles para aplicar en cualquier momento del año.</p>
                        </div>
                        <div className="col-3">
                            <img src={imagen10} alt="Reloj" className={`${styles.imagen10} m-0 p-0`} />
                            <p className={`${styles.colorLetra} fw-bold fs-2 m-0 mt-4 p-0`}>Destinos con</p>
                            <p className={`fw-bold fs-3 m-0`}>Cupos limitados</p>
                            <p className='fs-5'><span className={`${styles.colorLetra} fw-bold`}>En fechas especificas</span><br />Los destinos que tienen visas limitadas, estan disponibles en ciertas fechas especificas<br /> Por eso es importante que al momento se abran tengas todo claro para poder aplicar, para eso estan nuestras guias.</p>
                        </div>
                    </div>
                </section>
                <section className='container'>
                    <h2 className={`text-center fw-bold fs-1 ${styles.colorLetra} py-3`}>Otros detalles sobre las Visas Working Holidays</h2>
                    <h3 className='mt-5 mb-4'>¿Que tengo permitido hacer con una Woking Holiday Visa?</h3>
                    <p>Esto depende de cada pais de destino, ya que cada pais pone sus propios terminos y condiciones, pero se podria decir
                        te permiten trabajar y residir dentro de ese pais durante 12 meses. Lo mejor es que ustedes mismos la pueden obtener,
                        siguiendo nuestros pasos y consejos en las guias maestras que tenemos.
                    </p>
                    <p>Es decir, que no hace falta que le paguen a ninguna agencia ni empresa de viajes. En esta web encontraras todo lo que necesitas saber
                        para poder obtener tu visa vos mismo.
                    </p>
                </section>
            </div>
        </>
    )
}

export default QueEsUnaWorkingHoliday