import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  

  //LOCALSTORAGE

  //obtengo lo que haya en localStorage y lo guardo en un estado...lo hago la primera vez para evitar que al reiniciar la app no se pierdan los datos en el localStorage

  useEffect ( ()=> {
    const obtenerLS = () => {

      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; // si no hay nada en localStorage ??[] (agregale) un [] ... luego lo combierto e string  a un array
      setPacientes(pacientesLS)
    }

    obtenerLS()

  }, []) // SOLO SE VA A EJECUTAR 1 SOLA VEZ

  //seteo el localStorage

  useEffect ( ()=> {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = ( id ) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-10">
      <Header/>

      <div className="mt-12 md:flex">
      <Formulario
      pacientes = {pacientes}
      setPacientes={setPacientes}
      paciente = {paciente}
      setPaciente = {setPaciente}
      />
      <ListadoPacientes
      pacientes = {pacientes}
      setPaciente = {setPaciente}
      eliminarPaciente = {eliminarPaciente}
      />

      </div>
    </div>
  )
}

export default App
