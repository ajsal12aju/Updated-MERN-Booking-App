import React, { useState } from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesorce';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import axios from 'axios';

function DataTable({columns}) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path, 'path');
  const [list, setList] = useState([])
  const { data, loading, error, refetch } = useFetch(`/${path}`); 

  useEffect(()=>{
    setList(data)
  }, [data, path])

 console.log(data, 'datasss added');
 const handleDelete = async(id) =>{
  try {
    await axios.delete(`/${path}/${id}`);
    setList(list.filter((item) => item._id !== id))
    refetch();
  } catch (error) {
   return error
  }
 }
  const actionColumn = [
    {
      feild:"action",
      headerName:"Action",
      width:200,
      renderCell: (params) =>{
        return(
          <div className="cellAction">
            <Link to="/users/test"  className='link' style={{textDecoration:"none"}} >
            <div className="viewButton" >View</div>
            </Link>
            <div className="deleteAction" onClick={()=>handleDelete(params.row._id)}>Delete</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
       {path}
        <Link to={`/${path}/new`} className='link'>
          Add New
        </Link>
      </div>
       <DataGrid
        className='datagrid'
        rows={list}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}       
        pageSizeOptions={[10, 20]}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  )
}

export default DataTable
