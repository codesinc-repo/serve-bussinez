import React, { useState } from 'react';
import './ChangePassword.css';
import Header from '../../Components/Header';
import { Footer } from '../../Components/Footer';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordToggle = (type) => {
    if (type === 'new') {
      setShowNewPassword(!showNewPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
  };

  return (
    <>
      <Header />
      <div className="container change-password-container " data-aos="fade-up" data-aos-duration="1000">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>New Password</label>
            <div className="password-input">
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Password"
                className="form-control"
              />
              <i
                className={`toggle-password ${showNewPassword ? 'show' : ''}`}
                onClick={() => handlePasswordToggle('new')}
              >
                {showNewPassword ? '🙈' : '👁️'}
              </i>
            </div>
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Password"
                className="form-control"
              />
              <i
                className={`toggle-password ${showConfirmPassword ? 'show' : ''}`}
                onClick={() => handlePasswordToggle('confirm')}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </i>
            </div>
          </div>
          <div className="button-group change_pss_btns">
            <button type="submit" className="btn btn-primary mt-0">Submit</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ChangePassword;
