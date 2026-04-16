import React, { useContext, useState } from 'react'

import { useForm } from 'react-hook-form';

import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';


function Auth() {

  const [mode, setMode] = useState("signup");

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  //usecontext se laya
  const {signUp, user, logout, login} = useContext(AuthContext)

  //form validation ke liye
  const {register, handleSubmit, formState: {errors}} = useForm();

  function onSubmit(data){
    //to reset
    setErr(null)
    let result;
    alert(`submitted ${data.email} and ${data.pass}`);


    if(mode === "signup"){
      result = signUp(data.email, data.pass);

    }else{
      result = login(data.email, data.pass);
    }

    if(result.success){
      navigate("/");
    }else{
      setErr(result.error)
    }

    console.log(result);


  }


  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user ? (
            <>
              <p>User logged in : {user.email}</p>
              <button className="btn btn-red" onClick={()=>logout()}>
                Logout
              </button>
            </>
          ) : (
            <p>not logged in</p>
          )}

          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          {err && <div className='auth-error'>{err}</div>}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email :
                <input
                  type="email"
                  placeholder="enter your email..."
                  id="email"
                  className="form-input"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </label>
            </div>
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}

            <div className="form-group">
              <label htmlFor="pass" className="form-label">
                Password :
                <input
                  type="password"
                  placeholder="enter your password..."
                  id="pass"
                  className="form-input"
                  {...register("pass", {
                    required: "password is required",
                    minLength: {
                      value: 4,
                      message: "Password must be atleast 4 char",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be atmost 12 char",
                    },
                  })}
                />
              </label>
            </div>
            {errors.pass && <p className="form-error">{errors.pass.message}</p>}

            {mode === "signup" ? (
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            ) : (
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            )}
          </form>

          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account?{" "}
                <span className="auth-link" onClick={() => setMode("login")}>
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span className="auth-link" onClick={() => setMode("signup")}>
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth
