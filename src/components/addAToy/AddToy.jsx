import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import UseTitle from "../title/UseTitle";

const AddToy = () => {
    const {user} = useContext(AuthContext)
    UseTitle('R-T|Add-toy')

    const handleAddToy = event =>{
        
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
            console.log(data);
            // sendind toy to DB
            fetch('https://robo-kit-toy-server-aalnoman2042.vercel.app/addedtoy',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire('Toy added successfully')
                    form.reset()
                }
            })
            
    }


    
    return (
        <div>
              <div className="flex items-center w-11/12 mx-auto my-40 shadow-2xl md:w-4/5 card bg-base-100 ">
                

    <h2 className="text-5xl font-bold text-center">Please Add Your Toy</h2>
    <div className="w-11/12 py-36">
    <form onSubmit={handleAddToy}>
       <div className="gap-6 md:flex">
       <div className="form-control">
          <label className="label">
            <span className="font-bold label-text">Toy Name</span>
          </label>
          <input type="text" name="toy" placeholder="your Toy Name" required className="input md:w-[500px] input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-bold label-text">seller Email</span>
          </label>
          <input type="email" name="selleremail" placeholder="your email please" defaultValue={user?.email} required className="input md:w-[500px] input-bordered" />
        </div>
       </div>
    <div className="gap-6 md:flex">
    <div className="form-control">
          <label className="label">
            <span className="font-bold label-text">seller Name</span>
          </label>
          <input type="text" name="sellername" defaultValue={user?.displayName} placeholder="password" required className="input md:w-[500px] input-bordered" />
        </div>
    <div className="form-control">
          <label className="label">
            <span className="font-bold label-text">sub-category</span>
          </label>
          <input type="text" name="category"  placeholder="category" required className="input md:w-[500px] input-bordered" />
        </div>
     
    </div>
       <div className="gap-6 md:flex">
       <div className="form-control">
          <label className="label">
            <span className="font-bold label-text">Toy image URl</span>
          </label>
          <input type="text" name="URL" placeholder="photo Url please!" className="input md:w-[500px] input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-bold label-text">Price</span>
          </label>
          <input type="text" name="price" placeholder="Toy price" className="input md:w-[500px] input-bordered" />
          
        </div>
       </div>
      <div className="gap-6 md:flex">
      <div className="form-control">
          <label className="label">
            <span className="font-bold label-text">Rating</span>
          </label>
          <input type="text" name="rating" placeholder="ratings" className="input md:w-[500px] input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-bold label-text">Avilable quantity</span>
          </label>
          <input type="text" name="quantity" placeholder="Avilable quantity please!" className="input md:w-[500px] input-bordered" />
          
        </div>
      </div>
      <div className="form-control">
          <label className="label">
            <span className="font-bold label-text">Details description</span>
          </label>
          <input type="text" name="details" placeholder="toy details please!!" required className="w-full h-20 input input-bordered" />
        </div>
        <div className="mt-6 form-control">
      
         <input type="submit" className="btn btn-outline" value="Add toy" />
        </div>
   
    </form>
      </div>
    </div>
        </div>
    );
};

export default AddToy;