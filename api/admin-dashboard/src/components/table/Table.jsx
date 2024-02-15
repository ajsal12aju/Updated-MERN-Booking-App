import React from 'react'
import "./table.scss";
import ProfileImage from "../../images/pro-removebg-preview (1).png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function TableComponent() {

  const rows = [
    {
      id:11,
      product:"Dell laptop",
      img:ProfileImage,
      customer:"Nabeel",
      date:"1 March",
      amount:645,
      method:"cash on Delivery",
      status:"Approved",
    },
    {
      id:12,
      product:"Samsug A21",
      img:ProfileImage,
      customer:"Ajsal",
      date:"1 April",
      amount:785,
      method:"Online Payment",
      status:"Pending",
    },
    {
      id:13,
      product:"Asus laptop",
      img:ProfileImage,
      customer:"Shinto",
      date:"5 June",
      amount:945,
      method:"cash on Delivery",
      status:"Approved",
    },
    {
      id:14,
      product:"Iphone",
      img:ProfileImage,
      customer:"vignesh",
      date:"7 April",
      amount:892,
      method:"cash on Delivery",
      status:"Approved",
    }
  ]

  return (
   
       <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='tableCell'>
                {row.id}
              </TableCell>
              <TableCell  className='tableCell'><div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
                </div></TableCell>
              <TableCell  className='tableCell'>{row.customer}</TableCell>
              <TableCell  className='tableCell'>{row.date}</TableCell>
              <TableCell  className='tableCell'>{row.amount}</TableCell>
              <TableCell  className='tableCell'>{row.method}</TableCell>
              <TableCell  className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
