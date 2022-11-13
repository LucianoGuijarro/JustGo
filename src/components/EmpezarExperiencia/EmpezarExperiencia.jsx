import React from 'react';
import styles from './EmpezarExperiencia.module.css'
import { FaPassport } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import { RiShieldCrossFill } from "react-icons/ri";
import { ImHappy2 } from "react-icons/im";

const EmpezarExperiencia = () => {
    return (
        <>
            <h1 className={`fs-1 fw-bold text-center ${styles.ocultar}`}>¿Que necesitas para empezar?</h1>
            <div className={`container my-5 ${styles.ocultar}`}>
                <div className="row justify-content-around">
                    <div className="col-2 d-flex flex-column align-items-center">
                        <FaPassport size={120} color={'grey'} className={'mb-2'} />
                        <p className='text-center mt-4'>Pasaporte</p>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <SiYourtraveldottv size={120} color={'grey'} className={'mb-2'} />
                        <p className='text-center mt-4'>Decidir tu destino</p>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <RiShieldCrossFill size={120} color={'grey'} className={'mb-2'} />
                        <p className='text-center mt-4'>Contratar tu seguro de viaje</p>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <ImHappy2 size={120} color={'grey'} className={'mb-2'} />
                        <p className='text-center mt-4'>Comenzar tu aventura</p>
                    </div>
                </div>
            </div>
            <div className={`d-flex justify-content-center ${styles.ocultar}`}>
                <button className={`${styles.boton} mb-5 p-2 fw-bold fs-5`}>Mas informacion</button>
            </div>
        </>
    )
}

export default EmpezarExperiencia