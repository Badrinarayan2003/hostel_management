import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import PaymentStatus from "./components/PaymentStatus";
import ProfileEdit from "./screens/profileEdit/ProfileEdit";
import Profile from './screens/profile/Profile';
import Notification from './screens/notification/Notification';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
        <Route path="/notifications" element={<Notification />} />

      </Routes>
    </Router>

  )
}

export default App;