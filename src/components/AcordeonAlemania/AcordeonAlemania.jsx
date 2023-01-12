import React from 'react';
import styles from './AcordeonAlemania.module.css';
import { AiOutlineBars } from "react-icons/ai";
import { Link } from 'react-router-dom';
import NavAcordion from '../NavAcordion/NavAcordion';

const AcordeonAlemania = () => {
    return (
        <div className='col-12'>
            <NavAcordion />
            <div className="container">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="tramites" role="tabpanel" aria-labelledby="tramites-tab">
                        <div className="row justify-content-center">
                            <div className={`col-xl-7 col-lg-7 col-md-12 col-sm-12 mt-2`}>
                                <div class={`accordion`} id="accordionFlushExample">
                                    <div class={`accordion-item ${styles.acordeonItem}`}>
                                        <div class="accordion-header" id="WorkinHolidayVisa">
                                            <button class={`accordion-button collapsed px-3 py-1 ${styles.acordeonItem} `} type="button" data-bs-toggle="collapse" data-bs-target="#acordeonWorkinHoliday" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <div className='d-flex flex-column'>
                                                    <p className={`p-0 pt-1 m-0 mb-1 fs-4 fw-bold ${styles.letraAcordeon}`}>Working Holiday Visa</p>
                                                    <p className={`p-0 pb-1 m-0 opacity-75 ${styles.letraAcordeonAbajo}`}>Requisitos y como conseguir la visa</p>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="acordeonWorkinHoliday" class={`accordion-collapse collapse ${styles.acordionColapsse}`} aria-labelledby="WorkinHolidayVisa" data-bs-parent="#accordionFlushExample">
                                            <ul className='p-2'>
                                                <Link to={'/elige-tu-proximo-destino'}>
                                                    <li className={`d-flex mx-2 mb-3 ${styles.cardsAcordionColapse}`}>
                                                        <div className={`py-3 ${styles.icono}`}><AiOutlineBars size={35} /></div>
                                                        <p className='d-inline ms-2 mb-0 py-3 fs-5'>Working Holiday Alemania: Todo lo que tienes que saber</p>
                                                    </li>
                                                </Link>
                                                <Link to={'/elige-tu-proximo-destino'}>
                                                    <li className={`d-flex mx-2 mb-3 ${styles.cardsAcordionColapse}`}>
                                                        <div className={`py-3 ${styles.icono}`}><AiOutlineBars size={35} /></div>
                                                        <p className='d-inline ms-2 mb-0 py-3 fs-5'>Requisitos Working Holiday Alemania</p>
                                                    </li>
                                                </Link>
                                                <Link to={'/elige-tu-proximo-destino'}>
                                                    <li className={`d-flex mx-2 mb-3 ${styles.cardsAcordionColapse}`}>
                                                        <div className={`py-3 ${styles.icono}`}><AiOutlineBars size={35} /></div>
                                                        <p className='d-inline ms-2 mb-0 py-3 fs-5'>¿Como aplicar a la visa?</p>
                                                    </li>
                                                </Link>
                                                <Link to={'/elige-tu-proximo-destino'}>
                                                    <li className={`d-flex mx-2 mb-3 ${styles.cardsAcordionColapse}`}>
                                                        <div className={`py-3 ${styles.icono}`}><AiOutlineBars size={35} /></div>
                                                        <p className='d-inline ms-2 mb-0 py-3 fs-5'>¿Como conseguir turno en la embajada de Buenos Aires?</p>
                                                    </li>
                                                </Link>
                                                <Link to={'/elige-tu-proximo-destino'}>
                                                    <li className={`d-flex mx-2 mb-3 ${styles.cardsAcordionColapse}`}>
                                                        <div className={`py-3 ${styles.icono}`}><AiOutlineBars size={35} /></div>
                                                        <p className='d-inline ms-2 mb-0 py-3 fs-5'>¿Como conseguir la Visa desde el exterior?</p>
                                                    </li>
                                                </Link>
                                                <Link to={'/elige-tu-proximo-destino'}>
                                                    <li className={`d-flex mx-2 mb-3 ${styles.cardsAcordionColapse}`}>
                                                        <div className={`py-3 ${styles.icono}`}><AiOutlineBars size={35} /></div>
                                                        <p className='d-inline ms-2 mb-0 py-3 fs-5'>¿Como demostrar los fondos?</p>
                                                    </li>
                                                </Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className={`col-xl-7 col-lg-7 col-md-12 col-sm-12 mt-2`}>
                                <div class={`accordion`} id="InfoExtra">
                                    <div class={`accordion-item ${styles.acordeonItem}`}>
                                        <di class="accordion-header" id="InfoExtra">
                                            <button class={`accordion-button px-3 py-1 collapsed ${styles.acordeonItem} `} type="button" data-bs-toggle="collapse" data-bs-target="#AcordeonInfo" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <div className='d-flex flex-column'>
                                                    <p className={`p-0 m-0 pt-1 mb-1 fs-4 fw-bold ${styles.letraAcordeon}`}>Info extra</p>
                                                    <p className={`p-0 m-0 pb-1 opacity-75 ${styles.letraAcordeonAbajo}`}>¡Mas info para tu viaje!</p>
                                                </div>
                                            </button>
                                        </di>
                                        <div id="AcordeonInfo" class="accordion-collapse collapse" aria-labelledby="InfoExtra" data-bs-parent="#InfoExtra">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className={`col-xl-7 col-lg-7 col-md-12 col-sm-12 mt-2`}>
                                <div class={`accordion`} id="accordionFlushExample">
                                    <div class={`accordion-item ${styles.acordeonItem}`}>
                                        <div class="accordion-header" id="otrosTramites">
                                            <button class={`accordion-button collapsed px-3 py-1 ${styles.acordeonItem} `} type="button" data-bs-toggle="collapse" data-bs-target="#acordeonOtrosTramites" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <div className='d-flex flex-column'>
                                                    <p className={`p-0 pt-1 m-0 mb-1 fs-4 fw-bold ${styles.letraAcordeon}`}>Otros tramites</p>
                                                    <p className={`p-0 pb-1 m-0 opacity-75 ${styles.letraAcordeonAbajo}`}>Tramites utiles para tu estadia en Alemania</p>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="acordeonOtrosTramites" class="accordion-collapse collapse" aria-labelledby="otrosTramites" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                </div>
            </div>
        </div>
    )
}

export default AcordeonAlemania