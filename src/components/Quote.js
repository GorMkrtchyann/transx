import React, { useState } from 'react';

function Quote(props) {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        phone: '',
        text: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        console.log(formData)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            freight: '',
            email: '',
            phone: '',
            text: ''
        });
    };

    return (
        <div className="quote-section quote-bg">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-5 col-lg-7">
                        <div className="quote-form-section">
                            <span className="title">Quote</span>
                            <h2 className="subtitle">Request a free quote</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-element">
                                            <input
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-element">
                                            <input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-element">
                                            <input
                                                name="phone"
                                                type="text"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-element">
                                            <div className="form-element">
                                                <input
                                                    name="subject"
                                                    type="text"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder="Subject"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" id={'text'}>
                                        <div className="form-element">
                                          <textarea
                                              name="text"
                                              value={formData.text}
                                              onChange={handleChange}
                                              placeholder="Text"
                                              required
                                          />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-element mb-0">
                                            <button type="submit" className="boxed-btn"><span>Submit</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quote;