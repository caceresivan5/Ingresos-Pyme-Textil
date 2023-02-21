import React from 'react'

import Paciente from './Paciente'

const ListadoPacientes = ( { pacientes, setPaciente }) => {



  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen m-3 overflow-y-scroll '>

      { pacientes && pacientes.length //si se cumple esta condicion

? // ENTONCES
(

        <>
        <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>

<p className='text-xl mt-5 mb-10 text-center'>
  Administra tus {""}
  <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
</p>

        
{ pacientes.map( ( paciente ) => (
        
        <Paciente  
        key={paciente.id}
        paciente= { paciente }
        setPaciente = {setPaciente}
        
        />

        ))}
        </>


      )

      : // SINO

      (
        <>
      <h2 className='font-black text-3xl text-center'>NO HAY PACIENTES</h2>

       <p className='text-xl mt-5 mb-10 text-center'>
  Comience agregando Pacientes{""}
  <span className='text-indigo-600 font-bold'> y apareceran en este lugar</span>
</p>

        </>
      )
      
    }
     
    </div>
  )
}

export default ListadoPacientes