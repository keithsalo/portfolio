import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";

// make reference to div with id root
const el = document.getElementById("root");

// have react take control of that element
const root = ReactDOM.createRoot(el);

// show component on screen
root.render(<App />);
