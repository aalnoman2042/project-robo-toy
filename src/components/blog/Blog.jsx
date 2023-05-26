import UseTitle from "../title/UseTitle";

const Blog = () => {
  UseTitle('R-T|Blog')
    return (
       <div className="w-[90%] mx-auto my-36"  data-aos="fade-right"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine">
         <div tabIndex={0} className="border collapse collapse-arrow border-base-300 bg-base-100 rounded-box">
  <div className="text-xl font-medium collapse-title">
  What is an access token and refresh token? How do they work and where should we store them on the client-side?
  </div>
  <div className="collapse-content">
    <p>access token is a proccess to know that user is authorized, and refresh token is mthod to get new token after token expire, token is better to store in HTTP-ONLY cookie  </p>
  </div>
</div>
<div tabIndex={0} className="border collapse collapse-arrow border-base-300 bg-base-100 rounded-box">
  <div className="text-xl font-medium collapse-title">
  Compare SQL and NoSQL databases?
  </div>
  <div className="text-center collapse-content">
    <p>SQL=Structured Query Language, NoSQL=Not Only SQL <br />
    sql is relation database and its popular database is like My SQL, ORACAL, <br />
    no SQL is document type database like MONGO-DB
     </p>
  </div>
</div>
<div tabIndex={0} className="border collapse collapse-arrow border-base-300 bg-base-100 rounded-box">
  <div className="text-xl font-medium collapse-title">
  What is express js? What is Nest JS /
  </div>
  <div className="collapse-content">
    <p>Express.js is a popular web application framework for Node.js.Express.js simplifies the process of handling HTTP requests, routing, middleware integration</p>
  </div>
</div>
<div tabIndex={0} className="border collapse collapse-arrow border-base-300 bg-base-100 rounded-box">
  <div className="text-xl font-medium collapse-title">
  What is MongoDB aggregate and how does it work?
  </div>
  <div className="collapse-content">
    <p>aggregate framework takes a set of input documents and proccess them, each stage in the aggregate perform a specific operation</p>
  </div>
</div>
       </div>


    );
};

export default Blog;