import { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { MdPassword } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { bg } from '../../assets/assets';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [passwordToggle, setPasswordToggle] = useState(false);


    const handleToggle = () => {
        setPasswordToggle(!passwordToggle);
    }

    const handleLogin=(evt)=>{
        evt.preventDefault();
         navigate("/profile")
    }

    return (
        <div className="main-container" style={{ height: "100vh" }}>
            <img src={bg}
                alt="Hostel Background"
                className="main-container-background-image" />

            <div className="login-content container">
                <div className="login-header d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src="your-logo.png" alt="Hostel Logo" height="40" />
                    </div>
                    <div className="auth-links">
                        <Link to="/login" className="reg-login-text link-active me-2">Login</Link>
                        <Link to="/register" className="reg-login-text">Register</Link>
                    </div>
                </div>

                <div className="login-signup-form-container">
                    <form className="login-signup-form" style={{ boxShadow: "0px 0px 0px #000" }}>
                        <h1 className="text-center header-text mb-4 text-light">Login</h1>

                        <div className="mb-4 position-relative">
                            {/* <label for="email" className="form-label text-light">Email address</label> */}
                            <span className='input-icon'>
                                <TfiEmail color='#fff' size={20} />
                            </span>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" style={{ background: " rgba(255, 255, 255, 0.5)" }} />
                        </div>

                        <div className="mb-1 position-relative">
                            {/* <label for="password" className="form-label text-light">Password</label> */}
                            <span className='input-icon'>
                                <MdPassword color='#fff' size={20} />
                            </span>
                            <input type={passwordToggle ? "text" : "password"} className="form-control" id="password" placeholder="Enter your password" style={{ background: "rgba(255, 255, 255, 0.5)" }} />
                        </div>
                        <div className="text-end">
                            <a href="#" className="forgot-text">Forgot password?</a>
                        </div>

                        <div className="mb-4 ">
                            <div className='d-flex justify-content-start align-items-center gap-1' style={{ width: 'fit-content' }} onClick={handleToggle}>
                                <div className='check-pass-show'>
                                    <span className='d-flex w-100 h-100'>
                                        {
                                            passwordToggle && <FaCheck />
                                        }
                                    </span>
                                </div>
                                <span className='show-pass-label'>Show password</span>
                            </div>
                        </div>

                        <div className='w-100 d-flex justify-content-center'>
                            <button type="submit" className="login-signup-btn" onClick={handleLogin}>Login</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;