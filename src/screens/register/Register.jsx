import { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { MdPassword } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { bg } from '../../assets/assets';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [passwordToggle, setPasswordToggle] = useState(false);


    const handleToggle = () => {
        setPasswordToggle(!passwordToggle);
    }


    return (
        <div className="main-container">
            <img src={bg}
                alt="Hostel Background"
                className="main-container-background-image" />

            <div className="login-content container" >
                <div className="login-header d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src="your-logo.png" alt="Hostel Logo" height="40" />
                    </div>
                    <div className="auth-links">
                        <Link to="/login" className="reg-login-text  me-2">Login</Link>
                        <Link to="/register" className="reg-login-text link-active">Register</Link>
                    </div>
                </div>

                <div className="login-signup-form-container d-flex flex-column">
                    <h1 className="text-center header-text mb-4 text-light">Register</h1>
                    <form className="signup-form">
                        <div className='row'>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column register-input-box'>
                                <label>Name </label>
                                <input type='text' placeholder='Enter Name' />
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column register-input-box'>
                                <label>Email ID </label>
                                <input type='text' placeholder='Enter Email ID' />
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column register-input-box'>
                                <label>Phone Number </label>
                                <input type='text' placeholder='Enter Phone Number' />
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column register-input-box'>
                                <label>Bed No. </label>
                                <input type='text' placeholder='Enter Bed No.' />
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column register-input-box'>
                                <label>Room No. </label>
                                <input type='text' placeholder='Enter Room No.' />
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column register-input-box'>
                                <label>Select</label>
                                <input type='text' placeholder='Enter Bed No.' />
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column register-input-box'>
                                <label>Password </label>
                                <input type='text' placeholder='Enter Password' />
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column register-input-box'>
                                <label>Confirm Password </label>
                                <input type='text' placeholder='Enter Confirm Password' />
                            </div>

                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 d-flex flex-column register-input-box'>
                                <label>Roll No. / Registration No.   </label>
                                <input type='text' placeholder='Enter Roll No. / Registration No.   ' />
                            </div>

                        </div>

                        <div className='w-100 d-flex justify-content-center mt-3'>
                            <button type="submit" onClick={() => navigate("/login")} className="login-signup-btn">Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;