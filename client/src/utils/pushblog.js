import axios from "axios"
const Pushing=async(e,title,blog,author)=>{
    e.preventDefault()
    try{
      const res=await axios.post(
        "http://localhost:5000/api/blogs",{
          title:title,
          blog:blog,
          author:author
        }
      )
      if(res){
        console.log(res)
        await getBlogs()
        
      }

    }catch (err){
console.log(err)
    }
  }

  export default Pushing