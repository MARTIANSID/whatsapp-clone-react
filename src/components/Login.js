import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {v4 as uuidV4} from 'uuid'

export default function Login({ onIdSubmit }) {
  const idRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  };
  const generateNewId=()=>{
    onIdSubmit(uuidV4());
  }
  return (
    <Container
      className="d-flex align-items-center justify-content-center  "
      style={{ height: "100vh" }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control type="text" ref={idRef}></Form.Control>
        </Form.Group>
        <Button type="submit">Login</Button>
        <Button type="secondary" style={{ marginLeft: "10px" }} onClick={generateNewId}>
          Create A New Id
        </Button>
      </Form>
    </Container>
  );
}
