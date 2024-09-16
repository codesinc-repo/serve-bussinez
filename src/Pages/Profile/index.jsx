import React, { useState } from 'react';
import './Profile.css';
import Header from '../../Components/Header';
import { Footer } from '../../Components/Footer';

const Profile = () => {
  const [email, setEmail] = useState('user@gmail.com');
  const [mobileNumber, setMobileNumber] = useState('+--');
  const [fullName, setFullName] = useState('UserName');
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-header"  data-aos="fade-up" data-aos-duration="1000">
          <div className="profile-image">
            <img
              src={profileImage || "/images/profile.png" }
              alt="Profile"
              className="img-thumbnail"
            />
            <label htmlFor="fileInput" className="edit-icon">✎</label>
            <input
              type="file"
              id="fileInput"
              onChange={handleProfileImageChange}
              style={{ display: 'none' }}
            />
          </div>
          <h2>{fullName}</h2>
        </div>
        <div className="account-details" data-aos="fade-left" data-aos-duration="1000">
          <div className="top_account d-flex align-items-center justify-content-between">
          <h6 className='mb-0'>Account Details</h6>
          <button className="btn btn-link text-decoration-none" onClick={handleEditClick}>
          Edit Profile📝
              </button>
          </div>
          {isEditing ? (
            <div>
              <div className="form-group">
                <label>Email Id:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Mobile Number:</label>
                <input
                  type="text"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Full Name:</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary" onClick={handleSaveClick}>
                Save Changes
              </button>
            </div>
          ) : (
            <div>
             <div className="form-group mt-4">
                <label className='profile_labels'>Email Id:</label>
                <p>{email}</p>
              </div>
              <div className="form-group">
                <label className='profile_labels'>Mobile Number:</label>
                <p>{mobileNumber}</p>
              </div>
              <div className="form-group">
                <label className='profile_labels'> Full Name:</label>
                <p>{fullName}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
