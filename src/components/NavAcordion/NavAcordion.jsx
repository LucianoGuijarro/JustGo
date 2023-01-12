import React from 'react';
import styles from './NavAcordion.module.css';

const NavAcordion = () => {
    return (
        <nav >
            <ul class={`nav nav-tabs col-12 col-sm-12 col-md-12 col-lg-12 justify-content-center ${styles.scroll} ${styles.borderNav}`} id="myTab" role="tablist">
                <li class="nav-item me-1" role="presentation">
                    <button class={`nav-link active ${styles.botonNavAcordeon}`} id="tramites-tab" href="#tramites" data-bs-toggle="tab" data-bs-target="#tramites" type="button" role="tab" aria-controls="tramites" aria-selected="true">
                        Tramites
                    </button>
                </li>
                <li class="nav-item me-1" role="presentation">
                    <button class={`nav-link ${styles.botonNavAcordeon}`} href='#tramites' id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        Primeros pasos
                    </button>
                </li>
                <li class="nav-item me-1" role="presentation">
                    <button class={`nav-link ${styles.botonNavAcordeon}`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                        Trabajar
                    </button>
                </li>
                <li class="nav-item me-1" role="presentation">
                    <button class={`nav-link ${styles.botonNavAcordeon}`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                        Estudiar
                    </button>
                </li>
                <li class="nav-item me-1" role="presentation">
                    <button class={`nav-link ${styles.botonNavAcordeon}`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                        Herramientas
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class={`nav-link ${styles.botonNavAcordeon}`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                        Turismo
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavAcordion