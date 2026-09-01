import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import {useState} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

const JoinNowPage = () => {
    const [selectedClub, setSelectedClub] = useState('');
    const [selectedName, setSelectedName] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [selectedLastName, setSelectedLastName] = useState("");
    const [selectedContactNo, setSelectedContactNo] = useState("");
    const [selectedEmail, setSelectedEmail] = useState("");

    const [users, setUsers] = useState([]);

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

    const handleSubmitChange = (e) => {
        e.preventDefault();

        const emailExists = users.some(e => e.email === selectedEmail)
        const idExists = users.some(e=> e.idNo === selectedId);

        if(emailExists || idExists){
            return
        }

        const submitObject = {
            club: selectedClub,
            idNo: selectedId,
            firstname: selectedName,
            lastname: selectedLastName,
            contactNo: selectedContactNo,
            email: selectedEmail
        }

        axios.post('http://localhost:3001/api/newUsers', submitObject).then(response => {
            setUsers(users.concat(response.data))
            setSelectedClub('')
            setSelectedName('')
            setSelectedId('')
            setSelectedLastName('')
            setSelectedContactNo('')
            setSelectedEmail('')
            toast('User has been saved successfully!!')
        }).catch(error => {
            if(error.response.status === 400) {
                toast('User already exists!!')
            }
        })
    }

    return (
        <div className="join-now-container">
            <NavBar/>

            <main>
                <div className="join-now-img">
                    <svg>
                        <path>
                            
                        </path>
                    </svg>
                </div>

                <div className="join-now-body">
                    <div className="join-now-header">
                        <h3>Join Now</h3>

                        <p>Designed to add more value, more access, and more experiences to your training journey.</p>
                    </div>

                    <div className="join-now-input">
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

                        <ToastContainer/>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default JoinNowPage