
import { useState } from "react";
import { FaRegMoneyBillAlt, FaStar } from "react-icons/fa";
import { Link} from "react-router-dom";
import SingleToyDetails from "../singleToyDetails/SingleToyDetails";


const TabCard = ({ toy }) => {
  const {_id, name, image, rating, price } = toy;
const [modal, setModal] = useState(false)
  
  return (
    <div>
      <div className="flex">
      <div className="mx-auto my-6 shadow-xl card card-compact w-[96%] bg-base-100">
        <figure>
          <img
          className="h-72 w-max"
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-gray-700 card-title">{name}</h2>
          <p className="flex items-center text-xl"><span className="font-semibold">price:</span>  {price}    <FaRegMoneyBillAlt></FaRegMoneyBillAlt> </p>
          <p className="flex items-center text-xl"> <span className="font-semibold">rating:</span>  {rating} <FaStar></FaStar></p>
          <div className="justify-end card-actions">
      <Link to={`singletoy/${_id}`}>
      <button  onClick={()=> setModal(true)} className="btn btn-outline">View Details</button>
      </Link>

    
          </div>
      
        </div>
      </div>
    </div>
    {
          modal && 
          
          <SingleToyDetails id={_id}></SingleToyDetails>
       
        }
    </div>
  );
};

export default TabCard;
