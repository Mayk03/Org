import "./MiOrg.css";

const MiOrg = (props) => {

    // useState es un hook que permite agregar estado a un componente funcional
    // funcion useState / const [nombreVariable, funcionActualizada] = useState(valorInicial)
    //const [mostrarFormulario, actualizarMostrar] = useState(true);
    //const manejarClick = () => {
    //    console.log("mostrar / ocultar formulario", !mostrarFormulario);
    //   actualizarMostrar(!mostrarFormulario);
    //}

    return <section className="orgSection">
        <h3 className="titulo_orgSection" >Mi Organización</h3>
        <img src='/img/add.png' alt='Add' onClick={props.cambiarMostrar} />
    </section>
};

export default MiOrg;