import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const [pacientes, setPaciente] = useState([])

  return (
    <div className="container mx-auto mt-10">
      <Header/>

      <div className="mt-12 md:flex">
      <Formulario
      setPaciente={setPaciente}
      />
      <ListadoPacientes/>

      </div>
    </div>
  )
}

export default App
