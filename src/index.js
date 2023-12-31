import React from "react";
// import ReactDOM from 'react-dom';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./index.css";
import { createRoot } from "react-dom/client"; 
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
