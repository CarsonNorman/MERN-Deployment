import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewOne() {
  const { id } = useParams()
  const [pirate, setPirate] = useState({})
  const navigate = useNavigate()


  useEffect(() => {
    const controller = new AbortController;
    axios.get(`http://localhost:8000/api/${id}`, { signal: controller.signal })
      .then(res => setPirate(res.data))
      .catch(err => console.log(err))
    return () => controller.abort()
  }, [])
  const handlePegLeg = (bool) => {
    //this happens asynchronously to axios call
    setPirate({
      ...pirate,
      pegLeg : !bool
    })
    //because hooks are async this code runs before state finished updating meaning I have to pass up the exact object I want
      const controller = new AbortController;
      axios
        .put(`http://localhost:8000/api/${id}`, {...pirate, pegLeg : !bool}, { signal: controller.signal })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
      return () => controller.abort()
  }
  const handleEyePatch = (bool) => {
    //this happens asynchronously to axios call

    setPirate({
      ...pirate,
      eyePatch : !bool
    })
    const controller = new AbortController;
    //because hooks are async this code runs before state finished updating meaning I have to pass up the exact object I want

    axios
      .put(`http://localhost:8000/api/${id}`, {...pirate, eyePatch: !bool}, {signal: controller.signal})
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    return () => controller.abort()
  }
  const handleHook = (bool) => {
    //this happens asynchronously to axios call

    setPirate({
      ...pirate,
      hook : !bool
    })
    const controller = new AbortController;
    //because hooks are async this code runs before state finished updating meaning I have to pass up the exact object I want

    axios
      .put(`http://localhost:8000/api/${id}`, {...pirate, hook: !bool}, { signal: controller.signal })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    return () => controller.abort()
  }
  return (
    pirate &&
    <div>
      <div id='banner' className="d-flex align-items-center justify-content-around">
        <h2>{pirate.name}</h2>
        <button className="btn btn-info"  onClick={() => navigate('/')}>Home</button>
      </div>
      <div id='body' className="card d-flex flex-row justify-content-around w-50 mx-auto">
        <div id="flavor" className=" d-flex flex-column align-items-center">
          <img className="rounded mb-3" src={pirate.image} alt="Pirate img" />
          <h2>"{pirate.phrase}"</h2>
        </div>
        <div id="info">
          <h3>About</h3>
          <p>Position: {pirate.position}</p>
          <p>Treasure chests: {pirate.chests}</p>
          <p>Peg Leg:
            {pirate.pegLeg ? ' yes ' : ' no '}
            <button className="mx-3 btn btn-warning" onClick={() => handlePegLeg(pirate.pegLeg)}>{pirate.pegLeg ? 'Remove' : 'Add'}</button>
          </p>
          <p>Eye Patch: {pirate.eyePatch ? ' yes ' : ' no '}
            <button className="mx-3 btn btn-warning" onClick={() => handleEyePatch(pirate.eyePatch)}>{pirate.eyePatch ? 'Remove' : 'Add'}</button>
          </p>
          <p>Hook Hand: {pirate.hook ? 'yes' : 'no'}
            <button className="mx-3 btn btn-warning" onClick={() => handleHook(pirate.hook)}>{pirate.hook ? 'Remove' : 'Add'}</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewOne;