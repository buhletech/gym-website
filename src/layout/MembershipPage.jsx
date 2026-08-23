import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import SignUpModal from "../components/SignUpModal.jsx";
import {useState} from "react";

const MembershipPage = () =>{
    const [showSignUp, setShowSignUp] =  useState(false);

    return(
        <div className="member-container">
            <NavBar/>

            <main className="membership-page">
                <section className="main-membership-header">
                    <div className="main-membership-content">
                        <h2>Join The Movement</h2>

                        <p>This is more than a membership. It’s your launchpad to push limits, break barriers, and redefine what’s possible.</p>
                    </div>
                </section>


                <section className="memberships">
                    <div className="membership-header-container">
                        <div className="membership-header">
                            <h3>Memberships</h3>
                        </div>
                    </div>

                    <div className="membership-grid">
                        <div className="membership-card">
                            <div className="membership-card-header">
                                <h3>National Membership</h3>
                            </div>

                            <div className="membership-card-content">
                                <p className="membership-card-par">Access all 51 clubs nationwide for R1600pm. A membership designed for those who train wherever life takes them.</p>

                                <button onClick={() => setShowSignUp(true)} className="btn-signup">Sign Up Now</button>
                                <SignUpModal isOpen={showSignUp} onClose={() => setShowSignUp(false)}/>
                            </div>
                        </div>

                        <div className="membership-card">
                            <div className="membership-card-header">
                                <h3>Club Membership</h3>
                            </div>

                            <div className="membership-card-content">
                                <p className="membership-card-par">Stay connected to your training with exclusive access to a single club. Perfect for those who want a focused membership with club-specific perks</p>

                                <button>Sign Up Now</button>
                            </div>
                        </div>

                        <div className="membership-card">
                            <div className="membership-card-header">
                                <h3>Student Membership</h3>
                            </div>

                            <div className="membership-card-content">
                                <p className="membership-card-par">This is your space to push limits, connect with others, and level up — because strong minds and strong bodies go hand in hand.</p>

                                <button>Sign Up Now</button>
                            </div>
                        </div>

                        <div className="membership-card">
                            <div className="membership-card-header">
                                <h3>Just Gym Membership</h3>
                            </div>

                            <div className="membership-card-content">
                                <p className="membership-card-par">Keep moving at a rate that empowers your body and suits your budget.</p>

                                <button>Sign Up Now</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default MembershipPage;