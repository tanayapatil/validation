import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import './FormComponent.css'
import {useFormik} from 'formik'
import { submitSchema } from '../schemas';


const FormComonent = () => {
    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')
    // const [gender, setGender] = useState('')

    

   
    const initialValues={
        name:"",
        age:"",
        gender:""
    }
    const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
         initialValues:initialValues,
         validationSchema:submitSchema,
         onSubmit:(values)=>{
            console.log(values)
         }
    })
    // console.log(Formik)
    console.log(values)
    console.log(errors)
    

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>

                    {/* personal details start   */}
                    <Row>
                        <Col lg={5} className='textHeading mt-2'>Personal Details</Col>
                    </Row>
                    <Row>
                        <Col lg={5}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>Name</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter Name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}
                                     required />
                                   {errors.name && touched.name ?  <p className='errorStyle'>{errors.name}</p> : null} 
                                </Col>
                            </Form.Group>

                        </Col>
                        <Col lg={4}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="4">
                                    <span className='labelStyle'>Date of Birth or Age</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="8" >
                                    <Form.Control type="text" placeholder="Enter Age in Years" name="age" value={values.age} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.age && touched.age ?  <p className='errorStyle'>{errors.age}</p> : null}
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>Sex</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="10" >

                                    <Form.Control
                                        as="select"
                                        name="gender"
                                        value={values.gender} onChange={handleChange}
                                        onBlur={handleBlur}

                      
                                    >
                                        <option value='' >Enter Sex</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Form.Control>
                                    {errors.gender && touched.gender ? <p className='errorStyle'>{errors.gender}</p> :null}
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={5}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>Mobile</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="8" >
                                    <Form.Control type="text" placeholder="Enter Mobile" required />
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="4">
                                    <span className='labelStyle'>Government Issued Id</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="8" >
                                    <Form.Select aria-label="Default select example">
                                        <option>Id Type</option>
                                        <option value="1">Adharcard</option>
                                        <option value="2">Pancard</option>

                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>


                        <Col lg={4}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">

                                <Col lg="8" >
                                    <Form.Control type="text" placeholder="Enter GovernmentId" required />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* -----------/personal details ends -----------  */}

                    {/* -----contact details starts-------- */}
                    <Row>
                        <Col lg={5} className='textHeading mt-2'>Contact Details</Col>
                    </Row>
                    <Row>
                        <Col lg={5}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="3">
                                    <span className='labelStyle'>Guardian Detail</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="4" >
                                    <Form.Select aria-label="Default select example">
                                        <option>Enter label</option>
                                        <option value="1">Mother</option>
                                        <option value="2">Father</option>
                                        <option value="3">Other</option>

                                    </Form.Select>
                                </Col>
                                <Col lg="5" >
                                    <Form.Control type="text" placeholder="Enter Guardian Name" required />
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>Email</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter Email" required />
                                </Col>
                            </Form.Group>
                        </Col>

                        <Col lg={4}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="5">
                                    <span className='labelStyle'>Emergency Contact No</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="7" >
                                    <Form.Control type="text" placeholder="Emergency Contact No" required />
                                </Col>
                            </Form.Group>

                        </Col>




                    </Row>

                    {/* --------contact details end -------- */}



                    {/*  ------------- address details starts */}

                    <Row>
                        <Col lg={5} className='textHeading mt-2'>Address Details</Col>
                    </Row>
                    <Row>
                        <Col lg={5}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>Address</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter Address" required />
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>State</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter State" required />
                                </Col>
                            </Form.Group>
                        </Col>

                        <Col lg={4}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>City</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter City/Town/Viilage" required />
                                </Col>
                            </Form.Group>

                        </Col>

                    </Row>
                    <Row>
                        <Col lg={5}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>Country</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter Country" required />
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="3">
                                    <span className='labelStyle'>Pincode</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="9" >
                                    <Form.Control type="text" placeholder="Enter Pincode" required />
                                </Col>
                            </Form.Group>
                        </Col>


                    </Row>


                    {/*--------------------- address details ends -----------------*/}

                    {/* other details starts-------------  */}

                    <Row>
                        <Col lg={5} className='textHeading mt-2'>Other Details</Col>
                    </Row>
                    <Row>
                        <Col lg={5}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="3">
                                    <span className='labelStyle'>Occupation</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="9" >
                                    <Form.Control type="text" placeholder="Enter Occupation" required />
                                </Col>
                            </Form.Group>

                        </Col>


                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="3">
                                    <span className='labelStyle'>Religion</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="9" >
                                    <Form.Control type="text" placeholder="Enter Religion" required />
                                </Col>
                            </Form.Group>
                        </Col>

                        <Col lg={4}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>Maretial status</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="7" >
                                    <Form.Select aria-label="Default select example">
                                        <option>Enter Maretial status</option>
                                        <option value="1">Married</option>
                                        <option value="2">Unmarried</option>

                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>





                    </Row>
                    <Row>
                        <Col lg={5}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="3">
                                    <span className='labelStyle'>Blood Group</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="6" >
                                    <Form.Select aria-label="Default select example">
                                        <option>Enter blood group</option>
                                        <option value="1">A</option>
                                        <option value="2">B</option>
                                        <option value="3">AB</option>
                                        <option value="4">O</option>

                                    </Form.Select>
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="3">
                                    <span className='labelStyle'>Natinality</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="9" >
                                    <Form.Control type="text" placeholder="Enter Nationality" required />
                                </Col>
                            </Form.Group>
                        </Col>


                    </Row>
                    <Row className='mb-3'>
                        <Col lg={8} ></Col>
                        <Col lg={4}>
                            <div className='d-flex justify-content-around'>
                                {/* <div className='buttonBorder'>Cancel</div> */}
                                {/* <div className='submitStyle' onClick={() => { handleSuubmit() }}>Submit</div> */}
                                <button className='buttonBorder'>Cancel</button>
                                <button type='submit' className='submitStyle'> submit</button>
                            </div>
                        </Col>
                    </Row>

                    {/* other details ends --------------- */}
                   


                </Form>
            </Container>

        </>
    )
}

export default FormComonent
