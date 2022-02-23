import { React, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  {
    id: 1,
    nombreEspecialidad: "",
    descripcion: "",
    fechaRegistro: "",
    usuarioModif: "",
    estado: "",
    modificacionRegistro: "",
  },
];

const RegisterEspec = () => {
  const [data, setData] = useState(data);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <div>
      <Container>
        <h1>Gestion De Especialidades</h1>
        <Table>
          <thead>
            <tr>
              <th>Nombre Especialidad</th>
              <th>Descripcion</th>
              <th>Fecha Registro</th>
              <th>Usuario Modif</th>
              <th>Estado</th>
              <th>Modificacion Registro</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.nombreEspecialidad}</td>
                <td>{item.descripcion}</td>
                <td>{item.fechaRegistro}</td>
                <td>{item.usuarioModif}</td>
                <td>{item.estado}</td>
                <td>{item.modificacionRegistro}</td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => {
                      setModal2(true);
                    }}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          color="primary"
          onClick={() => {
            setModal3(true);
          }}
        >
          Agregar
        </Button>
      </Container>
      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader toggle={() => setModal(false)}>
          Editar Especialidad
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Nombre Especialidad</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre Especialidad"
            />
          </FormGroup>
          <FormGroup>
            <label>Descripcion</label>
            <input
              type="text"
              className="form-control"
              placeholder="Descripcion"
            />
          </FormGroup>
          <FormGroup>
            <label>Fecha Registro</label>
            <input
              type="text"
              className="form-control"
              placeholder="Fecha Registro"
            />
          </FormGroup>
          <FormGroup>
            <label>Usuario Modif</label>
            <input
              type="text"
              className="form-control"
              placeholder="Usuario Modif"
            />
          </FormGroup>
          <FormGroup>
            <label>Estado</label>
            <input type="text" className="form-control" placeholder="Estado" />
          </FormGroup>
          <FormGroup>
            <label>Modificacion Registro</label>
            <input
              type="text"
              className="form-control"
              placeholder="Modificacion Registro"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal(false)}>
            Guardar
          </Button>
          <Button color="secondary" onClick={() => setModal(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modal2} toggle={() => setModal2(false)}>
        <ModalHeader toggle={() => setModal2(false)}>
          Eliminar Especialidad
        </ModalHeader>
        <ModalBody>¿Esta seguro que desea eliminar la especialidad?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal2(false)}>
            Eliminar
          </Button>
          <Button color="secondary" onClick={() => setModal2(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modal3} toggle={() => setModal3(false)}>
        <ModalHeader toggle={() => setModal3(false)}>
          Agregar Especialidad
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Nombre Especialidad</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre Especialidad"
            />
          </FormGroup>
          <FormGroup>
            <label>Descripcion</label>
            <input
              type="text"
              className="form-control"
              placeholder="Descripcion"
            />
          </FormGroup>
          <FormGroup>
            <label>Fecha Registro</label>
            <input
              type="text"
              className="form-control"
              placeholder="Fecha Registro"
            />
          </FormGroup>
          <FormGroup>
            <label>Usuario Modif</label>
            <input
              type="text"
              className="form-control"
              placeholder="Usuario Modif"
            />
          </FormGroup>
          <FormGroup>
            <label>Estado</label>
            <input type="text" className="form-control" placeholder="Estado" />
          </FormGroup>
          <FormGroup>
            <label>Modificacion Registro</label>
            <input
              type="text"
              className="form-control"
              placeholder="Modificacion Registro"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal3(false)}>
            Guardar
          </Button>
          <Button color="secondary" onClick={() => setModal3(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RegisterEspec;
