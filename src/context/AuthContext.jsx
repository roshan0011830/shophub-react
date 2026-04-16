import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null);


export default function AuthProvider({children}){

  const [user, setUser] = useState(localStorage.getItem("currentUserEmail") ? {email : localStorage.getItem("currentUserEmail")}: null
);

  function signUp(email, password){
    // const users = [];
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === email)) {
      return { success: false, error: "Email already exists" };
    }

    const newUser = {email, password};

    users.push(newUser);

    //local storage mai save 
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("currentUserEmail",JSON.stringify(email));

    //user ko logged in karwado
    setUser({email})

    return {success: true}

  }


  function login(email, password){
    const users = JSON.parse(localStorage.getItem("users") || []);
    // console.log(users)
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if(!user){
      console.log("invalid email and password")
      return {success: false, error: "Invalid Email or Password"}
    }

    localStorage.setItem("currentUserEmail", email);
    setUser({email});

    return {success: true, error: null};

  }


  function logout(){
    localStorage.removeItem("currentUserEmail")
    setUser(null);
  }



  return <AuthContext.Provider value={{signUp, user, logout, login}}>{children}</AuthContext.Provider>;
}