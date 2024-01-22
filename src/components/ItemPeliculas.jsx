import { Button, Card } from "react-bootstrap"

const ItemPeliculas = ({pelicula, eliminarPelicula }) => {

    const { nombre, genero, descripcion } = pelicula
  return (
    <Card border="success" className="mt-3">
    <Card.Body>
      <Card.Text>
        <span className="fw-bold">Nombre:</span> {nombre}
      </Card.Text>

      <Card.Text>
        <span className="fw-bold">Género:</span>  <span className="text-uppercase">{genero}</span>
      </Card.Text>

      <Card.Text>
        <span className="fw-bold">Descripción:</span> {descripcion}
      </Card.Text>

      <Button 
          variant="danger" 
          className="w-100 text-uppercase fw-bold"
          onClick={() => eliminarPelicula(pelicula.id)}
      >
        Borrar &times;
      </Button>
    </Card.Body>
  </Card>
  )
}

export default ItemPeliculas