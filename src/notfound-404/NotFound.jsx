import { Link } from 'react-router-dom';
import img from '../../public/notFound.jpg'
const NotFound = () => {
    return (
       <>
        <div className='flex justify-center items-center'>
            <img src={img} alt="" />
            
        </div>
          <div className='text-center'>
          <Link to='/'><button className="btn btn-outline">Go to Home</button></Link>
          </div>
       </>
    );
};

export default NotFound;