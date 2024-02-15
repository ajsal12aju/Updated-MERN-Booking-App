 import React from 'react'
import "./featurd.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';    
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function featurd() {
  return (
    <div className='feturded'>
      <div className="top">
        <h1 className="title">Total Revanew</h1> 
        <MoreVertIcon/>
      </div>    
      <div className="bottom">
        <div className="feturdedChart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transaction processing. Last payment may not be included</p>
         <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                    <ExpandMoreIcon fontSize='small'/>
                    <div className="resultAmount">$12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last weak</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize='small'/>
                    <div className="resultAmount">$12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle ">Last month</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize='small'/>
                    <div className="resultAmount">$12.4k</div>
                </div>
            </div>
         </div>

              </div>
    </div>
  )
}
