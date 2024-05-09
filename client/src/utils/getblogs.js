import axios from "axios"

const getBlogs=async(setList)=>{
    try{
        
      const {data} = await axios.get("http://localhost:5000/api/getblogs")
      // console.log(data.list)
      if(data.list){
        setList(data.list)
        await getBlogs(setList)
      }
    }catch(err){
      console.log(err)
    }
  }

  export default getBlogs