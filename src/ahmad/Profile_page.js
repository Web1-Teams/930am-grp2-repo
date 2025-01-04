import React, { useState } from 'react';
import './Profile_page.css';
import image_kiven from '../assets/images/kiven_img.png';
import Swal from 'sweetalert2';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    street: '',
    state: '',
    email: '',
    url: '',
    city: '',
    zip: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const cancel = () => {
    Swal.fire({
      title: 'Request Canceled!',
      text: 'Cancel Request Successfully :)',
      icon: 'success',
    });

    setFormData({
      fullname: '',
      phone: '',
      street: '',
      state: '',
      email: '',
      url: '',
      city: '',
      zip: '',
    });
  };

  const update = () => {
    const { fullname, phone, street, state, email, url, city, zip } = formData;

    if (!fullname || !phone || !email) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields.',
        icon: 'error',
      });
      return;
    }

    Swal.fire({
      title: 'Update Info',
      text: 'Your Information Updated Successfully!',
      icon: 'success',
    });

    console.log('Updated Data:', formData); // For debugging or API submission
  };

  return (
    <div id="protein_profilePage_body" className="protein_profilePage_body">
      <div className="protein_profilePage_profile">
        <div className="protein_profilePage_img">
          <img src={image_kiven} alt="Profile" />
        </div>

        <div className="protein_profilePage_details">
          <h1 id="protein_profilePage_h1">Personal Details</h1>


          <div className="protein_profilePage_box1">
            <label className="protein_profilePage_label" htmlFor="fullname">Full Name</label>
            <br />
            <input
              type="text" className="protein_profilePage_input"   id="fullname" name="fullname"  placeholder="Enter full name" value={formData.fullname}  onChange={handleInputChange}
        
            />
          </div>

          <div className="protein_profilePage_box2">
            <label className="protein_profilePage_label" htmlFor="phone">Phone</label>
            <br />
            <input
              type="number"  className="protein_profilePage_input" id="phone" name="phone"placeholder="Enter phone number" value={formData.phone}  onChange={handleInputChange}
           
            />
          </div>

          <div className="protein_profilePage_box3">
            <label className="protein_profilePage_label" htmlFor="street">Street</label>
            <br />
            <input
              type="text" className="protein_profilePage_input"  id="street" name="street" placeholder="Enter street"  value={formData.street} onChange={handleInputChange}
                  
            />
          </div>

          <div className="protein_profilePage_box4">
            <label className="protein_profilePage_label" htmlFor="state">State</label>
            <br />
            <input
              type="text"  className="protein_profilePage_input" id="state" name="state" placeholder="Enter state"  value={formData.state}  onChange={handleInputChange}
            
            />
          </div>

          <div className="protein_profilePage_box5">
            <label className="protein_profilePage_label" htmlFor="email">Email</label>
            <br />
            <input
              type="email" className="protein_profilePage_input" id="email" name="email"  placeholder="Enter email ID" value={formData.email}   onChange={handleInputChange}
             
            />
          </div>

          <div className="protein_profilePage_box6">
            <label className="protein_profilePage_label" htmlFor="url">Website URL</label>
            <br />
            <input
              type="url" className="protein_profilePage_input" id="url" name="url" placeholder="Website URL" value={formData.url} onChange={handleInputChange}

            />
          </div>

          <div className="protein_profilePage_box7">
            <label className="protein_profilePage_label" htmlFor="city">City</label>
            <br />
            <input
              type="text"className="protein_profilePage_input" id="city"name="city"   placeholder="Enter City"  value={formData.city}               onChange={handleInputChange}
              />
              </div>
    

          <div className="protein_profilePage_box8">
            <label className="protein_profilePage_label" htmlFor="zip">Zip Code</label>
            <br />
            <input
              type="text"   className="protein_profilePage_input" id="zip"  name="zip"  placeholder="Zip Code"  value={formData.zip}   onChange={handleInputChange}
              />
              </div>
  
           
          <div className="protein_profilePage_b1">
            <button className="protein_profilePage_button" type="button" onClick={cancel}>
              Cancel
            </button>
          </div>
          <div className="protein_profilePage_b2">
            <button className="protein_profilePage_button" type="button" onClick={update}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
