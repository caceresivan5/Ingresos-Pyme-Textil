import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'


const Formulario = ( {setPaciente} ) => {

  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion de FORMULARIO
    if( [nombre, propietario, email, fecha, sintomas]. includes("")){  //si al menos una variable contiene un string vacio
      
      Swal.fire({
        icon: 'error',
        title: 'ANDA PA LLA BOBO',
        text: 'Hay al menos un campo vacio!',
        footer: '<a href="">Complete todos los campos para poder continuar</a>'
      })

    }
    setPaciente(nombre)
  }


  return (
    <div className='md:w-1/2 m-3 lg:w-2/5'>
        <h1 className='font-black text-3xl text-center'>Seguimiento Pacientes</h1>

        <p className='text-lg mt-5 text-center mb-10'>
          Agregue Pacientes y {""}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form  className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 md:ml-5'

        onSubmit={handleSubmit}
        >

          
          <div className='mb-5'>
            <label htmlFor='mascota' className='block text-grey-700 uppercase font-bold'>Nombre Mascota</label>

            <input
            id='mascota'
            type='text'
            placeholder='Nombre de la Mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange= {(e)=>setNombre(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='propietario' className='block text-grey-700 uppercase font-bold'>Nombre Propietario</label>

            <input
            id='propietario'
            type='text'
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange= {(e)=>setPropietario(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='email' className='block text-grey-700 uppercase font-bold'>Email</label>

            <input
            id='email'
            type='text'
            placeholder='Email del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange= {(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='alta' className='block text-grey-700 uppercase font-bold'>Alta</label>

            <input
            id='alta'
            type='date'
            placeholder='Email del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange= {(e)=>setFecha(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-grey-700 uppercase font-bold'>Sintomas</label>

            <textarea
            id='sintomas'
            placeholder='Escribe los sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={sintomas}
            onChange= {(e)=>setSintomas(e.target.value)}

            />
          </div>
          <input type="submit" 
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value='Agregar Paciente'
          />
        </form>
    </div>
  )
}

export default Formulario