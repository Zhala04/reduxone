import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({title,id,img}) => {
  return (
    
   
<div className="card col-12 col-sm-12 col-md-4 ms-5 mb-2" style={{width:'350px', height:'350px',padding:'0'}} >
<img src={img} className="card-img-top" alt="err" width='100%' height='250px' />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>

    <Link to={`blog/${id}`} className="btn btn-success">READ MORE</Link>
  </div>
</div>

  )
}

export default BlogItem