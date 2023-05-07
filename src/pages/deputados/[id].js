import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'

const Detalhes = ({ deputado, despesas, profissoes }) => {
    return (
        <>
            <Pagina titulo={"Deputado " + deputado.id}>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
                            <Card.Body>
                                <Card.Title><strong>{deputado.ultimoStatus.nome}</strong></Card.Title>
                                <p><strong>Partido: </strong>{deputado.ultimoStatus.siglaPartido}</p>
                                <p><strong>UF: </strong>{deputado.ultimoStatus.siglaUf}</p>
                            </Card.Body>
                        </Card>
                        <Link className='btn btn-danger mt-3' href={'/deputados/'}>Voltar</Link>
                    </Col>
                    <Col md={6}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {despesas.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.dataDocumento}</td>
                                        <td>{item.tipoDespesa}</td>
                                        <td>{item.valorDocumento}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>

                    <Col md={2}>
                        <h1>Profissões: </h1>
                        {profissoes.map(item => (
                            <ul>
                                <li>
                                    
                                    {item.titulo}
                                </li>
                            </ul>
                        ))}
                    </Col>
                </Row>



            </Pagina>
        </>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiDeputados.get('/deputados/' + id)
    const deputado = resultado.data.dados

    const resDespesas = await apiDeputados.get('/deputados/' + id + '/despesas/')
    const despesas = resDespesas.data.dados

    const resProfissoes = await apiDeputados.get('/deputados/' + id + '/profissoes/')
    const profissoes = resProfissoes.data.dados

    return {
        props: { deputado, despesas, profissoes },
    }
}