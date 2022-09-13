import React from 'react'

const BlogDetailItems = ({id,title,desc,img}) => {
  return (
    <div className='container mt-5 d-flex align-items-center ' style={{background:'#F3F3F3'}}>
      <img src={img} width='500' height='600px' alt="" />
      <div className='p-3'>
      <h5 style={{color:'#00B1B7'}}>Blog ID:</h5> <p>{id}</p>
        <p> <h5 style={{color:'#00B1B7'}}>Blog Title:</h5><b>{title}</b></p>
        <h5 style={{color:'#00B1B7',margin:'0',padding:'0'}}>Blog Description:</h5><p><br/>{desc}</p>
      </div>
    </div>
  )
}

export default BlogDetailItems