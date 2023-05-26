import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Feedback = () => {
    const {user} = useContext(AuthContext)
    return (
        <div data-aos="zoom-in-down">
        <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-cyan-700" >Send Us Your Valuable <span className="text-7xl">FeedBack</span></h1>
      <p className="py-6">Share with us about service your most important feedback help us to serve better sir/madam</p>
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <textarea className="textarea textarea-info h-[200px]" placeholder="Fedback"></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered" />
         
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-outline">Send Email</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Feedback;