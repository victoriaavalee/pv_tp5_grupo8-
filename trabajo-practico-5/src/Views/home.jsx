import { useNavigate } from "react-router-dom";
import Titulo from "./Titulo";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <Titulo texto={"Home"}></Titulo>
        <div className="home-header">
            <img src="/public/logo_facu.png" alt="Logo Facultad" className="home-logo" />
            <h1 className="home-header-title">Facultad de Ingeniería</h1>
        </div>

        <div className="home-container">
            <div className="home-content">
                <h2 className="home-title">Sistema de Gestión de Alumnos</h2>
                <h3 className="home-subtitle">Analista Programador Universitario</h3>
                <p className="home-paragraph">
                    Bienvenidos a la plataforma de gestión académica. Esta aplicación permite administrar los datos de los estudiantes de manera eficiente. 
                    Podrás visualizar, agregar, editar y eliminar la información de cada alumno matriculado.
                </p>
                <p className="home-paragraph">
                    Utilizá el menú de navegación para explorar las distintas funcionalidades del sistema.
                </p>
            </div>
        </div>

    <style>
        {`
        html, body {
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            width: 100%;
            height: 100%;
        }

        #root {
            width: 100%;
            min-height: 100vh;
            background-color: #f5f5f5;
        }

        .home-container {
            width: 100%;
            min-height: calc(100vh - 80px); /* para que se expanda bajo el header */
            padding: 2rem;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
            box-sizing: border-box;
        }

        .home-logo {
            height: 40px;
            margin-right: 1rem;
        }

        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        .home-header {
            background-color: #003366;
            color: white;
            display: flex;
            align-items: center;
            padding: 1rem 2rem;
        }

        .home-logo {
            height: 40px;
            margin-right: 1rem;
        }

        .home-header-title {
            font-size: 1.5rem;
            margin: 0;
        }

        .home-container {
            background-color: #f5f5f5;
            min-height: 100vh;
            padding: 2rem;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
        }

        .home-content {
            max-width: 600px;
            margin-bottom: 2rem;
        }

        .home-title {
            font-size: 2rem;
            color: #003366;
            margin-bottom: 0.5rem;
        }

        .home-subtitle {
            font-size: 1.2rem;
            color: #005599;
            margin-bottom: 1rem;
        }

        .home-paragraph {
            font-size: 1rem;
            line-height: 1.6;
            color: #333;
            margin-bottom: 1rem;
        }

        .home-image {
            max-width: 400px;
            width: 100%;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
        `}
    </style>
    </>
);
};

export default Home;