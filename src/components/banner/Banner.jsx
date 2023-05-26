import { Link } from "react-router-dom";

const Banner = () => {

   
    return (

<div data-aos="fade-down-left" className="">
  
<div className="min-h-screen rounded-lg  h-[600px] md:w-[90%] md:mx-auto my-36 hero" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/robot-robot-are-sitting-table_782419-9769.jpg?w=900")` }}>
  <div className="bg-opacity-50 hero-overlay"></div>
  <div className="text-center text-white hero-content">
    <div className="max-w-md">
      <h1 className="mb-5 font-bold text-7xl">Best Robotics-Toy</h1>
      <p className="mb-5">Some robotics toys are designed for group play, fostering collaboration and teamwork. Children can work together to solve challenges, share ideas, and divide tasks, promoting social skills, communication, and cooperation.</p>
      <Link to='/login'><button className="text-white btn btn-outline btn-lg btn-wide">Get Started</button></Link>
    </div>
  </div>
</div>
</div>

    );
};

export default Banner;




