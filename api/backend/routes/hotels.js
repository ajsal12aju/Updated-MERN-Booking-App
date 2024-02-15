import express from "express";
import { countByType ,countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel, getHotelRooms } from "../contriollers/hotel.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post('/',verifyAdmin, createHotel);
router.put('/:id',verifyAdmin, updateHotel);
router.delete('/:id',verifyAdmin, deleteHotel);
router.get('/find/:id', getHotel);
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms)

export default router;
