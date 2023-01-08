import React from 'react';
import styles from './AcordeonAlemania.module.css';

const AcordeonAlemania = () => {
    return (
        <div className='col-12'>
            <nav >
                <ul class={`nav nav-tabs col-12 col-sm-12 col-md-12 col-lg-12 justify-content-center ${styles.scroll}`} id="myTab" role="tablist">
                    <li class="nav-item me-1" role="presentation">
                        <a class={`nav-link active`} id="tramites-tab" href="#tramites" data-bs-toggle="tab" data-bs-target="#tramites" type="button" role="tab" aria-controls="tramites" aria-selected="true">Tramites</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" href='#tramites' id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Primeros pasos</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Trabajar</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Estudiar</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Herramientas</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Turismo</button>
                    </li>
                </ul>
            </nav>
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
                                        <div id="acordeonWorkinHoliday" class="accordion-collapse collapse" aria-labelledby="WorkinHolidayVisa" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
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