import { createBrowserRouter } from "react-router-dom";
import { Inicio } from '../views/Incio';
import { Editar } from '../views/alumnos:id/editar';
import { Detalles } from '../views/alumnos:id'
import { Informacion } from '../views/Informacion';


export const router = createBrowserRouter([
    {path: '/', element: <Inicio/>},
    {path: '/alumnos/:id/editar', element: <Editar/>},
    {path: '/alumnos/:id, element', element: <Detalles/>},
    {path: '/', element: <Informacion/>} 

]
);
