import { useContext, useState } from 'react'
import './login.scss'
import { AuthContext, AuthContextProvider } from '../../context/AuthContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [credentials, setCredentioals] = useState({
        username: undefined,
        password: undefined,
    })

    const { user, loading, error, dispatch } = useContext(AuthContext);
 
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentioals((prev) => ({ ...prev, [e.target.id] : e.target.value }))
    }

    const handleClick = async (e) => {
e.preventDefault();
dispatch({ type: "LOGIN_START" });
try {
    const res = await axios.post("/auth/login", credentials);
    if(res.data.isAdmin){
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
      navigate("/")
    }else{
      dispatch({ type: "LOGIN_FAILURE", payload: {message : "you are not allowed"}})
    }
  
} catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
}
    }

    console.log(user, 'user is came');
  return (
    <div className='parent'>
    <div className='login'>
      <div className='lContainer'>
        <input type="text"  placeholder='username' id='username' onChange={handleChange} className='lInput'/>
        <input type="text"  placeholder='password' id='password' onChange={handleChange} className='lInput'/>
<button disabled={loading} onClick={handleClick} className="lButton">
 Login
</button>
{error && <span className='error-message'>{error.message}</span>}
      </div>
    </div>
    </div>
  )
}

export default Login
