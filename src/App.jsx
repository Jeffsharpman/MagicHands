import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <HelmetProvider>
      <Home />
    </HelmetProvider>
  );
}

export default App;
