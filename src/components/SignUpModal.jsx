import {createPortal} from "react-dom";
import {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const SignUpModal = ({isOpen, onClose}) =>{
    const [selectedClub, setSelectedClub] = useState('')
    const [selectedName, setSelectedName] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [selectedLastName, setSelectedLastName] = useState("");
    const [selectedContactNo, setSelectedContactNo] = useState("");
    const [selectedEmail, setSelectedEmail] = useState("");


    const membershipCards = [
        {id: 1, heading: "National Membership", description: "Access all 51 clubs nationwide for R1600pm. A membership designed for those who train wherever life takes them."},
        {id: 2, heading: "Club Membership", description: "Stay connected to your training with exclusive access to a single club. Perfect for those who want a focused membership with club-specific perks"},
        {id: 3, heading: "Student Membership", description: "This is your space to push limits, connect with others, and level up — because strong minds and strong bodies go hand in hand."},
        {id: 4, heading: "Just Gym Membership", description: "Keep moving at a rate that empowers your body and suits your budget."},
    ]
    const {heading} = useParams();
    const signUp = membershipCards.find(m => m.heading === heading);

    const handleClubChange = (event) => {
        setSelectedClub(event.target.value);
    }

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

    const handleSubmitChange = (event) => {
        event.preventDefault()

        const userObject = {
            club: selectedClub,
            idNumber: selectedId,
            firstName: selectedName,
            lastName: selectedLastName,
            mobile: selectedContactNo,
            email: selectedEmail
        }

        axios.post('/api/users', userObject).then((response) => {
            console.log(response.data)
            onClose()
        })
    }

    if (!isOpen) return null

    return createPortal(
        <div className="modal">
            <div onClick={onClose} className="overlay"></div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <section className="modal-header">
                    <svg><path></path></svg>
                </section>

                <section className="modal-body">
                    <div className="modal-body-header">
                        <p>Fill in your details and someone from our team will get in touch</p>
                    </div>

                    <div className="modal-body-input">
                        <form className="form-inline" onSubmit={handleSubmitChange}>
                            <div className="preferred-club">
                                <label>Preferred Club</label>
                                <select className="select-club" value={selectedClub} onChange={handleClubChange} required>
                                    <option value="">-- Select A Club --</option>
                                    <option value="GYM - Bedfordview">GYM - Bedfordview</option>
                                </select>
                            </div>

                            <div className="no-details">
                                <label className="txt-label">ID No. / Passport No.</label>
                                <input type="text" className="id-no" placeholder="ID No. / Passport No." value={selectedId} onChange={handleIDChange} required />
                            </div>

                            <div className="name-details">
                                <div className="first-name-details">
                                    <label className="txt-label">First Name</label>
                                    <input type="text" className="first-name" placeholder="First Name" value={selectedName} onChange={handleNameChange} required />
                                </div>

                                <div className="last-name-details">
                                    <label className="txt-label">Last Name</label>
                                    <input type="text" className="last-name" placeholder="Last Name" value={selectedLastName} onChange={handleLastNameChange} required />
                                </div>
                            </div>

                            <div className="contact-details">
                                <div className="mobile-details">
                                    <label className="txt-label">Mobile No.</label>
                                    <input type="text" className="mobile-no" placeholder="Mobile No." value={selectedContactNo} onChange={handleContactNoChange} required />
                                </div>

                                <div className="email-details">
                                    <label className="txt-label">Email</label>
                                    <input type="email" className="email" placeholder="Email Address" value={selectedEmail} onChange={handleEmailChange} required />
                                </div>
                            </div>

                            <div className="submit-details">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </section>

                <button className="close-modal" onClick={onClose}>close</button>
            </div>
        </div>,
        document.body
    )
}

export default SignUpModal