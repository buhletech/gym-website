import {useState} from "react";
import NavBar from "../components/NavBar.jsx";
import {ToastContainer} from "react-toastify";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import fs from "fs";
import HomePage from "./HomePage.jsx";

const SignInPage = () => {

    const [selectedId, setSelectedId] = useState("");
    const [selectedEmail, setSelectedEmail] = useState("");

    const handleIDChange = (event) => {
        setSelectedId(event.target.value);
    }

    const handleEmailChange = (event) => {
        setSelectedEmail(event.target.value);
    }

    const handleSubmitChange = (event) => {
        event.preventDefault();

        const emailPath = 'C:\\Users\\Admin\\Documents\\gym-website\\src\\server\\data\\newUsers.json';
        const data = JSON.parse(fs.readFileSync(emailPath, 'utf8'));

        const emailExists = data.some(e => e.email === selectedEmail);
        const idExists = data.some(e => e.idNo === selectedId);

        if(emailExists || idExists) {
            return 
        }

        const submitObject = {
            idNo: selectedId,
            email: selectedEmail
        }

        axios.get('http://localhost:3001/api/newUsers', submitObject).then((res) => {


        })
    }

    return(
        <div className="sign-in-container">
            <NavBar/>

            <main>
                <div className="sign-in-img">
                    <svg>
                        <path>

                        </path>
                    </svg>
                </div>

                <div className="sign-in-body">
                    <div className="sign-in-header">
                        <h3>Join Now</h3>

                        <p>Designed to add more value, more access, and more experiences to your training journey.</p>
                    </div>

                    <div className="sign-in-input">
                        <form className="signin-form-inline" onSubmit={handleSubmitChange}>

                            <div className="no-details">
                                <label className="txt-label">ID No. / Passport No.</label>
                                <input type="text" className="id-no" placeholder="ID No. / Passport No." value={selectedId} onChange={handleIDChange} required />
                            </div>

                            <div className="email-details">
                                <label className="txt-label">Email</label>
                                <input type="email" className="email" placeholder="Email Address" value={selectedEmail} onChange={handleEmailChange} required />
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

export default SignInPage