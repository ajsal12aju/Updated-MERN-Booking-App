import React from 'react'
import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widgets from "../../components/widgets/Widgets"
import Featurd from "../../components/featuerd/Featurd"
import Chart from "../../components/chart/Chart"
import Table from '../../components/table/Table'


function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
      <Widgets type="user" />
      <Widgets type="order"/>
      <Widgets type="earnings"/>
      <Widgets type="balance"/>
      </div>

      <div className="charts">
         <Featurd/>
         <Chart aspect={2/1} title="Last 6 Months (Revaniew)"/>
      </div>

      <div className="listContainer">
        <div className="listTitle">Latest Transaction</div>
        <Table/>
      </div>

      home container
      </div>
    </div>
  )
}

export default Home