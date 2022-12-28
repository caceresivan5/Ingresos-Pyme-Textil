import React from 'react'

const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
    <span className='font-normal normal-case'>Hook</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {""}
    <span className='font-normal normal-case'>Ivan</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""}
    <span className='font-normal normal-case'>ivan@gmail.com</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {""}
    <span className='font-normal normal-case'>22 Diciembre de 2022</span>
    </p>
    
    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {""}
    <span className='font-normal normal-case'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Soluta facilis esse nam ipsa minima excepturi provident sequi quod quos maiores, totam, culpa nihil
     necessitatibus ducimus consequuntur officia illo omnis id.</span>
    </p>

  </div>
  )
}

export default Paciente