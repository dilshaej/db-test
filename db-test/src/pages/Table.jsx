import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getStudentsDetailAPI } from '../Services/allAPI';


function Table() {
    const [students, setStudents] = useState([]);
    console.log(students);
    useEffect(()=>{
        getAllDetails()
      },[])
      const getAllDetails  = async ()=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Authorization" : `Bearer ${token}`
        }
        try {
          const result = await getStudentsDetailAPI(reqHeader)
          console.log(result);
          if(result.status==200){
            setStudents(result.data)
          }
        } catch (err) {
          console.log(err);
        }
      }
  return (
    <>
    <Header/>
    <div className='m-5 container text-center'>
        <h2>Student Details</h2>
        <table className='table'>
            <thead>
                <tr>
                    <td>First name</td>
                    <td>Second name</td>
                    <td>Adress</td>
                    <td>E-mail</td>
                    <td>Mobile</td>
                    <td> DOB</td>
                    <td> Gender</td>
                    <td>Course </td>
                </tr>
            </thead>
            <tbody>
               {
                students?.map(detail=>(
                    <tr>
                    <td>{detail?.firstname}</td>
                    <td>{detail?.secondname}</td>
                    <td>{detail?.address}</td>
                    <td>{detail?.email}</td>
                    <td>{detail?.mobile}</td>
                    <td>{detail?.dateofbirth}</td>
                    <td>{detail?.gender}</td>
                    <td>{detail?.course}</td>
                    

                </tr>
                ))}
               
            </tbody>
        </table>

    </div>
    </>
  )
}

export default Table
