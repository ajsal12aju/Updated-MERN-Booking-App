import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import './reserve.css'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Reserve({ setOpenModal, hotelId }) {
  const { data, loading, error } = useFetch(`room/${hotelId}`);

  const {dates} = useContext(SearchContext)

  const getDatesInRange = (startDate, endDate) =>{
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let dates = [];

    while(date <= end){
      dates.push(new Date(date).getTime())
      date.setDate(date.getDate() + 1)
    }
    return dates
  }

  console.log(getDatesInRange(dates[0].startDate, dates[0].endDate), "came here");
const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate)

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) => 
    alldates.includes(new Date(date).getTime())
    )
    return !isFound
  }

  const [selectedRooms, setSelectedRooms] = useState([])

  const handleSelect = (e) =>{
    const checked = e.target.checked;
    const value = e.target.value;

    setSelectedRooms(
      checked ? [...selectedRooms, value] 
      :selectedRooms.filter((item) => item !== value )
    )
  }

  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
           const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates
           });
           return res.data;
        })  
      )
      setOpenModal(false)
      navigate('/')
    } catch (err) {
      
    }
  }

  console.log(selectedRooms, 'selectedrooms are here');
  return (
    <div className='reserve'>
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className='rClose'
          onClick={() => setOpenModal(false)}
        />
        <span>Select Your Rooms</span>
        {data.map((item) => (
          <div className='rItem' key={item._id}>
            <div className="rItemInfo"  style={{ maxHeight: '460px', overflowY: 'auto' }}>
              <div className="rTitle">
                {item.title}
              </div>
              <div className="rDesc">
                {item.desc}
              </div>
              <div className="rMax">
                Max People: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
              {
                item.roomNumbers.map((roomNumber) => (
                  <div className='room'>
                    <label style={{paddingRight:'10px'}} htmlFor="">{roomNumber.number}</label>
                    <input type="checkbox" disabled={!isAvailable(roomNumber)} value={roomNumber._id} onChange={handleSelect} />
                  </div>
                ))
              }
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">Reserve Now</button>
      </div>
    </div>
  );
}

export default Reserve;
