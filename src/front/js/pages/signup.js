import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

export const Register = () => {
    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        actions
            .createUser(email, password)
            .then(data => history.push("/"))

    };


    return (
        // <div className="container d-flex justify-content-center">
        //     <div className="card w-50">
        //         <div className="card-body">
        //             <form className="loginForm" onSubmit={handleSubmit}>
        //                 <h5 className="card-title">Register</h5>
        //                 <div className="card-text">
        //                     <div className="input-group mb-3">
        //                         <span className="input-group-text" id="basic-addon1">Email</span>
        //                         <input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} aria-label="Username" aria-describedby="basic-addon1"></input>
        //                     </div>
        //                     <div className="input-group mb-3">
        //                         <span className="input-group-text" id="basic-addon1">Password</span>
        //                         <input type="text" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} aria-label="Username" aria-describedby="basic-addon1"></input>
        //                     </div>
        //                 </div>
        //                 <button
        //                     className="signupButton btn btn-primary btn-lg btn-block"
        //                     type="submit">
        //                     Sign Up
        //                 </button>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div className="signupImage">
            <div className="signupBackground vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card signupCardBackground shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
                                    <ul className="nav d-flex justify-content-center" id="myTab" role="tablist" />
                                    <div className="form input d-flex justify-content-center">
                                        <form className="loginForm" onSubmit={handleSubmit}>
                                            <div>
                                                <h1 className="signupTitle">Sign Up</h1>
                                            </div>



                                            <div>
                                                <div className="input-group-prepend" />

                                                <div className="email form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        id="typeEmailX"
                                                        className="form-control form-control-lg"
                                                        placeholder="Email"
                                                        onChange={e => setEmail(e.target.value)}
                                                        value={email}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form input d-flex justify">
                                                <div className="input-group-prepend" />
                                                <div className="password form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="typePasswordX"
                                                        className="form-control form-control-lg"
                                                        placeholder="Password"
                                                        onChange={e => setPassword(e.target.value)}
                                                        value={password}
                                                    />
                                                </div>
                                            </div>


                                            <button
                                                className="signupButton btn btn-primary btn-lg btn-block"
                                                type="submit">
                                                Sign Up
                                            </button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}