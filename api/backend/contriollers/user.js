import User from '../models/User.js';

export const updateUser = async (req, res, next)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser);
    }  catch (error) {
       next(error)
    }
}
export const deleteUser = async (req, res, next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("HOTEL IS edited work can updated  ever");
       
    } catch (error) {
       next(error)
    }
}
export const getUser = async (req, res, next)=>{

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
       
    } catch (error) {
       next(error)
    }
}
export const getUsers = async (req, res, next)=>{
     try {
        const users = await User.find({});
        res.status(200).json(users);
       
    }catch (error) {
       next(error)
    }
}