import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [employeeId,setEmployeeId] = useState("")
  const [password,setPassword] = useState("")
  const navigate=useNavigate()

  const SignIn=async(e)=>{
    e.preventDefault()
    try{

       const res= await axios.post('http://localhost:5000/api/login',{
            employeeId:employeeId,
            password:password,
        })
        if(res){
            console.log(res)
            
          }
        }catch (err){
          console.log(err)
        }
            navigate('/myblogs')
        
    }
   
    
  

//   try{
//     const res = await axios.post(
//       "http://localhost:5000/api/register",{
//         employeeId:employeeId,
//         email:email,
//         password:password,
//         name:name 
//       }
//     )
//     if(res){
//       console.log(res)
//     }
//   }catch (err){
//     console.log(err)
//   }

  return (
    <div>
   
      <div className="bg-gray-200 w-full h-screen flex items-center">
      <div className="w-[500px] mx-auto bg-white p-3">
        <h2 className="p-2">logo</h2>
        <h1 className="text-2xl pl-3 font-semibold">Welcome to texas</h1>
       <p className="pl-3 text-gray-500">We need some basic details to know about you</p>
       <form class="space-y-4 md:space-y-6" action="#">

      
                  <div className="ml-3 mr-3">
                      <label for="id" className="block mb-2 text-sm font-medium text-gray-900 pt-4">Employee ID</label>
                      <input type="id" value={employeeId} onChange={(e)=>{setEmployeeId(e.target.value);console.log(e.target.value)}} name="id" id="id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="ID" required=""/>
                  </div>
                  
                  <div className="ml-3 mr-3"> 
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                  </div>
                 
                 
                  <Link to="/Blogpage">
                  <button onClick={(e)=>{SignIn(e)}} type="submit" className="w-full mt-4 text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center ">Log in</button>
                  </Link>
                  <div></div>
              </form>
      </div>
    </div>  
    </div>
  )
}

export default SignUp