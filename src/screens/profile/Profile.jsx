import { GoVerified } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

import './profile.css';
import { bg, payfail } from '../../assets/assets';

import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    return (
        <div className="p-main-container" style={{ paddingBottom: '0' }}>
            <img src={bg}
                alt="Hostel Background"
                className="main-container-background-image" />

            <div className="login-content">
                <div className="login-header d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src="your-logo.png" alt="Hostel Logo" height="40" />
                    </div>
                    <div className="auth-links">
                        <a href="#" className="reg-login-text link-active me-2">
                            <AiOutlineLogout size={35} colo="#fff" />
                        </a>
                    </div>
                </div>

                <div className="login-signup-form-container d-flex flex-column" >
                    <div className='profile-container-box w-100 d-flex justify-content-start mb-3 mt-2'>
                        <div className='profile-box d-flex gap-2 ms-4'>
                            <div className='profile-image-box' style={{ cursor: 'pointer' }}>
                                <img
                                    src={payfail}
                                    alt='profile-image'
                                    className='w-100 h-100'
                                />
                            </div>
                            <div className='my-profile-content-box'>
                                <p className='mb-1 text-light'>Badri Narayan</p>
                                <p className='mb-1 text-light'>Registration No # 146742, Room No # 81154</p>
                                <p className='mb-1 text-light d-flex align-items-center gap-1'>badrinarayan2025@gmail.com
                                    <span>
                                        <GoVerified color='rgb(31, 133, 5)' size={14} />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="signup-form" id='profile-box-main'>

                        <div className='row'>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 mb-3 d-flex justify-content-center align-items-center'>
                                <div className='profile-menu-boxes d-flex justify-content-start gap-3 align-items-center' onClick={() => navigate("/profile-edit")}>
                                    <div className="icon-arrow-bg">
                                        <CgProfile size={40} color="fff" />
                                    </div>
                                    <h2 className="profile-cat mb-0">Edit
                                        Profile</h2>
                                </div>
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex mb-3 justify-content-center align-items-center'>
                                <div className='profile-menu-boxes d-flex justify-content-start gap-3 align-items-center' onClick={() => navigate("/notifications")}>
                                    <div className="icon-arrow-bg">
                                        <IoNotificationsCircleOutline size={40} color="fff" />
                                    </div>
                                    <h2 className="profile-cat mb-0">Notification</h2>
                                </div>
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex mb-3 justify-content-center align-items-center'>
                                <div className='profile-menu-boxes d-flex justify-content-start gap-3 align-items-center'>
                                    <div className="icon-arrow-bg">
                                        <MdOutlinePayments size={40} color="fff" />
                                    </div>
                                    <h2 className="profile-cat mb-0">Payment
                                        Details</h2>
                                </div>
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex mb-3 justify-content-center align-items-center'>
                                <div className='profile-menu-boxes d-flex justify-content-start gap-3 align-items-center'>
                                    <div className="icon-arrow-bg">
                                        <MdOutlineInsertPageBreak size={40} color="fff" />
                                    </div>
                                    <h2 className="profile-cat">Payment
                                        History</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;