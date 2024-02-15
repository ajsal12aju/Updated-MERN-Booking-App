import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProfileImage from "../../images/pro-removebg-preview (1).png";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";

function New({ inputs, title }) {
  const [file, setFile] = useState("")
  console.log(file)

  const [info , setInfo] = useState({})

  const handleChange = (e) =>{
    setInfo(prev => ({...prev, [e.target.id]: e.target.value}))
  }
  console.log(info, 'data is came here')
 
  const handleClick = async (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/du5bvvdpv/image/upload", data
      )
        
      console.log(uploadRes.data, 'uploadREss')

      const {url} = uploadRes.data
      const newUser = {
        ...info,
        img: url
      }

      await axios.post("/auth/register", newUser)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={ file ? URL.createObjectURL(file) : ProfileImage} alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  {" "}
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
              </div> 

              {inputs.map((input) => 
              (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id} />
                </div>
              ))}

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
        data table
      </div>
    </div>
  );
}

export default New;
