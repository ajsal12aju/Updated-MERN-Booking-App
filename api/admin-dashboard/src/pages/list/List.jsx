import React from 'react'
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from '../../components/datatable/DataTable';

function List({columns}) {
  console.log(columns, 'datas');
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable columns={columns}/>
      </div>
    </div>
  )
}

export default List