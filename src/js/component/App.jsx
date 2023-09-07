import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import Header from "./Header";

//create your first component
export default function App() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("empezamos"); //Estado para controlar la opción que se elige
  const [textoInsertado, setTextoInsertado] = useState(""); //Estado para controlar el texto que se escribe
  const [clicEnSubmit, setClicEnSubmit] = useState(false); // Estado para controlar si el submit ha sido clickeado o no
  const [gratefulContent, setGratefulContent] = useState([]); // Estado para almacenar el contenido de la sección grateful
  const [prioritiesContent, setPrioritiesContent] = useState([]);
  const [toDoContent, setToDoContent] = useState([]);
  const [notesContent, setNotesContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar el estado de la página para mostrar el loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  //Función para controlar la opción elegida
  const handleOpcionChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };
  console.log(opcionSeleccionada);

  //Función para controlar el input insertado en textarea
  const handleInputChange = (event) => {
    setTextoInsertado(event.target.value);
  };
  console.log(textoInsertado);

  const showToastSuccess = () => {
    toast.success("Successfully added!", {
      position: "bottom-right",
      transition: Slide,
      hideProgressBar: true,
      theme: "colored",
      style: {
        backgroundColor: "rgb(67, 83, 52)",
      },
    });
  };

  const showToastWarning = () => {
    toast.warn("You cannot repeat!", {
      position: "top-center",
      transition: Slide,
      hideProgressBar: true,
      theme: "colored",
      style: {
        backgroundColor: "rgb(232, 170, 66)",
      },
    });
  };

  const showToastError = () => {
    toast.warn("You have reached the maximum number of tasks!", {
      position: "top-left",
      transition: Slide,
      hideProgressBar: true,
      theme: "colored",
      style: {
        backgroundColor: "rgb(154, 59, 59)",
      },
    });
  };

  useEffect(() => {
    // Limitar el número de elementos a 5
    if (toDoContent.length > 5) {
      showToastError();
      setToDoContent((prevContent) => prevContent.slice(0, 5));
    }
  }, [toDoContent]);

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
    if (opcionSeleccionada === "priorities" && textoInsertado.length > 0) {
      if (textoInsertado === prioritiesContent[prioritiesContent.length - 1]) {
        showToastWarning();
      } else {
        setPrioritiesContent([...prioritiesContent, textoInsertado]);
        showToastSuccess();
      }
    }
    if (opcionSeleccionada === "toDoList" && textoInsertado.length > 0) {
      if (textoInsertado === toDoContent[toDoContent.length - 1]) {
        showToastWarning();
      } else {
        // Agregar el textoInsertado al estado de gratefulContent y mostrar toast
        setToDoContent([...toDoContent, textoInsertado]);
        showToastSuccess();
      }
    }
    if (opcionSeleccionada === "notes" && textoInsertado.length > 0) {
      if (textoInsertado === notesContent[notesContent.length - 1]) {
        showToastWarning();
      } else {
        // Agregar el textoInsertado al estado de gratefulContent y mostrar toast
        setNotesContent([...notesContent, textoInsertado]);
        showToastSuccess();
      }
    }
    setTextoInsertado("");
    setClicEnSubmit(!clicEnSubmit);
  };
  const handleDeleteItemClick = (index, contentState, setContentState) => {
    const updatedContent = [...contentState];
    updatedContent.splice(index, 1);
    setContentState(updatedContent);
  };

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="bigContainer">
          <div className="littleContainer">
            <Header />
            <NewTask
              opcionSeleccionada={opcionSeleccionada}
              textoInsertado={textoInsertado}
              handleOpcionChange={handleOpcionChange}
              handleInputChange={handleInputChange}
              handleButtonClick={handleButtonClick}
            />
            <TaskList
              gratefulContent={gratefulContent}
              setGratefulContent={setGratefulContent}
              prioritiesContent={prioritiesContent}
              setPrioritiesContent={setPrioritiesContent}
              toDoContent={toDoContent}
              setToDoContent={setToDoContent}
              notesContent={notesContent}
              setNotesContent={setNotesContent}
              handleDeleteItemClick={handleDeleteItemClick}
              numbersOfItems={toDoContent.length}
            />
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
}
