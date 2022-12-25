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
import Suscribete from '../Suscribete/Suscribete';

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
                    <h3 className='mt-5 mb-4 fs-2'>¿Que tengo permitido hacer con una Woking Holiday Visa?</h3>
                    <p className={`${styles.tamañoLetraRespuestas}`}>
                        Esto depende de cada pais de destino, ya que cada pais pone sus propios terminos y condiciones, pero se podria decir que <strong>te permiten trabajar y residir dentro de ese pais durante 12 meses</strong>.
                        Lo mejor es que ustedes mismos la pueden obtener,
                        siguiendo nuestros pasos y consejos en las guias maestras que tenemos.
                    </p>
                    <p className={`${styles.tamañoLetraRespuestas}`}>
                        Es decir, <strong>no hace falta que le paguen a ninguna agencia ni empresa de viajes</strong>. En esta web encontraras todo lo que necesitas saber
                        para poder obtener tu visa vos mismo.
                    </p>
                    <h3 className='mt-5 mb-4 fs-2'>¿Que cosas no puedo hacer con una Working Holiday Visa?</h3>
                    <p className={`${styles.tamañoLetraRespuestas}`}>
                        <strong>Esta visa les permite trabajar en el pais que se las otorga</strong>. Esto quiere decir que si aplicaste a la visa de Dinamarca por ejemplo,
                        no podes trabajar en otro pais que no sea Dinamarca, si quisieras trabajar en Alemania, Francia, etc deberias aplicar
                        a las visas de esos paises propiamente dichos.
                    </p>
                    <p className={`${styles.tamañoLetraRespuestas}`}>
                        Otro tema importante es que la visa te otorga permiso para permanecer legal durante 12 meses, <strong>pero encontrar trabajo y alojamiento ya corre por tu cuenta</strong>,
                        pero a no preocuparse ya que si el pais brinda la posibilidad
                        de esta visa es porque trabajos hay muchos.
                    </p>
                    <h3 className='mt-5 mb-4 fs-2'>¿Es posible ahorrar mucho dinero con las Working Holidays?</h3>
                    <p className={`${styles.tamañoLetraRespuestas}`}>
                        La respuesta es si, en algunos paises mas que en otros pero en todos podras ahorrar bastante dinero, de hecho
                        por ej en Australia se puede llegar a ahorrar USD 1500 por mes o incluso mas dependiendo del trabajo que hagas.
                    </p>
                    <p className={`${styles.tamañoLetraRespuestas}`}>
                        Por supuesto que esto varia segun cada uno, el trabajo y las horas que hagan en el mismo, de sus gastos, de su 
                        estilo de vida, etc. Pero en todos los paises tendran la posibilidad de ahorrar dinero. <strong className={`${styles.colorLetra}`}>Si quieres puedes ver nuestro ranking
                        de paises en los que mas se ahorra dinero yendo de Working Holidays</strong>.
                    </p>
                    <h3 className='mt-5 mb-4 fs-2'>¿Hay paises mas faciles de conseguir esta visa que en otros?</h3>
                    <p className={`${styles.tamañoLetraRespuestas}`}>
                        Si, de hecho hay algunos paises donde los requisitos son pocos y los cupos al ser ilimitados son mas faciles 
                        de conseguir que en otros paises como seria el caso de <strong className={`${styles.colorLetra}`}>Alemania</strong> y <strong className={`${styles.colorLetra}`}>Francia</strong>. <br />
                        Por otro lado tambien hay paises en los cuales son muy demandados y al ser cupos limitados son dificiles de conseguir
                        asi es el caso por ej de  <strong className={`${styles.colorLetra}`}>Irlanda</strong> y <strong className={`${styles.colorLetra}`}>Nueva Zelanda</strong>
                    </p>
                    <p className={`${styles.tamañoLetraRespuestas}`}>
                        Tambien influye mucho que pasaporte tengan, ya que si cuentan con pasaporte <strong>Italiano</strong>, <strong>Español</strong> o <strong>Aleman</strong>
                        por ej, pueden ir a trabajar a muchos paises de Europa incluso sin necesidad de ninguna visa y en caso de que necesiten
                        igualmente alguna visa los requisitos cambian como en el caso de <strong>Australia</strong> y <strong>Nueva Zelanda</strong> en donde 
                        con pasaporte europeo los cupos son ilimitados.
                    </p>
                    <h3 className='mt-5 mb-4 fs-2'>Diferencia entra una Working Holiday Visa y una Work and Travel USA</h3>
                    <p className={`${styles.tamañoLetraRespuestas}`}>
                        Las Visas Work and Travel USA es un tipo de visa en el que se otorga por poco tiemmpo (3 a 4 meses aprox).
                        <strong> Si lo hacen con una empresa como lo hace la mayoria de las personas siempre terminan trabajando en los mismos lugares. </strong> 
                        Ademas, este tipo de visa generalmente siempre son para la temporada de invierno en centros de ski.
                    </p>
                    <p className={`${styles.tamañoLetraRespuestas} pb-5`}>
                        En cambio, una <strong>Working Holiday Visa, la gestionan ustedes mismos y no tienen que pagarle a nadie</strong>.
                        Nosotros creemos que es una experiencia mas enriquecedora ya que todo es por su cuenta y es algo que le servira para el resto 
                        de su vida y para sus proximas avennturas.
                    </p>
                </section>
                <Suscribete />
            </div>
        </>
    )
}

export default QueEsUnaWorkingHoliday