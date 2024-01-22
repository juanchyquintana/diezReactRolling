import { Alert } from "react-bootstrap";

const Exito = ({children}) => {
  return (
    <>
      {["success"].map((variant) => (
        <Alert
          key={variant}
          variant={variant}
          className="text-success fw-bold text-center"
        >
          {children}
        </Alert>
      ))}
    </>
  );
};

export default Exito;
