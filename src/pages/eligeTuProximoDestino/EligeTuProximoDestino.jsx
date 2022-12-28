import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DestinosCards from '../../components/DestinosCards/DestinosCards';
import clientAxios from '../../config/clientAxios';
import styles from './EligeTuProximoDestino.module.css';

const EligeTuProximoDestino = () => {
    const [destinos, setDestinos] = useState([]);
    useEffect(() => {
        clientAxios.get('/destinos/destinos').then((response) => {
            setDestinos(response.data)
        })
    }, []);
    
    return (
        <>
            <section className='container-fluid d-flex flex-column align-items-center '>
                <h1 className={`${styles.tamañoLetra} text-center my-5 fw-bold`}>Viaja y Trabaja por el mundo</h1>
                <form className={`d-flex w-50 py-3 align-items-end ${styles.form} ${styles.colorFilter}`}>
                    <div className={`d-flex flex-column ms-4 fw-bold ${styles.margen} ${styles.nacionalidad}`}>
                        <label>Nacionalidad</label>
                        <select name='paisDeOrigen' id='paisDeOrigen' className={`py-2 text-center ${styles.form} ${styles.inputs} ${styles.inputNacionalidad}`}>
                            <option value="Argentina" className='fw-bold'>Argentina</option>
                            <option value="Chile" className='fw-bold'>Chile</option>
                            <option value="Uruguay" className='fw-bold'>Uruguay</option>
                            <option value="Peru" className='fw-bold'>Peru</option>
                        </select>
                    </div>
                    <div className={`d-flex flex-column fw-bold ${styles.edad} ${styles.margen}`}>
                        <label>Edad</label>
                        <select name="" id="" className={`py-2 text-center ${styles.form} ${styles.inputs}`}>
                            <option value="" selected disabled className='fw-bold'>Edad</option>
                            <option value="" className='fw-bold'>18 a 30 años</option>
                            <option value="" className='fw-bold'>18 a 35 años</option>
                            <option value="" className='fw-bold'>Mayor de 35 años</option>
                        </select>
                    </div>
                    <button className={`${styles.boton} fw-bold`}>Consultar!</button>
                </form>
            </section>
            <section className='container'>
                <h2 className='my-5 text-center'>Destinos para Argentinos</h2>
                <div className={`row justify-content-around ${styles.destinos}`}>
                    {destinos.map((destino) => {
                        return <DestinosCards destino={destino} key={destino.id}/>
                    })}
                </div>
            </section>
        </>
    )
}

export default EligeTuProximoDestino