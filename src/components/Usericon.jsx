import usericon from '../images/usericon.png';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const Usericon = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [showDeleteAccountFields, setShowDeleteAccountFields] = useState(false); // State for delete account fields
  const [showChangePasswordFields, setShowChangePasswordFields] = useState(false); // State for change password fields

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [deletionError, setDeletionError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteAccount = async () => {
    if (!email || !password) {
      setDeletionError('Please enter your email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/deleteuser', JSON.stringify({email, password}), {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        console.log('Account deleted');
        navigate('/');
      }
    } catch (error) {
      setDeletionError('Error deleting account. Please check your email and password.');
      console.error('Error deleting account:', error);
    }
  };

  const handleChangePassword = async () => {
    if (!email || !password || !newPassword) {
      setPasswordError('Please enter your email, current password, and new password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/changepassword', {
        email,
        currentPassword: password,
        newPassword,
      });

      if (response.status === 200) {
        console.log('Password changed successfully');
        window.location.reload();
        // You may want to show a success message or perform additional actions.
      }
    } catch (error) {
      setPasswordError('Error changing password. Please check your email, password, and new password.');
      console.error('Error changing password:', error);
    }
  };

  return (
    <div className="user-menu">
      <div className="user-name"></div>
      <div className="user-icon" onClick={toggleMenu}>
        <img src={usericon} alt="Your Logo" />
      </div>
      <ul className={`menu-options ${isOpen ? 'open' : ''}`}>
        <li>
          <button onClick={() => setShowDeleteAccountFields(true)}>Delete Account</button>
          {showDeleteAccountFields && (
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleDeleteAccount}>Confirm Delete</button>
            </div>
          )}
        </li>
        <li>{deletionError && <p className="error-message">{deletionError}</p>}</li>
        <li>
          <button onClick={() => setShowChangePasswordFields(true)}>Change Password</button>
          {showChangePasswordFields && (
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Current Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button onClick={handleChangePassword}>Confirm Change</button>
            </div>
          )}
        </li>
        <li>{passwordError && <p className="error-message">{passwordError}</p>}</li>
        <li><button><Link to="/">Log Out</Link></button></li>
      </ul>
    </div>
  );
};

export default Usericon;
