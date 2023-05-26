import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!user && !loading) {
      setShowAlert(true);
    }
  }, [user, loading]);

  const handleConfirm = () => {
    setShowAlert(false);
    navigateToLogin();
  };

  const handleCancel = () => {
    setShowAlert(false);
  };

  const navigateToLogin = () => {
    return <Navigate state={{ from: location }} to="/login" replace />;
  };

  if (loading) {
    return <div className="flex justify-center"><progress className="w-56 text-center progress"></progress></div>;
  }

  if (user) {
    return children;
  } else {
    if (showAlert) {
      Swal.fire({
        title: "You are not logged in",
        text: "Please log in to proceed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          handleConfirm();
        } else {
          handleCancel();
        }
      });
    }

    return <Navigate state={{ from: location }} to="/login" replace />;
  }
};

export default PrivateRoute;






// import { useContext } from "react";
// import { AuthContext } from "../components/provider/AuthProvider";
// // import Swal from 'sweetalert2';
// import { Navigate, useLocation } from "react-router-dom";


// const PrivateRoute = ({children}) => {
//     const {user, loading} = useContext(AuthContext)
//     const location = useLocation()


//     if(loading){
//         return <progress className="w-56 text-center progress"></progress>
//     }
    
//     if(user){
        
            
//         return children
//         }
//     else{
          
//         return   <Navigate state={{from: location}} to='/login' replace></Navigate>
//         }
// };

// export default PrivateRoute;


// // return     <Navigate state={{from: location}} to='/login' replace></Navigate>