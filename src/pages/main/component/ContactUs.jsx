import React, { useState } from 'react';
import phone from "../component/pics/phone.png";
import mail from "../component/pics/email.png";
import "../style/ContuctUs.css";
function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid Email is required';
      isValid = false;
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid Phone Number is required';
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission logic here
      console.log('Form submitted:', formData);
    } else {
      console.log('Form validation failed');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (

    <div className='container_contuct'>
      <div className='sec_container'>
        <div className='right_section'>
          <p className='p_first_block'>Our Offices</p>
          <div className='first_block block'>
            <p style={{ fontWeight: "600", fontSize: "25px" }}>New York</p>
            <div>
              <img src={phone} alt='.....' />
              <p>666 888 0000</p>
            </div>
            <div>
              <img src={mail} alt='.....' />
              <p>needhelp@company.com</p>
            </div>
            <hr />
          </div>
          <div className='second_block block'>
            <p style={{ fontWeight: "600", fontSize: "25px" }}>London</p>
            <div>
              <img src={phone} alt='.....' />
              <p>666 888 0000</p>
            </div>
            <div>
              <img src={mail} alt='.....' />
              <p>needhelp@company.com</p>
            </div>
            <hr />
          </div>
          <div className='third_block block'>
            <p style={{ fontWeight: "600", fontSize: "25px" }}>Singapore</p>
            <div>
              <img src={phone} alt='.....' />
              <p>666 888 0000</p>
            </div>
            <div>
              <img src={mail} alt='.....' />
              <p>needhelp@company.com</p>
            </div>
          </div>
        </div>

        <div className='left_section'>
          <p>Get In Touch</p>

          <form onSubmit={handleSubmit}>
            <div className='group'>
              <div className='validation_group pair'>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    type='text'
                    placeholder='Your Name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className='error-message'>{errors.name}</p>}
                </div>
                <div style={{ marginLeft: "20px", display: "flex", flexDirection: "column" }}>
                  <input
                    type='text'
                    placeholder='Your Email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className='error-message'>{errors.email}</p>}
                </div>
              </div>

              <div className='validation_group pair'>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    type='text'
                    placeholder='Subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <p className='error-message'>{errors.subject}</p>}
                </div>
                <div style={{ marginLeft: "20px", display: "flex", flexDirection: "column" }}>
                  <input
                    type='text'
                    placeholder='Your Phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className='error-message'>{errors.phone}</p>}
                </div>
              </div>

            </div>
            <div className='areaText'>
              <textarea
                rows={5}
                placeholder='Leave a Message'
                name='message'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='btn_submision_dev'>
              <button type='submit' className='btn_submision_class'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default ContactUs;