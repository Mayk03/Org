import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id: uuid(),
    equipo: "Front End",
    nombre: "Maycol Quinto",
    foto: "https://www.dropbox.com/scl/fi/tydgiwiirorugq961m46q/yp.jpg?rlkey=6iknzl3nsfe70b4zrr78m7gld&st=4mplks1k&raw=1",
    puesto: "Front End Developer",
    favorito: false
    },
    {
    id: uuid(),
    equipo: "Progamación",
    nombre: "Marta Gomez",
    foto: "https://www.dropbox.com/scl/fi/hiyz1sy6ovrzvxnexxj70/1.jpg?rlkey=orw8svas6c65ynoaksaqw8k5x&st=dpp7dqiy&raw=1",
    puesto: "Back End Developer",
    favorito: false
    },
    {
    id: uuid(),
    equipo: "Devops",
    nombre: "Maria Lopez", 
    foto: "https://www.dropbox.com/scl/fi/vt2vc2bxhacsnhzubxiyg/2.jpeg?rlkey=m87hyfeawyj7tisdrqumr76lx&st=pxnd2pvn&raw=1",
    puesto: "Devops Engineer",
    favorito: true
    },
    {
    id: uuid(),
    equipo: "Data Science",
    nombre: "Ana soto",
    foto: "https://www.dropbox.com/scl/fi/1xuwaa86qey6ge9yahupm/3.jpg?rlkey=moiavldmu3j6hqm5yaf1rdmvf&st=i6wwwbae&raw=1",
    puesto: "Data Scientist",
    favorito: false
    },
    {
    id: uuid(),
    equipo: "UX y Diseño",
    nombre: "Laura Caceres",
    foto: "https://www.dropbox.com/scl/fi/kecusjmi3tyoguvl54i7j/1.jpeg?rlkey=kk7ghcw2ndttw4yyovge0hwkh&st=hldtotqq&raw=1",
    puesto: "UX Designer",
    favorito: false
    },
    {
    id: uuid(),
    equipo: "Móvil",
    nombre: "Pedro Perez",
    foto: "https://www.dropbox.com/scl/fi/x4ip9e9yr5n3tsyehnkx3/7.jpg?rlkey=5g7853460nq6y8zjfrlublv5j&st=x6u9k9xd&raw=1",
    puesto: "Mobile Developer",
    favorito: false
    },
    {
    id: uuid(),
    equipo: "Innovacion y Gestión",
    nombre: "Carlos Ruiz",
    foto: "https://www.dropbox.com/scl/fi/762git8ned7u4zkq6lely/5.jpg?rlkey=i72eso4w5detiqi3fmu0lop3b&st=ihv5r0uo&raw=1",
    puesto: "Innovation Manager",
    favorito: false
    }
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Progamación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovacion y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]);

  // terrario --> condiciones ? seMuestra : noseMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador",colaborador);
    // spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

   // Eliminar colaborador
   const eliminarColaborador = (id) => {
    console.log("colaborador Eliminado",id);
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  };


  // Actualizar el color de los equipos
  const actualizarColor = (color,id) => {
    console.log("Color actualizado",color,id);
    const equipoActualizado = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equipoActualizado);
  }

  // Crear Equipo

  const crearEquipo = (nuevoEquipo) => {  
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  };

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador;
    })
    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
        }

      <MiOrg cambiarMostrar = {cambiarMostrar} />
      
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }
      <Footer />

    </div>
  );
}

export default App;