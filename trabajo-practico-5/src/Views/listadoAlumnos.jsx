import { useNavigate } from "react-router-dom";
import Titulo from "./Titulo";


const ListaAlumnos = ({ alumnos }) => {
    <Titulo texto={"Listado de Alumnos"}></Titulo>
    return(
        <table className="w-full border">
            <thead>
                <tr>
                    <th >LU</th>
                    <th >Nombre</th>
                    <th >Apellido</th>
                    <th >Curso</th>
                    <th >Acciones</th>
                    <th >Email</th>
                    <th >Domicilio</th>
                    <th >Telefono</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(alumnos) && alumnos.length > 0 ?(
                    alumnos.map((alumno)=> (
                        <tr key={alumno.lu}>
                            <td >{alumno.lu}</td>
                            <td >{alumno.nombre}</td>
                            <td >{alumno.apellido}</td>
                            <td >{alumno.curso}</td>
                            <td >{alumno.email}</td>
                            <td >{alumno.domicilio}</td>
                            <td >{alumno.telefono}</td>
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan="7">No hay alumnos disponibles</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default ListaAlumnos;