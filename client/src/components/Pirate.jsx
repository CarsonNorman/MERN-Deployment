import { useNavigate } from "react-router-dom";

function Pirate(props) {

    const { image, name, _id } = props.data
    const navigate = useNavigate()

    return ( 
        <div className="card d-flex flex-row h-25 w-50 justify-content-around mx-auto my-5 ">
            <img className="h-75 rounded" src={image} alt="Pirate img" />
            <div className="d-flex flex-column justify-content-around w-50 align-items-center">
                <h3>{name}</h3>
                <div className="d-flex justify-content-around w-100">
                    <button className="btn btn-danger" onClick={() => props.handleDelete(_id)}>Walk the Plank</button>
                    <button className="btn btn-warning " onClick={() => navigate(`/${_id}`)}>View Pirate</button>

                </div>
            </div>
        </div>
     );
}

export default Pirate;