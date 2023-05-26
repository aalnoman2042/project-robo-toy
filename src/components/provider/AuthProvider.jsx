import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser]  = useState(null)
    const [loading, setLoading]  = useState(true)

   
    

    const auth = getAuth(app);

    // create new user
    const signUp = (email, password) =>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth , email, password)
    }
    // sign in exixting user
    const Login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // set user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
            console.log('current user', currentUser);
        } )
        return () =>{

         return  unsubscribe()
        }
    })
    // Logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // update user data
    const updateUser = (name, URL) =>{
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: URL
        })
    }
    // google login/ sigup
    const googleSignup = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
    signUp,
     Login,
     user, 
     loading,
     logOut,
     updateUser,
     googleSignup

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {
            children
        }
       </AuthContext.Provider>
    );
};

export default AuthProvider;