import ReactDOM from "react-dom/client";
import App from "./App";
import '@mysten/dapp-kit/dist/index.css';

ReactDOM
    .createRoot(document.getElementById("app") as Element)
    .render(<App />);
