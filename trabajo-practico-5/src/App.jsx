import { useState } from 'react'


let nextId = 0;

function App() {
  const [alumnos, setAlumnos] = useState ([
    { id: 100 ,lu: "APU00999", nombre: "Marta Eugenia", apellido: "Diaz", curso: "Tercero" ,email: "marianadiaz@mail.com", domicilio: "Av. Congreso 125", telefono: "3884895999"},
    { id: 101, lu: "APU01005", nombre: "Luciano Valentín", apellido: "Ramirez", curso: "Segundo", email: "lucianovramirez@mail.com", domicilio: "Calle Lavalle 145", telefono: "3885111222"},
    { id: 102, lu: "APU01006", nombre: "Camila Soledad", apellido: "Torres", curso: "Primero", email: "camilastorres@mail.com", domicilio: "Av. El Éxodo 201", telefono: "3884777888"},
    { id: 103, lu: "APU01007", nombre: "Joaquín Andrés", apellido: "López", curso: "Tercero", email: "joaquinandreslopez@mail.com", domicilio: "Alvear 300", telefono: "3884000222"},
    { id: 104, lu: "APU01008", nombre: "Valentina Pilar", apellido: "Moreno", curso: "Segundo", email: "valenpmoreno@mail.com", domicilio: "Av. Córdoba 645", telefono: "3884333777"},
    { id: 105, lu: "APU01009", nombre: "Franco Emmanuel", apellido: "Gómez", curso: "Primero", email: "francoegomez@mail.com", domicilio: "España 550", telefono: "3884555999"}
  ]);
  const [alumno, setAlumno] = useState({});


  //Guardar y editar alumnos
  const handleSubmit = (e) =>{
    if (typeof alumno.id === "undefined"){
      alumno.id = nextId++;
      setAlumnos([...alumnos,alumno]);
    }else{
      setAlumnos(alumnos => [...alumnos.filter(u =>u.id !== alumno.id), alumno]);
    }
    setAlumno({});
  }

  return (
    <>
        <div>
       <Router>
         <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="alumnos/:id/editar" element={<Editar/>} 
        <Route path="alumnos/:id"  element={<Detalles/>}
      </Routes>

       </Router>
    
    </div>
    </>
  )
}

export default App;
