// import { useEffect, useState } from "react";



// import { useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SingleToyDetails = () => {
  const toy = useLoaderData();
  const {user} = useContext(AuthContext)
  
//   console.log(details);
  const {name, image,details} = toy || {}
  
 
  if(!user?.email){
    <div className="flex justify-center"><progress className="w-56 progress"></progress></div>
  }
  


  return <>
       

  <div className="flex items-center justify-center my-36" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <div className="w-3/4 shadow-xl card bg-base-200">
  <div className="card-body">
    <h2 className="text-3xl card-title">{name}</h2>
    <p><span className="font-bold">description: </span> {details?.description}</p>
    <p><span className="font-bold">age range: </span>{details?.age_range}</p>
    <p><span className="font-bold">manufacturer: </span>{details?.manufacturer}</p>
    <p><span className="font-bold">material: </span>{details?.material}</p>
    <p><span className="font-bold">weight: </span>{details?.weight}</p>
    <p> <span className="font-bold">features: </span> 
        {details?.features.map((detail, index) => (
          <span key={index}>{detail} ,</span>
        ))}
      </p>
  </div>
  <figure><img className="w-[500px]" src={image} alt="Shoes" /></figure>
</div>

  </div>


  </>;
};

export default SingleToyDetails;
