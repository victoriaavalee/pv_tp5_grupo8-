import { useNavigate } from "react-router-dom";
import Titulo from "./Titulo";

function AlumnoForm({alumno, handleSubmit}) {
  const [alumnoEdit, setAlumnoEdit] = alumno;
  const navigate = useNavigate();

  return (
    <div>
      <Titulo texto={"Registro de Alumnos"}></Titulo>
      <form action="" onSubmit={(e) =>{
        e.preventDefault();
        handleSubmit();
        navigate("");
      }}>
        <label>LU:</label>
        <input id="LU" type="text" value={alumnoEdit.lu || ""} onChange={(e) => setAlumnoEdit({...alumnoEdit, lu:e.target.value})} required></input>
        <br></br>
        <label>Nombre del alumno:</label>
        <input id="nombre" type="text" value={alumnoEdit.nombre || ""} onChange={(e) => setAlumnoEdit({...alumnoEdit, nombre:e.target.value})} required></input>
        <br></br>
        <label>Apellido del alumno:</label>
        <input id="apellido" type="text" value={alumnoEdit.apellido || ""} onChange={(e) => setAlumnoEdit({...alumnoEdit, apellido:e.target.value})} required></input>
        <br></br>
        <label>Email:</label>
        <input id="email" type="email" value={alumnoEdit.email || ""} onChange={(e) => setAlumnoEdit({...alumnoEdit, email:e.target.value})} required></input>
        <br></br>
        <label>Domicilio:</label>
        <input id="domicilio" type="text" value={alumnoEdit.domicilio || ""} onChange={(e) => setAlumnoEdit({...alumnoEdit, domicilio:e.target.value})} required></input>
        <br></br>
        <label>Telefono:</label>
        <input id="telefono" type="tel" value={alumnoEdit.telefono || ""} onChange={(e) => setAlumnoEdit({...alumnoEdit, telefono:e.target.value})} required></input>
        <br></br>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default AlumnoForm;