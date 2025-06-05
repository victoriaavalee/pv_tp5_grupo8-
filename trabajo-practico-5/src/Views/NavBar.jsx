import { Link } from 'react-router-dom';

const NavBar = () => {
return (
    <>
    <nav className="navbar">
        <h1 className="navbar-title">Facultad de Ingeniería</h1>
        <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/alumnos">Lista de Alumnos</Link></li>
            <li><Link to="/nuevo">Nuevo Alumno</Link></li>
            <li><Link to="/acerca">Acerca de</Link></li>
        </ul>
    </nav>

    <style>
        {`
        .navbar {
            background-color: #003366;
            color: white;
            padding: 1rem 2rem; /* igual que home-header */
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            min-height: 56px; /* altura similar al header */
            box-sizing: border-box;
            font-family: Arial, sans-serif; /* misma fuente */
        }

        .navbar-title {
            font-size: 1.5rem; /* igual que home-header-title */
            font-weight: 600;
            margin: 0;
            user-select: none;
        }

        .navbar-links {
            list-style: none;
            display: flex;
            gap: 1.5rem;
            margin: 0;
            padding: 0;
        }

        .navbar-links li {
            font-size: 1rem;
            line-height: 1.2;
        }

        .navbar-links a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .navbar-links a:hover {
            color: #66ccff;
        }

        @media (max-width: 600px) {
        .navbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
            padding: 1rem;
        }

        .navbar-links {
            flex-wrap: wrap;
            gap: 1rem;
            width: 100%;
            justify-content: flex-start;
        }

        .navbar-links li {
            font-size: 0.9rem;
        }
        `}
    </style>
    </>
);
};

export default NavBar;