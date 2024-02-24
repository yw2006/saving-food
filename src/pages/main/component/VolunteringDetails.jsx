import React, { useState } from 'react';
import "../style/VolunteringDetails.css";

function VolunteringDetails() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Form submitted:", formData);
        }
    };

    const validateForm = (data) => {
        let errors = {};

        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Invalid email address';
        }

        if (!data.subject.trim()) {
            errors.subject = 'Subject is required';
        }

        if (!data.phone.trim()) {
            errors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(data.phone)) {
            errors.phone = 'Invalid phone number (10 digits)';
        }

        return errors;
    };

    return (
        <div style={{ textAlign: "center" }}>
            <div className='container_volunteringDetails'>
                <div className='inset_container'>
                    <div className='elements_inset_container'>
                        <div className='textContent'>
                            <p className='first_p_tag_in_textContent'>Request A Quote For Work</p>
                            <p className='second_p_tag_in_textContent'> Feel free to contact us through Twitter or Facebook if you prefer!</p>
                        </div>
                        <form onSubmit={handleSubmit} className='inputs_volunteringDetails'>
                            <div className='first_piar_inputs pair'>
                                <div className='validation_group'>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`name ${errors.name && 'error'}`}
                                        placeholder='Your Name'
                                    />
                                    {errors.name && <p className='error-message'>{errors.name}</p>}
                                </div>
                                <div className='validation_group' >

                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`email ${errors.email && 'error'}`}
                                        placeholder='Your Email'
                                    />
                                    {errors.email && <p className='error-message'>{errors.email}</p>}
                                </div>
                            </div>

                            <div className='second_piar_inputs pair'>
                                <div className='validation_group' >
                                    <input
                                        type='text'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`subject ${errors.subject && 'error'}`}
                                        placeholder='Subject'
                                    />
                                    {errors.subject && <p className='error-message'>{errors.subject}</p>}
                                </div>
                                <div className='validation_group' >

                                    <input
                                        type='text'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`phone ${errors.phone && 'error'}`}
                                        placeholder='Your Phone'
                                    />
                                    {errors.phone && <p className='error-message'>{errors.phone}</p>}
                                </div>
                            </div>
                            <div className='area_text pair'>
                                <textarea
                                    rows={5}
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='pair'
                                    placeholder='Message...'
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
        </div>
    );
}

export default VolunteringDetails;
