import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Agent from '../models/agentModel.js';
// import { isAuth, isAdmin } from '../utils.js';

const agentRouter = express.Router();

// agentRouter.get('/', async (req, res) => {
//   const agents = await agents.find();
//   res.send(agents);
// });

agentRouter.post(
  '/',
  
  expressAsyncHandler(async (req, res) => {
    console.log("welcome")
    const newAgent = new Agent({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phoneNumber,
      gender: req.body.gender,
      age: req.body.age,
      location: req.body.location,
      image_location:req.body.image_location,
      description:req.body.description
      
    });
    const agent = await newAgent.save();
    res.send({ message: 'Agent Created', agent });
  })
);
export default agentRouter;
