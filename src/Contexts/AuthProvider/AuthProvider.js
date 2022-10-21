import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../../firebase/firebase.init';
export const AuthContext=createContext()
const auth = getAuth(app);

 const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState({})
    const [loader,setLoader]=useState(true)

const providerLogin=(provider)=>{
    return signInWithPopup(auth,provider)
}

useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser===null || currentUser.emailVerified){
        setUser(currentUser)
      }
        setLoader(false)
    })
    return ()=>{
        unsubscribe()
    }
},[])
const Logout=()=>{
    setLoader(true)
    return signOut(auth)
}

const CreateUser=(email,password)=>{
   setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const SignIn=(email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const updateUserProfile=(profile)=>{

    return updateProfile(auth.currentUser,profile)
}

const verifyEmail=()=>{
    return sendEmailVerification(auth.currentUser)
}

  
    const authInfo={user,providerLogin,Logout,CreateUser,SignIn,loader,setLoader,updateUserProfile,verifyEmail}
    return (
       
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;