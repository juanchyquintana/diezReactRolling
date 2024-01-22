import { Container } from "react-bootstrap";
import FormularioPeliculas from "./components/FormularioPeliculas";

function App() {
  return (
    <>
      <div className="bg-success py-4">
        <h1 className="text-center text-white text-uppercase fw-bold fst-italic">
          Movies Movies
        </h1>
      </div>

      <Container>
        <FormularioPeliculas />
      </Container>
    </>
  );
}

export default App;
