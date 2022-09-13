import React from 'react'
import { Link } from 'react-router-dom'

const Dashboardtem = ({title,id,desc,count}) => {
  return (
    <tr>
      <th scope="row">{count}</th>
      <td>{id}</td>
      <td>{title}</td>
      <td>{`${desc.substr(0,20)}...`}</td>
      <td><Link className="btn btn-dark" to={`edit/${id}`}>Edit</Link></td>
    </tr>
  )
}

export default Dashboardtem