import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { MailAppContainer } from "../src/mailApp/containers/MailAppContainer";

// TO DO:

// MATERIAL UI -> en otra rama | sustituir bootstrap | MakeStyles
// Crear contenedor grande/general
// toogle sender
// Modificar estilos? -> constantes


export function App() {
  return (
    <>
      <MailAppContainer/>
    </>
  );
}
