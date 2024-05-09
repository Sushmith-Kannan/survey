import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import getBlogs from '../utils/getblogs'
import deleteblogs from '../utils/deleteblogs'


function Blocks() {

    const [list,setList]=useState([])
    
      useEffect(()=>{
        getBlogs(setList)      
      },[])
    
     
    
  return (
    <>
      <div className="py-8 px-4 mx-auto h-full max-w-screen-xl lg:py-16 lg:px-6">
      {/* <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </div>  */}
      <div className="grid gap-8 lg:grid-cols-2">
       {list && list.map((blog)=>{
        return(
         
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{blog.blog}</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                      <span className="font-medium dark:text-white">
                      {blog.author}
                      </span>
                      <button onClick={()=>deleteblogs(blog._id,setList)}>Delete</button>
                  </div>
                  
              </div>
          </article>          
          )
        })}
        </div> 
  </div>
  
    </>
  )
}

export default Blocks