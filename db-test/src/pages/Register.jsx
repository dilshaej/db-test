import React, { useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { FloatingLabel, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../Services/allAPI';

function Register() {
    const navigate = useNavigate()
    const [userInputs,setUserInputs]=useState({
        firstname:"",secondname:"",address:"",email:"",gender:"",mobile:"",dateofbirth:"",course:""
  })
  console.log(userInputs);

  const handleRegister = async (e)=>{
    e.preventDefault()
    if(userInputs.firstname && userInputs.secondname && userInputs.address && userInputs.email && userInputs.gender && userInputs.mobile && userInputs.dateofbirth && userInputs.course){
        // api call
        try{
            const result = await registerAPI(userInputs)
            console.log(result);
            if( result.status == 200){
            toast.success(`Welcome ${result.data.firstname}`)
            setUserInputs({ firstname:"",secondname:"",address:"",email:"",gender:"",mobile:"",dateofbirth:"",course:""})
            setTimeout(()=>{
              navigate('/table')
            },2000);
            }else{
            toast.error(result.response.data)
            setTimeout(()=>{
              setUserInputs({  firstname:"",secondname:"",address:"",email:"",gender:"",mobile:"",dateofbirth:"",course:""})
            
            },2000);
            
            }
            }catch(err){
            console.log(err);
            }
               
            

    }else{
        toast.warning("Please fill the form completely!!!")
    }
  }
  return (
    <>
    <Header/>
   <div>
        <div className='container mt-5 text-white ' style={{backgroundColor:'rgb(60, 179, 113)',width:'100%'}}>
            <div className="row">
                <div className="col-lg-4 text-white text-center">
                  <h3 className='text-center  p-5 mt-5 '>Welcome </h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis perferendis officia aut officiis minima accusamus architecto deserunt aliquid </p>
      <div>
      <Link className='btn btn-primary' to={'/'} > Back</Link>
      </div>
                </div>
                <div className="col-lg-8">
                  <div className='rounded m-5 text-black  ' style={{backgroundColor:'white'}}>
                    <h2 className='text-center mt-5'>Apply as a student</h2>
                    <div className="row m-2">
                        <div className="col-lg-6">
                        <Form>
                            <Form.Label>First name</Form.Label>
                            <FloatingLabel
        controlId="floatingInput"
        label="First name"
        className="mb-3"
      >
        <Form.Control  value={userInputs.firstname}  onChange={e=>setUserInputs({...userInputs,firstname:e.target.value})} type="text" placeholder="First name" />
      </FloatingLabel>
             <Form.Label>Second name</Form.Label>
             <FloatingLabel
        controlId="floatingInput"
        label="Second name"
        className="mb-3"
      >
        <Form.Control value={userInputs.secondname}  onChange={e=>setUserInputs({...userInputs,secondname:e.target.value})} type="text" placeholder="Second name" />
      </FloatingLabel>
          <Form.Label>Address</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Address">
        <Form.Control
        value={userInputs.address}  onChange={e=>setUserInputs({...userInputs,address:e.target.value})}
          as="textarea"
          placeholder="Address"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Form.Label>Email</Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control value={userInputs.email}  onChange={e=>setUserInputs({...userInputs,email:e.target.value})} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <Form.Label>Gender</Form.Label>
                            <FloatingLabel
        controlId="floatingInput"
        label="Gender"
        className="mb-3"
      >
        <Form.Control value={userInputs.gender}  onChange={e=>setUserInputs({...userInputs,gender:e.target.value})}  type="text" placeholder="Gender" />
      </FloatingLabel>

                            </Form>
                        </div>
                        <div className="col-lg-6">
                         <Form>
                         <Form.Label>Mobile</Form.Label>
                            <FloatingLabel
        controlId="floatingInput"
        label="Mobile"
        className="mb-3"
      >
        <Form.Control value={userInputs.mobile}  onChange={e=>setUserInputs({...userInputs,mobile:e.target.value})}  type="text" placeholder="Mobile" />
      </FloatingLabel>
      <Form.Label>Date of Birth</Form.Label>
                            <FloatingLabel
        controlId="floatingInput"
        label="DOB"
        className="mb-3"
      >
        <Form.Control value={userInputs.dateofbirth}  onChange={e=>setUserInputs({...userInputs,dateofbirth:e.target.value})}  type="text" placeholder="DOB" />
      </FloatingLabel>
      <Form.Label>Course</Form.Label>
      <FloatingLabel
          controlId="floatingSelectGrid"
          
        >
          <Form.Select value={userInputs.course}  onChange={e=>setUserInputs({...userInputs,course:e.target.value})}  aria-label="Floating label select example">
            <option>Select Course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerse">Commerse</option>
            <option value="Humanities">Humanities</option>
          
          </Form.Select>
        </FloatingLabel>
                         </Form>
                      <div className='m-5' > 
                          <button onClick={handleRegister} className='btn btn-primary'>Register</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
   </div>
   <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Register