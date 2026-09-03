import { useState } from "react"
import NavBar from "../components/NavBar.jsx"
import { toast, ToastContainer } from "react-toastify"
import Footer from "../components/Footer.jsx"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const SignInPage = () => {
    const [selectedId, setSelectedId] = useState("")
    const [selectedEmail, setSelectedEmail] = useState("")
    const navigate = useNavigate()

    const handleIDChange = (event) => {
        setSelectedId(event.target.value)
    }

    const handleEmailChange = (event) => {
        setSelectedEmail(event.target.value)
    }

    const handleSubmitChange = (event) => {
        event.preventDefault()

        if (selectedId.length !== 13) {
            return toast("ID must be 13 digits")
        }

        const userObject = {
            idNo: selectedId,
            email: selectedEmail
        }

        axios.post('http://localhost:3001/api/signin', userObject)
            .then((res) => {
                toast("Sign in successful")
                navigate('/')
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    toast(error.response.data.error)
                }
            })
    }

    return (
        <div className="sign-in-container">
            <NavBar />

            <main>
                <div className="sign-in-img">
                    <svg><path></path></svg>
                </div>

                <div className="sign-in-body">
                    <div className="sign-in-header">
                        <h3>Sign in</h3>
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

                        <ToastContainer />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default SignInPage