const Home = () => {
return (
    <div style={styles.container}>
        <div style={styles.content}>
            <h1 style={styles.title}>Sistema de Gestión de Alumnos</h1>
            <h2 style={styles.subtitle}>Facultad de Ingeniería – Analista Programador Universitario</h2>
            <p style={styles.paragraph}>
                Bienvenidos a la plataforma de gestión académica. Esta aplicación permite administrar los datos de los estudiantes de manera eficiente. Podrás visualizar, agregar, editar y eliminar la información de cada alumno matriculado.
            </p>
            <p style={styles.paragraph}>
                Utilizá el menú de navegación para explorar las distintas funcionalidades del sistema.
            </p>
        </div>
        <img
            src="/public/logo_facu.png"
            alt="Universidad"
            style={styles.image}
        />
    </div>
);
};

const styles = {
container: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
},
content: {
    maxWidth: '600px',
    marginBottom: '2rem'
},
title: {
    fontSize: '2.5rem',
    color: '#003366',
    marginBottom: '0.5rem'
},
subtitle: {
    fontSize: '1.5rem',
    color: '#005599',
    marginBottom: '1rem'
},
paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '1rem'
},
image: {
    maxWidth: '400px',
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)'
}
};

export default Home;
