import Image from "../src/images/pro-removebg-preview (1).png";
import noUser from '../src/images/noUser.png'

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
        console.log(params.row.img, 'params')
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params?.row?.img || noUser} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "country", headerName: "Country", width: 100 },
  { field: "city", headerName: "City", width: 100 },
  { field: "phone", headerName: "Phone", width: 100 },

];

export const hotelColumns = [
    {
        field:"_id",
        headerName:"ID",
        width: 70
    },
    {
        field:"type",
        headerName:"Type",
        width: 100
    },
    {
        field:"title",
        headerName:"Title",
        width: 100
    },
    {
        field:"city",
        headerName:"City",
        width: 100
    },

]

export const roomColumns =[
    {
        field:"_id",
        headerName:"ID",
        width: 70
    },
    {
        field:"title",
        headerName:"Title",
        width: 100
    },
    {
        field:"desc",
        headerName:"Description",
        width: 100
    },
  
    {
        field:"price",
        headerName:"Price",
        width: 100
    },
    {
        field:"maxPeople",
        headerName:"Max People",
        width: 100
    },
]