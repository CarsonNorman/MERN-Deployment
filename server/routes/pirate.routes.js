import { createPirate, updatePirate, deletePirate, getAllPirates, getOnePirate } from "../controllers/pirate.controller.js";
import express from 'express'

export const pirateRouter = express.Router()

pirateRouter
  .route('/')
  .post(createPirate)
  .get(getAllPirates)
  
pirateRouter
  .route('/:id')
  .delete(deletePirate)
  .put(updatePirate)
  .get(getOnePirate)

  export default pirateRouter