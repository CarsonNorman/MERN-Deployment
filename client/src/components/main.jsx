import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import Pirate from './Pirate'
import { useNavigate } from "react-router-dom";

function Main() {
  const [crew, setCrew] = useState([])
  const [flag, setFlag] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const controller = new AbortController;
    axios
      .get('http://localhost:8000/api', {signal: controller.signal})
      .then(res => setCrew(res.data.Pirates))
      .catch(err => console.log(err))

    return () => controller.abort()
  }, [flag])

  const handleFlag = () =>{
    setFlag(!flag)
  }
  const handleDelete = (id) =>{
    const controller = new AbortController;
    axios
      .delete(`http://localhost:8000/api/${id}`, {signal: controller.signal})
      .then(res =>{
        console.log(res)
        handleFlag()
      })
      .catch(err => console.log(err))
    return () => controller.abort()
  }
  const sortedList = crew.sort((a, b) =>
  a.name.localeCompare(b.name));
  return (
    <div>
      <div id='banner' className="d-flex align-items-center justify-content-around">
        <h1>Pirate Crew</h1>
      <button className="btn btn-info float-right h-50" onClick={() => navigate('/create')}>New Pirate</button>
      </div>
      {crew &&
        sortedList.map((mem, idx) => {
          return (
          <Pirate key={idx} data={mem} handleFlag={handleFlag} handleDelete={handleDelete} />
        )})
      }
    </div>
  );
}

export default Main;