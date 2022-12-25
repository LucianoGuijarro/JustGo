import React, { useEffect, useState } from "react";
import styles from './GridDestinos.module.css';
// import imagenBerlin from '../../img/Berlin.jpg';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import clientAxios from '../../config/clientAxios';
import DestinosCards from "../DestinosCards/DestinosCards";

const GridDestinos = () => {
    const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        clientAxios.get('/destinos/destinos').then((response) => {
            setDestinos(response.data)
        })
    }, []);
    const sliderRigth = () => {
        let left = document.getElementById('slider')
        left.scrollLeft = left.scrollLeft + 230;
    }
    const sliderLeft = () => {
        let left = document.getElementById('slider')
        left.scrollLeft = left.scrollLeft - 230;
    }
    return (
        <>
            <h2 className='fs-1 fw-bold m-5 text-center'>Destinos Working Holidays</h2>
            <div className="container my-5 d-flex flex-nowrap align-items-center">
                <BsArrowLeftCircle className={`${styles.left} mx-4`} onClick={sliderLeft} />
                <div className={`${styles.grid} py-4 row justify-content-start align-items-center`} id='slider'>
                    {destinos.map((destino) => {
                        return <DestinosCards destino={destino} key={destinos.id} />
                    })}
                </div>
                <BsArrowRightCircle className={`${styles.right} mx-4`} onClick={sliderRigth} />
            </div>
        </>
    )
}

export default GridDestinos