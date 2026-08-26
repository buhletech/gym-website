import {ToastContainer, toast} from "react-toastify";
import {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState("");
    const [emails, setEmails] = useState([])

    const url = 'http://localhost:3001/api/emails'

    const emailRef = (event) =>{
        setEmail(event.target.value);
    }

    const handleSubscription = (event) =>{
        event.preventDefault()

        const emailExists = emails.some(e => e.email === email)

        if(emailExists){
            return
        }

        const emailObject = {
            email: email
        }

        axios.post(url, emailObject).then(response => {
            setEmails(emails.concat(response.data))
            setEmail('')
        }).catch(error =>{
            if(error.response.status === 400){
                toast('Email already exists!')
            }
        })
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="grid-container">
                    <div className="grid-footer-container">
                        <div className="grid-header">
                            <svg><path></path></svg>
                            <span>GYM</span>
                        </div>
                    </div>

                    <div className="grid-footer-container">
                        <h4 className="footer-header">Quick Links</h4>

                        <ul>
                            <li><a href="/membership">Membership</a></li>
                            <li><a href="/class-schedule">Class Schedule</a></li>
                            <li><a href="/clubs">Clubs</a></li>
                            <li><a href="#blog">BLog</a></li>
                        </ul>
                    </div>

                    <div className="grid-footer-container">
                        <h4 className="footer-header">Legal</h4>

                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Club Rules</a></li>
                            <li><a href="#">FAQ's</a></li>
                        </ul>
                    </div>

                    <div className="grid-footer-container">
                        <h4 className="footer-header">Stay Updated</h4>
                        <p>Get the latest news about new snacks and special offers.</p>

                        <div className="stay-updated-email">
                            <form onSubmit={handleSubscription}>
                                <input type="email" value={email} onChange={emailRef} placeholder="Enter your email"/>
                                <button>Subscribe</button>
                            </form>

                            <ToastContainer/>

                        </div>
                    </div>
                </div>

                <div className="footer-reserved">
                    <p>@ 2026 GYM. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;