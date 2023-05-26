import { Link} from "react-router-dom";
import img from '../../../public/signup.avif'
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGooglePlusG } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import UseTitle from "../title/UseTitle";

const SignUp = () => {
    const [error, setError] = useState(null)
    const {signUp, updateUser, googleSignup} = useContext(AuthContext)
    UseTitle('R-T|Signup')
    const handleSignup = event =>{

        event.preventDefault()
        const form = event.target;
        const name=  form.name.value
        const email=  form.email.value
        const password=  form.password.value
        const confirm=  form.confirm.value
        const URL=  form.URL.value

        console.log(name, email, password, URL);

         

        if(password !== confirm){
            setError("your password did not matched with confirm password")
        }
        else{
                        // creating user
        signUp(email, password)
        .then(result =>{
            const user = result.user;
            if(user){
                Swal.fire('sign up successfull')
            }
            updateUser(name, URL)
            form.reset()
            window.location.href = '/';
            console.log(user);
        })
        .catch(error => {
            console.log(error)
            setError("oops! invalid email or password , try again")
        })
        }
    }

       // google signup
   const handleGoogleSignup = ()=>{
    const provider = new GoogleAuthProvider()
    googleSignup(provider)
    .then(result =>{
        const user = result.user;
        if(user){
            Swal.fire('sign up successfull')
        }
        console.log(result.user);
    })
    .catch(error=>{
        console.log(error);
    })
   }



  return (
    <div data-aos="zoom-in-up">
      <div className="min-h-screen hero bg-base-200 my-36">
  <div className="flex-col md:gap-36 hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img className="h-[550px] rounded-xl" src={img} alt="" />
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
    <form onSubmit={handleSignup} >

    <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">your Name</span>
          </label>
          <input type="text" name="name" placeholder="your name please" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="your email please" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">password</span>
          </label>
          <input type="password" name="password" placeholder="password" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input type="password" name="confirm" placeholder="confirm password" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="URL" placeholder="photo Url please!" className="input input-bordered" />
          <label className="label">
            <p>already  have an account? <Link to='/login' className="text-amber-600">Login</Link> </p>
          </label>
        </div>
        <div className="mt-6 form-control">
        {
                error? <p  className='font-bold text-center text-red-500'>{error}</p>:""
            }
         <input type="submit" className="btn btn-outline" value="sign up" />
        </div>
        <div className='text-center'>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignup} className=" btn btn-circle btn-outline">
        <FaGooglePlusG className='text-lg '></FaGooglePlusG>
</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default SignUp;
