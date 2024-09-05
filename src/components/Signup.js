import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const [credentials, setCredentials] = useState({name:"",email:"", password:""})

    let navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        //TODO: API Call
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            // save the auth-token and redirect
            localStorage.setItem('token',json.authtoken);
            navigate("/")
            props.showAlert("Account Created Successfully","success");
        }else{
            props.showAlert("Invalid Credentials","danger");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }

    return (
        <div id="mytask-layout" className="theme-indigo">

        
        <div className="main p-2 py-3 p-xl-5">
            
            
            <div className="body d-flex p-0 p-xl-5">
                <div className="container-xxl">
    
                    <div className="row g-0">
                        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                            <div style={{maxWidth: "25rem"}}>
                                <div className="text-center mb-5">
                                     <svg  width="4rem" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                    </svg>
                                </div>
                                <div className="mb-5">
                                    <h2 className="color-900 text-center">My-Task Let's Management Better</h2>
                                </div>
                                
                                <div className="">
                                    <img src="../assets/images/login-img.svg" alt="login-img"/>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                            <div className="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{maxWidth: "25rem"}}>
                                
                                <form onSubmit={handleSubmit} className="row g-1 p-3 p-md-4" >
                                    <div className="col-16 text-center mb-1 mb-lg-5">
                                        <h1>Create your account</h1>
                                        <span>Free access to our dashboard.</span>
                                    </div>
                                    <div className="col-16">
                                        <div className="mb-2">
                                            <label htmlFor="name" className="form-label">Full name</label>
                                            <input type="text" id="name" name="name" className="form-control form-control-lg" placeholder="Enter name"  onChange={onChange} required/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-16">
                                        <div className="mb-2">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="name@example.com"  onChange={onChange} required/>
                                        </div>
                                    </div>
                                    <div className="col-16">
                                        <div className="mb-2">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control form-control-lg" id="password" name="password" placeholder="7+ characters required"  onChange={onChange} required/>
                                        </div>
                                    </div>
                                    <div className="col-16">
                                        <div className="mb-2">
                                            <label htmlFor="cpassword"  className="form-label">Confirm password</label>
                                            <input type="password" className="form-control form-control-lg" id="cpassword" name="cpassword" placeholder="7+ characters required"  onChange={onChange} required/>
                                        </div>
                                    </div>
                                    <div className="col-16">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                I accept the <Link href="#" title="/terms" className="text-secondary">Terms and Conditions</Link>
                                            </label>
                                        </div>
                                    </div>
                                   
                                    <div className="col-16 text-center mt-4">
                                        <button type="submit" className="btn btn-lg btn-block btn-light lift text-uppercase" alt="SIGNUP">Submit</button>
                                    </div>
                                    <div className="col-16 text-center mt-4">
                                        <span className="text-muted">Already have an account? <Link to="/login" title="Sign in" className="text-secondary">Sign in here</Link></span>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
