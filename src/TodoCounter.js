const estilos = {
    backgroundColor: '#eee',

}

function TodoCounter(props) {

    return (
        <h2 style={{
            fontSize: '2rem',
            color: '#fff',
            backgroundColor: '#000',
            padding: '1rem',
            margin: '0',



        }} >
            
            Has completado {props.completed} de {props.total} TODOs</h2>
    );
}

export { TodoCounter };