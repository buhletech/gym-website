import {createPortal} from "react-dom";
import {useState} from "react";
import axios from "axios";

const SignUpModal = ({isOpen, onClose}) =>{
    const [selectedName, setSelectedName] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [selectedLastName, setSelectedLastName] = useState("");
    const [selectedContactNo, setSelectedContactNo] = useState("");
    const [selectedEmail, setSelectedEmail] = useState("");

    const handleNameChange = (event) => {
        setSelectedName(event.target.value);
    }

    const handleIDChange = (event) => {
        setSelectedId(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setSelectedLastName(event.target.value);
    }

    const handleContactNoChange = (event) => {
        setSelectedContactNo(event.target.value);
    }

    const handleEmailChange = (event) => {
        setSelectedEmail(event.target.value);
    }

    const handleSubmitChange = (event) =>{
        event.preventDefault();

        axios.post('/api/users').then((response) => {
            response.data
        })
    }

    if(!isOpen)return null;
    return createPortal(
            <div className="modal">
                <div onClick={onClose} className="overlay"></div>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <section className="modal-header">
                        <svg>
                            <path>

                            </path>
                        </svg>
                    </section>

                    <section className="modal-body">
                        <div className="modal-body-header" onChange={handleSubmitChange}>
                            <p>Fill in your details and someone from our team will get in touch</p>
                        </div>

                        <div className="modal-body-input">
                            <form className="form-inline">
                                <div className="preferred-club">
                                    <label>Preferred Club</label>
                                    <select className="select-club" required>
                                        <option value="GYM - Bedfordview">GYM - Bedfordview</option>
                                    </select>
                                </div>

                                <div className="no-details">
                                    <label className="txt-label">ID No. / Passport No.</label>
                                    <input type="number" className="id-no" placeholder="ID No. / Passport No." value={selectedId} onChange={handleIDChange} required/>
                                </div>

                                <div className="name-details">
                                    <div className="first-name-details">
                                        <label className="txt-label">First Name</label>
                                        <input type="text" className="first-name" placeholder="First Name" value={selectedName} onChange={handleNameChange} required/>
                                    </div>

                                    <div className="last-name-details">
                                        <label className="txt-label">Last Name</label>
                                        <input type="text" className="last-name" placeholder="Last Name" value={selectedLastName} onChange={handleLastNameChange} required/>
                                    </div>
                                </div>

                                <div className="contact-details">
                                    <div className="mobile-details">
                                        <label className="txt-label">Mobile No.</label>
                                        <input type="text" className="mobile-no" placeholder="Mobile No." value={selectedContactNo} onChange={handleContactNoChange} required/>
                                    </div>

                                    <div className="email-details">
                                        <label className="txt-label">Email</label>
                                        <input type="email" className="email" placeholder="Email Address" value={selectedEmail} onChange={handleEmailChange} required/>
                                    </div>
                                </div>

                                <div className="submit-details">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </section>

                    <button className="close-modal" onClick={onClose}>
                        close
                    </button>
                </div>
            </div>

    )
}

export default SignUpModal;