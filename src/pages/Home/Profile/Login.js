import React from 'react';

import useAuth from '../../../Firebase/useAuth';


const Login = () => {



    const { googoleSighnin, toggle, handleNamechange, handleEmailchange, handleRegistration, handlePasschange, error, isLogin } = useAuth();
    return (
        <div className="back">
            <div className="text-center mt-1 ">
                <form className="form" onSubmit={handleRegistration}  >
                    <h3 className="text-primary fs-3 mb-3">Please {isLogin ? "Log in" : "Register"} </h3>
                    {
                        !isLogin && <div >

                            <label htmlFor="name" className="sr-only"  >Name:</label>

                            <input className="form-control" onBlur={handleNamechange} type="text" />

                        </div>
                    }
                    <div >

                        <label htmlFor="inputEmail3" >Email:</label>

                        <input className="form-control" onBlur={handleEmailchange} type="email" />

                    </div>
                    <br />
                    <div >

                        <label htmlFor="inputPassword3">Password:</label>

                        <input className="form-control" onBlur={handlePasschange} type="password" />
                        <div>{error}</div>

                    </div>
                    <br />

                    <button className="btn btn-dark" type="submit">{isLogin ? "Log In" : "Register"}</button>
                    <hr />
                    <br />
                    <input onChange={toggle} type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" />
                    <label className="btn btn-outline-danger fs-3 text-warning" htmlFor="btn-check-outlined">Alreay have account?</label><br></br>


                </form >
                <h1>Please login:</h1>
                <button className="btn btn-danger" onClick={googoleSighnin}>google log in</button>

            </div >
        </div >
    );
};

export default Login;