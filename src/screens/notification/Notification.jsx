import { useState, useRef } from 'react';
import { MdAddPhotoAlternate } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { bg } from '../../assets/assets';
import { GoVerified } from "react-icons/go";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import './notification.css';
import { notifications } from '../../constants/data';

const Notification = () => {



    return (
        <div className="p-main-container overflow-hidden" >
            <img src={bg}
                alt="Hostel Background"
                className="main-container-background-image" />

            <div className="login-content container" >
                <div className="login-header d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src="your-logo.png" alt="Hostel Logo" height="40" />
                    </div>
                    <div className="auth-links">
                        <a href="#" className="reg-login-text  me-3">
                            <span>
                                <IoNotificationsCircleOutline size={29} color='#fff' />
                            </span>
                        </a>
                        <a href="#" className="reg-login-text link-active">
                            <span>
                                <CgProfile size={25} color="#fff" />
                            </span>
                        </a>
                    </div>
                </div>

                <h1 className="text-center header-text mb-4 text-light">Notification</h1>
                <div className="login-signup-form-container d-flex flex-column" >
                    <div className="signup-form position-relative" style={{ paddingTop: "2.5rem" }}>

                        <div className='row gap-3'>
                            {
                                notifications.map((item, index) => {
                                    return (
                                        <div className='col-12 d-flex justify-content-center' key={index}>
                                            <div className='profile-menu-boxes d-flex justify-content-start gap-3 align-items-center'
                                                style={{ height: 'auto' }}
                                                onClick={() => navigate("/profile-edit")}>
                                                <div className="icon-arrow-bg">
                                                    <CgProfile size={40} color="fff" />
                                                </div>
                                                <div className='notification-content-box my-1'>
                                                    <h6 className='text-light'>{item?.title}</h6>
                                                    <p className='text-light mb-1 notify-msg'>{item?.message}</p>

                                                    <div>
                                                        {
                                                            item?.button ? <button className='btn notification-pay-btn text-light'>
                                                                Pay Now
                                                            </button> : ''
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification;