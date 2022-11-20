import React from 'react'
import Banners from '../Banners/Banners'
import EmpezarExperiencia from '../EmpezarExperiencia/EmpezarExperiencia'
import GridDestinos from '../GridDestinos/GridDestinos'
import InformacionWH from '../QueEsWorkingHolidays/InformacionWH'

const Inicio = () => {
  return (
    <>
    <Banners />
    <GridDestinos />
    <EmpezarExperiencia />
    <InformacionWH />
    </>
  )
}

export default Inicio