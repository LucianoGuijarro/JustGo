import styles from './GridDestinos.module.css';
import imagenBerlin from '../../img/Berlin.jpg';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const GridDestinos = () => {

    const sliderRigth = () => {
        let left = document.getElementById('slider')
        left.scrollLeft = left.scrollLeft + 200;
    }
    const sliderLeft = () => {
        let left = document.getElementById('slider')
        left.scrollLeft = left.scrollLeft - 200;
    }
    return (
        <>
            <h2 className='fs-1 fw-bold m-5 text-center'>Destinos Working Holidays</h2>
            <div className="container my-5 d-flex flex-nowrap align-items-center">
                <BsArrowLeftCircle className={`${styles.left} mx-4`} onClick={sliderLeft} />
                <div className={`${styles.grid} py-4 row justify-content-beetween align-items-center`} id='slider'>
                    <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                        <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                        <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
                    </div>
                    <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                        <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                        <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
                    </div>
                    <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                        <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                        <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
                    </div>
                    <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                        <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                        <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
                    </div>
                    <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                        <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                        <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
                    </div>
                    <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                        <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                        <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
                    </div>
                    <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                        <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                        <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
                    </div>
                </div>
                <BsArrowRightCircle className={`${styles.right} mx-4`} onClick={sliderRigth} />
            </div>
        </>
    )
}

export default GridDestinos