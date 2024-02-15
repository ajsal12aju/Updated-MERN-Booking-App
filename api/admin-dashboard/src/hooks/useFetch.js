// import { useEffect, useState } from "react"
// import axios from 'axios';

// const useFetch = (url) => {
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState([])
//     const [error, setError] = useState([])


//     useEffect(()=>{
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const res = await axios.get(url);
//                 setData(res.data);
//             } catch (error) {
//                 setError(error)
//             }
//             setLoading(false)
//         }
       
//         fetchData()
//     }, [url])
    
//     const reFetch = async () => {
//         setLoading(true)
//         try {
//             const res = await axios.get(url);
//             setData(res.data)
//         } catch (error) {
//             setError(error)
//         }
//         setLoading(false)
//     }

//     return { data, loading, error, reFetch}

// }

// export default useFetch

import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

export default useFetch;
