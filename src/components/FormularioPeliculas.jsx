import { Button, Form } from "react-bootstrap";

const FormularioPeliculas = () => {
  return (
    <>
      <section className="bg-white shadow p-3 my-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Género</Form.Label>
          <Form.Select aria-label="selecciona una pelicula">
            <option>Selecciona un Género</option>
            <option value="comedia">Comedía</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
          </Form.Select>
        </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Escribe sobre la pélicula..."
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 ">
            Guardar Pélicula
          </Button>
        </Form>
      </section>
    </>
  );
};

export default FormularioPeliculas;
