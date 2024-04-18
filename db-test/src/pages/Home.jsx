import React from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    
  return (
    <>
  <div style={{
    //  backgroundImage: `url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-101947.jpg')`,
    //  backgroundSize: 'cover',
    //  backgroundPosition: 'center',
    //  width: '100%',
    // height:'100vh'
  }}>
       <Header/>
       <div className="row container p-5 m-5" >
        <div className="col-lg-6">
          <h2>Education</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore fugit atque voluptate iste, nesciunt aliquam ducimus voluptatibus? Mollitia cupiditate dolores excepturi repudiandae quis eligendi, sunt molestias eveniet dolorem quibusdam!</p>

          <div>
            <p>New student? Click here to  <Link className='btn btn-primary' to={'/register'}>Register</Link></p>
           
          </div>
        </div>
        <div className="col-lg-6">
    <img height={'400px'}  src="https://media.istockphoto.com/id/1184843761/vector/fill-in-test-sheet-with-a-check-and-cross-get-an-a-on-exam-or-class-promotion-test-verify.jpg?s=612x612&w=0&k=20&c=J5JjRPPgZM1p7rtu_74IX6FesYhMRuylh_wxRplnhPo=" alt="" />
        </div>
       </div>
  </div>
    </>
  )
}

export default Home