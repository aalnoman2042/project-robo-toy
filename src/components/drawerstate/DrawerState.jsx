import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from "react";

const DrawerState = () => {
  AOS.init();
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <div className="drawer drawer-end ">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="flex justify-center drawer-content h-[650px] md:h-[500px]">
    
    {/* <!-- Page content here --> */}
    <div className="hero bg-base-300 ">
  <div className="flex-col hero-content h-[500px] lg:flex-row-reverse"  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
    <img src="https://img.freepik.com/free-vector/children-fixing-robot-together-room-scene_1308-78126.jpg?w=826&t=st=1684509755~exp=1684510355~hmac=a57a8569a887fded1b57817bbea07a230f55eeec41d21e94fdf0e9fb1f4252a9" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">We Make Your Favourite Toy !!!</h1>
      <p className="py-6">Robotics toys often encourage open-ended play, enabling children to use their imagination and creativity to build, customize, and modify robots. This process of designing and creating robots can inspire innovative thinking and provide a platform for self-expression.</p>
      <label  htmlFor="my-drawer-4" className="flex justify-center drawer-button btn btn-outline btn-lg btn-wide"> see our activity    <FaAngleDoubleRight></FaAngleDoubleRight> </label>
    </div>
  </div>
</div>
    {/* slider */}
  </div> 
  <div className="drawer-side md:h-[500px] h-[650px] ">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    {/*  */}
    <div className="shadow stats stats-vertical">
  
  <div className="stat">
    <div className="stat-title">Sells</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Profite</div>
    <div className="stat-value">$4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
  </div>
</div>
        </div>
    );
};

export default DrawerState;