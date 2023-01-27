import Pirate from "../model/pirate.model.js";

export const getAllPirates = (req, res) => {
  Pirate.find()
    .then((response) => res.status(200).json({ Pirates: response }))
    .catch(err => res.status(400).json({ error: err }))
}
export const getOnePirate = (req, res) => {
  Pirate.findById(req.params.id)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(400).json({ error: err }))
}
export const createPirate = (req, res) => {
  Pirate.create(req.body)
    .then(response => res.status(201).json(response))
    .catch(err => res.status(400).json({ error: err }))
}
export const deletePirate = (req, res) => {
  Pirate.findByIdAndRemove(req.params.id)
    .then(response => { res.status(200).json(response) })
    .catch(err => res.status(400).json({ error: err }))
}
export const updatePirate = (req, res) => {
  Pirate.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(response => res.status(200).json({response: response}))
    .catch(err => res.status(400).json({ error: err }))
}


export default { getAllPirates, getOnePirate, createPirate, deletePirate, updatePirate }