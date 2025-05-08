import { useState, useRef } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { MdPassword } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { MdAddPhotoAlternate } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { bg } from '../../assets/assets';
import { GoVerified } from "react-icons/go";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import './profileEdit.css';


const ProfileEdit = () => {


    // Inside your component:
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click(); // triggers file input
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <div className="main-container" >
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

                <div className="login-signup-form-container d-flex flex-column" >
                    <h1 className="text-center header-text mb-4 text-light">Edit Profile</h1>
                    <form className="signup-form position-relative" style={{ paddingTop: "2.5rem" }}>

                        <>
                            <div className='profile-icon-box' onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                                {selectedImage ? (
                                    <img
                                        src={selectedImage}
                                        alt='profile-image'
                                        className='w-100 h-100'
                                    />
                                ) : (
                                    <div className='w-100 h-100 d-flex align-items-center justify-content-center text-center text-muted'>
                                        Name
                                    </div>
                                )}
                            </div>
                            <span className='profile-edit-icon' onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                                <MdAddPhotoAlternate color='#000' size={25} />
                            </span>
                            <input
                                type='file'
                                accept='image/*'
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                                onChange={handleImageChange}
                            />
                        </>
                        <div className='row'>

                            <div className=' col-12 d-flex flex-column register-input-box'>
                                <label>Name </label>
                                <input type='text' placeholder='Enter Name' />
                            </div>

                            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 d-flex flex-column register-input-box'>
                                <label>Roll No. / Registration No.   </label>
                                <input type='text' placeholder='Enter Roll No. / Registration No.   ' />
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column register-input-box'>
                                <label>Room No. </label>
                                <input type='text' placeholder='Enter Room No.' />
                            </div>

                            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column register-input-box'>
                                <label>Bed No. </label>
                                <input type='text' placeholder='Enter Bed No.' />
                            </div>

                            <div className='col-12 d-flex flex-column register-input-box'>
                                <label className='d-flex gap-1'>Phone Number
                                    <span className='profile-input-edit-icon'>
                                        <TiEdit />
                                    </span>
                                </label>
                                <input type='text' placeholder='Enter Phone Number' />
                            </div>

                            <div className='col-12 d-flex flex-column register-input-box position-relative'>
                                <label className='d-flex gap-1'>Email ID
                                    <span className='profile-input-edit-icon'>
                                        <TiEdit />
                                    </span>
                                </label>
                                <input type='text' placeholder='Enter Email ID' className='clas-email-input' />
                                <span className='clas-email-input-icon'>
                                    <GoVerified color='rgb(31, 133, 5)' size={22} />
                                </span>
                            </div>


                        </div>

                        <div className='w-100 d-flex justify-content-center mt-3'>
                            <button type="submit" className="login-signup-btn">Save</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit;