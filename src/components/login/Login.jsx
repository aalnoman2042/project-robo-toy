import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../public/login.avif'
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGooglePlusG } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import UseTitle from '../title/UseTitle';

const Login = () => {
    const {Login, googleSignup} = useContext(AuthContext)
    const [error, setError] = useState(null)
    UseTitle('R-T|login')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    
    const handleLogin = event =>{
        
        event.preventDefault()
        const form = event.target;
        
        const email=  form.email.value
        const password=  form.password.value
      

        console.log(email, password);
// email pass login
        Login(email, password)
        .then(result =>{
            const user = result.user
            if(user){
                Swal.fire('Login successfull')
            }
            form.reset()
            navigate(from)
            
            console.log(user);
        })
        .catch(error => {
            console.log(error)
            setError(true)
        })


    }
     // google login
     const handleGoogleLogin = ()=>{
        const provider = new GoogleAuthProvider()
        googleSignup(provider)
        .then(result =>{
            const user = result.user
            if(user){
                Swal.fire('Login successfull')
            }
            navigate(from)
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
       }





    return (
        <div>
            <div data-aos="zoom-in-up">
      <div  className="min-h-screen hero bg-base-200 my-36">
  <div className="flex-col md:gap-36 hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img className="h-[550px] rounded-xl" src={img} alt="" />
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
    <form onSubmit={handleLogin} >

    <div className="card-body">
      
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
          <input type="password" name="password" placeholder="email" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <p>New to robo-Toy? <Link to='/signup' className="text-amber-600">signup</Link> </p>
          </label>
        </div>
        <div className="mt-6 form-control">
            {
                error? <p  className='font-bold text-center text-red-500'>oops! email or password is wrong , try again</p>:""
            }
         <input type="submit" className="btn btn-outline" value="Login" />
        </div>
        <div className='text-center'>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className=" btn btn-circle btn-outline">
        <FaGooglePlusG className='text-lg '></FaGooglePlusG>
</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>
    </div>
        </div>
    );
};

export default Login;