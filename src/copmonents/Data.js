import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const Data = () => {

    const [value, setValue] = useState('')

    const fetchAllData = async () => {

        const result = await fetch('http://localhost:2000/api/getUserData')
        const responce = await result.json()
        console.log(responce)
        setValue(responce)

    }
    return (
        <>
            <Container>
                <Button variant="primary" className='mt-4' onClick={fetchAllData}>Get All Data</Button>

                <Table striped bordered hover className='mt-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Mobile</th>
                            <th>Id Type</th>
                            <th>Adhar No.</th>
                            <th>Pan No.</th>
                            <th>Guardian Details</th>
                            <th>Nationality</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            value && value.allData.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{index}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.identity}</td>
                                        <td>{item.adharNo}</td>
                                        <td>{item.panNo}</td>
                                        <td>{item.guardian}</td>
                                        <td>{item.nationality}</td>
                                    </tr>
                                )
                            })
                        }

                        {/* <tr>
                            <td>2</td>
                            <td>{value.name}</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr> */}
                    </tbody>
                </Table>

            </Container>

        </>
    )
}

export default Data
