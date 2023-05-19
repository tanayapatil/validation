import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import './FormComponent.css'
import { useFormik } from 'formik'
import { submitSchema } from '../schemas';


const FormComonent = () => {





    const initialValues = {
        name: "",
        age: "",
        gender: "",
        mobile: "",
        governmentIdType: "",
        governmentIdAdhar: "",
        governmentIdPan: "",
        emergencyNo: "",
        email: "",
        guardianLabel: "",
        natinality: "india"
    }
    const { values, errors, handleChange, handleSubmit, touched, handleBlur,resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: submitSchema,
        onSubmit: async(values) => {
            console.log(values)
           try{
            const result = await fetch('http://localhost:2000/api/addUserData', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: values.name,
                    age: values.age,
                    gender: values.gender,
                    mobile: values.mobile,
                    identity:values.governmentIdType,
                    adharNo:values.governmentIdAdhar,
                    panNo: values.governmentIdPan,
                    guardian:values.guardianLabel,
                    nationality:values.natinality
    
                })
            })
            const responce= await result.json()
            resetForm({values:''})

        }catch(error){
            console.log(error)
        }
           
        }
    })
    // console.log(Formik)
    console.log(values)
    console.log(errors)


   

    return (
        <>
            <Container className='mt-3'>
                <Form onSubmit={ handleSubmit}>

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
                                    {errors.name && touched.name ? <p className='errorStyle'>{errors.name}</p> : null}
                                </Col>
                            </Form.Group>

                        </Col>
                        <Col lg={4}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="4">
                                    <span className='labelStyle'> Age</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="8" >
                                    <Form.Control type="text" placeholder="Enter Age in Years" name="age" value={values.age} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.age && touched.age ? <p className='errorStyle'>{errors.age}</p> : null}
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
                                    {errors.gender && touched.gender ? <p className='errorStyle'>{errors.gender}</p> : null}
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
                                    <Form.Control type="text" placeholder="Enter Mobile" name="mobile" value={values.mobile} onChange={handleChange}
                                        onBlur={handleBlur} required />
                                    {errors.mobile && touched.mobile ? <p className='errorStyle'>{errors.mobile}</p> : null}

                                </Col>
                            </Form.Group>

                        </Col>

                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="4">
                                    <span className='labelStyle'>Government Issued Id</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="8" >

                                    <Form.Control
                                        as="select"
                                        name="governmentIdType"
                                        value={values.governmentIdType} onChange={handleChange}
                                        onBlur={handleBlur}



                                    >
                                        <option value='' >Select Id type</option>
                                        <option value="adhar">Adharcard</option>
                                        <option value="pan">Pancard</option>

                                    </Form.Control>
                                    {errors.governmentIdType && touched.governmentIdType ? <p className='errorStyle'>{errors.governmentIdType}</p> : null}
                                </Col>
                            </Form.Group>
                        </Col>


                        <Col lg={4}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">

                                <Col lg="8" >
                                    {values.governmentIdType === 'adhar' ? <>  <Form.Control type="text" placeholder="Enter Adharcard no" name="governmentIdAdhar" value={values.governmentIdAdhar} onChange={handleChange}
                                        onBlur={handleBlur} required />
                                        {errors.governmentIdAdhar && touched.governmentIdAdhar ? <p className='errorStyle'>{errors.governmentIdAdhar}</p> : null}
                                    </>

                                        :

                                        <> <Form.Control type="text" placeholder="Enter pancard no" name="governmentIdPan" value={values.governmentIdPan} onChange={handleChange}
                                            onBlur={handleBlur} required />
                                            {errors.governmentIdPan && touched.governmentIdPan ? <p className='errorStyle'>{errors.governmentIdPan}</p> : null}
                                        </>}

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
                                    <span className='labelStyle'>Guardian Detail</span>
                                </Form.Label>
                                <Col lg="4" >
                                    {/* <Form.Select aria-label="Default select example">
                                        <option>Enter label</option>
                                        <option value="1">Mother</option>
                                        <option value="2">Father</option>
                                        <option value="3">Other</option>

                                    </Form.Select> */}
                                    <Form.Control
                                        as="select"
                                        name="guardianLabel"
                                        value={values.guardianLabel} onChange={handleChange}
                                        onBlur={handleBlur}



                                    >
                                        <option value='' >Select guardian </option>
                                        <option value="mother">Mother</option>
                                        <option value="father">Father</option>
                                        <option value="other">Other</option>


                                    </Form.Control>
                                </Col>
                                <Col lg="5" >
                                    <Form.Control type="text" placeholder="Enter Guardian Name" name="guardianName" value={values.guardianName} onChange={handleChange}
                                        onBlur={handleBlur} />
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>Email</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter Email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.email && touched.email ? <p className='errorStyle'>{errors.email}</p> : null}
                                </Col>
                            </Form.Group>
                        </Col>

                        <Col lg={4}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="5">
                                    <span className='labelStyle'>Emergency Contact No</span><sup style={{ color: 'red' }}>*</sup>
                                </Form.Label>
                                <Col lg="7" >
                                    <Form.Control type="text" placeholder="Emergency Contact No" name="emergencyNo" value={values.emergencyNo} onChange={handleChange} onBlur={handleBlur} required />
                                    {errors.emergencyNo && touched.emergencyNo ? <p className='errorStyle'>{errors.emergencyNo}</p> : null}
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
                                    <span className='labelStyle'>Address</span>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter Address" />
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>State</span>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter State" />
                                </Col>
                            </Form.Group>
                        </Col>

                        <Col lg={4}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>City</span>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter City/Town/Viilage" />
                                </Col>
                            </Form.Group>

                        </Col>

                    </Row>
                    <Row>
                        <Col lg={5}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>Country</span>
                                </Form.Label>
                                <Col lg="10" >
                                    <Form.Control type="text" placeholder="Enter Country" />
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="3">
                                    <span className='labelStyle'>Pincode</span>
                                </Form.Label>
                                <Col lg="9" >
                                    <Form.Control type="text" placeholder="Enter Pincode" />
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
                                    <span className='labelStyle'>Occupation</span>
                                </Form.Label>
                                <Col lg="9" >
                                    <Form.Control type="text" placeholder="Enter Occupation" />
                                </Col>
                            </Form.Group>

                        </Col>


                        <Col lg={3}>
                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="3">
                                    <span className='labelStyle'>Religion</span>
                                </Form.Label>
                                <Col lg="9" >
                                    <Form.Control type="text" placeholder="Enter Religion" />
                                </Col>
                            </Form.Group>
                        </Col>

                        <Col lg={4}>

                            <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextPassword">
                                <Form.Label column lg="2">
                                    <span className='labelStyle'>Maretial status</span>
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
                                    <span className='labelStyle'>Blood Group</span>
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
                                    <Form.Control type="text" placeholder="Enter Nationality" name="natinality" value={values.natinality} onBlur={handleBlur} required />
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
