import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Main from "./components/magicHands/Main";

function App() {
  return (
    <HelmetProvider>
      <Main />
    </HelmetProvider>
  );
}

export default App;
