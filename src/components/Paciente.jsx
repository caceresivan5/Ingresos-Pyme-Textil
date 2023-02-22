import React from 'react'
import Swal from 'sweetalert2'

const Paciente = ( {paciente, setPaciente, eliminarPaciente }) => {

  const handleEliminar = () => {
    const preguntaEliminar = (
      Swal.fire({
        title: 'Seguro quieres eliminar este Paciente?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI,Quiero eliminar este Paciente!'
      }).then((result) => {
        if (result.isConfirmed && preguntaEliminar ) {
          Swal.fire(
            'Eliminado!',
            'Has eliminado a este Paciente Correctamente.',
            'success'
          )
          eliminarPaciente(paciente.id)
        }
      })
      )

    /*if(preguntaEliminar) {
      eliminarPaciente(paciente.id)
    }
    */
  }

  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
    <span className='font-normal normal-case'>{paciente.nombre}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {""}
    <span className='font-normal normal-case'>{paciente.propietario}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""}
    <span className='font-normal normal-case'>{paciente.email}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {""}
    <span className='font-normal normal-case'>{paciente.fecha}</span>
    </p>
    
    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {""}
    <span className='font-normal normal-case'>{paciente.sintomas}</span>
    </p>

    <div className='flex justify-between mt-10'>

      <button  type='button'
      className='py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg'
      onClick={ ()=> {setPaciente(paciente) } }>
        EDITAR
      </button>
      
      <button  type='button'
      className='py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg'
      onClick={ handleEliminar }>
        ELIMINAR
      </button>

    </div>

  </div>
  )
}

export default Paciente