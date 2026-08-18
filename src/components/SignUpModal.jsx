import {useState} from "react";

const SignUpModal = () =>{
    const [showSignUp, setShowSignUp] = useState(false);

    const toggleSignUp = () => {
        setShowSignUp(!showSignUp);
    }

    return(
        <div>
        {showSignUp && (
            <div className="modal">
                <div onClick={toggleSignUp} className="overlay"></div>
                <div className="modal-content">
                    <section className="modal-header">
                        <svg>
                            <path>

                            </path>
                        </svg>
                    </section>

                    <section className="modal-body">
                        <div className="modal-body-header">
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
                                    <input type="number" className="id-no" placeholder="ID No. / Passport No." required/>
                                </div>

                                <div className="name-details">
                                    <div className="first-name-details">
                                        <label className="txt-label">First Name</label>
                                        <input type="text" className="first-name" placeholder="First Name" required/>
                                    </div>

                                    <div className="last-name-details">
                                        <label className="txt-label">Last Name</label>
                                        <input type="text" className="last-name" placeholder="Last Name" required/>
                                    </div>
                                </div>

                                <div className="contact-details">
                                    <div className="mobile-details">
                                        <label className="txt-label">Mobile No.</label>
                                        <input type="text" className="mobile-no" placeholder="Mobile No." required/>
                                    </div>

                                    <div className="last-name-details">
                                        <label className="txt-label">Last Name</label>
                                        <input type="text" className="last-name" required/>
                                    </div>
                                </div>

                                <div className="submit-details">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </section>

                    <button className="close-modal" onClick={toggleSignUp}>
                        close
                    </button>
                </div>
            </div>
        )}
        </div>
    )
}

export default SignUpModal;