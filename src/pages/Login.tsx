// import React, { useState } from "react";
// import "./Login.css";
// import SignInForm from "./SignIn";
// import SignUpForm  from "./SignUp";
// import '@fortawesome/fontawesome-free/css/all.min.css';     

// export default function App() {
//   const [type, setType] = useState("signIn");

//   const handleOnClick = (text:string) => {
//     if (text !== type) {
//       setType(text);
//       return;
//     }
//   };

//   const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "");

//   return (
//     <div className="App">
//       <h2>Bienvenidos a Choice</h2> {/* Título */}
//       <div className={containerClass} id="container">
//         <SignUpForm />
//         <SignInForm />
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <img src="user-image.png" alt="User" className="user-image" /> {}
//               <h1>Bienvenido de nuevo!</h1>
//               <p>Para mantenerse conectado con nosotros, inicie sesion con su informacion pesonal</p>
//               <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>
//                 Iniciar Sesion
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hola, Amigo!</h1>
//               <p>Introduce tus datos y comienza el viaje con nosotros</p>
//               <button className="ghost" id="signUp" onClick={() => handleOnClick("signUp")}>
//                 Registrar
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import "./Login.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import '@fortawesome/fontawesome-free/css/all.min.css';     
import Menu from "../components/Menu"; // Asegúrate de importar tu componente de menú

export default function App() {
  const [type, setType] = useState("signIn");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleOnClick = (text: string) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "");

  // Mostrar el menú si el usuario está autenticado, de lo contrario, mostrar el formulario de login
  if (isAuthenticated) {
    return <Menu />; // Mostrar el componente de menú cuando el usuario esté autenticado
  }

  return (
    <div className="App">
      <h2>Bienvenidos a Choice</h2> {/* Título */}
      <div className={containerClass} id="container">
        <SignUp />
        <SignIn /> {/* Pasar la función de inicio de sesión */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <img src="user-image.png" alt="User" className="user-image" /> {}
              <h1>Bienvenido de nuevo!</h1>
              <p>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
              <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>
                Iniciar Sesión
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hola, Amigo!</h1>
              <p>Introduce tus datos y comienza el viaje con nosotros</p>
              <button className="ghost" id="signUp" onClick={() => handleOnClick("signUp")}>
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
