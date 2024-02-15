import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js';


export const createHotel = async (req, res, next)=>{
    const newHotel = new Hotel(req.body);
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (error) {
       next(error)
    }
}

export const updateHotel = async (req, res, next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateHotel);
    }  catch (error) {
       next(error)
    }
}
export const deleteHotel = async (req, res, next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("HOTEL IS edited work can updated  ever");
       
    } catch (error) {
       next(error)
    }
}
export const getHotel = async (req, res, next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
       
    } catch (error) {
       next(error)
    }
}
// export const getHotels = async (req, res, next) => {
//     try {
//        const {limit, featured} = req.query;
//        const hotels = await Hotel.find({featured:featured}).limit(limit);
//        res.status(200).json(hotels);
//     } catch (error) {
//        next(error);
//     }
//    };
export const getHotels = async (req, res, next) => {
    try {
        const { limit = 10, featured, city, min, max } = req.query;
        let query = {};

        if (featured) {
            query.featured = featured === 'true'; 
        }
        if (city) {
            query.city = city;
        }

        if (min || max) {
            query.cheapestPrice = {};
            if (min) {
                query.cheapestPrice.$gte = parseInt(min, 10) || 0; 
            }
            if (max) {
                query.cheapestPrice.$lte = parseInt(max, 10) || 999; 
            }
        }

        const hotels = await Hotel.find(query).limit(parseInt(limit, 10));
        res.status(200).json(hotels);
    } catch (error) {
        next(error);
    }
};

// export const getHotels = async (req, res, next) => {
//     const { min, max, limit, ...others } = req.query;

//     try {
//         // Simplified query without cheapestPrice condition
//         const simplifiedHotels = await Hotel.find({
//             ...others,
//         }).limit(parseInt(limit, 10));

//         console.log('Simplified MongoDB query:', simplifiedHotels?._conditions);

//         if (!simplifiedHotels || simplifiedHotels.length === 0) {
//             throw new Error('No hotels found with simplified query.');
//         }

//         // Full query with cheapestPrice condition
//         const hotels = await Hotel.find({
//             ...others,
//             cheapestPrice: { $gt: parseInt(min, 10) || 1, $lt: parseInt(max, 10) || 999 },
//         }).limit(parseInt(limit, 10));

//         console.log('Generated MongoDB query:', hotels?._conditions);

//         if (!hotels || hotels.length === 0) {
//             throw new Error('No hotels found with full query.');
//         }

//         res.status(200).json(hotels);
//     } catch (error) {
//         console.error('Error:', error);
//         next(error);
//     }
// };



export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {       

       const list = await Promise.all(cities.map(city =>{
        return Hotel.countDocuments({city:city})
       }))
       res.status(200).json(list);
      
   }catch (error) {
      next(error)

   }
}

export const countByType = async (req, res, next) => {

    try {       
    const hotelCount = await Hotel.countDocuments({type:"hotel"})
    const appartmentCount = await Hotel.countDocuments({type:"apartment"})
    const resortCount = await Hotel.countDocuments({type:"resort"})
    const villaCount = await Hotel.countDocuments({type:"villa"})
    const cabinCount = await Hotel.countDocuments({type:"cabin"})


       res.status(200).json([
        {type: "hotel" , count: hotelCount},
        {type: "apartments" , count: appartmentCount},
        {type: "resorts" , count: resortCount},
        {type: "villa" , count: villaCount},
        {type: "cabin" , count: cabinCount},
      
       ]);
      
   }catch (error) {
      next(error)

   }
}

export const getHotelRooms = async (req, res, next) =>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) =>{
                return Room.findById(room)
            })
        )
        return   res.status(200).json(list);
    } catch (err) {
        next(err)
    }
} 