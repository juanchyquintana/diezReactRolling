import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Error from "./Error";
import Exito from "./Exito";
import Peliculas from "./Peliculas";

const FormularioPeliculas = () => {
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const peliculasLocalStorage =
    JSON.parse(localStorage.getItem("peliculasRolling")) || [];
  const [peliculas, setPeliculas] = useState(peliculasLocalStorage);

  useEffect(() => {
    localStorage.setItem('peliculasRolling', JSON.stringify(peliculas))
  }, [peliculas])

  const crearPelicula = (pelicula) => {
    setPeliculas([...peliculas, pelicula]);
  };

  const eliminarPelicula = (id) => {
    const actualizarPelicula = peliculas.filter(
      (pelicula) => pelicula.id !== id
    );
    setPeliculas(actualizarPelicula);
  };

  const pelicula = {
    nombre: nombre,
    genero: genero,
    descripcion: descripcion,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, genero, descripcion].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setExito(true);

    setTimeout(() => {
      setExito(false);
    }, 3000);

    pelicula.id = crypto.randomUUID();
    crearPelicula(pelicula);

    setNombre("");
    setGenero("");
    setDescripcion("");
  };

  return (
    <>
      <section className="bg-white shadow p-3 my-5">
        <Form onSubmit={handleSubmit}>
          {error && (
            <Error>
              ¡Error! Campos Vácios. Completa todos los campos, por favor.
            </Error>
          )}
          {exito && <Exito>¡La Pélicula se ha guardado correctamente!</Exito>}
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la Pélicula</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese un nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Género</Form.Label>
            <Form.Select
              aria-label="selecciona una pelicula"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option>Selecciona un Género</option>
              <option value="comedia">Comedía</option>
              <option value="drama">Drama</option>
              <option value="infantil">Infantil</option>
              <option value="romantica">Romantica</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Escribe sobre la pélicula..."
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 ">
            Guardar Pélicula
          </Button>
        </Form>
      </section>

      <Peliculas peliculas={peliculas} eliminarPelicula={eliminarPelicula} />
    </>
  );
};

export default FormularioPeliculas;
