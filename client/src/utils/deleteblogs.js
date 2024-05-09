import axios from "axios"

const deleteblogs=async(id,setList)=>{
    await axios.delete(`http://localhost:5000/api/deleteblogs/${id}`)
    await getBlogs(setList)
  }

  export default deleteblogs