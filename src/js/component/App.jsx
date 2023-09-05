import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

//create your first component
export default function App() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("empezamos"); //Estado para controlar la opción que se elige
  const [textoInsertado, setTextoInsertado] = useState(""); //Estado para controlar el texto que se escribe
  const [clicEnSubmit, setClicEnSubmit] = useState(false); // Estado para controlar si el submit ha sido clickeado o no
  const [gratefulContent, setGratefulContent] = useState([]); // Estado para almacenar el contenido de la sección grateful

  const handleOpcionChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };
  console.log(opcionSeleccionada);

  const handleInputChange = (event) => {
    setTextoInsertado(event.target.value);
  };
  console.log(textoInsertado);

  const showToastSuccess = () => {
    toast.success("Añadido con éxito!", {
      position: "bottom-right",
      transition: Slide,
      hideProgressBar: true,
      theme: "colored",
      style: {
        backgroundColor: "rgb(150, 194, 145)",
      },
    });
  };

  const showToastWarning = () => {
    toast.warn("No se puede repetir!", {
      position: "top-center",
      transition: Slide,
      hideProgressBar: true,
      theme: "colored",
      style: {
        backgroundColor: "rgb(251, 216, 93)",
      },
    });
  };

  const handleButtonClick = () => {
    if (opcionSeleccionada === "gratefulFor" && textoInsertado.length > 0) {
      if (textoInsertado === gratefulContent[gratefulContent.length - 1]) {
        // Muestra una alerta si el texto es igual al previo
        showToastWarning();
      } else {
        // Agregar el textoInsertado al estado de gratefulContent y mostrar toast
        setGratefulContent([...gratefulContent, textoInsertado]);
        showToastSuccess();
      }
    }
    setTextoInsertado("");
    setClicEnSubmit(!clicEnSubmit);
  };

  const handleDeleteItemClick = (index) => {
    const updatedGratefulContent = [...gratefulContent];
    updatedGratefulContent.splice(index, 1);
    setGratefulContent(updatedGratefulContent);
  };

  return (
    <div className="bigContainer">
      <div className="littleContainer">
        <NewTask
          opcionSeleccionada={opcionSeleccionada}
          textoInsertado={textoInsertado}
          handleOpcionChange={handleOpcionChange}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
        />
        <TaskList
          gratefulContent={gratefulContent}
          handleDeleteItemClick={handleDeleteItemClick}
        />
        <ToastContainer />
      </div>
    </div>
  );
}
