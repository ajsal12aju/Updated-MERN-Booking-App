import React, { useState } from "react";
import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProfileImage from "../../images/pro-removebg-preview (1).png";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { hotelInputs } from "../../formsorce";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

function NewHotel({ inputs, title }) {
  const [files, setFiles] = useState("");
  const { data, loading, error, refetch } = useFetch("/rooms");
  console.log(data, "datssxxas");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([])

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSelect = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value )
    setRooms(value)
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const list = await Promise.all(
       Object.values(files).map(async(file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/du5bvvdpv/image/upload", data
          )
          const {url} = uploadRes.data
          return url
        })
      )
      const newhotel = {
        ...info,
        rooms,
        photos: list,
      }
      await axios.post("/hotels", newhotel)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(rooms, "data is came here");
  console.log(files);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Hotel</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={files ? URL.createObjectURL(files[0]) : ProfileImage}
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  {" "}
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  multiple
                  type="file"
                  id="file"
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input
                    onChange={handleChange}
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select name="" id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Rooms</label>
                <select
                  multiple={true}
                  name="rooms"
                  id="rooms"
                  onChange={handleSelect}
                >
                  {loading ? (
                    <option>Loading...</option>
                  ) : (
                    data.map((room) => (
                      <option key={room._id} value={room._id}>
                        {room.title}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
        data table
      </div>
    </div>
  );
}

export default NewHotel;
