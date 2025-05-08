import { bg, paysucess, payfail } from "../assets/assets";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleOutline } from "react-icons/io5";

const PaymentStatus = ({
    isSuccess = false,
    userName = "Abcde",
    rollNo = "123549813",
    paymentId = "5321A914Z",
    headerText = "Payment Details",
}) => {

    return (
        <div className="main-container" style={{ height: "100vh" }}>
            <img
                src={bg}
                alt="Hostel Background"
                className="main-container-background-image"
            />

            <div className="login-content container">
                <div className="login-header d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src="my-logo.png" alt="Hostel Logo" height="40" />
                    </div>
                    <div className="auth-links d-flex gap-2">
                        <a href="#" className="reg-login-text">
                            <IoNotificationsCircleOutline size={29} color="#fff" />
                        </a>
                        <a href="#" className="reg-login-text link-active me-2">
                            <CgProfile size={25} color="#fff" />
                        </a>
                    </div>
                </div>

                {/* Payment Status Content */}
                <div className="login-signup-form-container d-flex flex-column">
                    <h1 className="text-center header-text mb-4 text-light">{headerText}</h1>
                    <div className="signup-form d-flex flex-column justify-content-center align-items-center" style={{ maxWidth: "400px" }}>

                        {/* Payment Status Image */}
                        <div className="payment-process-image-box d-flex justify-content-center align-items-center mb-3 mt-4">
                            <img
                                src={isSuccess ? paysucess : payfail}
                                alt={isSuccess ? "Payment Success" : "Payment Failed"}
                                className="w-100 h-100"
                            />
                        </div>

                        {/* Payment Details */}
                        <div className="payment-process-content-box text-center">
                            <h4 className={isSuccess ? "text-success" : "text-danger"}>
                                {isSuccess ? "Payment Success!" : "Payment Failed!"}
                            </h4>
                            <p className="mb-1">
                                Name: <span>{userName}</span>
                            </p>
                            <p className="mb-1">
                                Roll No: <span>{rollNo}</span>
                            </p>
                            <p className="mb-1">
                                Payment Id: <span>{paymentId}</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};



export default PaymentStatus;