import React from 'react';
import styles from './TablaInfo.module.css';

const TablaInfo = () => {
    return (
        <table className='my-4'>
            <thead className={`bg-success `}>
                <th className={`px-4 py-2 ${styles.bordeTopLeftTabla}`}>PAIS</th>
                <th className='px-4 py-2'>INSCRIP.</th>
                <th className={`px-4 py-2 ${styles.bordeTopRightTabla600px}`}>EDAD</th>
                <th className={`px-4 py-2 ${styles.esconder}`}>CUPOS</th>
                <th className={`px-4 py-2 ${styles.bordeTopRightTabla} ${styles.esconder}`}>¿APLICA DEL EXTERIOR?</th>
            </thead>
            <tbody className='bg-light'>
                <td className='px-4 py-3'>Alemania</td>
                <td className='px-4 py-3'>DISPONIBLE</td>
                <td className='px-4 py-3'>18/30</td>
                <td className={`px-4 py-3 ${styles.esconder}`}>Ilimitados</td>
                <td className={`px-4 py-3 ${styles.esconder}`}>Si, excepto desde alemania</td>
            </tbody>
        </table>
    )
}

export default TablaInfo