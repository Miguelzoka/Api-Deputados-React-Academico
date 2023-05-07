import Pagina from "@/components/Pagina";
import api from "@/services/apiDeputados";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Index = () => {
  const [ deputados, setDeputados ] = useState([]);

  useEffect(() => {
    api
    .get('/deputados/')
    .then(response => {
      setDeputados(response.data.dados)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <>
      <Pagina titulo="Deputados">
        <Row md={4}>
          
          {deputados.map(item => (
            <Col>
              <Card style={{ width: "18rem", marginTop: "30px" }}>
                <Card.Img variant="top" src={item.urlFoto} />
                <Card.Body>
                  <h4> {item.nome} </h4>
                  <Link className="btn btn-success" href={"/deputados/" + item.id}>Details</Link>
                </Card.Body>
              </Card>
            </Col>
          ))};
        </Row>
      </Pagina>
    </>
  );
};

export default Index;
