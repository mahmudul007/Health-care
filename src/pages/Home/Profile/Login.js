import React from 'react';

import useAuth from '../../../Firebase/useAuth';

const Login = () => {



    const { googoleSighnin, toggle, handleNamechange, handleEmailchange, handleRegistration, handlePasschange, error, isLogin } = useAuth();
    return (
        <div>
            <form onSubmit={handleRegistration}  >
                <h3 className="text-primary">Please {isLogin ? "Log in" : "Register"} </h3>
                {
                    !isLogin && <div >

                        <label  >Name:</label>

                        <input onBlur={handleNamechange} type="text" />

                    </div>
                }
                <div >

                    <label htmlFor="inputEmail3" >Email:</label>

                    <input onBlur={handleEmailchange} type="email" />

                </div>
                <br />
                <div >

                    <label htmlFor="inputPassword3">Password:</label>

                    <input onBlur={handlePasschange} type="password" />
                    <div>{error}</div>

                </div>

                <button className="btn btn-dark" type="submit">{isLogin ? "Log In" : "Register"}</button>
                <hr />
                <input onChange={toggle} type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Alreay have account?</label><br></br>


            </form >
            <h1>Please login:</h1>
            <button className="btn btn-success" onClick={googoleSighnin}>google log in</button>
        </div >
    );
};

export default Login;