import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [form, setForm] = useState({
    position: "Captain",
    pegLeg: true,
    eyePatch: true,
    hook: true
  })
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleCheck = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  }
  const handleSubmit = (e) => {
    setErrors({})
    const controller = new AbortController;
    e.preventDefault()
    axios
      .post('http://localhost:8000/api/', form, { signal: controller.signal })
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => {
        console.log(err.response.data.error.errors)
        setErrors(err.response.data.error.errors)
      })
    return () => controller.abort()

  }
  return (
    <div>
      <div id="banner" className="d-flex align-items-center justify-content-around">
        <h1>New Pirate</h1>
        <button className="btn btn-info" onClick={() => navigate('/')}>Crew Board</button>
      </div>
      <form onSubmit={handleSubmit}  className="card w-75 mx-auto py-3">
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column justify-content-around">
            <div>
              <label htmlFor="name">Pirates Name</label>
              <input className="form-control" type="text" name="name" id="name" onChange={handleChange} minLength='3' required />
              {errors?.name &&
                <p>{errors.name.message}</p>
              }
            </div>
            <div>
              <label htmlFor="image">Pirate Image Url</label>
              <input className="form-control" type="text" name="image" id="image" onChange={handleChange} required />
              {errors?.image &&
                <p>{errors.image.message}</p>
              }
            </div>
            <div>
              <label htmlFor="chests">Treasure Chests</label>
              <input className="form-control" type="number" name="chests" id="chests" onChange={handleChange} min='0' required />
              {errors?.chests &&
                <p>{errors.chests.message}</p>
              }
            </div>
            <div>
              <label htmlFor="phrase">Pirate Phrase</label>
              <input className="form-control" type="text" name="phrase" id="phrase" onChange={handleChange} required />
              {errors?.phrase &&
                <p>{errors.phrase.message}</p>
              }
            </div>
          </div>
          <div className="d-flex flex-column justify-content-around" >
            <div>
              <label htmlFor="position" >Crew Position :</label>
              <select  name="position" id="position" onChange={handleChange} required>
                <option value="Captain">Captain</option>
                <option value="First Mate">First Mate</option>
                <option value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
              </select>
              {errors?.position &&
                <p>{errors.position.message}</p>
              }
            </div>
            <div className="d-flex flex-column justify-content-around">
              <div className="d-flex justify-content-between w-50 mx-auto">
                <label htmlFor="pegLeg">Peg Leg?</label>
                <input type="checkbox" name="pegLeg" id="pegLeg" onChange={handleCheck} defaultChecked />
              </div>
              <div className="d-flex justify-content-between w-50 mx-auto">
                <label htmlFor="eyePatch">Eye Patch? </label>
                <input type="checkbox" name="eyePatch" id="eyePatch" onChange={handleCheck} defaultChecked />
              </div>
              <div className="d-flex justify-content-between w-50 mx-auto">
                <label htmlFor="hook">Hook Hand?</label>
                <input type="checkbox" name="hook" id="hook" onChange={handleCheck} defaultChecked />
              </div>
            </div>
            <button className="btn btn-success" type="submit">Create Pirate</button>
            
          </div>
        </div>
      </form>

    </div>
  );
}

export default Create;