import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import UseTitle from "../title/UseTitle";
import Swal from "sweetalert2";
// import { useState } from "react";
// import UpdateToy from "../updateToy/UpdateToy";

// import React from "react";
// import UpdateModal from "../updatemodal/UpdateModal";
// import Swal from "sweetalert2";

const MyToysRow = ({ toy, handleDelete }) => {
  const { _id, name, price, subcategory, rating } = toy;
  // const [updateId , setUpdateId] = useState('')
// console.log(subcategory);
  UseTitle("R-T|my-toys");

  const handleUpdateToy = event =>{
        
    event.preventDefault()
    const form = event.target;
    const toyName = form.toy.value;
    const sellerEmail = form.selleremail.value
    const sellerName= form.sellername.value
    const URL= form.URL.value
    const details= form.details.value
    const price= form.price.value
    const quantity= form.quantity.value
    const category= form.category.value
    const rating= form.rating.value
    const data ={
        rating:rating,
        image : URL,
        name: toyName,
        price:price,
        quantity : quantity,
        subcategory : category,
        seller_name : sellerName,
        seller_email : sellerEmail,
        details: details
    }
console.log(_id);
   
fetch(`https://robo-kit-toy-server-aalnoman2042.vercel.app/update/${_id}`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data })
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.modifiedCount > 0) {
      Swal.fire("Toy updated successfully");
    }
  })
  .catch(error => {
    console.error(error);
    // Handle error if the update fails
  });
  
      
    
}

  return (
    <Table.Row className="bg-white hover:text-white hover:bg-gray-500 mr-11">
      <Table.Cell className="text-xl font-semibold whitespace-nowrap ">
        {name}
      </Table.Cell>
      <Table.Cell>${price}</Table.Cell>
      <Table.Cell>{subcategory}</Table.Cell>
      <Table.Cell>{rating}</Table.Cell>
      <Table.Cell className="flex items-center justify-center">
        {/* <Link > */}
        {/* to={`/updatetoy/`} */}
        {/* <button  className="btn btn-outline">Update</button> */}

        <label htmlFor={`my-modal-${_id}`}  className="btn btn-outline">
          update
        </label>

        <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
        <div className="modal ">
          
          <div className="flex items-center mx-auto  my-40 shadow-2xl w-[90%] h-[90%] md:w-4/5 card bg-base-100 ">
          <label htmlFor={`my-modal-${_id}`} className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
            <h2 className="text-5xl font-bold text-center text-black mt-7">
              Update Your Your Toy
            </h2>
            <div className="mx-auto modal-box md:w-11/12 md:py-36 modal-middle">
              <form onSubmit={handleUpdateToy}>
                <div className="gap-6 md:flex">
                  <div className="form-control">
                    <label className="label">
                      <span className="font-bold label-text">Toy Name</span>
                    </label>
                    <input
                      type="text"
                      name="toy"
                      placeholder="your Toy Name"
                      required
                      className="input text-black md:w-[500px] input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="font-bold label-text">seller Email</span>
                    </label>
                    <input
                      type="email"
                      name="selleremail"
                      placeholder="your email please"
                      required
                      className="input md:w-[500px] text-black input-bordered"
                    />
                  </div>
                </div>
                <div className="gap-6 md:flex">
                  <div className="form-control">
                    <label className="label">
                      <span className="font-bold label-text">seller Name</span>
                    </label>
                    <input
                      type="text"
                      name="sellername"
                      placeholder="password"
                      required
                      className="input md:w-[500px] text-black input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="font-bold label-text">sub-category</span>
                    </label>
                    <input
                      type="text"
                      name="category"
                      placeholder="category"
                      required
                      className="input md:w-[500px] text-black input-bordered"
                    />
                  </div>
                </div>
                <div className="gap-6 md:flex">
                  <div className="form-control">
                    <label className="label">
                      <span className="font-bold label-text">
                        Toy image URl
                      </span>
                    </label>
                    <input
                      type="text"
                      name="URL"
                      placeholder="photo Url please!"
                      className="input md:w-[500px] text-black input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="font-bold label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      placeholder="Toy price"
                      className="input md:w-[500px] text-black input-bordered"
                    />
                  </div>
                </div>
                <div className="gap-6 md:flex">
                  <div className="form-control">
                    <label className="label">
                      <span className="font-bold label-text">Rating</span>
                    </label>
                    <input
                      type="text"
                      name="rating"
                      placeholder="ratings"
                      className="input md:w-[500px] text-black input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="font-bold label-text">
                        Avilable quantity
                      </span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="Avilable quantity please!"
                      className="input md:w-[500px] text-black input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-bold label-text">
                      Details description
                    </span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    placeholder="toy details please!!"
                    required
                    className="w-full h-20 input input-bordered"
                  />
                </div>
                <div className="mt-6 form-control">
                  <input
                    type="submit"
                    className="btn btn-outline"
                    value="update toy"
                    htmlFor="my-modal-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* </Link> */}
      </Table.Cell>
      <Table.Cell>
        <Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-outline">
            delete
          </button>
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};

export default MyToysRow;
