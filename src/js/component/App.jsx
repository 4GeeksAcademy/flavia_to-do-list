import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import "./App.css";

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

  const handleButtonClick = () => {
    if (opcionSeleccionada === "gratefulFor" && textoInsertado.length > 0) {
      // Agregar el textoInsertado al estado de gratefulContent
      setGratefulContent([...gratefulContent, textoInsertado]);
    }
    setClicEnSubmit(!clicEnSubmit);
  };
  console.log(clicEnSubmit);

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
          clicEnSubmit={clicEnSubmit}
          handleOpcionChange={handleOpcionChange}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
        />
        <TaskList
          gratefulContent={gratefulContent}
          handleDeleteItemClick={handleDeleteItemClick}
        />
      </div>
    </div>
  );
}
