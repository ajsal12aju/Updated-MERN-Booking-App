import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ProfileImage from "../../images/pro-removebg-preview (1).png";
import Chart from "../../components/chart/Chart";
import TableComponent from "../../components/table/Table"

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="sigleContainer">
        <Navbar/>
        
        <div className="top">
          <div className="left">
          <div className="editBUtton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={ProfileImage} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTittle">Ajsal</h1>
                <div className="detailItem">
                  <span className='itemKey'>Email :</span>
                  <span className="itemValue">ajsal12aju@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Phone :</span>
                  <span className="itemValue">9645588095</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Address :</span>
                  <span className="itemValue">Velladath Parambil</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Country :</span>
                  <span className="itemValue">Indian</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          <h1 className="title">Information</h1>
          <Chart aspect={4 / 1} title="User Spending (Last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>
          <TableComponent/>
        </div>
      </div>
    </div>
  )
}

export default Single
